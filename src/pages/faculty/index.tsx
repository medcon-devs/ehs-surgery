import Layout from "@/components/layout/Layout";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { literata } from "@/lib/fonts";



type FacultyMember = {
  name: string;
  titleLines: string[];
};

const facultyLeft: FacultyMember[] = [
  {
    name: "Dr. Abdel Wahid Alwahidi",
    titleLines: [
      "Consultant General and Bariatric Surgeon",
      "University Hospital Sharjah",
    ],
  },
  {
    name: "Prof. Abdelbary Hassan",
    titleLines: [
      "Consultant Orthopedic Surgeon",
      "Dibba Hospital, EHS",
    ],
  },
  {
    name: "Dr. Abdalla Albloushi",
    titleLines: [
      "Consultant General Surgeon & Director of Khorfakkan Hospital EHS",
    ],
  },
  {
    name: "Dr. Abobakr Omar",
    titleLines: [
      "Head of Emergency Department",
      "Dibba Hospital",
    ],
  },
  {
    name: "Dr. Adel AlMaytamy",
    titleLines: [
      "Consultant Anesthesiologist",
      "Dibba Hospital",
    ],
  },
  {
    name: "Dr. Amr Arafa",
    titleLines: [
      "Consultant General and Bariatric Surgeon",
      "Amina Hospital",
    ],
  },
  {
    name: "Ms. Aisha Mostafa",
    titleLines: [
      "Charge Nurse/Wound Management",
      "Sheikh Khalifa Hospital Fujairah",
    ],
  },
  {
    name: "Dr Basem AlKhafaji",
    titleLines: [
      "Consultant Laparoscopic and Robotic",
      "General and Bariatric Surgeon",
      "Canadian Specialist Hospital",
    ],
  },
  {
    name: "Dr. Essa Muallemi",
    titleLines: [
      "General and Bariatric Surgery Consultant",
      "MOHAP/ EHS",
    ],
  },
  {
    name: "Prof. Dr. Hatem Gaafar",
    titleLines: [
      "Professor and Consultant of Surgery",
      "Dibba Hospital, Emirates Health Services",
    ],
  },
  {
    name: "Dr. Hatem Moussa",
    titleLines: [
      "Chief of Robotic Surgery Center of Excellence",
      "American Hospital Dubai",
    ],
  },
  {
    name: "Dr. Haidar Saeed Jalil Aal Mussa",
    titleLines: [
      "Specialist General Surgeon",
      "Dibba Hospital",
    ],
  },
  {
    name: "Dr. Hayder Makki Hammadi Al-Masari",
    titleLines: [
      "Consultant General and Bariatric Surgery",
      "Al Qassimi Hospital",
    ],
  },
  {
    name: "Dr. Shafaat Syed Ali",
    titleLines: [
      "Physician – General Surgery",
      "Dibba Hospital",
    ],
  },
  {
    name: "Dr. Yalda Z. A. Ziaei",
    titleLines: [
      "Consultant General Surgeon and Surgical Gastroenterologist",
      "Al Qassimi Hospital",
    ],
  },
  {
    name: "Prof. Denis Barritault",
    titleLines: [
      "President / Chief Executive Officer",
      "OTR3, Paris"
    ],
  }
];

const facultyRight: FacultyMember[] = [
  {
    name: "Dr. Khaled Almuhtadi",
    titleLines: [
      "Consultant General & Thoracic Surgeon",
      "Dibba Hospital",
    ],
  },
  {
    name: "Prof. Dr. Abd El Bary Hassan Gouda",
    titleLines: [
      "Consultant A Orthopedic Surgery EHS – Dibba Hospital – HOD",
      "Professor of Orthopedic Surgery – Banha University- Egypt",
    ],
  },
  {
    name: "Dr. Subash Gautam",
    titleLines: [
      "Senior Consultant Surgeon and Head of Department of General Surgery",
      "Fujairah Hospital",
    ],
  },
  {
    name: "Prof. Laurent Layani",
    titleLines: [
      "Consultant Bariatric & Advanced Laparoscopic Surgeon",
      "Al sharq hospital , Fujairah",
    ],
  },
  {
    name: "Ms. Manal Masoud Alnuaimi",
    titleLines: ["ICU Unit Manager",
      "Dibba Hospital"
      ],
  },
  {
    name: "Dr. Mehreen Rasheed Muhammad",
    titleLines: ["General Practitioner",
      "Dibba Hospital EHS"
    ],
  },
  {
    name: "Mr. Moayad Wishah",
    titleLines: [
      "Simulation Specialist",
      "Emirates Health Services",
    ],
  },
  {
    name: "Prof. Mohamed Hassan",
    titleLines: [
      "Senior Consultant Pediatric",
      "Surgeon & Deputy Head",
      "Al Qassimi Women's & Children's Hospital",
    ],
  },
  {
    name: "Dr. Mohammed Ramjyan Bhati",
    titleLines: [
      "Surgical specialist",
      "Emirates Health Services",
    ],
  },
  {
    name: "Prof. Mohammed Baguinde",
    titleLines: [
      "Consultant and Chair of the Vascular Surgery Division",
      "Sheikh Shakhbout Medical City (SSMC), Abu Dhabi",

    ],
  },
  {
    name: "Dr. Muna Al Ayyan",
    titleLines: [
      "Consultant, Breast surgeon, General Surgeon",
      "Head of general surgery department CEO of Saqr Hospital",

    ],
  },
  {
    name: "Dr. Nafad Elhadidi",
    titleLines: [
      "HOD , Consultant General Laparoscopic and Vascular Surgeon",
      "Zulekha Hospital, Sharjah",
    ],
  },
  {
    name: "Ms. Nasreen Abdelatif Fadlelsid Khalid",
    titleLines: [
      "Al Qassimi Hospital - Sharjah"
    ],
  },
  {
    name: "Dr. Salma Saeed Harib Alketbi",
    titleLines: ["Wound & Hyperbaric Physician",
      "Al Qassimi Hospital"
    ],
  },
  {
    name: "Mr. Hamza Alshraiedeh",
    titleLines: ["Wound Care Specialist Nurse – Senior Charge Nurse",
      "Sheikh Khalifa Medical City, Ajman"
    ],
  },
  {
    name: "Prof. Safwan Abdul-Rahman Taha",
    titleLines: ["Consultant Surgeon and Director of the Metabolic and Bariatric Surgery Center",
      "Mediclinic Airport Road Hospital, Abu Dhabi"
    ],
  }
];

