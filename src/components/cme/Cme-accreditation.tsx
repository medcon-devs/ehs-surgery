"use client";

import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const attendancePoints = [
  "Attendance to the sessions will be monitored through scanning of the barcode on your conference badge at the entrance of the session hall.",
  "CME credits awarded will be dependent on session attendance.",
];

const certificatePoints = [
  "A survey in the form of an online questionnaire will be emailed post the conference to be completed by delegates.",
  "The CME Certificate will be e-mailed to the registered email address upon completion of the online questionnaire.",
  "Please ensure that the email provided at the time of registration is accurate, otherwise certificate of attendance and the CME certificate may not be received.",
  "Delegates will be able to check that their email is accurate at the onsite registration desks during operational hours.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <Box
  component="ul"
  sx={{
    m: 0,
    pl: 3,
    listStyleType: "disc",
  }}
>
  {items.map((item) => (
    <Box
      component="li"
      key={item}
      sx={{
        mb: 3,
        display: "list-item",
      }}
    >
      <Typography
        sx={{
          color: "#444444",
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.45,
          fontWeight: 400,
        }}
      >
        {item}
      </Typography>
    </Box>
  ))}
</Box>
  );
}

export default function CmeAccreditationComponent() {
  return (
    <Box sx={{ bgcolor: "#f6f6f6", py: { xs: 4, md: 5 } }}>
      <Container maxWidth="lg" sx={{ maxWidth: "1100px !important" }}>
        <Typography
            sx={{
              color: "#315D7C",
              fontSize: { xs: 28, md: 38 },
              fontWeight: 400,
              lineHeight: 1.1,
              mb:2
            }}
          >
            CME Accreditation is in Progress
          </Typography>

          <Box sx={{ height: 6, bgcolor: "#cbbfda", my: 1.2 }} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems={{ xs: "center", md: "flex-start" }}
          mt={5}
        >
          {/* <CmeSeal /> */}
            <img src={"/images/cme.png"} width={250}/>
          <Box sx={{ flex: 1, pt: { xs: 0, md: 3 }  }}>
            <Typography
              sx={{
                color: "#111111",
                fontSize: { xs: 25, md: 35 },
                fontWeight: 400,
                lineHeight: 1.15,
                mb: 4,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Session Attendance Scanning
            </Typography>

            <BulletList items={attendancePoints} />
          </Box>
        </Stack>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              color: "#111111",
              fontSize: { xs: 25, md: 35 },
              fontWeight: 400,
              lineHeight: 1.15,
              mb: 4,
            }}
          >
            Instructions for Claiming CME Certificates
          </Typography>

          <BulletList items={certificatePoints} />
        </Box>
      </Container>
    </Box>
  );
}
