"use client";

import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { literata } from "@/lib/fonts";

type RowItem = {
  time: string;
  topic: string;
  speaker: string;
};

type AgendaBlock =
  | { type: "rows"; rows: RowItem[] }
  | { type: "session"; title: string; chairman: string }
  | {
      type: "highlight";
      time: string;
      topic: string;
      speaker: string;
      bgColor?: string;
      textColor?: string;
    };

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
          { time: "07:45 - 08:15", topic: "Coffee Break and Registration", speaker: "ALL" },
          { time: "08:15 - 08:30", topic: "Keynote Talk", speaker: "Dr. Muhammed Alrohani" },
        ],
      },
      {
        type: "session",
        title: "Session 1: The Triple-Threat Zone",
        chairman: "Chairperson: Dr. Salem Omar, Dr. Muhammed Alrohani",
      },
      {
        type: "rows",
        rows: [
          { time: "08:30 - 08:45", topic: "The Missing Piece in Cardiorenal Metabolic Risk", speaker: "Dr. Amrish Agrawal" },
          { time: "08:45 - 09:00", topic: "Guidelines for Heart Failure in Pregnant Women", speaker: "Dr. Mohamed Salah" },
          { time: "09:00 - 09:15", topic: "Precision in Heart Failure in Pregnancy", speaker: "Dr. Abdul Nasser Oudeh" },
          { time: "09:15 - 09:30", topic: "Tenecteplase® in Acute Ischaemic Stroke (AIS)", speaker: "Dr. Enji Hamdy Elsawy" },
          { time: "09:30 - 09:40", topic: "Panel Discussion", speaker: "ALL" },
          { time: "09:40 - 09:50", topic: "Coffee Break", speaker: "ALL" },
        ],
      },
      {
        type: "highlight",
        time: "09:50 - 10:20",
        topic: "Opening Ceremony",
        speaker: "ALL",
        bgColor: "#2f5d7d",
        textColor: "#ffffff",
      },
      {
        type: "rows",
        rows: [
          { time: "10:20 - 10:35", topic: "Proteinuria & Hematuria: Differential Diagnosis", speaker: "Dr. Rayan Khojali" },
          { time: "10:35 - 10:50", topic: "Rapidly Progressing Kidney Disease: Case Presentation", speaker: "Dr. Medhat Ali" },
          { time: "10:50 - 11:05", topic: "IgA Nephropathy: Dibba Hospital Experience", speaker: "Dr. Muhammed Alrohani" },
          { time: "11:05 - 11:20", topic: "Approach to IgA Nephropathy Management Guidelines", speaker: "Dr. Ramadan Arafa" },
          { time: "11:20 - 11:30", topic: "Panel Discussion", speaker: "ALL" },
          { time: "11:30 - 12:30", topic: "Industry Satellite Symposium", speaker: "Novartis" },
          { time: "12:30 - 13:00", topic: "Prayer and Lunch Break", speaker: "ALL" },
          { time: "13:00 - 13:30", topic: "Industry Satellite Symposium", speaker: "CSL VIFOR" },
          { time: "13:30 - 13:45", topic: "CKD In Geriatrics: Challenges", speaker: "Dr. Bahaa Zayed" },
          { time: "13:45 - 14:00", topic: "Approach To Acute On Chronic Kidney Disease", speaker: "Dr. Mohammed Edan" },
          { time: "14:00 - 14:15", topic: "Individualised Diabetes Care In Dialysis-Dependent Kidney Failure: Update", speaker: "Dr. Dawlat Sany" },
          { time: "14:15 - 14:30", topic: "Role Of Aldosterone Synthase Inhibitors In Renal And Cardiovascular Diseases", speaker: "Dr. Annas Qasem" },
          { time: "14:30 - 14:40", topic: "Panel Discussion", speaker: "ALL" },
          { time: "14:40 - 15:10", topic: "Industry Satellite Symposium", speaker: "Amgen" },
          { time: "15:10 - 15:20", topic: "Coffee Break", speaker: "ALL" },
          { time: "15:20 - 15:50", topic: "Industry Satellite Symposium", speaker: "Amgen" },
        ],
      },
      {
        type: "session",
        title: "Session 2: Red Zone: Minutes Matter",
        chairman: "Chairperson:",
      },
      {
        type: "rows",
        rows: [
          { time: "15:50 - 16:05", topic: "Thyroid Disorder in Pregnancy", speaker: "Dr. Salem Omar" },
          { time: "16:05 - 16:20", topic: "Gestational Diabetes (GDM) Update", speaker: "Dr. Mohammed Babiker" },
          { time: "16:20 - 17:00", topic: "Sequential Case Discussion 1 (45 min): The Cardio-Renal Domino MDT Panel (Diab/Neph/Cardio)", speaker: "Dr. Amr ElFaramawy, Dr. Muhammed Alrohani, Dr. Amrish Agrawal" },
          { time: "17:00 - 17:15", topic: "Post-Bariatric Hypoglycaemia", speaker: "Dr. Aseilah Al Qaydi" },
        ],
      },
      {
        type: "highlight",
        time: "17:15 - 17:30",
        topic: "Closing Ceremony",
        speaker: "ALL",
        bgColor: "#2f5d7d",
        textColor: "#ffffff",
      },
    ],
  },
  {
    title: "Day 2",
    items: [
      {
        type: "rows",
        rows: [{ time: "08:00 - 08:30", topic: "Coffee Break and Registration", speaker: "ALL" }],
      },
      {
        type: "session",
        title: "Session 3: Red Zone: Minutes Matter",
        chairman: "Chairperson:",
      },
      {
        type: "rows",
        rows: [
          { time: "08:30 - 08:45", topic: "Atypical Presentation Of ACS", speaker: "Dr. Waheed Farid" },
          { time: "08:45 - 09:00", topic: "Pain Management In Unstable Patients", speaker: "Dr. Adel Almaytamy" },
          { time: "09:00 - 09:15", topic: "Emergency NIV In Adults", speaker: "Dr. Hatem Abdelkhalek" },
          { time: "09:15 - 09:30", topic: "Approach To ENT Emergencies In ED", speaker: "Dr. Wameedh AlBassam" },
          { time: "09:30 - 09:40", topic: "Panel Discussion", speaker: "ALL" },
          { time: "09:40 - 10:10", topic: "Industry Satellite Symposium", speaker: "CSL VIFOR" },
          { time: "10:10 - 10:20", topic: "Coffee Break", speaker: "ALL" },
          { time: "10:20 - 10:35", topic: "Approach To Acute Management Of Headache In ED", speaker: "Dr. Abobakr Abdelkader" },
          { time: "10:35 - 10:50", topic: "Pitfalls In ACLS Arrhythmia", speaker: "Dr. Ahmed Abdelmageed" },
          { time: "10:50 - 11:05", topic: "Critical Care Approaches To Hypertensive Crisis: When Seconds Matter", speaker: "Dr. Ghamdan Alsadeh" },
          { time: "11:05 - 11:15", topic: "Panel Discussion", speaker: "ALL" },
          { time: "11:15 - 11:30", topic: "Industry Satellite Symposium", speaker: "BI" },
          { time: "11:30 - 11:45", topic: "Industry Satellite Symposium", speaker: "AZ" },
          { time: "11:45 - 12:00", topic: "Industry Satellite Symposium", speaker: "Merck" },
          { time: "12:00 - 12:45", topic: "Prayer and Lunch Break", speaker: "ALL" },
        ],
      },
      {
        type: "session",
        title: "Session 4: The Case Arena: Connect the Dots",
        chairman: "Chairperson:",
      },
      {
        type: "rows",
        rows: [
          { time: "12:45 - 13:00", topic: "Industry Satellite Symposium", speaker: "Merck" },
          { time: "13:00 - 13:15", topic: "Physician Burn Out", speaker: "Dr. Eman Almahdi" },
          { time: "13:15 - 13:30", topic: "Insulin Therapy in Pediatric Type 1 DM", speaker: "Dr. Ammar Al Farroukh" },
          { time: "13:30 - 13:45", topic: "Metabolic Syndrome In Pregnancy", speaker: "Dr. Anaam Hasson" },
          { time: "13:45 - 14:00", topic: "IVF In Diabetic Patients", speaker: "Dr. Ahmed Mohamed" },
          { time: "14:00 - 14:15", topic: "Menopause Clinical Impact", speaker: "Dr. Hanadi Alatta" },
          { time: "14:15 - 14:30", topic: "Coffee Break", speaker: "ALL" },
          { time: "14:30 - 14:45", topic: "Aortic Dissection: When Chest Pain Is A Surgical Emergency", speaker: "Dr. Ali Muhibaldin" },
          { time: "14:45 - 15:00", topic: "Targeted Approach for Severe Eosinophil Asthma Management", speaker: "Dr. Hassan Al Hakim" },
          { time: "15:00 - 15:15", topic: "Finerenone Economical Evaluation For T2D Patients With CKD", speaker: "Dr. Sabaa Alhemyari" },
          { time: "15:15 - 15:25", topic: "Panel Discussion", speaker: "ALL" }
        ],
      },
      {
        type: "highlight",
        time: "15:25 - 16:00",
        topic: "Closing Ceremony and Appreciation Certificates",
        speaker: "ALL",
        bgColor: "#2f5d7d",
        textColor: "#ffffff",
      },
    ],
  },
];

