"use client";

import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type RowItem = {
  time: string;
  topic: string;
  speaker: string;
};

type AgendaBlock =
  | { type: "rows"; rows: RowItem[] }
  | { type: "session"; title: string; chairman: string }
  | { type: "highlight"; title: string; speaker: string };

type AgendaDayType = {
  title: string;
  items: AgendaBlock[];
};

const agendaDays: AgendaDayType[] = [
  {
    title: "Day 1",
    items: [
      {
        type: "rows",
        rows: [
          { time: "07:45 - 08:15", topic: "Registration", speaker: "ALL" },
          { time: "08:15 - 08:30", topic: "Keynote Talk", speaker: "Dr. Muhammed Alrohani" },
        ],
      },
      {
        type: "session",
        title: "Session 1: The Triple-Threat Zone",
        chairman: "Chairman: Dr. Salam Omar, Dr. Muhammed Alrohani",
      },
      {
        type: "rows",
        rows: [
          { time: "08:30 - 09:00", topic: "IgA Nephropathy: Dialysis Hospital Experience", speaker: "Dr. Muhammed Alrohani" },
          { time: "09:00 - 09:30", topic: "Proteinuria & Hematuria: Differential Diagnosis", speaker: "Dr. Rayan Kamal Babiker Khogali" },
          { time: "09:30 - 10:00", topic: "Approach to Acute on Chronic Kidney Disease", speaker: "Dr. Mohammed Edan" },
          { time: "10:00 - 10:05", topic: "Panel Discussion", speaker: "ALL" },
          { time: "10:05 - 10:30", topic: "Coffee Break", speaker: "ALL" },
        ],
      },
      {
        type: "highlight",
        title: "10:30 - 10:50   Opening Ceremony",
        speaker: "ALL",
      },
      {
        type: "rows",
        rows: [
          { time: "10:50 - 11:20", topic: "AGN in Pediatrics", speaker: "Dr. Ezz Al Ali Taher" },
          { time: "11:20 - 11:50", topic: "Approached to IgA Nephropathy Management Guidelines", speaker: "Dr. Ramadan Arafia" },
          { time: "11:50 - 12:20", topic: "Individualised Diabetes Care in Dialysis-dependent Kidney Failure: Update", speaker: "Dr. Dawlat Hussein Samy" },
          { time: "12:20 - 12:50", topic: "CKD in Geriatrics: Challenges", speaker: "Dr. Bahia Zayed" },
          { time: "12:50 - 13:20", topic: "Role of Aldosterone Synthase Inhibitors in Renal and Cardiovascular Disease", speaker: "Dr. Annas Qasem" },
          { time: "13:20 - 13:25", topic: "Panel Discussion", speaker: "ALL" },
          { time: "13:25 - 13:30", topic: "Prayer Break", speaker: "ALL" },
        ],
      },
      {
        type: "session",
        title: "Session 2: Red Zone: Minutes Matter",
        chairman: "Chairman:",
      },
      {
        type: "rows",
        rows: [
          { time: "13:30 - 14:00", topic: "Atypical Presentation of ACS", speaker: "Dr. Waheed Farid" },
          { time: "14:00 - 14:30", topic: "Pain Management in Unstable Patients", speaker: "Dr. Adel Al Maytamy" },
          { time: "14:30 - 15:00", topic: "Emergency NIV in Adults", speaker: "Dr. Hatem Mohamed Gamaleldin Abdelhalek" },
          { time: "15:00 - 15:30", topic: "Approach to ENT Emergencies in ED", speaker: "Dr. Waheedh Munjid AlBassam" },
          { time: "15:30 - 16:00", topic: "Approach to Acute Management of Headache in ED", speaker: "Dr. Abobakr Hassan Omar Abdelkader" },
          { time: "16:00 - 16:30", topic: "Pitfalls in ACLS Arrhythmia", speaker: "Dr. Ahmed Abdelnageed" },
          { time: "16:30 - 17:00", topic: "Paradigm Shift in Ischemic Stroke (Emergency)", speaker: "Dr. Abdela Elbahnasy" },
          { time: "17:00 - 17:30", topic: "Critical Care Approach to Hypertensive Crisis: When Seconds Matter", speaker: "Dr. Germdan" },
          { time: "17:30 - 17:45", topic: "Company lecture", speaker: "ALL" },
          { time: "17:45 - 18:00", topic: "Panel Discussion", speaker: "ALL" },
        ],
      },
      {
        type: "highlight",
        title: "18:00 onwards   Closing and Lunch",
        speaker: "ALL",
      },
    ],
  },
  {
    title: "Day 2",
    items: [
      {
        type: "rows",
        rows: [{ time: "08:00 - 08:15", topic: "Registration", speaker: "ALL" }],
      },
      {
        type: "session",
        title: "Session 3: Her Health: The Turning Point",
        chairman: "Chairman:",
      },
      {
        type: "rows",
        rows: [
          { time: "08:15 - 08:45", topic: "Thyroid Disorder in Pregnancy", speaker: "Dr. Salam Omar" },
          { time: "08:45 - 09:15", topic: "Gestational Diabetes (GDM) Update", speaker: "Dr. Mohammed Babiker" },
          { time: "09:15 - 09:45", topic: "High-risk Pregnancy and Convenient in Pregnancy", speaker: "Dr. Atif Bashir Eltayeb" },
          { time: "09:45 - 10:15", topic: "Menopause Clinical Impact", speaker: "Dr. Hanadi Abbas Widadallah Alatta" },
          { time: "10:15 - 10:20", topic: "Panel Discussion", speaker: "ALL" },
          { time: "10:20 - 10:40", topic: "Coffee Break", speaker: "ALL" },
          { time: "10:40 - 11:10", topic: "Guideline of Heart Failure in Pregnancy Women", speaker: "Dr. Mohamed Salah Meselly Osman" },
          { time: "11:10 - 11:40", topic: "Precision in Heart Failure in Pregnancy", speaker: "Dr. Abdul Nasser Oudeh" },
          { time: "11:40 - 12:00", topic: "—", speaker: "—" },
          { time: "12:00 - 12:30", topic: "—", speaker: "—" },
          { time: "12:30 - 12:35", topic: "Panel Discussion", speaker: "ALL" },
          { time: "12:35 - 12:45", topic: "Prayer Break", speaker: "ALL" },
        ],
      },
      {
        type: "session",
        title: "Session 4: The Case Arena: Connect the Dots",
        chairman: "Chairman:",
      },
      {
        type: "rows",
        rows: [
          { time: "12:45 - 13:15", topic: "Physician Burn Out", speaker: "Dr. Eman Elmahdi" },
          { time: "13:15 - 13:45", topic: "Insulin Therapy in Pediatric Type 1 DM", speaker: "Dr. Ammar Al Yarrouh" },
          { time: "13:45 - 14:15", topic: "Aortic Dissection: When Chest Pain is a Surgical Emergency", speaker: "Dr. Ali Muhaidin" },
          { time: "14:15 - 14:45", topic: "Targeted Approached for Clever Eosinophilic Asthma Management", speaker: "Dr. Hassan Al Hakim" },
          { time: "14:45 - 15:15", topic: "Sequential Case Discussion I (45 min): The Cardio-Renal Domino", speaker: "MDT Panel (Diala/Neph/Cardio)" },
          { time: "15:15 - 15:45", topic: "—", speaker: "—" },
          { time: "15:45 - 16:10", topic: "Bayer Company", speaker: "—" },
          { time: "16:10 - 17:00", topic: "Boehringer Ingelheim Company", speaker: "—" },
          { time: "17:00 - 17:10", topic: "Panel Discussion", speaker: "ALL" },
        ],
      },
      {
        type: "highlight",
        title: "17:10 onwards   Closing and Lunch",
        speaker: "ALL",
      },
    ],
  },
];

