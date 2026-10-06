import { Box, Container, Stack, Typography } from "@mui/material";

const sponsors = [
  { name: "Abbott", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149456/EHS-surgery-conference/Abbott_zdydm4.png" },
  { name: "Amgen", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149456/EHS-surgery-conference/Amgensurgery_cfkm1f.png" },
  { name: "AstraZeneca", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149457/EHS-surgery-conference/AstraZenecasurgery_i3v23g.png" },
  { name: "Bayer", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149457/EHS-surgery-conference/Bayersurgery_xzwalz.png" },
  { name: "Boehringer Ingelheim", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149457/EHS-surgery-conference/Beohringer_ispjq1.png" },
  { name: "CSL Vifor", src: "https://res.cloudinary.com/medcon-dam/image/upload/v1785149457/EHS-surgery-conference/CSL_Viforsurgery_ssnlbw.png" },
];

export default function Sponsors() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: { xs: 5, md: 5 }, mb: 0 }}>
        
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 'bold', my: 2 }}>
          Our Sponsors
        </Typography>
        <Box sx={{ height: 5, bgcolor: "#dc951d", mb: 5 }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={3}>
          {sponsors.map((sponsor) => (
            <Box
              component="img"
              key={sponsor.name}
              src={sponsor.src}
              alt={sponsor.name}
              sx={{ width: { xs: 82, md: 110 }, maxHeight: 48, objectFit: "contain" }}
            />
          ))}
        </Stack>
        
      </Box>
    </Container>
  );
}