const AGENDA_GRID = {
  xs: "0.95fr 1.9fr 1.15fr",
  md: "1.1fr 4fr 2fr",
};

function getSpecialRowStyle(topic: string) {
  const normalized = topic.trim().toLowerCase();

  if (normalized === "panel discussion") {
    return {
      bgColor: "#d8c6c0",
      textColor: "#4e6780",
      fontWeight: 600,
    };
  }

  if (
    normalized === "coffee break" ||
    normalized === "prayer and lunch break"
  ) {
    return {
      bgColor: "#cbbfda",
      textColor: "#4e6780",
      fontWeight: 600,
    };
  }

  if (
    normalized === "industry satellite symposium"
  ) {
    return {
      bgColor: "#ebe6ef",
      textColor: "#4e6780",
      fontWeight: 600,
    };
  }

  return null;
}

function HeaderRow() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: AGENDA_GRID,
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
            py: { xs: 0.8, md: 1.2 },
            px: { xs: 0.5, md: 1 },
            fontSize: { xs: 9, md: 13 },
            fontWeight: 700,
            letterSpacing: { xs: 0, md: label === "Speaker" ? 0 : 0.8 },
            textTransform: label === "Speaker" ? "none" : "uppercase",
            lineHeight: 1.15,
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  );
}

function Cell({
  children,
  align = "left",
  sx = {},
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  sx?: Record<string, any>;
}) {
  return (
    <Box
      sx={{
        px: { xs: 0.75, md: 2 },
        py: { xs: 0.8, md: 1 },
        color: "#5c748a",
        fontSize: { xs: 9.5, md: 12 },
        lineHeight: { xs: 1.25, md: 1.45 },
        bgcolor: "#fff",
        textAlign: align,
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        whiteSpace: "normal",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function AgendaRow({ row }: { row: RowItem }) {
  const specialStyle = getSpecialRowStyle(row.topic);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: AGENDA_GRID,
        borderBottom: "1px solid #ece4de",
      }}
    >
      <Cell
        align="center"
        sx={
          specialStyle
            ? {
                bgcolor: specialStyle.bgColor,
                color: specialStyle.textColor,
                fontWeight: specialStyle.fontWeight,
              }
            : {}
        }
      >
        {row.time}
      </Cell>

      <Cell
        sx={
          specialStyle
            ? {
                bgcolor: specialStyle.bgColor,
                color: specialStyle.textColor,
                fontWeight: specialStyle.fontWeight,
              }
            : {}
        }
      >
        {row.topic}
      </Cell>

      <Cell
        align="center"
        sx={
          specialStyle
            ? {
                bgcolor: specialStyle.bgColor,
                color: specialStyle.textColor,
                fontWeight: specialStyle.fontWeight,
              }
            : {}
        }
      >
        {row.speaker}
      </Cell>
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
        py: { xs: 1, md: 1.4 },
        px: { xs: 1, md: 2 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 13, md: 20 },
          fontWeight: 500,
          lineHeight: 1.2,
          wordBreak: "break-word",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 0.5,
          fontSize: { xs: 9, md: 11 },
          opacity: 0.95,
          lineHeight: 1.25,
          wordBreak: "break-word",
        }}
      >
        {chairman}
      </Typography>
    </Box>
  );
}