const BAR_SVG =
  "https://res.cloudinary.com/medcon-dam/image/upload/v1785150360/EHS-surgery-conference/Bar_wpmvpr.svg";

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        pl: {
          xs: 1,
          sm: 1.2,
          md: 1.3,
        },
      }}
    >
      {/* Gold vertical SVG bar */}
      <Box
        component="img"
        src={BAR_SVG}
        alt=""
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: 20,
          top: {
            xs: -4,
            md: -5,
          },
          width: {
            xs: 14,
            md: 15,
          },
          height: {
            // xs: 58,
            // sm: 62,
            xs:95,
            md: 105,
          },
          objectFit: "cover",
          display: "block",
          zIndex: 2,
        }}
      />

      {/* Faculty information card */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { md: 84, xs: 80 },
          // maxHeight: {
          //   xs: 72,
          //   sm: 76,
          //   md: 90,
          // },
          bgcolor: "#f3f3f3",
          borderRadius: {
            xs: "10px",
            md: "12px",
          },
          pr: {
            xs: 2,
            sm: 2.2,
            md: 2.4,
          },

          pl: {
            xs: 4,
            sm: 4,
            md: 4,
          },
          pt: {
            xs: 1.5,
            md: 1.7,
          },
          pb: {
            xs: 1.8,
            md: 2,
          },
          boxShadow: "0 4px 0 #f7e9d2",
          overflow: "hidden",
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#1d1d1d",
            fontSize: {
              xs: 14,
              sm: 14.5,
              md: 15,
            },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: {
              xs: 0.7,
              md: 0.8,
            },
          }}
        >
          {member.name}
        </Typography>

        <Box>
          {member.titleLines.map((line, index) => (
            <Typography
              key={`${member.name}-${index}`}
              component="p"
              sx={{
                color: "#5f5f5f",
                fontSize: {
                  xs: 9,
                  sm: 10,
                  md:11,
                },
                fontWeight: 400,
                lineHeight: 1.25,
                m: 0,
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function FacultyColumn({ items }: { items: FacultyMember[] }) {
  return (
    <Grid
      container
      rowSpacing={{
        xs: 4,
        sm: 4,
        md: 5,
      }}
    >
      {items.map((member, index) => (
        <Grid
          key={`${member.name}-${index}`}
          size={12}
        >
          <FacultyCard member={member} />
        </Grid>
      ))}
    </Grid>
  );
}

export default function Faculty() {
  return (
    <Layout>
      <Box
        component="section"
        sx={{
          bgcolor: "#ffffff",
          minHeight: "100vh",
          py: {
            xs: 4,
            sm: 5,
            md: 6,
          },
        }}
      >
        <Container
          maxWidth={"lg"}
          sx={{
            // maxWidth: "1000px",
            px: {
              xs: 2.5,
              sm: 4,
              md: 5,
            },
          }}
        >
          <Typography
            component="h1"
            className={literata.className}
            sx={{
              color: "#111111",
              fontFamily: `${literata.style.fontFamily}, serif`,
              fontSize: {
                xs: 24,
                sm: 28,
                md: 31,
              },
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Faculty
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: {
                xs: 3,
                md: 4,
              },
              bgcolor: "#d58b00",
              mb: {
                xs: 4,
                sm: 4.5,
                md: 5,
              },
            }}
          />

          <Grid
            container
            columnSpacing={{
              xs: 0,
              md: 6,
              lg: 7,
            }}
            rowSpacing={{
              xs: 3,
              md: 0,
            }}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <FacultyColumn items={facultyLeft} />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <FacultyColumn items={facultyRight} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