function HeaderRow() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.1fr 4fr 2fr" },
        gap: "2px",
        mb: 1,
      }}
    >
      {["TIME", "TOPIC", "Speaker"].map((label) => (
        <Box
          key={label}
          sx={{
            bgcolor: "#d8cdc6",
            color: "#496987",
            textAlign: "center",
            py: 1.2,
            fontSize: { xs: 12, md: 13 },
            fontWeight: 700,
            letterSpacing: label === "Speaker" ? 0 : 0.8,
            textTransform: label === "Speaker" ? "none" : "uppercase",
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 2 },
        py: 1,
        color: "#5c748a",
        fontSize: { xs: 11, md: 12 },
        lineHeight: 1.45,
        bgcolor: "#fff",
      }}
    >
      {children}
    </Box>
  );
}

function AgendaRow({ row }: { row: RowItem }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.1fr 4fr 2fr" },
        borderBottom: "1px solid #ece4de",
      }}
    >
      <Cell>{row.time}</Cell>
      <Cell>{row.topic}</Cell>
      <Cell>{row.speaker}</Cell>
    </Box>
  );
}

function SessionBar({ title, chairman }: { title: string; chairman: string }) {
  return (
    <Box
      sx={{
        mt: 1.5,
        mb: 1,
        bgcolor: "#2f5d7d",
        color: "#fff",
        textAlign: "center",
        py: 1.4,
        px: 2,
      }}
    >
      <Typography sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 500, lineHeight: 1.2 }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 0.5, fontSize: { xs: 10, md: 11 }, opacity: 0.95 }}>
        {chairman}
      </Typography>
    </Box>
  );
}

