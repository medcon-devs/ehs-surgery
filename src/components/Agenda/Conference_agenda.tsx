"use client";

import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { literata } from "@/lib/fonts";

type RowItem = {
  time: string;
  topic: string;
  speaker: string;
  variant?: "normal" | "break";
};

type WorkshopSection = {
  title: string;
  subtitle?: string;
  bullets?: string[];
  goldContent?: boolean;
  stations?: {
    title: string;
    bullets: string[];
  }[];
  speaker?: string;
};

type AgendaBlock =
  | { type: "rows"; rows: RowItem[] }
  | {
      type: "session";
      title: string;
      chairman?: string;
      moderator?: string;
      workshopDirectors?: string;
      color?: "navy" | "gold";
    }
  | {
      type: "workshop";
      time: string;
      topic: string;
      showDot?: boolean;
      introBullets?: string[];
      sections: WorkshopSection[];
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
          {
            time: "07:45 - 08:30",
            topic: "Registration",
            speaker: "All",
          },
        ],
      },
      {
        type: "session",
        title: "Session 1: Laser & minimally invasive Colorectal Innovation",
        chairman:
          "Chairperson: Dr. Abdulla Alblooshi",
        moderator: "Moderator: Prof. Hatem Gaafar",
      },
      {
        type: "rows",
        rows: [
          {
            time: "08:30 - 08:50",
            topic:
              "Role of Laser Technology in Surgical Management of Anorectal Disorders",
            speaker: "Dr. Mohamed Ramijyan",
          },
          {
            time: "08:50 - 09:10",
            topic:
              "Laser Hemorrhoidoplasty- the future of Hemorrhoid Surgery.",
            speaker: "Dr. Mehreen Rashed",
          },
          {
            time: "09:10 - 09:30",
            topic:
              "Diode Laser Hemorrhoidoplasty Using a Standardized Technique: A 3-Year Real-World Clinical Experience",
            speaker: "Prof. Dr. Hatem Gaafar",
          },
          {
            time: "09:30 - 10:20",
            topic: "Opening Ceremony",
            speaker: "All",
            variant: "break",
          },
          {
            time: "10:20 - 10:40",
            topic: "Coffee Break",
            speaker: "All",
            variant: "break",
          },
        ],
      },
      {
        type: "session",
        title: "Session 2: Robotic Surgery & Advanced Hernia Surgery",
        chairman:
          "Chairperson: Dr.Hatem Mussa, Dr. Muna Al-Ayyan, Prof.Dr. Mohamed Hassan",
        moderator: "Moderator: Prof. Dr. Hatem Gaafar",
      },
      {
        type: "rows",
        rows: [
          {
            time: "10:40 - 11:00",
            topic:"Pediatric Surgical Robotic experience in Al-Qassimi Women & Children Hospital New Horison",
            speaker: "Prof. Dr. Mohamed Hassan",
          },
          {
            time: "11:00 - 11:20",
            topic: "Robotic Complications and its Management.",
            speaker: "Dr.Hatem Mussa.",
          },
          {
            time: "11:20 - 11:40",
            topic:
              "Robotic Surgery: Advancing Precision, Safety & Surgical Performance",
            speaker: "Prof. Dr. Hatem Gaafar",
          },
          {
            time: "11:40 - 12:00",
            topic:
              "Subcutaneous Onlay Laparoscopic Approach (SCOLA)",
            speaker: "Dr. Basim Al Khafajee",
          },
          {
            time: "12:00 - 12:20",
            topic:
              "Laparoscopic Inguinal Hernia Extraperitoneal Repair: Is It the Gold Standard?",
            speaker: "Prof. Laurent Layani",
          },
          {
            time: "12:20 - 12:40",
            topic: "Coffee Break",
            speaker: "All",
            variant: "break",
          },
        ],
      },
      {
        type: "session",
        title:
          "Session 3: Modern Bariatric Surgery: Strategy, Technique & Complex Decision-Making",
        chairman:
          "Chairperson: Dr. Abdulwahid Alwahedi, Prof. Safwan Taha, Dr. Essa Muallemi",
        moderator: "Moderator: Dr. Abdulwahid Alwahedi",
      },
      {
        type: "rows",
        rows: [
          {
            time: "12:40 - 13:00",
            topic: "Bariatric Surgery for Extreme Obesity",
            speaker: "Prof.Dr. Safwan Taha",
          },
          {
            time: "13:00 - 13:20",
            topic: "Challenges in Bariatric Surgery.",
            speaker: "Dr. AbdelWahid Alwahidi",
          },
          {
            time: "13:20 - 13:40",
            topic: "Aborted primary bariatric surgeries",
            speaker: "Dr. Essa Muallemi",
          },
          {
            time: "13:40 - 14:00",
            topic: "Mathematics of OAGB Formation: How We Do It",
            speaker: "Prof. Laurent Layani",
          },
          {
            time: "14:00 - 14:20",
            topic:
              "Synchronous Lap Cholecystectomy & Bariatric Surgery: Added Benefit or Added Stress?",
            speaker: "Prof.Dr. Safwan Taha",
          },
          {
            time: "14:20 - 14:40",
            topic:
              "Comprehensive Review of Laparoscopic Sleeve Gastrectomy",
            speaker: "Dr. Syed Shafaat",
          },
          {
            time: "14:40 - 15:10",
            topic: "Lunch Break",
            speaker: "All",
            variant: "break",
          },
        ],
      },
      {
        type: "session",
        title:
          "Session 4: Next-Generation Surgery 2026\nEHS: Dibba-Fujairah Hospital in Collaboration with American Hospital, Dubai",
        workshopDirectors:
          "Workshop Director: Dr. Hatem Moussa",
      },
      {
        type: "workshop",
        time: "15:10 - 16:50",
        topic: "Robotic Surgery Hands-On Workshop",
        sections: [
          {
            title: "Registration & System Orientation",
            goldContent: true,
            bullets: [
              "Introduction to robotic platform",
              "Console components overview",
              "Safety briefing",
            ],
          },
          {
            title: "Session 1: Principles of Robotic Surgery",
            goldContent: true,
            bullets: [
              "Evolution of robotic surgery",
              "Indications and patient selection",
              "Port placement strategy",
              "Docking techniques",
            ],
          },
          {
            title:
              "Session 2: Hands-On Training",
            stations: [
              {
                title: "Station 1: Console Skills",
                bullets: [
                  "Camera control",
                  "Instrument clutching",
                  "Wrist articulation exercises",
                ],
              },
              {
                title: "Station 2: Robotic Suturing & Knot Tying",
                bullets: [
                  "Intracorporeal suturing drills",
                  "Needle handling precision",
                ],
              },
              {
                title: "Station 3: Simulation Lab",
                bullets: [
                  "Tissue dissection module",
                  "Haemostasis simulation",
                  "Emergency undocking protocol",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "workshop",
        time: "",
        topic: "",
        showDot: false,
        sections: [
          {
            title:
              "Session 3: Robotic Hernia Repair – Technical Masterclass",
            goldContent: true,
            bullets: [
              "Live or Recorded Robotic Case Discussion (speaker: Dr. Hatem Moussa)",
              "Step-by-step narrated procedure",
              "TAPP vs ETEP robotic approach",
              "Mesh positioning strategies",
              "Suturing techniques",
              "Avoiding complications",
            ],
          },
        ],
      },
      {
        type: "workshop",
        time: "",
        topic: "Learning Objectives:",
        showDot: false,
        sections: [
          {
            title:
              "By the end of this workshop, participants will:",
            goldContent: true,
            bullets: [
              "Understand robotic system setup and docking",
              "Demonstrate basic console skills",
              "Perform robotic suturing techniques",
              "Apply robotic principles to hernia surgery",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Day 2",
    items: [
      {
        type: "session",
        title:
          "Session 5: Acute Care Surgery & Trauma Management: Evidence –Based Approach",
        chairman:
          "Chairperson: Dr. Nafad El- hadidi, Prof. Dr. Abdelbary Hassan, Dr.Yalda Z.A.Ziaei",
        moderator: "Moderator: Dr. Abdulwahid Alwahedi",
      },
      {
        type: "rows",
        rows: [
          {
            time: "09:30 - 09:50",
            topic: "Acute Mesenteric Ischemia: How to Improve Outcome",
            speaker: "Dr. Abdel Wahid Alwahidi",
          },
          {
            time: "09:50 - 10:10",
            topic: "Spigelian Hernia: A Cause of Abdominal Pain. Case Presentation",
            speaker: "Dr. Nafad El-hadidi",
          },
          {
            time: "10:10 - 10:30",
            topic: "Radioluscent single use wrist fixator in management of complex wrist fractures",
            speaker: "Prof. Dr. Abdelbary Hassan",
          },
          {
            time: "10:30 - 10:50",
            topic: "Major Considerations of Splenic Flexure Mobilization in Laparoscopic Colorectal Surgery.",
            speaker: "Dr. Amr Arafa",
          },
          {
            time: "10:50 - 11:10",
            topic: "Expanding the Clinical Impact of Indocyanine Green in General Surgery",
            speaker: "Dr.Haidar Makki",
          },
          {
            time: "11:10 - 11:30",
            topic: "Multiple Organ Injury Following Penetrating Perineal Metal Rod Trauma",
            speaker: "Dr. Khaled Almuhtadi",
          },
          {
            time: "11:30 - 11:50",
            topic: "Head Trauma (TBIs): Indications for CT in Adults & Paediatrics",
            speaker: "Dr. Abobakr Omar",
          },
          {
            time: "11:50 - 12:10",
            topic: "Pain Management in Unstable Trauma Patients",
            speaker: "Dr. Adel Saleh AlMaytamy",
          },
          {
            time: "12:10 - 12:30",
            topic: "Coffee Break",
            speaker: "All",
            variant: "break",
          },
        ],
      },
      {
        type: "session",
        title:
          "Session 6: Advanced Wound Care & Multidisciplinary Surgical Recovery",
        chairman:
          "Chairperson: Prof. Dr. Mohamed Bagunid, Prof. Dr. Hatem Gaafar",
        moderator: "Moderator: Dr.Haidar Saeed Jalil",
      },
      {
        type: "rows",
        rows: [
          {
            time: "12:30 - 12:50",
            topic:
              "Comprehensive Infection Control Strategy in Wound Management.",
            speaker: "Dr. Haidar Saeed Jalil",
          },
          {
            time: "12:50 - 13:10",
            topic:
              "Holistic approach in wound management.",
            speaker: "Prof. Dr. Mohamed Bagunid",
          },
          {
            time: "13:10 - 13:30",
            topic:
              "When Time Won’t Heal: Cracking the Code of the Chronic Wound",
            speaker: "Dr. Salma Saeed",
          },
          {
            time: "13:30 - 13:50",
            topic:
              "Nursing Interventions to Prevent Pressure Ulcers in ICU.",
            speaker: "Ms. Manal Masoud AlNuaimi",
          },
          {
            time: "13:50 - 14:10",
            topic: "Matrix Therapy for Regenerative Medicine: CACIPLIQ20(RGTA) in the Treatment of Chronic Non- Healing Wounds.",
            speaker: "Prof. Dr. Denis Barritault",
          },
          {
            time: "14:10 - 14:30",
            topic:
              "Burn Dressing Selection",
            speaker: "Ms. Nasreen Abdelatif",
          },
          {
            time: "14:30 - 14:50",
            topic:
              'The Power of Nursing in Trauma Care "When Seconds Matter"',
            speaker: "Mr. Moyad Ahmad Wishah",
          },
          {
            time: "14:50 - 15:10",
            topic:
              "Best practice in pressure injury prevention and management.",
            speaker: "Mr. Hamza AL Shraiedeh",
          },
          {
            time: "15:10 - 15:30",
            topic:
              "AI- Drives Innovation in Modern Wound Care",
            speaker: "Ms. Aisha Mostafa Hassan",
          },
          {
            time: "15:30 - 16:00",
            topic: "Lunch Break",
            speaker: "All",
            variant: "break",
          },
        ],
      },
      {
        type: "session",
        color: "gold",
        title:
          "Session 7: Hands-On Laser Hemorrhoidoplasty Workshop ",
        workshopDirectors:
          "Workshop Directors: Prof. Hatem Gaafar, Dr. Haidar Saeed Jalil, Dr. Mohamed Ramijian",
      },
      {
        type: "workshop",
        time: "09:30 - 11:30",
        topic:
          "Practical Training in Diode Laser Applications\nRegistration & System Orientation",
        sections: [
          {
            title: "",
            bullets: [
              "Laser physics & safety principles",
              "Standardized diode laser hemorrhoidoplasty protocol",
              "Energy settings & fiber selection",
              "Case selection criteria",
              "Complication management algorithm",
              "Live or recorded Video procedural demonstration",
              "Interactive discussion & troubleshooting",
              "Q&A",
            ],
          },
        ],
      }
    ],
  },
];

const COLORS = {
  navy: "#0D2E4B",
  orange: "#E59522",
  gold: "#B98C3B",
  goldLight: "#EFCF8B",
  workshopGold: "#D6A357",
  topic: "#B38332",
  speaker: "#555555",
  rowBackground: "#FAFAFA",
  specialBackground: "#FCF6EC",
  workshopBackground: "#F4F5F6",
};

const GRID = {
  xs: "86px 22px minmax(0, 1fr)",
  sm: "112px 28px minmax(0, 1fr)",
  md: "145px 34px minmax(0, 1fr)",
};

function HeaderRow() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: GRID,
        alignItems: "center",
        mb: 1,
      }}
    >
      <Box
        sx={{
          gridColumn: 1,
          mr: 0.75,
          py: { xs: 0.75, md: 0.9 },
          borderRadius: "5px",
          color: "#fff",
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: 9, sm: 10, md: 11.5 },
          background:
            "linear-gradient(90deg,#EFD18D 0%,#B78A38 100%)",
        }}
      >
        TIME
      </Box>

      <Box />

      <Box
        sx={{
          gridColumn: 3,
          py: { xs: 0.75, md: 0.9 },
          borderRadius: "5px",
          color: "#fff",
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: 9, sm: 10, md: 11.5 },
          background:
            "linear-gradient(90deg,#B78A38 0%,#EFD18D 100%)",
        }}
      >
        TOPIC &amp; SPEAKER
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
        pt: { xs: "5px", md: "6px" },
      }}
    >
      <Box
        sx={{
          width: { xs: 8, md: 10 },
          height: { xs: 8, md: 10 },
          borderRadius: "50%",
          bgcolor: COLORS.orange,
        }}
      />
    </Box>
  );
}

