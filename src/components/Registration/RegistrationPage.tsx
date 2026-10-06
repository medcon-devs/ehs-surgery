"use client";

import * as React from "react";
import { Alert, Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import LoginForm from "@/components/auth/LoginForm";
import ProfileCard from "@/components/auth/ProfileCard";
import RegistrationForm from "@/components/auth/RegistrationForm";
import {
  initialLoginForm,
  initialRegisterForm,
} from "@/lib/registration-options";
import {
  clearAuthSession,
  clearPendingPayment,
  getAuthChangedEventName,
  getPendingPayment,
  getStoredUser,
  isUserLoggedIn,
  saveAuthSession,
  savePendingPayment,
} from "@/lib/auth-storage";
import { postRequest, ROUTES } from "@/lib/api";
import {
  CodeChoice,
  LoginForm as LoginFormType,
  RegisterForm,
  RegistrationCategory,
} from "@/lib/registration-types";
import {
  validateLoginForm,
  validateRegisterForm,
} from "@/lib/registration-validation";

export default function RegisterPage() {
  const router = useRouter();

  const [registerForm, setRegisterForm] =
    React.useState<RegisterForm>(initialRegisterForm);
  const [loginForm, setLoginForm] =
    React.useState<LoginFormType>(initialLoginForm);
  const [registerErrors, setRegisterErrors] = React.useState({});
  const [loginErrors, setLoginErrors] = React.useState({});
  const [registerSuccess, setRegisterSuccess] = React.useState("");
  const [loginSuccess, setLoginSuccess] = React.useState("");
  const [registerLoading, setRegisterLoading] = React.useState(false);
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [generalError, setGeneralError] = React.useState("");
  const [clientSecret, setClientSecret] = React.useState<string | null>(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState<any>(null);

  const isNonEhs = registerForm.registrationCategory === "Non EHS Attendee";
  const requiresPayment = isNonEhs && registerForm.codeChoice === "no-code";
  const amount = 500;

  React.useEffect(() => {
    const syncAuthState = () => {
      setLoggedIn(isUserLoggedIn());
      setUserData(getStoredUser());
    };

    syncAuthState();

    const pendingPayment = getPendingPayment();
    if (pendingPayment) {
      submitRegistration(pendingPayment);
    }

    window.addEventListener(getAuthChangedEventName(), syncAuthState);
    window.addEventListener("storage", syncAuthState);

    return () => {
      window.removeEventListener(getAuthChangedEventName(), syncAuthState);
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  const setField = <K extends keyof RegisterForm>(
    field: K,
    value: RegisterForm[K]
  ) => {
    setRegisterForm((prev) => ({ ...prev, [field]: value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: undefined }));
    setRegisterSuccess("");
    setGeneralError("");
  };

  const setLoginField = <K extends keyof LoginFormType>(
    field: K,
    value: LoginFormType[K]
  ) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
    setLoginErrors((prev) => ({ ...prev, [field]: undefined }));
    setLoginSuccess("");
    setGeneralError("");
  };

  const handleCategoryChange = (value: string | null) => {
    const nextCategory = (value ?? "") as RegistrationCategory;

    setRegisterForm((prev) => ({
      ...prev,
      registrationCategory: nextCategory,
      codeChoice:
        nextCategory === "Non EHS Attendee" ? prev.codeChoice : "no-code",
      accessCode: nextCategory === "Non EHS Attendee" ? prev.accessCode : "",
    }));

    setRegisterErrors((prev) => ({
      ...prev,
      registrationCategory: undefined,
      accessCode: undefined,
    }));

    setClientSecret(null);
    setRegisterSuccess("");
  };

  const handleCodeChoiceChange = (value: CodeChoice) => {
    setRegisterForm((prev) => ({
      ...prev,
      codeChoice: value,
      accessCode: value === "have-code" ? prev.accessCode : "",
    }));
    setRegisterErrors((prev) => ({ ...prev, accessCode: undefined }));
    setClientSecret(null);
    setRegisterSuccess("");
  };

  const buildRegistrationPayload = (paymentData?: any) => ({
    speciality: registerForm.speciality,
    jobTitle: registerForm.jobTitle,
    name: registerForm.fullName,
    email: registerForm.email,
    member_type: registerForm.registrationCategory,
    phone: registerForm.phone,
    hospital: registerForm.hospitalClinic,
    code: registerForm.accessCode || "",
    bayanati_number: registerForm.bayanatiNumber,
    user_status: 1,
    payment_intent_id: paymentData?.id || null,
  });

  const createPaymentIntent = async () => {
    try {
      setRegisterLoading(true);
      setGeneralError("");

      const res = await postRequest<any>(ROUTES.stripe, {
        amount: amount * 100,
      });

      const secret = res?.data?.data?.clientSecret || res?.data?.clientSecret;

      if (!secret) {
        setGeneralError("Unable to initialize payment.");
        return;
      }

      setClientSecret(secret);
    } catch {
      setGeneralError("Unable to create payment intent.");
    } finally {
      setRegisterLoading(false);
    }
  };

  const submitRegistration = async (paymentData?: any) => {
    try {
      setRegisterLoading(true);
      setGeneralError("");

      const res = await postRequest<any>(
        ROUTES.register,
        buildRegistrationPayload(paymentData)
      );

      if (res?.status_code === 200 && res.data) {
        const token = res.data.token;
        saveAuthSession(res.data, token);
        clearPendingPayment();
        setRegisterSuccess("Your account has been successfully created.");
        return;
      }

      if (
        res?.status_code === 400 &&
        res.message?.includes("Duplicate entry")
      ) {
        setGeneralError(
          "The entered email ID is already registered. Please login."
        );
        return;
      }

      setGeneralError(
        res?.message ||
          "There was an issue with registration. Please check your details and try again."
      );
    } catch {
      setGeneralError("There was an issue with registration. Please try again.");
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleRegistrationSubmit = async () => {
    const errors = validateRegisterForm(registerForm);
    setRegisterErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (requiresPayment) {
      await createPaymentIntent();
      return;
    }

    await submitRegistration();
  };

  const handlePaymentSuccess = async (paymentIntent: any) => {
    savePendingPayment({
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      created: paymentIntent.created,
    });

    await submitRegistration(paymentIntent);
  };

  const handleLoginSubmit = async () => {
    const errors = validateLoginForm(loginForm);
    setLoginErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      setLoginLoading(true);
      setGeneralError("");

      const res = await postRequest<any>(ROUTES.login, {
        email: loginForm.email,
      });

      if (res?.status_code === 200 && res.data) {
        const token = res.data.token;
        saveAuthSession(res.data, token);
        setLoginSuccess("Login successful.");
        return;
      }

      setGeneralError(
        "The entered email ID doesn't exist. Please register first."
      );
    } catch {
      setGeneralError("Login failed. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    clearAuthSession();
    clearPendingPayment();
    setRegisterSuccess("");
    setLoginSuccess("");
    router.replace("/register");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFFFFF",
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          width: "100%",
          // maxWidth: { xs: "100%", sm: "620px", md: "760px" },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {generalError && (
          <Alert
            severity="error"
            sx={{
              mb: 2,
              borderRadius: 1.5,
              fontSize: { xs: 11, md: 13 },
            }}
          >
            {generalError}
          </Alert>
        )}

        {loggedIn ? (
          <ProfileCard user={userData} onLogout={handleLogout} />
        ) : (
          <>
            <Box>
              <Typography
                sx={{
                  color: "#111111",
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Registration
              </Typography>

              <Box
                sx={{
                  height: "3px",
                  bgcolor: "#DD8F17",
                  mt: 1,
                  mb: { xs: 2, md: 2.5 },
                }}
              />

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "520px",
                  mx: "auto",
                  "& .MuiTextField-root, & .MuiFormControl-root": {
                    width: "100%",
                  },
                  "& .MuiInputBase-root": {
                    minHeight: { xs: 52, md: 56 },
                    fontSize: { xs: 15, md: 16 },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: 14, md: 15 },
                  },
                  "& .MuiButton-root": {
                    minWidth: { xs: 180, md: 210 },
                    minHeight: { xs: 44, md: 48 },
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, #B88934 0%, #E8C47B 100%)",
                    color: "#FFFFFF",
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 800,
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #AA7C2D 0%, #DBB96C 100%)",
                      boxShadow: "none",
                    },
                  },
                }}
              >
                <RegistrationForm
                  form={registerForm}
                  errors={registerErrors}
                  isNonEhs={isNonEhs}
                  requiresPayment={requiresPayment}
                  amount={amount}
                  success={registerSuccess}
                  loading={registerLoading}
                  clientSecret={clientSecret}
                  onChange={setField}
                  onCategoryChange={handleCategoryChange}
                  onCodeChoiceChange={handleCodeChoiceChange}
                  onSubmit={handleRegistrationSubmit}
                  onPaymentSuccess={handlePaymentSuccess}
                />
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 5, md: 6 } }}>
              <Typography
                sx={{
                  color: "#111111",
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Login with existing account
              </Typography>

              <Box
                sx={{
                  height: "3px",
                  bgcolor: "#DD8F17",
                  mt: 1,
                  mb: { xs: 2, md: 2.5 },
                }}
              />

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "520px",
                  mx: "auto",
                  "& .MuiTextField-root, & .MuiFormControl-root": {
                    width: "100%",
                  },
                  "& .MuiInputBase-root": {
                    minHeight: { xs: 52, md: 56 },
                    fontSize: { xs: 15, md: 16 },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: 14, md: 15 },
                  },
                  "& .MuiButton-root": {
                    minWidth: { xs: 180, md: 210 },
                    minHeight: { xs: 44, md: 48 },
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, #B88934 0%, #E8C47B 100%)",
                    color: "#FFFFFF",
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 800,
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #AA7C2D 0%, #DBB96C 100%)",
                      boxShadow: "none",
                    },
                  },
                }}
              >
                <LoginForm
                  form={loginForm}
                  errors={loginErrors}
                  success={loginSuccess}
                  loading={loginLoading}
                  onChange={setLoginField}
                  onSubmit={handleLoginSubmit}
                />
              </Box>
            </Box>

            <Box sx={{ mt: { xs: 4.5, md: 5.5 }, color: "#4A4A4A" }}>
              <Typography
                sx={{
                  color: "#111111",
                  fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                  fontWeight: 800,
                }}
              >
                EHS Staff:
              </Typography>
              <Typography
                sx={{
                  mt: 0.2,
                  color: "#555555",
                  fontSize: { xs: 9.5, sm: 10.5, md: 11.5 },
                  lineHeight: 1.4,
                }}
              >
                Registration is Free, and utilization of an EHS email address is mandatory for registration.
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "#111111",
                  fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                  fontWeight: 800,
                }}
              >
                Non-EHS Attendees:
              </Typography>
              <Typography
                sx={{
                  mt: 0.2,
                  color: "#555555",
                  fontSize: { xs: 9.5, sm: 10.5, md: 11.5 },
                  lineHeight: 1.4,
                }}
              >
                A registration fee of AED 500 applies.
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "#111111",
                  fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                  fontWeight: 800,
                }}
              >
                Participant Benefits:
              </Typography>
              <Typography
                sx={{
                  mt: 0.2,
                  color: "#555555",
                  fontSize: { xs: 9.5, sm: 10.5, md: 11.5 },
                  lineHeight: 1.4,
                }}
              >
              •  Full 2-day access to educational lectures and scientific sessions.<br/>
              •  Coffee breaks and lunch served within the designated conference area.<br/>
              •  Access to conference materials and standard participant services.
              </Typography>

              {/* <Typography
                sx={{
                  mt: 3,
                  color: "#111111",
                  fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                  fontWeight: 800,
                }}
              >
                Conference Compliance Notice:
              </Typography>
              <Typography
                sx={{
                  mt: 0.4,
                  color: "#555555",
                  fontSize: { xs: 9.2, sm: 10.2, md: 11.2 },
                  lineHeight: 1.45,
                }}
              >
                This conference is a scientific and educational event and will be conducted strictly within the designated conference areas only. Participants will not have access to hotel recreational or leisure facilities (e.g., pool, spa, fitness center, or entertainment areas).
                <br />
                Accommodation is not part of the official conference program. Any hotel stay arrangements are made independently by participants and are not covered by the event organizer or sponsors.
                <br />
                For any compliance-related questions, please contact the conference organizing team through the official conference website.
              </Typography> */}

              <Box sx={{ height: "1px", bgcolor: "#E6E0DB", my: 3.5 }} />

              <Typography
                sx={{
                  color: "#111111",
                  fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                  fontWeight: 800,
                }}
              >
                Disclaimer:
              </Typography>
              <Typography
                sx={{
                  mt: 0.4,
                  color: "#555555",
                  fontSize: { xs: 9.2, sm: 10.2, md: 11.2 },
                  lineHeight: 1.45,
                }}
              >
                We treat your personal data and protect your privacy when you use our services. By using our services you agree that MEDCON can use such data to contact you for future educational activities. This event is directed to healthcare professionals only. In accordance to UAE code of Ethical Practices for the Promotion and distribution of medical products, MEA Code of promotional practices for pharmaceuticals; spouses, relatives or other guests in relation with healthcare professionals cannot be invited or included in any promotional, professional or scientific event.
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
