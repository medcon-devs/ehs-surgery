import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { literata } from "@/lib/fonts";

const sponsors = [
  {
    name: "Amgen",
    logo: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776249895/ehs-ckm-2026/Frontend/sponsors/amgen_logo_grw3ou.png",
    width: 130,
  },
  {
    name: "CSL Vifor",
    logo: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776249895/ehs-ckm-2026/Frontend/sponsors/CSL_pnqdse.png",
    width: 130,
  },
  {
    name: "Bayer",
    logo: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776249895/ehs-ckm-2026/Frontend/sponsors/LOGO_TRANSPARENT_1_nwxwih.png",
    width: 72,
  },
  {
    name: "Novo Nordisk",
    logo: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776249895/ehs-ckm-2026/Frontend/sponsors/NOVO_logo_blue_y8jnkm.png",
    width: 95,
  },
];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export default function Sponsors() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 6, overflow: "hidden" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "#2F5E7A",
            mb: 2,
            textAlign: "center",
            fontFamily: `${literata.style.fontFamily}, serif`,
          }}
          className={literata.className}
        >
          Our Sponsors:
        </Typography>

        <Divider
          sx={{
            mb: 4,
            borderColor: "#315A7B",
            borderBottomWidth: 4,
            width: "85%",
            mx: "auto",
          }}
        />

        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
              animation: `${scroll} 20s linear infinite`,
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <Box
                key={`${sponsor.name}-${index}`}
                sx={{
                  flex: "0 0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 3, sm: 4, md: 5 },
                }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.name}
                  sx={{
                    width: isMobile ? sponsor.width * 0.75 : sponsor.width,
                    height: "auto",
                    objectFit: "contain",
                    maxHeight: { xs: 45, sm: 55, md: 65 },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}