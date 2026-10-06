"use client";

import * as React from "react";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import StyledTextField from "./StyledTextField";
import SectionTitle from "./SectionTitle";
import { LoginErrors, LoginForm as LoginFormType } from "@/lib/registration-types";

type Props = {
  form: LoginFormType;
  errors: LoginErrors;
  success: string;
  loading: boolean;
  onChange: (field: keyof LoginFormType, value: string) => void;
  onSubmit: () => void;
};

export default function LoginForm({
  form,
  errors,
  success,
  loading,
  onChange,
  onSubmit,
}: Props) {
  return (
    <Box sx={{ mt: 6 }}>
      {/* <SectionTitle>Login with existing account:</SectionTitle> */}

      <Box sx={{ maxWidth: 620, mx: "auto" }}>
        <StyledTextField
          label="Email address*"
          type="email"
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        {success && (
          <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3.5 }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={loading}
            sx={{
              minWidth: 190,
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
            {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Login"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}