function HighlightRow({ title, speaker }: { title: string; speaker: string }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "5.1fr 2fr" },
        gap: "2px",
        my: 1.5,
      }}
    >
      <Box
        sx={{
          bgcolor: "#c9bdd7",
          color: "#556f84",
          px: 2,
          py: 1,
          fontSize: { xs: 11, md: 12 },
          fontWeight: 500,
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          bgcolor: "#c9bdd7",
          color: "#556f84",
          px: 2,
          py: 1,
          fontSize: { xs: 11, md: 12 },
          fontWeight: 500,
        }}
      >
        {speaker}
      </Box>
    </Box>
  );
}

function AgendaDay({ title, items }: AgendaDayType) {
  return (
    <Box sx={{ mb: 8 }}>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{
          borderBottom: "4px solid #c9bdd7",
          pb: 1,
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            color: "#2f5d7d",
            fontSize: { xs: 24, md: 38 },
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Agenda
        </Typography>

        <Typography
          sx={{
            color: "#2f5d7d",
            fontSize: { xs: 24, md: 38 },
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
      </Stack>

      <HeaderRow />

      <Box>
        {items.map((item, index) => {
          if (item.type === "session") {
            return (
              <SessionBar
                key={`${title}-session-${index}`}
                title={item.title}
                chairman={item.chairman}
              />
            );
          }

          if (item.type === "highlight") {
            return (
              <HighlightRow
                key={`${title}-highlight-${index}`}
                title={item.title}
                speaker={item.speaker}
              />
            );
          }

          return (
            <React.Fragment key={`${title}-rows-${index}`}>
              {item.rows.map((row, rowIndex) => (
                <AgendaRow key={`${title}-row-${index}-${rowIndex}`} row={row} />
              ))}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}

export default function AgendaPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            // bgcolor: "#fff",
            // borderRadius: 4,
            px: { xs: 2, md: 5 },
            py: { xs: 3, md: 5 },
            boxShadow: "0 18px 60px rgba(31, 41, 55, 0.08)",
          }}
        >
          {agendaDays.map((day) => (
            <AgendaDay key={day.title} title={day.title} items={day.items} />
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
