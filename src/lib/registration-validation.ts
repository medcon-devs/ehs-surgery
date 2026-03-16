import {
    LoginErrors,
    LoginForm,
    RegisterErrors,
    RegisterForm,
  } from "./registration-types";
  
  export function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }
  
  export function isValidEhsEmail(email: string) {
    return email.trim().toLowerCase().endsWith("@ehs.gov.ae");
  }
  
  export function isValidPhone(phone: string) {
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{6,}$/.test(phone.trim());
  }
  
  export function validateRegisterForm(values: RegisterForm): RegisterErrors {
    const errors: RegisterErrors = {};
  
    if (!values.fullName.trim()) errors.fullName = "Full name is required.";
    else if (values.fullName.trim().length < 3) {
      errors.fullName = "Please enter your full name.";
    }
  
    if (!values.jobTitle) errors.jobTitle = "Job title is required.";
    if (!values.speciality) errors.speciality = "Speciality is required.";
  
    if (!values.hospitalClinic.trim()) {
      errors.hospitalClinic = "Hospital/Clinic is required.";
    }
  
    if (!values.phone.trim()) errors.phone = "Phone is required.";
    else if (!isValidPhone(values.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }
  
    if (!values.email.trim()) errors.email = "Email address is required.";
    else if (!isValidEmail(values.email)) {
      errors.email = "Please enter a valid email address.";
    } else if (
      values.registrationCategory === "EHS Staff" &&
      !isValidEhsEmail(values.email)
    ) {
      errors.email = "EHS Staff must register using an @ehs.gov.ae email address.";
    }
  
    if (!values.registrationCategory) {
      errors.registrationCategory = "Registration category is required.";
    }
  
    if (!values.bayanatiNumber.trim()) {
      errors.bayanatiNumber = "Bayanati Number is required.";
    }
  
    if (
      values.registrationCategory === "Non EHS Attendee" &&
      values.codeChoice === "have-code" &&
      !values.accessCode.trim()
    ) {
      errors.accessCode = "Please enter your registration code.";
    }
  
    return errors;
  }
  
  export function validateLoginForm(values: LoginForm): LoginErrors {
    const errors: LoginErrors = {};
  
    if (!values.email.trim()) errors.email = "Email address is required.";
    else if (!isValidEmail(values.email)) {
      errors.email = "Please enter a valid email address.";
    }
  
    return errors;
  }