function AgendaRow({ row }: { row: RowItem }) {
  const isSpecial = row.variant === "break";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: GRID,
        alignItems: "start",
        mb: { xs: 0.8, md: 1 },
        borderRadius: "5px",
        bgcolor: isSpecial
          ? COLORS.specialBackground
          : "transparent",
        py: isSpecial ? 0.5 : 0,
      }}
    >
      <Box
        sx={{
          pt: 0.25,
          pl: isSpecial ? 0.5 : 0,
          pr: 0.5,
          color: "#111",
          fontWeight: 800,
          fontSize: { xs: 10, sm: 11.5, md: 13 },
          lineHeight: 1.25,
          whiteSpace: "nowrap",
        }}
      >
        {row.time}
      </Box>

      <TimelineDot />

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            color: COLORS.topic,
            fontWeight: 700,
            fontSize: { xs: 10.5, sm: 12.5, md: 14 },
            lineHeight: 1.3,
            whiteSpace: "pre-line",
            overflowWrap: "break-word",
          }}
        >
          {row.topic}
        </Typography>

        <Typography
          sx={{
            mt: 0.3,
            px: 0.75,
            py: 0.4,
            color: COLORS.speaker,
            bgcolor: isSpecial
              ? "transparent"
              : COLORS.rowBackground,
            fontSize: { xs: 9.5, sm: 11, md: 12.5 },
            lineHeight: 1.3,
            borderRadius: "2px",
            overflowWrap: "break-word",
          }}
        >
          {row.speaker}
        </Typography>
      </Box>
    </Box>
  );
}

