import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { motion } from "framer-motion";
import { literata } from "@/lib/fonts";

function InfoCard({
  icon,
  title,
  rows,
  buttonLabel,
  buttonHref,
}: {
  icon: React.ReactNode;
  title: string;
  rows: Array<{ label: string; value: string }>;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <Card sx={{ borderRadius: 1, overflow: "hidden", boxShadow: "0 10px 30px rgba(16,24,40,0.10)" }}>
      <Box sx={{ bgcolor: "#D8CCC7", px: 2.5, py: 2 }}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              bgcolor: "#2F5E7A",
              color: "white",
              display: "grid",
              placeItems: "center",
            }}
          >
            {icon}
          </Box>
          <Typography sx={{ fontSize:25,fontWeight: 400, color: "#2F5E7A", fontFamily: `${literata.style.fontFamily}, serif`, }} className={literata.className}>{title}</Typography>
        </Stack>
      </Box>

      <CardContent sx={{ p: 3,bgcolor:"#F2F2F2" }}>
        <Stack gap={1.2}>
          {rows.map((r) => (
            <Stack key={r.label} direction="column" justifyContent="space-between" gap={.2}>
              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>{r.label}</Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 500 }}>{r.value}</Typography>
            </Stack>
          ))}
        </Stack>

        <Stack alignItems="center" sx={{ mt: 3 }}>
          <Button variant="contained" href={buttonHref} sx={{ borderRadius: 999, px: 4,fontSize:16 }} target="blank">
            {buttonLabel}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function InfoCards() {
  const googleCalendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=The%205th%20EHS%20Cardiorenal%20and%20Metabolic%20Conference" +
  "&dates=20260509T050000Z/20260510T140000Z" +
  "&details=Join%20the%205th%20EHS%20Cardiorenal%20and%20Metabolic%20Conference%20in%20Fujairah." +
  "&location=DoubleTree%20by%20Hilton%20Fujairah,%20UAE";
  return (
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Stack direction={{ xs: "column", md: "row" }} gap={3} sx={{ mt: 5 }}>
          <Box sx={{ flex: 1 }}>
            <InfoCard
              icon={<img src={"https://res.cloudinary.com/medcon-dam/image/upload/v1773726216/ehs-ckm-2026/Frontend/calander_qh2km6.png"} />}
              title="Save the Date"
              rows={[
                { label: "Starting From:", value: "9th May 2026" },
                { label: "Until:", value: "10th May 2026" },
                { label: "Duration:", value: "2 days" },
              ]}
              buttonLabel="Add to Google Calendar"
              buttonHref={googleCalendarUrl}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <InfoCard
              icon={<img src={"https://res.cloudinary.com/medcon-dam/image/upload/v1773726218/ehs-ckm-2026/Frontend/location_ft2zc8.png"}/>}
              title="Venue Location"
              rows={[
                { label: "Hotel:", value: "DoubleTree by Hilton" },
                { label: "Location:", value: "Fujairah, United Arab Emirates" },
                { label: "Region:", value: "Fujairah City" },
              ]}
              buttonLabel="View on Google Maps"
              buttonHref="https://maps.app.goo.gl/W74tnPK94eQ4g7KEA"
            />
          </Box>
        </Stack>
      </motion.div>
    </Container>
  );
}