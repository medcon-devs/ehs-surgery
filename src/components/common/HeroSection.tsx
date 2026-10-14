import { Box, Container, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

function InfoPill({ icon, text,subtext }: { icon: React.ReactNode; text: string ,subtext:string}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        // bgcolor: "rgba(255,255,255,0.22)",
        // color: "white",
        px: 2,
        py: 1,
        borderRadius: 999,
        // backdropFilter: "blur(6px)",
      }}
    >
      <Box sx={{ display: "grid", placeItems: "center" }}>{icon}</Box>
      <Box>
      <Typography sx={{ fontWeight: 900, fontSize: 14,color:"#315A7B" }}>{text}</Typography>
      <Typography sx={{ fontWeight: 900, fontSize: 14 ,color:"#315A7B" }}>{subtext}</Typography>
      </Box>
    </Stack>
  );
}

export default function HeroSection() {
  return (
    <Box
  sx={{
    position: "relative",
    minHeight: { xs: 305, md: 360},
    display: "flex",
    alignItems: "stretch",
    overflow: "hidden",
    bgcolor: "#1e3b52",
  }}
>
  {/* Mobile video */}
  <Box
    // component="video"
    // autoPlay
    // muted
    // loop
    // playsInline
    sx={{
      display: { xs: "block", md: "none" },
      width: "100%",
      height: "100%",
      overflow: "hidden",
      objectFit: "cover",
      filter: "saturate(1.1)",
    }}
  >
    <Box
      component="img"
      src="https://res.cloudinary.com/medcon-dam/image/upload/v1785317410/EHS-surgery-conference/bannermobile_iuqn86.png"
      alt="1st EHS Next Generation Surgery Conference"
      sx={{ display: "block", width: "100%", minHeight: 305, objectFit: "cover" }}
    />
    {/* <source
      src="https://res.cloudinary.com/medcon-dam/video/upload/q_auto/f_auto/v1776432103/ehs-ckm-2026/Frontend/5th_EHS_Banner_MOBILE_cz7f3e.mp4"
      type="video/mp4"
    /> */}
  </Box>

  {/* Desktop video */}
  <Box
    // component="img"
    // component="video"
    // autoPlay
    // muted
    // loop
    // playsInline
    sx={{
      display: { xs: "none", md: "block" },
      width: "100%",
      height: "100%",
      overflow: "hidden",
      objectFit: "cover",
      filter: "saturate(1.1)",
      
    }}
  >
    <Box
      component="img"
      src="https://res.cloudinary.com/medcon-dam/image/upload/v1791973144/EHS-surgery-conference/banner/Banner_e9cedo.png"
      alt="1st EHS Next Generation Surgery Conference"
      sx={{ display: "block", width: "100%", minHeight: 360, objectFit: "cover" }}
    />
    {/* <source
      src="https://res.cloudinary.com/medcon-dam/video/upload/q_auto/f_auto/v1776432103/ehs-ckm-2026/Frontend/5th_EHS_Banner_1.4_i2wqtk.mp4"
      type="video/mp4"
    /> */}
  </Box>
</Box>
  );
}