function SessionBar({
  title,
  chairman,
  moderator,
  workshopDirectors,
  color = "navy",
}: Extract<AgendaBlock, { type: "session" }>) {
  return (
    <Box
      sx={{
        mt: { xs: 1.1, md: 1.4 },
        mb: { xs: 0.9, md: 1.1 },
        color: "#fff",
        textAlign: "center",
        borderRadius: color === "gold" ? "5px 5px 0 0" : 0,
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          px: 1,
          py: { xs: 0.45, md: 0.55 },
          bgcolor: color === "gold" ? COLORS.workshopGold : COLORS.navy,
          fontWeight: 800,
          fontSize: { xs: 11.2, sm: 12.8, md: 14.2 },
          lineHeight: 1.2,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </Typography>

      {(chairman || moderator || workshopDirectors) && (
        <Box
          sx={{
            px: 1,
            py: { xs: 0.4, md: 0.5 },
            bgcolor: color === "gold" ? "#d9b474" : "#536b80",
          }}
        >
          {chairman && (
            <Typography sx={{ fontSize: { xs: 9.4, sm: 10.6, md: 11.8 }, lineHeight: 1.2 }}>
              {chairman}
            </Typography>
          )}
          {moderator && (
            <Typography sx={{ fontSize: { xs: 9.4, sm: 10.6, md: 11.8 }, lineHeight: 1.2 }}>
              {moderator}
            </Typography>
          )}
          {workshopDirectors && (
            <Typography
              sx={{
                fontSize: { xs: 9.4, sm: 10.6, md: 11.8 },
                lineHeight: 1.2,
                whiteSpace: "pre-line",
              }}
            >
              {workshopDirectors}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

function BulletList({
  bullets,
  gold = false,
}: {
  bullets: string[];
  gold?: boolean;
}) {
  return (
    <Stack spacing={0.1}>
      {bullets.map((bullet) => (
        <Typography
          key={bullet}
          sx={{
            color: gold ? COLORS.topic : "#333",
            fontWeight: gold ? 700 : 400,
            fontSize: { xs: 11, sm: 12.5, md: 14 },
            lineHeight: 1.3,
            "&::before": {
              content: '"• "',
              color: COLORS.orange,
            },
          }}
        >
          {bullet}
        </Typography>
      ))}
    </Stack>
  );
}

function WorkshopBlock({
  time,
  topic,
  showDot = true,
  introBullets,
  sections,
}: Extract<AgendaBlock, { type: "workshop" }>) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: GRID,
        alignItems: "start",
        mb: 1.2,
      }}
    >
      <Box
        sx={{
          pt: 0.35,
          pr: 0.5,
          color: "#111",
          fontWeight: 800,
          fontSize: { xs: 10.5, sm: 11.5, md: 14 },
          whiteSpace: "nowrap",
        }}
      >
        {time}
      </Box>

      {showDot ? <TimelineDot /> : <Box />}

      <Box
        sx={{
          minWidth: 0,
          bgcolor: COLORS.workshopBackground,
          borderRadius: "0 0 5px 5px",
          px: { xs: 1, md: 1.4 },
          pb: 1.1,
        }}
      >
        {topic && (
          <Typography
            sx={{
              pt: 0.15,
              pb: 0.55,
              borderBottom: `2px solid ${COLORS.orange}`,
              color: COLORS.topic,
              fontWeight: 800,
              fontSize: { xs: 12.5, sm: 14, md: 16 },
              lineHeight: 1.25,
              whiteSpace: "pre-line",
            }}
          >
            {topic}
          </Typography>
        )}

        {introBullets && (
          <Box sx={{ mt: 0.6 }}>
            <BulletList bullets={introBullets} />
          </Box>
        )}

        <Stack spacing={1.1} sx={{ mt: 1 }}>
          {sections.map((section, index) => (
            <Box
              key={`${section.title}-${index}`}
              sx={{
                position: "relative",
                pl: { xs: 1.4, md: 1.8 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "5px",
                  height: section.title ? "44px" : "100%",
                  background:
                    "linear-gradient(180deg,#E7C274 0%,#B78027 55%,#F5E1B3 100%)",
                },
              }}
            >
              {section.title && (
                <Typography
                  sx={{
                    mb: 0.25,
                    color: COLORS.topic,
                    fontWeight: 800,
                    fontSize: { xs: 11.5, sm: 13, md: 15.5 },
                    lineHeight: 1.25,
                  }}
                >
                  {section.title}
                </Typography>
              )}

              {section.subtitle && (
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: { xs: 11, sm: 12.5, md: 14 },
                  }}
                >
                  {section.subtitle}
                </Typography>
              )}

              {section.bullets && (
                <BulletList
                  bullets={section.bullets}
                  gold={section.goldContent}
                />
              )}

              {section.stations && (
                <Stack spacing={0.55}>
                  {section.stations.map((station) => (
                    <Box key={station.title}>
                      <Typography
                        sx={{
                          color: "#222",
                          fontWeight: 700,
                          fontSize: { xs: 11, sm: 12.5, md: 14 },
                        }}
                      >
                        {station.title}
                      </Typography>
                      <Box sx={{ pl: 1.25 }}>
                        <BulletList bullets={station.bullets} />
                      </Box>
                    </Box>
                  ))}
                </Stack>
              )}

              {section.speaker && (
                <Typography
                  sx={{
                    mt: 0.35,
                    color: "#555",
                    fontSize: { xs: 11, sm: 12.5, md: 14 },
                  }}
                >
                  {section.speaker}
                </Typography>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function AgendaDay({ title, items }: AgendaDayType) {
  return (
    <Box sx={{ mb: { xs: 5, md: 7 } }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{
          pb: 0.7,
          mb: 1,
          borderBottom: `3px solid ${COLORS.orange}`,
        }}
      >
        <Typography
          className={literata.className}
          sx={{
            color: "#111",
            fontFamily: `${literata.style.fontFamily}, serif`,
            fontWeight: 800,
            fontSize: { xs: 15, sm: 18, md: 22 },
            lineHeight: 1,
          }}
        >
          Agenda
        </Typography>

        <Typography
          className={literata.className}
          sx={{
            color: "#111",
            fontFamily: `${literata.style.fontFamily}, serif`,
            fontWeight: 800,
            fontSize: { xs: 14, sm: 17, md: 21 },
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
      </Stack>

      <HeaderRow />

      {items.map((item, index) => {
        if (item.type === "session") {
          return (
            <SessionBar
              key={`${title}-session-${index}`}
              {...item}
            />
          );
        }

        if (item.type === "workshop") {
          return (
            <WorkshopBlock
              key={`${title}-workshop-${index}`}
              {...item}
            />
          );
        }

        return (
          <React.Fragment key={`${title}-rows-${index}`}>
            {item.rows.map((row, rowIndex) => (
              <AgendaRow
                key={`${title}-${index}-${rowIndex}`}
                row={row}
              />
            ))}
          </React.Fragment>
        );
      })}
    </Box>
  );
}

function AgendaShell({ days }: { days: AgendaDayType[] }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        
        py: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
        
          width: "100%",
          // maxWidth: { xs: "100%", sm: "680px", md: "820px" },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {days.map((day) => (
          <AgendaDay
            key={day.title}
            title={day.title}
            items={day.items}
          />
        ))}
      </Container>
    </Box>
  );
}

export default function AgendaPage({ day }: { day?: 1 | 2 }) {
  const days = day ? [agendaDays[day - 1]] : agendaDays;
  return <AgendaShell days={days} />;
}
