import * as React from "react";
import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "We’re building something great. This page will be available shortly.",
  primaryCtaLabel = "Back to Home",
  primaryCtaHref = "/",
  secondaryCtaLabel = "Register",
  secondaryCtaHref = "/register",
}: {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 56px)", // assumes TopNav is sticky 56px
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        bgcolor: "#0E2A3E",
      }}
    >
      {/* Background image (optional). Replace or remove */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.16,
          filter: "saturate(1.05)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 60% at 30% 20%, rgba(47,94,122,0.55), transparent 60%), radial-gradient(60% 60% at 70% 80%, rgba(255,255,255,0.10), transparent 60%), linear-gradient(180deg, rgba(10,18,26,0.75), rgba(10,18,26,0.90))",
        }}
      />

      {/* Floating blobs (loop) */}
      <MotionBox
        aria-hidden
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          top: -120,
          left: -120,
          background:
            "radial-gradient(circle at 30% 30%, rgba(120,185,255,0.45), rgba(47,94,122,0.15), transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <MotionBox
        aria-hidden
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          bottom: -180,
          right: -160,
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,190,130,0.22), rgba(255,255,255,0.08), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Subtle moving grid (loop) */}
      <MotionBox
        aria-hidden
        animate={{ backgroundPosition: ["0px 0px", "140px 180px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          mixBlendMode: "overlay",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", py: 8 }}>
        {/* Card */}
        <MotionBox
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          sx={{
            position: "relative",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Shimmer top bar */}
          <MotionBox
            aria-hidden
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 3,
              width: "40%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
              opacity: 0.55,
            }}
          />

          <Box sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
            {/* Badge */}
            <MotionBox
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <Box
                component={motion.span}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "rgba(120,185,255,0.95)",
                  display: "inline-block",
                }}
              />
              UNDER CONSTRUCTION
            </MotionBox>

            {/* Title */}
            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              sx={{ mt: 2.5 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 40, md: 56 },
                  fontWeight: 900,
                  letterSpacing: -0.8,
                  lineHeight: 1.05,
                  color: "white",
                }}
              >
                {title}
              </Typography>
            </MotionBox>

            {/* Subtitle */}
            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55 }}
              sx={{ mt: 1.5 }}
            >
              <Typography
                sx={{
                  maxWidth: 720,
                  mx: "auto",
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                {subtitle}
              </Typography>
            </MotionBox>

            {/* Animated divider */}
            <MotionBox
              aria-hidden
              animate={{ width: ["36%", "62%", "36%"] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                height: 2,
                mx: "auto",
                mt: 3,
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.65), rgba(255,255,255,0))",
                opacity: 0.6,
              }}
            />

            {/* CTA buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={1.5}
              justifyContent="center"
              sx={{ mt: 3.5 }}
            >
              <Button
                component={Link}
                href={primaryCtaHref}
                variant="contained"
                sx={{
                  bgcolor: "#2F5E7A",
                  px: 4,
                  py: 1.4,
                  borderRadius: 999,
                  fontWeight: 800,
                  boxShadow: "0 16px 32px rgba(47,94,122,0.30)",
                  "&:hover": { bgcolor: "#284F66" },
                }}
              >
                {primaryCtaLabel}
              </Button>

              {/* <Button
                component={Link}
                href={secondaryCtaHref}
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.4,
                  borderRadius: 999,
                  fontWeight: 800,
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.55)",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                {secondaryCtaLabel}
              </Button> */}
            </Stack>

            {/* Bottom looping “pulse” */}
            <MotionBox
              aria-hidden
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                mt: 4,
                mx: "auto",
                width: { xs: "92%", md: "78%" },
                height: 54,
                borderRadius: 999,
                background:
                  "radial-gradient(60% 140% at 50% 20%, rgba(120,185,255,0.35), rgba(255,255,255,0.08), transparent 70%)",
                filter: "blur(2px)",
              }}
            />
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}