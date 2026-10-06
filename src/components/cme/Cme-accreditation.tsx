"use client";

import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const CME_IMAGE =
  "https://res.cloudinary.com/medcon-dam/image/upload/v1785220963/EHS-surgery-conference/Group_737_qounhc.png";

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

const COLORS = {
  navy: "#102F4B",
  orange: "#D88C19",
  goldShadow: "#E7D4AE",
  black: "#101010",
  body: "#555555",
  card: "#F4F4F4",
  white: "#FFFFFF",
};

function BulletList({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <Stack
      component="ul"
      spacing={compact ? 1.2 : 1.7}
      sx={{
        m: 0,
        p: 0,
        listStyle: "none",
      }}
    >
      {items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={{
            display: "grid",
            gridTemplateColumns: "12px minmax(0, 1fr)",
            columnGap: { xs: 0.75, md: 1 },
            alignItems: "flex-start",
          }}
        >
          <Typography
            component="span"
            sx={{
              color: COLORS.body,
              fontSize: { xs: 12, sm: 13, md: 14 },
              lineHeight: 1.45,
              pt: "1px",
            }}
          >
            ·
          </Typography>

          <Typography
            component="span"
            sx={{
              color: COLORS.body,
              fontSize: compact
                ? { xs: 11.5, sm: 12.5, md: 13.5 }
                : { xs: 12, sm: 13, md: 14 },
              fontWeight: 400,
              lineHeight: compact ? 1.35 : 1.4,
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

function AttendanceCard() {
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: 3, sm: 4, md: 5 },
        display: "flex",
        alignItems: "center",
        minHeight: { xs: 330, sm: 210, md: 215 },
      }}
    >
      <Box
        sx={{
          position: { xs: "absolute", sm: "absolute" },
          left: { xs:5,sm: 10, md: 18 },
          top: { sm: "50%" },
          transform: { sm: "translateY(-50%)" },
          zIndex: 2,
          width: { xs: 145, sm: 165, md: 200 },
          height: { xs: 145, sm: 165, md: 200 },
          mx: { xs: "auto", sm: 0 },
          mb: { xs: -2, sm: 0 },
          flexShrink: 0,
          
        }}
      >
        <Box
          component="img"
          src={CME_IMAGE}
          alt="CME Accreditation in Progress"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            // xs: "calc(100% - 100px)",
            sm: "calc(100% - 105px)",
            md: "calc(100% - 120px)",
          },
          ml: { xs: 0, sm: "105px", md: "120px" },
          mt: { xs: 0, sm: 0 },
          bgcolor: COLORS.card,
          borderRadius: {
            xs: "18px",
            sm: "18px 18px 10px 18px",
          },
          overflow: "hidden",
          boxShadow: `0 7px 0 ${COLORS.goldShadow}`,
          
         
        }}
      >
        <Box
          sx={{
            bgcolor: COLORS.navy,
            px: {
              xs: 2.5,
              sm: 4,
              md: 4.5,
            },
            py: {
              xs: 1.25,
              md: 1.4,
            },
            borderTopRightRadius:"16px",
            borderBottomLeftRadius:"16px",
            width:{md:"85%",xs:"70%"},
            ml: "auto",
            // justifySelf:"flex-end",
            
          }}
        >
        
          <Typography
            sx={{
              color: COLORS.white,
              fontSize: {
                xs: 17,
                sm: 19,
                md: 21,
              },
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Session Attendance Scanning
          </Typography>
        </Box>

        <Box
          sx={{
            px: {
              xs: 2.5,
              sm: 4,
              md: 4.5,
            },
            pt: {
              xs: 1.8,
              md: 2,
            },
            pb: {
              xs: 2.2,
              md: 2.5,
            },
            width:{md:"90%",xs:'70%'},
            // justifySelf:"flex-end"
            ml: "auto",
          }}
        >
          <BulletList items={attendancePoints} compact />
        </Box>
      </Box>
    </Box>
  );
}

export default function CmeAccreditationComponent() {
  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        // minHeight: "100vh",
        py: {
          xs: 3,
          sm: 4,
          md: 5,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "760px",
            md: "920px",
          },
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Typography
          sx={{
            color: COLORS.black,
            fontSize: {
              xs: 22,
              sm: 25,
              md: 28,
            },
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          CME Accreditation is in Progress
        </Typography>

        <Box
          sx={{
            height: {
              xs: 4,
              md: 5,
            },
            bgcolor: COLORS.orange,
            mt: {
              xs: 1.5,
              md: 2,
            },
          }}
        />

        <AttendanceCard />

        <Box
          sx={{
            mt: {
              xs: 5,
              sm: 6,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              color: COLORS.black,
              fontSize: {
                xs: 20,
                sm: 23,
                md: 25,
              },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: {
                xs: 2.5,
                md: 3,
              },
            }}
          >
            Instructions for Claiming CME Certificates
          </Typography>

          <BulletList items={certificatePoints} />
        </Box>

        {/* <Box
          sx={{
            height: {
              xs: 3,
              md: 4,
            },
            bgcolor: COLORS.orange,
            mt: {
              xs: 5,
              md: 6,
            },
          }}
        /> */}
      </Container>
    </Box>
  );
}