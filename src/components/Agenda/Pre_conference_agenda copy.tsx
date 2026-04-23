"use client";

import * as React from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { conferenceRoutes } from "@/lib/conference-routes";
import { literata } from "@/lib/fonts";


type ScheduleRow = {
  time: string;
  topic: React.ReactNode;
  location: React.ReactNode;
};

type WorkshopOption = {
  value: string;
  label: string;
};

type WorkshopsResponse = {
  status_code?: number;
  status?: boolean;
  message?: string;
  data?: {
    option_1?: string | null;
    option_2?: string | null;
  };
  option_1?: string | null;
  option_2?: string | null;
};

const ACCESS_TOKEN_KEY = "accessToken";

const scheduleRows: ScheduleRow[] = [
  {
    time: "2:00 – 2:30 PM",
    topic: "Business Lunch",
    location: "—",
  },
  {
    time: "3:00 – 4:30 PM",
    topic: (
      <>
        <Typography sx={{ fontSize: 15, color: "#355E80", mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 400 }}>
            Workshop 1:
          </Box>
          <br />
          The CKM Shift: Integrated Management of Cardio-Kidney-Metabolic Risk
          Applying CKM pathways in clinical decisions with real patient cases.
        </Typography>

        <Typography sx={{ fontSize: 15, color: "#355E80", mt: 2 }}>
          <Box component="span" sx={{ fontWeight: 400 }}>
            Workshop 2:
          </Box>
          <br />
          Prediabetes in Focus: Screening, Risk Scoring &amp; Intervention Strategies
          Translating preventive guidelines into frontline practice.
        </Typography>
      </>
    ),
    location: (
      <>
        <Typography sx={{ fontSize: 15, color: "#355E80", mb: 6 }}>Jais A</Typography>
        <Typography sx={{ fontSize: 15, color: "#355E80" }}>Jais B</Typography>
      </>
    ),
  },
  {
    time: "4:30 – 5:00 PM",
    topic: "Coffee Break",
    location: "—",
  },
  {
    time: "5:00 – 6:30 PM",
    topic: (
      <>
        <Typography sx={{ fontSize: 15, color: "#355E80", mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 400 }}>
            Workshop 3:
          </Box>
          <br />
          Insulin Inertia: Overcoming Hesitation, Building Confidence
          Practical, case-based workshop on initiating and adjusting insulin in T2D
          patients.
        </Typography>

        <Typography sx={{ fontSize: 15, color: "#355E80", mt: 2 }}>
          <Box component="span" sx={{ fontWeight: 400 }}>
            Workshop 4:
          </Box>
          <br />
          CGM &amp; Digital Tools in Practice: Data-Driven Care Beyond T1D
          Maximizing CGM value for patient education, monitoring, and therapy
          adjustments.
        </Typography>
      </>
    ),
    location: (
      <>
        <Typography sx={{ fontSize: 15, color: "#355E80", mb: 6 }}>Jais A</Typography>
        <Typography sx={{ fontSize: 15, color: "#355E80" }}>Jais B</Typography>
      </>
    ),
  },
];

const firstSlotOptions: WorkshopOption[] = [
  { value: "Workshop 1", label: "Workshop 1" },
  { value: "Workshop 2", label: "Workshop 2" },
];

const secondSlotOptions: WorkshopOption[] = [
  { value: "Workshop 3", label: "Workshop 3" },
  { value: "Workshop 4", label: "Workshop 4" },
];

function getAccessToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

