import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function WelcomeMessage() {
    return (
        <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Box sx={{ mt: 4 }}>
                    <Divider sx={{ mb: 3, borderColor: "#315A7B", borderBottomWidth: 5 }} />
                    <Typography variant="h4" sx={{ fontWeight: 500, color: "#2F5E7A", mb: 2 }}>
                        Welcome Message
                    </Typography>

                    <Typography sx={{ color: "text.secondary", lineHeight: 1.9, fontSize: 14 }}>
                        On behalf of the Organizing and Scientific Committee, it is our great honor to extend a warm welcome to you to The 5th EHS Cardiorenal and Metabolic Conference, chaired by Dr. Muhamed Al Rohani, MD, Head of the Medical Department at Dibba Hospital, and Chairman of the Organizing Committee.<br /><br />

                        This distinguished event will take place on May 9–10, 2026, at DoubleTree by Hilton Fujairah City Hotel.<br /><br />

                        Now in its fifth edition, this conference continues its mission to advance cardiovascular and metabolic healthcare across the region. It brings together leading clinicians, researchers, academicians, and healthcare innovators to share knowledge, exchange best practices, and explore emerging trends that are shaping the future of patient care.<br /><br />

                        The scientific program has been thoughtfully designed to deliver high-quality educational content through cutting-edge lectures, expert panel discussions, hands-on sessions, and inspiring keynote presentations delivered by national and international leaders in the fields of cardiology, nephrology, endocrinology, and internal medicine.<br /><br />

                        We look forward to your active participation and hope this conference will foster meaningful collaboration, drive scientific innovation, and further elevate the standards of cardiovascular and metabolic healthcare.<br/>
                    </Typography>
                </Box>
            </motion.div>
        </Container>
    );
}