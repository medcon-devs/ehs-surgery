"use client";

import { TextField } from "@mui/material";
import * as React from "react";

export default function StyledTextField(
  props: React.ComponentProps<typeof TextField>
) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 1,
          bgcolor: "rgba(255,255,255,0.35)",
          minHeight: 56,
          "& fieldset": { borderColor: "#aac0d3" },
          "&:hover fieldset": { borderColor: "#7e9ab2" },
          "&.Mui-focused fieldset": {
            borderColor: "#315d7c",
            borderWidth: 1.5,
          },
        },
        "& .MuiInputBase-input": {
          color: "#3f3f3f",
          fontSize: 16,
          py: 1.6,
        },
        "& .MuiInputLabel-root": {
          color: "#4d5f6c",
          fontSize: 15,
        },
        "& .MuiFormHelperText-root": {
          fontSize: 13,
          mt: 0.75,
        },
        ...props.sx,
      }}
    />
  );
}
