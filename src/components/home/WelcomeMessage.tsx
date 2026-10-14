import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const profiles = [
  {
    image: "https://res.cloudinary.com/medcon-dam/image/upload/v1785148224/EHS-surgery-conference/Essamsurgery_nvao3p.png",
    name: "Dr. Essam AlZarooni",
    role: "Executive Director Of Clinical Services",
    subtitle: "Sector Emirates Health Services",
  },
  {
    image: "https://res.cloudinary.com/medcon-dam/image/upload/v1785148224/EHS-surgery-conference/Wedadsurgery_dmohwf.png",
    name: "Ms. Wedad Al Fard",
    title: "Conference Chairperson",
    role: "Director of Dibba-Fujairah Hospital",
  },
  {
    image:"https://res.cloudinary.com/medcon-dam/image/upload/v1785224244/EHS-surgery-conference/Hatem_le92lb.png",
    name:"Prof. Hatem Gaafar",
    role:"Consultant Surgeon",
    subtitle:"Dibba Hospital"
  }
];

export default function WelcomeMessage() {
  return (
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Box sx={{ mt: 7, bgcolor: "#f4f4f4", borderRadius: "7px", }}>
          <Box display={{ md: "flex", xs: "block" }} alignContent={"flex-end"} alignItems={"center"} pt={2}>

            <Typography sx={{ fontSize: { xs: 24, md: 27 }, fontWeight: 800, whiteSpace: "nowrap", px: { xs: 3, md: 4 }, }}>
              Welcome Message
            </Typography>
            <Box sx={{ height: 3, flex: 1, bgcolor: "#dc951d", mx: 2 }} />
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 4, md: 3 }}>
            <Box sx={{ flex: 1.6 }}>

              <Stack direction="row" alignItems="center" gap={3} sx={{ mb: 2.5 }}>

              </Stack>
              <Typography component="div" sx={{ color: "#555", fontSize: 16, lineHeight: 1.38, px: { xs: 3, md: 4 }, pb: 3 }}>
                Emirates Health Services is pleased to announce the <strong>1st EHS Next Generation Surgery Conference</strong>, a two-day scientific conference dedicated to advancing the future of surgical care through science, precision, innovation, education, and excellence.
                <br /><br />
                The conference brings together surgical experts, researchers, and healthcare professionals to explore evolving practices, precision-driven approaches, emerging technologies, enhanced recovery, perioperative excellence, and multidisciplinary surgical care.
                <br /><br />
                The event will be held on<br />
                <strong>October 31<sup>st</sup> - November 1<sup>st</sup> 2026 at InterContinental Hotel - Events Center, Dibba Fujairah, UAE.</strong>
                <br /><br />
                The conference will provide a dynamic platform for knowledge exchange and professional collaboration, highlighting the latest advances shaping modern surgical care, including minimally invasive and robotic techniques, emerging technologies, and innovative approaches that support safer procedures and improved patient outcomes.
                {/* We are pleased to invite selected partners to participate as sponsors. By supporting this event, you will demonstrate your commitment to surgical education and training, your contribution to knowledge exchange among healthcare practitioners, and your dedication to advancing surgical excellence across the UAE. */}
                <br /><br />
                The conference is designed for surgeons, surgical residents, physicians, operating room teams, nurses, allied health professionals, and medical students, with opportunities for scientific sessions, interactive discussions, workshops, exhibition engagement, and networking.
                <br /><br />
                We look forward to your participation.
              </Typography>
            </Box>

            <Stack
              sx={{
                flex: 0.9,
                bgcolor: "#102b43",
                borderRadius: "7px",
                color: "#fff",
                px: 2.5,
                py: 3.5,
                justifyContent: "space-around",
              }}
            >
              {profiles.map((profile) => (
                <Box key={profile.name} sx={{ textAlign: "center", py: 1 }}>
                  <Box
                    component="img"
                    src={profile.image}
                    alt={profile.name}
                    sx={{ width: 105, height: 105, borderRadius: "50%", objectFit: "cover",mx:"auto"}}
                  />
                   <Typography sx={{fontSize: 12,mt:.5, fontWeight: 800,color:"#D88E23" }}>{profile.title}</Typography>
                  <Typography sx={{ mt: profile.title!=null?0: 0.5, fontSize: 19, fontWeight: 800 }}>{profile.name}</Typography>
                  <Typography sx={{ mt: 0.3, fontSize: 9.5, lineHeight: 1.3 }}>{profile.role}</Typography>
                  {profile.subtitle && <Typography sx={{ fontSize: 9.5 }}>{profile.subtitle}</Typography>}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
}
