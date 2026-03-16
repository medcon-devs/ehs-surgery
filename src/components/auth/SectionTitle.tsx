"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          color: "#315d7c",
          fontSize: { xs: 28, md: 40 },
          fontWeight: 400,
          lineHeight: 1.15,
          mb: 1.5,
        }}
      >
        {children}
      </Typography>
      <Box sx={{ height: 6, bgcolor: "#c9bdd7" }} />
    </Box>
  );
}