function HighlightRow({
  time,
  topic,
  speaker,
  bgColor = "#c9bdd7",
  textColor = "#556f84",
}: {
  time: string;
  topic: string;
  speaker: string;
  bgColor?: string;
  textColor?: string;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: AGENDA_GRID,
        borderBottom: "1px solid #ece4de",
        // my: 1,
      }}
    >
      <Cell
        align="center"
        sx={{
          bgcolor: bgColor,
          color: textColor,
          fontWeight: 600,
        }}
      >
        {time}
      </Cell>

      <Cell
        sx={{
          bgcolor: bgColor,
          color: textColor,
          fontWeight: 600,
        }}
      >
        {topic}
      </Cell>

      <Cell
        align="center"
        sx={{
          bgcolor: bgColor,
          color: textColor,
          fontWeight: 600,
        }}
      >
        {speaker}
      </Cell>
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
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "#2f5d7d",
            fontSize: { xs: 22, md: 38 },
            fontWeight: 400,
            lineHeight: 1,
            fontFamily: `${literata.style.fontFamily}, serif`,
          }}
          className={literata.className}
        >
          Agenda
        </Typography>

        <Typography
          sx={{
            color: "#2f5d7d",
            fontSize: { xs: 22, md: 38 },
            fontWeight: 400,
            lineHeight: 1,
            fontFamily: `${literata.style.fontFamily}, serif`,
          }}
          className={literata.className}
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
                time={item.time}
                topic={item.topic}
                speaker={item.speaker}
                bgColor={item.bgColor}
                textColor={item.textColor}
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
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: { xs: 2, md: 6 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            px: { xs: 1, md: 5 },
            py: { xs: 2, md: 5 },
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