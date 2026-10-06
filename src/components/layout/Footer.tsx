import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box bgcolor={"#fff"}>
        <Box maxWidth={"lg"} mx={"auto"} px={{md:5,xs:2}}>
        <Box
            sx={{
              width: "100%",
              height: { xs: 3, md: 5 },
              bgcolor: "#d58b00",
             
            }}
          />
          <Typography  sx={{ fontWeight: 'bold', mb: 1, mt: 2,fontSize:{md:14,xs:12} }}>
            Conference Compliance Notice
          </Typography>
          <Typography sx={{ mb: 4,fontSize:{md:12,xs:10} }}>
            This conference is a scientific and educational event and will be conducted strictly within the designated conference areas only. Participants will not have access to hotel recreational or leisure facilities (e.g., pool, spa, fitness center, or entertainment areas). <br />
            Accommodation is not part of the official conference program. Any hotel stay arrangements are made independently by participants and are not covered by the event organizer or sponsors.
            For any compliance-related questions, please contact the conference organizing team through the official conference website.
          </Typography>
        </Box>
        <Box  sx={{ height: 14, mt: 2, background: "linear-gradient(90deg, #f5cc72, #9d7429)" }} />

        <Box width={1} height={{ xs: 50, md: 50 }} bottom={0} bgcolor={"#102A44"} py={2}>

          <Container maxWidth="lg" >
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Box component="img" src="https://res.cloudinary.com/medcon-dam/image/upload/v1773726218/ehs-ckm-2026/Frontend/medcon_logo_pqtudt.png" alt="Medcon" sx={{ height: 22 }} />
              </Stack>

              <Stack direction="row" gap={2} alignItems="center">
                <MuiLink href="/privacy" underline="hover" color="white" sx={{ fontSize: 13 }}>
                  Privacy Policy
                </MuiLink>
                <Typography sx={{ opacity: 0.5, color: "white" }}> | </Typography>
                <MuiLink href="https://www.medcon-me.com/contact-us/" underline="hover" color="white" sx={{ fontSize: 13 }}>
                  Contact us
                </MuiLink>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}