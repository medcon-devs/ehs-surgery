"use client";

import * as React from "react";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import SectionTitle from "./SectionTitle";
import RegistrationFields from "./RegistrationFields";
import {
  CodeChoice,
  RegisterErrors,
  RegisterForm as RegisterFormType,
  RegistrationCategory,
} from "@/lib/registration-types";

const stripePromise = loadStripe(
  "pk_live_51RUSGTF14BXDqOBLdGjMmvMow3bafHlDhMnYuaZ6YdHTuOSLSVBTP05q80YhvNQIiJu6dX6ZIav9jd0teg0zBHPm00s5bQqlct"
);

type Props = {
  form: RegisterFormType;
  errors: RegisterErrors;
  isNonEhs: boolean;
  requiresPayment: boolean;
  amount: number;
  success: string;
  loading: boolean;
  clientSecret: string | null;
  onChange: <K extends keyof RegisterFormType>(field: K, value: RegisterFormType[K]) => void;
  onCategoryChange: (value: string | null) => void;
  onCodeChoiceChange: (value: CodeChoice) => void;
  onSubmit: () => void;
  onPaymentSuccess: (paymentIntent: any) => void;
};

export default function RegistrationForm({
  form,
  errors,
  isNonEhs,
  requiresPayment,
  amount,
  success,
  loading,
  clientSecret,
  onChange,
  onCategoryChange,
  onCodeChoiceChange,
  onSubmit,
  onPaymentSuccess,
}: Props) {
  return (
    <>
      {/* <SectionTitle>Registration:</SectionTitle> */}

      <Box sx={{ width: "100%", mx: "auto", mb: 5 }}>
        <RegistrationFields
          form={form}
          errors={errors}
          isNonEhs={isNonEhs}
          onChange={onChange}
          onCategoryChange={onCategoryChange}
          onCodeChoiceChange={onCodeChoiceChange}
        />

        <Typography
          sx={{
            mt: 1.2,
            color: "#ff3f3f",
            textAlign: "center",
            fontSize: 13,
          }}
        >
          *Indicates required fields
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

        {isNonEhs && form.codeChoice === "no-code" && (
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 700, color: "#111", mb: 1 }}>
              Non EHS Attendees
            </Typography>
            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700, color: "#111", mb: 2.5 }}>
              Registration Fees AED {amount}
            </Typography>

            {clientSecret && (
              <Box
                sx={{
                  mt: 2,
                  p: { xs: 2, md: 3 },
                  bgcolor: "#fff",
                  border: "1px solid #d9e2ea",
                  borderRadius: 2,
                }}
              >
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "stripe",
                    },
                  }}
                >
                  <CheckoutPage
                    amount={amount}
                    clientSecret={clientSecret}
                    onPaymentSuccess={onPaymentSuccess}
                  />
                </Elements>
              </Box>
            )}
          </Box>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4.5 }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={loading || (requiresPayment && Boolean(clientSecret))}
            sx={{
              minWidth: { xs: 190, md: 220 },
              height: 44,
              borderRadius: 999,
              bgcolor: "#315d7c",
              textTransform: "none",
              fontSize: 18,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#274e69",
                boxShadow: "none",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={22} sx={{ color: "#fff" }} />
            ) : requiresPayment ? (
              clientSecret ? "Payment Form Ready" : "Proceed to Payment"
            ) : (
              "Register Now"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
}
