import Layout from "@/components/layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";

type CommitteeMember = {
  name: string;
  title: string;
  image?: string;
};

const BAR_SVG =
  "https://res.cloudinary.com/medcon-dam/image/upload/v1785150360/EHS-surgery-conference/Bar_wpmvpr.svg";

const committeeMembers: CommitteeMember[] = [
    {
      name: "Dr. Abdulla Alboushi",
      title: "",
    },
    {
      name: "Dr. Amr Arafa",
      title: `Consultant General and Bariatric Surgeon,
Amina Hospital, Ajman`,
    },
    {
      name: "Prof.  Hatem Gaafar",
      title: `Consultant Surgeon ,
Dibba Hospital`,
    },
    {
      name: "Dr. Muna Al-Ayyan",
      title: "",
    },
    {
      name: "Dr. Essa Muallemi",
      title: `Consultant,
Sharjah, Kuwait Hospital`,
    },
    {
      name: "Dr. Haider Saeed Jalil",
      title: `Specialist Surgeon,
Dibba Hospital`,
    },
];

const advisoryMembers: CommitteeMember[] = [
  {
    name: "Dr. Abdel Wahid Alwahidi",
    title: `Consultant General Surgeon, Qassimi
Hospital, EHS`,
  },
  {
    name: "Dr. Saqr Almulla",
    title: "",
  },
  {
    name: "Dr. Hatem Moussa",
    title: `General Surgeon,
Qassimi Hospital, EHS`,
  },
  {
    name: "Dr. Yasra Alsalami",
    title: "",
  },
  {
    name: "Prof. Safwan Taha",
    title: `General Practitioner,
Dibba Hospital`,
  },
  {
    name: "Prof. Mohammed Baguinde",
    title: `Physician,
Dibba Hospital`,
  },
  {
    name: "Prof. Mohamed Hassan",
    title: `General Surgeon,
Al Qassimi Hospital`,
  },
  {
    name: "Dr. Basim Al Khafajee",
    title: `Consultant Surgeon,
Canadian Specialist Hospital`,
  },
];

function SpeakerBar() {
  return (
    <Box
      component="img"
      src={BAR_SVG}
      alt=""
      aria-hidden="true"
      sx={{
        width: {
          xs: 6,
          sm: 8,
          md: 10,
        },
        height: {
          xs: 50,
          sm: 60,
          md: 70,
        },
        objectFit: "fill",
        flexShrink: 0,
        display: "block",
      }}
    />
  );
}

function CommitteeCard({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: { xs: 1.5, md: 2 },
        minHeight: { xs: "auto", md: 82 },
      }}
    >
      <SpeakerBar />

      <Box
        sx={{
          minWidth: 0,
          pt: { xs: 0, md: 0.2 },
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#202020",
            fontSize: { xs: 16, sm: 17, lg: 19 },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: { xs: 0.7, md: 0.9 },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "#5f5f5f",
            fontSize: { xs: 11, sm: 13, lg: 13 },
            fontWeight: 400,
            lineHeight: 1.35,
            whiteSpace: "pre-line",
            maxWidth: { xs: "100%", md: 310 },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ScientificCommittee() {
  return (
    <Layout>
      <Box
        component="section"
        sx={{
          bgcolor: "#ffffff",
          // minHeight: "100vh",
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
            // maxWidth: "1100px",
            px: {
              xs: 2.5,
              sm: 4,
              md: 5,
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#111111",
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
            Scientific Committee
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: { xs: 3, md: 4 },
              bgcolor: "#d58b00",
              mb: {
                xs: 4,
                sm: 5,
                md: 6,
              },
            }}
          />

          <Grid
            container
            columnSpacing={{
              xs: 0,
              lg: 12,
            }}
            rowSpacing={{
              xs: 4,
              sm: 4.5,
              md: 5,
            }}
          >
            {committeeMembers.map((member) => (
              <Grid
                key={member.name}
                size={{
                  xs: 12,
                  lg: 6,
                }}
              >
                <CommitteeCard
                  name={member.name}
                  title={member.title}
                />
              </Grid>
            ))}
          </Grid>

          <Typography
            component="h2"
            sx={{
              color: "#111111",
              fontSize: {
                xs: 24,
                sm: 28,
                md: 31,
              },
              fontWeight: 700,
              lineHeight: 1.15,
              mt: { xs: 4, md: 5 },
              mb: 1.5,
            }}
          >
            Advisory Board Members
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: { xs: 3, md: 4 },
              bgcolor: "#d58b00",
              mb: {
                xs: 4,
                sm: 5,
                md: 6,
              },
            }}
          />

          <Grid
            container
            columnSpacing={{
              xs: 0,
              lg: 12,
            }}
            rowSpacing={{
              xs: 4,
              sm: 4.5,
              md: 5,
            }}
          >
            {advisoryMembers.map((member) => (
              <Grid
                key={member.name}
                size={{
                  xs: 12,
                  lg: 6,
                }}
              >
                <CommitteeCard
                  name={member.name}
                  title={member.title}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
