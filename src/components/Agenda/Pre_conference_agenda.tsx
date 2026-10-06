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

type ScheduleEntry = {
  title: string;
  description?: string;
  location?: string;
};

type ScheduleRow = {
  time: string;
  entries: ScheduleEntry[];
  type?: "normal" | "break";
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

const COLORS = {
  navy: "#102F4B",
  gold: "#B88A37",
  goldLight: "#EFCF8A",
  orange: "#E4911A",
  black: "#111111",
  muted: "#777777",
  card: "#F1F1F1",
  row: "#FAFAFA",
  border: "#B7C8D5",
  radio: "#5A88A9",
  page: "#FFFFFF",
};

const SCHEDULE_GRID = {
  xs: "78px 18px minmax(0, 1fr)",
  sm: "105px 24px minmax(0, 1fr)",
  md: "122px 28px minmax(0, 1fr)",
};

const scheduleRows: ScheduleRow[] = [
  {
    time: "14:00 - 15:00",
    entries: [
      {
        title: "Business Lunch",
        location: "Location",
      },
    ],
  },
  {
    time: "15:00 - 16:30",
    entries: [
      {
        title: "Workshop 1:",
        description: "Workshop Title\nWorkshop description",
        location: "Location",
      },
      {
        title: "Workshop 2:",
        description: "Workshop Title\nWorkshop description",
        location: "Location",
      },
    ],
  },
  {
    time: "16:30 - 17:00",
    entries: [
      {
        title: "Coffee Break",
        location: "Location",
      },
    ],
    type: "break",
  },
  {
    time: "17:00 - 18:30",
    entries: [
      {
        title: "Workshop 3:",
        description: "Workshop Title\nWorkshop description",
        location: "Location",
      },
      {
        title: "Workshop 4:",
        description: "Workshop Title\nWorkshop description",
        location: "Location",
      },
    ],
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

async function authRequest<T = unknown>(
  endpoint: string,
  method: "GET" | "POST",
  body?: Record<string, unknown>
): Promise<T> {
  const token = getAccessToken();

  const response = await fetch(`${conferenceRoutes.baseUrl}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "The request could not be completed.");
  }

  return data as T;
}

function ScheduleHeader() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: SCHEDULE_GRID,
        alignItems: "center",
        mt: 1,
        mb: 0.8,
      }}
    >
      <Box
        sx={{
          gridColumn: 1,
          mr: 0.75,
          py: { xs: 0.65, md: 0.8 },
          borderRadius: "4px",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: { xs: 7.5, sm: 8.5, md: 9.5 },
          fontWeight: 800,
          lineHeight: 1,
          background:
            "linear-gradient(90deg, #EFCF8A 0%, #B88A37 100%)",
        }}
      >
        TIME
      </Box>

      <Box />

      <Box
        sx={{
          gridColumn: 3,
          py: { xs: 0.65, md: 0.8 },
          borderRadius: "4px",
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: { xs: 7.5, sm: 8.5, md: 9.5 },
          fontWeight: 800,
          lineHeight: 1,
          background:
            "linear-gradient(90deg, #B88A37 0%, #EFCF8A 100%)",
        }}
      >
        TOPIC &amp; LOCATION
      </Box>
    </Box>
  );
}

function TimelineDot() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: "5px",
      }}
    >
      <Box
        sx={{
          width: { xs: 6, sm: 7, md: 8 },
          height: { xs: 6, sm: 7, md: 8 },
          borderRadius: "50%",
          bgcolor: COLORS.orange,
          flexShrink: 0,
        }}
      />
    </Box>
  );
}

function ScheduleEntryContent({ entry }: { entry: ScheduleEntry }) {
  return (
    <Box sx={{ minWidth: 0 }}>
      <Typography
        sx={{
          color: COLORS.gold,
          fontSize: { xs: 10, sm: 10.4, md: 11.8 },
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        {entry.title}
      </Typography>

      {entry.description && (
        <Typography
          sx={{
            mt: 0.15,
            color: COLORS.gold,
            fontSize: { xs: 9, sm: 10, md: 11 },
            fontWeight: 500,
            lineHeight: 1.18,
            whiteSpace: "pre-line",
          }}
        >
          {entry.description}
        </Typography>
      )}

      {entry.location && (
        <Typography
          sx={{
            mt: 0.2,
            color: COLORS.muted,
            fontSize: { xs: 9, sm: 10, md: 11 },
            lineHeight: 1.15,
          }}
        >
          {entry.location}
        </Typography>
      )}
    </Box>
  );
}

function ScheduleTable() {
  return (
    <Box>
      <ScheduleHeader />

      <Stack spacing={0.8}>
        {scheduleRows.map((row, rowIndex) => (
          <Box
            key={`${row.time}-${rowIndex}`}
            sx={{
              display: "grid",
              gridTemplateColumns: SCHEDULE_GRID,
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                pt: 0.2,
                color: COLORS.black,
                fontSize: { xs:10, sm: 10.2, md: 11.2 },
                fontWeight: 800,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              {row.time}
            </Typography>

            <TimelineDot />

            <Box
              sx={{
                minWidth: 0,
                bgcolor:
                  row.type === "break"
                    ? "#FCF5E9"
                    : "transparent",
                borderRadius: "4px",
                px: row.type === "break" ? 0.65 : 0,
                py: row.type === "break" ? 0.35 : 0,
              }}
            >
              <Stack spacing={{ xs: 0.85, md: 1 }}>
                {row.entries.map((entry, entryIndex) => (
                  <ScheduleEntryContent
                    key={`${entry.title}-${entryIndex}`}
                    entry={entry}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </Stack>
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
        bgcolor: COLORS.card,
        borderRadius: "10px",
        px: { xs: 1.4, sm: 1.8, md: 2 },
        py: { xs: 1.4, sm: 1.7, md: 2 },
      }}
    >
      <Typography
        sx={{
          color: COLORS.black,
          textAlign: "center",
          fontSize: { xs: 10, sm: 11, md: 12.5 },
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          height: "1px",
          bgcolor: "#D5D5D5",
          my: { xs: 1, md: 1.25 },
        }}
      />

      <Stack spacing={0.7}>
        {options.map((option) => {
          const isSelected = value === option.value;

          return (
            <Box
              key={option.value}
              role="button"
              tabIndex={0}
              onClick={() => onChange(option.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onChange(option.value);
                }
              }}
              sx={{
                minHeight: { xs: 29, sm: 32, md: 34 },
                display: "flex",
                alignItems: "center",
                px: 0.5,
                border: `1px solid ${
                  isSelected ? COLORS.radio : COLORS.border
                }`,
                borderRadius: "3px",
                bgcolor: isSelected ? "#F8FBFD" : "transparent",
                cursor: "pointer",
              }}
            >
              <Radio
                checked={isSelected}
                onChange={() => onChange(option.value)}
                value={option.value}
                size="small"
                sx={{
                  p: 0.45,
                  color: COLORS.radio,
                  "&.Mui-checked": {
                    color: COLORS.radio,
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: 12, sm: 13, md: 14 },
                  },
                }}
              />

              <Typography
                sx={{
                  flex: 1,
                  pr: 2,
                  color: "#666666",
                  textAlign: "center",
                  fontSize: { xs: 10, sm: 11, md: 12.2 },
                  lineHeight: 1.2,
                }}
              >
                {option.label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
}

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
      setLoading(false);
      return;
    }

    const loadWorkshops = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await authRequest<WorkshopsResponse>(
          conferenceRoutes.confrence.pre,
          "GET"
        );

        const optionOne =
          response?.data?.option_1 ?? response?.option_1 ?? "";

        const optionTwo =
          response?.data?.option_2 ?? response?.option_2 ?? "";

        setSlotOne(
          firstSlotOptions.some(
            (option) => option.value === optionOne
          )
            ? optionOne
            : ""
        );

        setSlotTwo(
          secondSlotOptions.some(
            (option) => option.value === optionTwo
          )
            ? optionTwo
            : ""
        );
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Unable to load your workshop selections."
        );
      } finally {
        setLoading(false);
      }
    };

    loadWorkshops();
  }, []);

  const handleBookNow = async () => {
    const token = getAccessToken();

    if (!token) {
      router.replace("/register");
      return;
    }

    if (!slotOne && !slotTwo) {
      setSuccess("");
      setError("Please select one workshop from each time slot.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      await authRequest(conferenceRoutes.confrence.pre, "POST", {
        option_1: slotOne,
        option_2: slotTwo,
      });

      setSuccess("Your workshop selections have been saved.");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to save your workshop selections."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ bgcolor: COLORS.page, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 8,
            }}
          >
            <CircularProgress
              size={30}
              sx={{ color: COLORS.gold }}
            />
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        bgcolor: COLORS.page,
        py: { xs: 2.5, sm: 3.5, md: 5 },
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          width: "100%",
          // maxWidth: {
          //   xs: "100%",
          //   sm: "620px",
          //   md: "720px",
          // },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            color: COLORS.black,
            fontSize: { xs: 15, sm: 18, md: 21 },
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Pre-Conference Workshop Schedule
        </Typography>

        <Typography
          sx={{
            mt: 0.35,
            color: "#404040",
            fontSize: { xs: 7, sm: 8.2, md: 13.2 },
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          Day, October 09, 2026 | 15:00 - 18:30
        </Typography>

        <Box
          sx={{
            height: "3px",
            bgcolor: COLORS.orange,
            mt: 1.1,
          }}
        />

        <ScheduleTable />

        <Box
          sx={{
            height: "3px",
            bgcolor: COLORS.navy,
            mt: { xs: 2.5, md: 3.5 },
            mb: { xs: 1.8, md: 2.2 },
          }}
        />

        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 1.5,
              py: 0,
              fontSize: { xs: 9, md: 11 },
            }}
          >
            {error}
          </Alert>
        )}

        {success && (
          <Alert
            severity="success"
            sx={{
              mb: 1.5,
              py: 0,
              fontSize: { xs: 9, md: 11 },
            }}
          >
            {success}
          </Alert>
        )}

        <Typography
          sx={{
            color: COLORS.black,
            fontSize: { xs: 13, sm: 15, md: 17 },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: { xs: 1.5, md: 2 },
          }}
        >
          Book Your Chosen Workshops
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            maxWidth: "100%",
          }}
        >
          <WorkshopCard
            title="15:00 - 16:30"
            value={slotOne}
            options={firstSlotOptions}
            onChange={setSlotOne}
          />

          <WorkshopCard
            title="17:00 - 18:30"
            value={slotTwo}
            options={secondSlotOptions}
            onChange={setSlotTwo}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2.5, md: 3.5 },
          }}
        >
          <Button
            onClick={handleBookNow}
            disabled={saving}
            variant="contained"
            sx={{
              minWidth: { xs: 120, md: 145 },
              minHeight: { xs: 30, md: 35 },
              px: 3,
              borderRadius: 999,
              color: "#FFFFFF",
              background:
                "linear-gradient(90deg, #B98A33 0%, #E8C47A 100%)",
              boxShadow: "none",
              textTransform: "none",
              fontSize: { xs: 8.5, sm: 9.5, md: 10.5 },
              fontWeight: 800,
              "&:hover": {
                background:
                  "linear-gradient(90deg, #AA7D2C 0%, #DBB96D 100%)",
                boxShadow: "none",
              },
              "&.Mui-disabled": {
                color: "rgba(255,255,255,0.75)",
                background:
                  "linear-gradient(90deg, #BFA36E 0%, #D9C59C 100%)",
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