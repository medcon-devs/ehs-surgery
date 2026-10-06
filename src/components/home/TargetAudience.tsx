import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const items = [
  "General surgeons",
  "Surgical subspecialists",
  "Surgical residents and fellows",
  "Anesthesiologists",
  "Perioperative physicians",
  "Operating room nurses",
  "Allied health professionals",
  "Hospital leadership and administrators",
  "Quality and patient safety teams",
  "Researchers and educators",
  "Medical students",
  "Industry partners",
];

const audienceColumns = [items.slice(0, 6), items.slice(6)];

export default function TargetAudience() {
  return (
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Box
          sx={{
            mt: 6,
            minHeight: 340,
            borderRadius: "8px",
            overflow: "hidden",
            color: "#fff",
            backgroundImage: "linear-gradient(90deg, #102b43 0%, rgba(16,43,67,.96) 43%, rgba(16,43,67,.18) 76%), url('https://res.cloudinary.com/medcon-dam/image/upload/v1785148486/EHS-surgery-conference/target_audience_j3zxtv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            px: { xs: 3, md: 7 },
            py: 4,
          }}
        >
          <Typography sx={{ fontSize: 27, fontWeight: 800 }}>Target Audience</Typography>
          <Box sx={{ width: 140, height: 6, borderRadius: 4, bgcolor: "#e39a1d", my: 2.5 }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              columnGap: { md: 8 },
              rowGap: { xs: 0, md: 0 },
              maxWidth: { md: 760 },
            }}
          >
            {audienceColumns.map((column, columnIndex) => (
              <Box
                component="ul"
                key={columnIndex}
                sx={{
                  m: 0,
                  pl: 2,
                  listStyleType: "disc",
                  "& li::marker": {
                    fontSize: "0.55em",
                    color: "#e7edf2",
                  },
                }}
              >
                {column.map((item) => (
                  <Typography
                    component="li"
                    key={item}
                    sx={{
                      fontSize: 16,
                      lineHeight: 1.45,
                      color: "#e7edf2",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}
