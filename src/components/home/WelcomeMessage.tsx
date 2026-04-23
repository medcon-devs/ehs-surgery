import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { literata } from "@/lib/fonts";

function ProfileCard({
  image,
  name,
  role,
  imageWidth = 180,
  imageTop = -58,
}: {
  image: string;
  name: string;
  role: string;
  imageWidth?: number;
  imageTop?: number;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 590,
      }}
    >
      <Box
        sx={{
          bgcolor: "#F5F3F1",
          borderRadius: "22px",
          px: 2.5,
          pt: 3,
          pb: 1.8,
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
          position: "relative",
          minHeight: 255,
          mt: 5,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: imageWidth,
            maxWidth: "100%",
            objectFit: "contain",
            mx: "auto",
            display: "block",
            position: "absolute",
            top: imageTop,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Box sx={{ pt: 19 }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 18, md: 19 },
              color: "#2F2F2F",
              lineHeight: 1.2,
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 12,
              color: "#315A7B",
              lineHeight: 1.5,
              mt: 0.5,
            }}
          >
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function WelcomeMessage() {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Box sx={{ mt: 4 }}>
          <Divider
            sx={{
              mb: 3,
              borderColor: "#315A7B",
              borderBottomWidth: 5,
            }}
          />

          <Typography
            variant="h4"
            className={literata.className}
            sx={{
              fontWeight: 600,
              color: "#2F5E7A",
              mb: 3,
              fontFamily: `${literata.style.fontFamily}, serif`,
            }}
          >
            Welcome Message
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 2 }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Left side text */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography
                sx={{
                  color: "#4A4A4A",
                  lineHeight: 1.75,
                  fontSize: { xs: 16, md: 15 },
                  textAlign: "left",
                  maxWidth: 590,
                }}
              >
                On behalf of the Organizing and Scientific Committee, it is our
                great honor to extend a warm welcome to you to The 5th EHS
                Cardiorenal and Metabolic Conference, chaired by Dr. Muhamed Al
                Rohani, MD, Head of the Medical Department at Dibba Hospital,
                and Chairman of the Organizing Committee.
                <br />
                <br />
                This distinguished event will take place on May 9–10, 2026, at
                DoubleTree by Hilton Fujairah City Hotel.
                <br />
                <br />
                Now in its fifth edition, this conference continues its mission
                to advance cardiovascular and metabolic healthcare across the
                region. It brings together leading clinicians, researchers,
                academicians, and healthcare innovators to share knowledge,
                exchange best practices, and explore emerging trends that are
                shaping the future of patient care.
                <br />
                <br />
                The scientific program has been thoughtfully designed to deliver
                high-quality educational content through cutting-edge lectures,
                expert panel discussions, hands-on sessions, and inspiring
                keynote presentations delivered by national and international
                leaders in the fields of cardiology, nephrology, endocrinology,
                and internal medicine.
                <br />
                <br />
                We look forward to your active participation and hope this
                conference will foster meaningful collaboration, drive
                scientific innovation, and further elevate the standards of
                cardiovascular and metabolic healthcare.
              </Typography>
            </Box>

            {/* Right side cards */}
            <Stack
              spacing={4}
              sx={{
                width: { xs: "100%", sm: 320, md: 400 },
                flexShrink: 0,
                alignItems: "center",
                mt: { xs: 2, },
              }}
            >
              <ProfileCard
                image="https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776249349/ehs-ckm-2026/Frontend/Group_457_gjccnv.png"
                name="Dr. Wedad Mohammed Al Fard"
                role="Director of Dibba Hospital"
                imageWidth={195}
                imageTop={-58}
              />

              <ProfileCard
                image="https://res.cloudinary.com/medcon-dam/image/upload/v1773726216/ehs-ckm-2026/Frontend/chairperson_fg0wif.png"
                name="Dr. Muhamed Al Rohani, MD"
                role="Conference Chairperson"
                imageWidth={215}
                imageTop={-58}
              />
            </Stack>
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
}