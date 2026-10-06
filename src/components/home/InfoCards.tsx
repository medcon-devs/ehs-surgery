import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  icon: string;
  title: string;
  rows: Array<{ label: string; value: ReactNode }>;
  buttonLabel: string;
  buttonHref: string;
};

function InfoCard({ icon, title, rows, buttonLabel, buttonHref }: CardProps) {
  return (
    <Box sx={{ flex: 1, bgcolor: "#f4f4f4", borderRadius: "24px", overflow: "hidden", minHeight: 350, display: "flex", flexDirection: "column" }}>
      <Stack direction="row" alignItems="center" gap={2} sx={{ bgcolor: "#102f4c", px: 2.5, py: 2.1, color: "#fff" }}>
        <Box component="img" src={icon} alt="" sx={{ width: 48, height: 48 }} />
        <Typography sx={{ fontSize: { xs: 22, md: 27 }, fontWeight: 800 }}>{title}</Typography>
      </Stack>
      <Stack sx={{ p: 3.5, flex: 1, textAlign: "center" }} gap={2}>
        {rows.map((row) => (
          <Box key={row.label}>
            <Typography sx={{ fontSize: 15, fontWeight: 800 }}>{row.label}</Typography>
            <Typography sx={{ fontSize: 14, color: "#444" }}>{row.value}</Typography>
          </Box>
        ))}
        <Button
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: "auto",
            alignSelf: "center",
            minWidth: "82%",
            borderRadius: 999,
            py: 0.8,
            color: "#fff",
            fontSize: 17,
            fontWeight: 800,
            textTransform: "none",
            background: "linear-gradient(90deg, #ae7e29 0%, #f0cd82 100%)",
          }}
        >
          {buttonLabel}
        </Button>
      </Stack>
    </Box>
  );
}

export default function InfoCards() {
  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=1st%20EHS%20Next%20Generation%20Surgery%20Conference&dates=20261010T050000Z%2F20261011T140000Z&location=InterContinental%20Hotel%20-%20Events%20Center%2C%20Fujairah%2C%20UAE";

  return (
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3} sx={{ mt: 6 }}>
          <InfoCard
            icon="https://res.cloudinary.com/medcon-dam/image/upload/v1785148773/EHS-surgery-conference/datesurgery_le7fn1.png"
            title="Save the Date"
            rows={[
              { label: "Starting From:", value: <>October 10<sup>th</sup>, 2026</> },
              { label: "Until:", value: <>October 11<sup>th</sup>, 2026</> },
              { label: "Duration:", value: "2 days" },
            ]}
            buttonLabel="Add to Calendar"
            buttonHref={calendarUrl}
          />
          <InfoCard
            icon="https://res.cloudinary.com/medcon-dam/image/upload/v1785148774/EHS-surgery-conference/locationsurgery_ynetmw.png"
            title="Venue Location"
            rows={[
              { label: "Hotel:", value: "InterContinental Hotel - Events Center" },
              { label: "Location:", value: "Fujairah, United Arab Emirates" },
              { label: "Region:", value: "Fujairah City" },
            ]}
            buttonLabel="View on Google Maps"
            buttonHref="https://www.google.com/maps/search/?api=1&query=InterContinental+Fujairah+Resort"
          />
        </Stack>
      </motion.div>
    </Container>
  );
}
