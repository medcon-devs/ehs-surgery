import Layout from "@/components/layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import { literata } from "@/lib/fonts";

type CommitteeMember = {
  name: string;
  title: string;
};

const BAR_SVG =
  "https://res.cloudinary.com/medcon-dam/image/upload/v1785150360/EHS-surgery-conference/Bar_wpmvpr.svg";

  const committeeMembers: CommitteeMember[] = [
    {
      name: "Dr. Abdel Wahid Alwahidi",
      title: `Consultant General Surgeon,
  Qassimi Hospital, EHS`,
    },
    {
      name: "Dr. Saqr Almulla",
      title: "",
    },
    {
      name: "Dr. Hatem Moussa",
      title: "",
    },
    {
      name: "Dr. Yasra Alsalami",
      title: "",
    },
    {
      name: "Prof. Safwan Taha",
      title: `General Practitioner Doctor
  Dibba Hospital`,
    },
    {
      name: "Prof. Mohammed Baguinde",
      title: `Physician
  Dibba Hospital`,
    },
    {
      name: "Prof. Mohamed Hassan",
      title: "",
    },
    {
      name: "Dr. Basim Al Khafajee",
      title: `Consultant Surgeon
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
        display: "block",
        width: {
          xs: 5,
          sm: 6,
          md: 7,
        },
        height: {
          xs: 50,
          sm: 54,
          md: 58,
        },
        objectFit: "fill",
        flexShrink: 0,
      }}
    />
  );
}

function CommitteeCard({
  name,
  title,
}: CommitteeMember) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: {
          xs: 1.3,
          sm: 1.5,
          md: 1.7,
        },
        minHeight: {
          xs: "auto",
          md: 72,
        },
      }}
    >
      <SpeakerBar />

      <Box
        sx={{
          minWidth: 0,
          pt: 0.15,
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#1c1c1c",
            fontSize: {
              xs: 13,
              sm: 14,
              md: 15,
            },
            fontWeight: 700,
            lineHeight: 1.25,
            mb: {
              xs: 0.5,
              md: 0.7,
            },
          }}
        >
          {name}
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "#5f5f5f",
            fontSize: {
              xs: 9,
              sm: 9.5,
              md: 10,
            },
            fontWeight: 400,
            lineHeight: 1.3,
            whiteSpace: "pre-line",
            m: 0,
            maxWidth: {
              xs: "100%",
              md: 290,
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AdvisoryMembers() {
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
          maxWidth={false}
          sx={{
            maxWidth: "1100px",
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
            Advisory Board Members
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
              md: 8,
              lg: 11,
            }}
            rowSpacing={{
              xs: 3.5,
              sm: 4,
              md: 4.5,
            }}
          >
            {committeeMembers.map((member, index) => (
              <Grid
                key={`${member.name}-${index}`}
                size={{
                  xs: 12,
                  md: 6,
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