export type RegistrationCategory = "EHS Staff" | "Non EHS Attendee" | "";
export type CodeChoice = "have-code" | "no-code";

export type RegisterForm = {
  fullName: string;
  jobTitle: string | null;
  speciality: string | null;
  hospitalClinic: string;
  phone: string;
  email: string;
  registrationCategory: RegistrationCategory;
  bayanatiNumber: string;
  accessCode: string;
  codeChoice: CodeChoice;
};

export type LoginForm = {
  email: string;
};

export type RegisterErrors = Partial<Record<keyof RegisterForm, string>>;
export type LoginErrors = Partial<Record<keyof LoginForm, string>>;

export type ApiResponse<T = any> = {
  status_code: number;
  status: boolean;
  message: string;
  data?: T;
};