async function authRequest<T = any>(
  endpoint: string,
  method: "GET" | "POST",
  body?: Record<string, any>
): Promise<T> {
  const token = getAccessToken();

  const response = await fetch(
    `${conferenceRoutes.baseUrl}/${endpoint}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    }
  );

  return response.json();
}

function TableHeader() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.1fr 3fr 1.2fr" },
        gap: "6px",
        mt: 2,
      }}
    >
      {[{ label: "TIME" }, { label: "TOPIC" }, { label: "LOCATION" }].map((item) => (
        <Box
          key={item.label}
          sx={{
            bgcolor: "#d3c8c2",
            color: "#315D7C",
            textAlign: "center",
            py: 1.6,
            fontSize: { xs: 18, md: 20 },
            fontWeight: 500,
          }}
        >
          {item.label}
        </Box>
      ))}
    </Box>
  );
}

function ScheduleTable() {
  return (
    <Box>
      <Box sx={{ height: 6, bgcolor: "#cbbfda", mb: 1.2 }} />
      <TableHeader />

      <Box sx={{ mt: 1 }}>
        {scheduleRows.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 3fr 1.2fr" },
              borderBottom: "1px solid #e2dcd8",
            }}
          >
            <Box sx={cellSx}>{row.time}</Box>
            <Box sx={cellSx}>{row.topic}</Box>
            <Box sx={cellSxCenter}>{row.location}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function WorkshopCard({
  title,
  value,
  options,
  onChange,
}: {
  title: string;
  value: string;
  options: WorkshopOption[];
  onChange: (value: string) => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#eeeded",
        borderRadius: 1,
        px: { xs: 2, md: 3.5 },
        py: { xs: 2.5, md: 3 },
        minHeight: 270,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#3a3a3a",
          fontSize: { xs: 24, md: 28 },
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ height: 2, bgcolor: "#b8c4cf", my: 3 }} />

      <Stack spacing={2.2}>
        {options.map((option) => (
          <Box
            key={option.value}
            onClick={() => onChange(option.value)}
            sx={{
              border: "1px solid #8ea6ba",
              borderRadius: 1.5,
              minHeight: 54,
              px: 1.5,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              bgcolor: "transparent",
            }}
          >
            <Radio
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              value={option.value}
              sx={{
                color: "#315D7C",
                "&.Mui-checked": {
                  color: "#315D7C",
                },
              }}
            />
            <Typography
              sx={{
                flex: 1,
                textAlign: "center",
                mr: 4,
                color: "#3c3c3c",
                fontSize: 17,
                fontWeight: 400,
              }}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

const cellSx = {
  px: { xs: 1.5, md: 2.5 },
  py: 2.2,
  color: "#355E80",
  fontSize: { xs: 14, md: 15 },
  lineHeight: 1.35,
};

const cellSxCenter = {
  ...cellSx,
  textAlign: "center",
};

export default function PreConferenceWorkshopComponent() {
  const router = useRouter();
  const [slotOne, setSlotOne] = React.useState("");
  const [slotTwo, setSlotTwo] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  React.useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      // router.replace("/register");
      setLoading(false);
      return;
    }

    const loadWorkshops = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await authRequest<WorkshopsResponse>(
          conferenceRoutes.confrence.pre,
          "GET"
        );

        const option1 = res?.data?.option_1 ?? res?.option_1 ?? "";
        const option2 = res?.data?.option_2 ?? res?.option_2 ?? "";

        if (firstSlotOptions.some((item) => item.value === option1)) {
          setSlotOne(option1);
        } else {
          setSlotOne("");
        }

        if (secondSlotOptions.some((item) => item.value === option2)) {
          setSlotTwo(option2);
        } else {
          setSlotTwo("");
        }
      } catch {
        setError("Unable to load your workshop selections.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkshops();
  }, [router]);

  const handleBookNow = async () => {
    const token = getAccessToken();

    if (!token) {
      router.replace("/register");
      return;
    }
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      await authRequest(conferenceRoutes.confrence.pre, "POST", {
        option_1: slotOne || null,
        option_2: slotTwo || null,
      });

      setSuccess("Your workshop selections have been saved.");
    } catch {
      setError("Unable to save your workshop selections.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ bgcolor: "#f7f6f6", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md" sx={{ maxWidth: "860px !important" }}>
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "#315D7C" }} />
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f7f6f6", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md" sx={{ maxWidth: "860px !important" }}>
        <Typography
          sx={{
            color: "#315D7C",
            fontSize: { xs: 28, md: 38 },
            fontWeight: 400,
            lineHeight: 1.1,
            fontFamily: `${literata.style.fontFamily}, serif`,
          }}
          className={literata.className}
        >
          Pre-Conference Workshop Schedule
        </Typography>

        <Typography
          sx={{
            color: "#315D7C",
            fontSize: { xs: 20, md: 21 },
            fontWeight: 400,
            mt: 0.5,
            mb: 2,
          }}
        >
          Friday, April 17, 2026 3:00 PM - 6.30 PM
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

        <ScheduleTable />

        <Box sx={{ height: 7, bgcolor: "#315D7C", mt: 3, mb: 4.5 }} />

        <Typography
          sx={{
            color: "#315D7C",
            fontSize: { xs: 30, md: 36 },
            fontWeight: 400,
            mb: 3,
            fontFamily: `${literata.style.fontFamily}, serif`,
          }}
          className={literata.className}
        >
          Book your chosen workshops
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          <WorkshopCard
            title="3:00 – 4:30 PM"
            value={slotOne}
            options={firstSlotOptions}
            onChange={setSlotOne}
          />

          <WorkshopCard
            title="5:00 – 6:30 PM"
            value={slotTwo}
            options={secondSlotOptions}
            onChange={setSlotTwo}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            onClick={handleBookNow}
            disabled={saving}
            variant="contained"
            sx={{
              minWidth: 240,
              height: 54,
              borderRadius: 999,
              bgcolor: "#315D7C",
              boxShadow: "none",
              textTransform: "none",
              fontSize: 21,
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#294f6a",
                boxShadow: "none",
              },
            }}
          >
            {saving ? "Saving..." : "Book Now"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}