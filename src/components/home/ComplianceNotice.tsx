import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ComplianceNotice() {
  return (
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 18, color: "#2F5E7A" }}>
            Conference Compliance Notice
          </Typography>
          <Typography sx={{ mt: 1, fontSize: 11, color: "text.secondary", lineHeight: 1.8 }}>
          This conference is a scientific and educational event and will be conducted strictly within the designated conference areas only. Participants will not have access to hotel recreational or leisure facilities (e.g., pool, spa, fitness center, or entertainment areas).<br/>
Accommodation is not part of the official conference program. Any hotel stay arrangements are made independently by participants and are not covered by the event organizer or sponsors.
For any compliance-related questions, please contact the conference organizing team through the official conference website.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}