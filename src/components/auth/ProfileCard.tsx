"use client";

import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";

export default function ProfileCard({
  user,
  onLogout,
}: {
  user: any;
  onLogout: () => void;
}) {
  return (
    <Box sx={{ maxWidth: 620, mx: "auto" }}>
      <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
        You are logged in.
      </Alert>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "#fff",
          border: "1px solid #d9e2ea",
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#315d7c", mb: 2 }}>
          Profile
        </Typography>

        <Stack spacing={1}>
          <Typography><strong>Name:</strong> {user?.name || "-"}</Typography>
          <Typography><strong>Email:</strong> {user?.email || "-"}</Typography>
          <Typography><strong>Phone:</strong> {user?.phone || "-"}</Typography>
          {/* <Typography><strong>Member Type:</strong> {user?.member_type || "-"}</Typography> */}
          <Typography><strong>Hospital:</strong> {user?.hospital || "-"}</Typography>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={onLogout}
            sx={{
              minWidth: 160,
              height: 44,
              borderRadius: 999,
              bgcolor: "#315d7c",
              textTransform: "none",
              fontSize: 16,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#274e69",
                boxShadow: "none",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}