import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { literata } from "@/lib/fonts";

const items = [
  "Internal Medicine Specialists",
  "Nephrologists",
  "Cardiologists",
  "Emergency Physicians",
  "General Practitioners",
  "Healthcare Professionals",
  "Researchers and Academics",
  "Representatives from Medical Societies and Associations",
  "Internal Medicine Trainees",
  "Medical and Surgical Residents and Fellows",
  "Medical Device and Technology Companies",
];



export default function TargetAudience() {
  return (
    <Box
      sx={{
        mt: 5,
        position: "relative",
        py: 6,
        color: "white",
        overflow: "hidden",
        // backgroundColor: "#0E2A3E",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://res.cloudinary.com/medcon-dam/image/upload/v1773726216/ehs-ckm-2026/Frontend/audiens_ugowqt.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        //   opacity: 0.18,
        }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "rgba(9, 25, 38, 0.75)" }} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h4" sx={{ fontWeight: 500, fontFamily: `${literata.style.fontFamily}, serif`, }} className={literata.className}>
            Target Audience
          </Typography>
          <Divider sx={{ mt: 2, mb: 3, width: "35%", borderColor: "rgb(255, 255, 255)",borderWidth:3, }} />

          <Stack component="ul" sx={{ pl: 2, m: 0, gap: 0.8 }}>
            {items.map((it) => (
              <Typography component="li" key={it} sx={{ opacity: 0.95, fontSize: 14 }}>
                <strong>•</strong> {it}
              </Typography>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}