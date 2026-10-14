import { RegistrationCategory, RegisterForm, LoginForm } from "./registration-types";

export const jobTitleOptions = [
  "Consultant",
  "Head Nurse",
  "Head of Department",
  "Medical student",
  "Nurse",
  "Resident",
  "Specialist",
  "Others",
];

export const specialityOptions = [
  "Surgeon",
  "Endocrinologist",
  "Cardiologist",
  "Pediatrician",
  "Internal Medicine",
  "Family Medicine",
  "General Practitioner",
  "Diabetes Educator",
  "Pharmacist",
  "Nutritionist",
  "Diabetologist",
  "Nurse",
  "Family Physician",
  "Industry",
  "Internist",
  "Neurologist",
  "Nephrologist",
  "Other",
];

export const categoryOptions: Exclude<RegistrationCategory, "">[] = [
  "EHS Staff",
  "Non EHS Attendee",
];

export const initialRegisterForm: RegisterForm = {
  fullName: "",
  jobTitle: null,
  speciality: null,
  hospitalClinic: "",
  phone: "",
  email: "",
  registrationCategory: "",
  bayanatiNumber: "",
  accessCode: "",
  codeChoice: "no-code",
};

export const initialLoginForm: LoginForm = {
  email: "",
};