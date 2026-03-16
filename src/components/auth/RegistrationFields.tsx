"use client";

import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import StyledAutocomplete from "./StyledAutocomplete";
import StyledTextField from "./StyledTextField";
import {
  categoryOptions,
  jobTitleOptions,
  specialityOptions,
} from "@/lib/registration-options";
import {
  CodeChoice,
  RegisterErrors,
  RegisterForm,
  RegistrationCategory,
} from "@/lib/registration-types";

type Props = {
  form: RegisterForm;
  errors: RegisterErrors;
  isNonEhs: boolean;
  onChange: <K extends keyof RegisterForm>(field: K, value: RegisterForm[K]) => void;
  onCategoryChange: (value: string | null) => void;
  onCodeChoiceChange: (value: CodeChoice) => void;
};

export default function RegistrationFields({
  form,
  errors,
  isNonEhs,
  onChange,
  onCategoryChange,
  onCodeChoiceChange,
}: Props) {
  return (
    <Stack spacing={1.1}>
      <StyledTextField
        label="Full Name*"
        value={form.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
        error={Boolean(errors.fullName)}
        helperText={errors.fullName}
      />

      <StyledAutocomplete
        label="Job Title*"
        value={form.jobTitle}
        onChange={(value) => onChange("jobTitle", value)}
        options={jobTitleOptions}
        error={Boolean(errors.jobTitle)}
        helperText={errors.jobTitle}
      />

      <StyledAutocomplete
        label="Speciality*"
        value={form.speciality}
        onChange={(value) => onChange("speciality", value)}
        options={specialityOptions}
        error={Boolean(errors.speciality)}
        helperText={errors.speciality}
      />

      <StyledTextField
        label="Hospital/Clinic*"
        value={form.hospitalClinic}
        onChange={(e) => onChange("hospitalClinic", e.target.value)}
        error={Boolean(errors.hospitalClinic)}
        helperText={errors.hospitalClinic}
      />

      <StyledTextField
        label="Phone*"
        value={form.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        error={Boolean(errors.phone)}
        helperText={errors.phone}
      />

      <StyledTextField
        label="Email address*"
        type="email"
        value={form.email}
        onChange={(e) => onChange("email", e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />

      <StyledAutocomplete
        label="Registration Category*"
        value={form.registrationCategory || null}
        onChange={onCategoryChange}
        options={categoryOptions}
        error={Boolean(errors.registrationCategory)}
        helperText={errors.registrationCategory}
      />

      {isNonEhs && (
        <FormControl error={Boolean(errors.accessCode)} sx={{ pt: 0.5 }}>
          <RadioGroup
            row
            value={form.codeChoice}
            onChange={(e) => onCodeChoiceChange(e.target.value as CodeChoice)}
            sx={{ gap: 2.5 }}
          >
            <FormControlLabel
              value="have-code"
              control={<Radio sx={{ color: "#315d7c", "&.Mui-checked": { color: "#0f2f96" } }} />}
              label={<Typography sx={{ fontSize: 16, color: "#202020" }}>I have a code</Typography>}
            />
            <FormControlLabel
              value="no-code"
              control={<Radio sx={{ color: "#315d7c", "&.Mui-checked": { color: "#0f2f96" } }} />}
              label={<Typography sx={{ fontSize: 16, color: "#202020" }}>I don't have a code</Typography>}
            />
          </RadioGroup>
          {errors.accessCode && <FormHelperText>{errors.accessCode}</FormHelperText>}
        </FormControl>
      )}

      {isNonEhs && form.codeChoice === "have-code" && (
        <StyledTextField
          label="Registration Code*"
          value={form.accessCode}
          onChange={(e) => onChange("accessCode", e.target.value)}
          error={Boolean(errors.accessCode)}
          helperText={errors.accessCode}
        />
      )}

      <StyledTextField
        label="Bayanati Number (For CME)*"
        value={form.bayanatiNumber}
        onChange={(e) => onChange("bayanatiNumber", e.target.value)}
        error={Boolean(errors.bayanatiNumber)}
        helperText={errors.bayanatiNumber}
      />
    </Stack>
  );
}