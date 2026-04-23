"use client";

import React from "react";
import { Autocomplete } from "@mui/material";
import StyledTextField from "./StyledTextField";

export default function StyledAutocomplete({
  label,
  value,
  onChange,
  options,
  error,
  helperText,
  renderOption,
}: {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: string[];
  error?: boolean;
  helperText?: string;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: string
  ) => React.ReactNode;
}) {
  return (
    <Autocomplete
      fullWidth
      options={options}
      value={value}
      onChange={(_, nextValue) => onChange(nextValue)}
      autoHighlight
      popupIcon={undefined}
      renderOption={renderOption}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={label}
          error={error}
          helperText={helperText}
          InputLabelProps={{ shrink: true }}
        />
      )}
      sx={{
        "& .MuiAutocomplete-inputRoot": {
          pr: "40px !important",
        },
        "& .MuiAutocomplete-endAdornment": {
          right: 10,
        },
      }}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 1,
            mt: 0.5,
            boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
          },
        },
      }}
    />
  );
}