import Layout from "@/components/layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";

type CommitteeMember = {
  name: string;
  title: string;
};

const BAR_SVG =
  "https://res.cloudinary.com/medcon-dam/image/upload/v1785150360/EHS-surgery-conference/Bar_wpmvpr.svg";

  const committeeMembers: CommitteeMember[] = [
    {
      name: "Prof. Hatem Gaafar",
      title: `Consultant Surgeon,
      Dibba Hospital`,
    },
    {
      name: "Dr. Haider Saeed Jalil",
      title: `Specialist Surgeon
  Dibba Hospital`,
    },
    {
      name: "Dr. Khaled Almuhtadi",
      title: `Consultant General Surgeon,
Dibba Hospital`,
    },
    {
      name: "Dr. Mohammed Ramjiyan",
      title: `Physician
  Dibba Hospital`,
    },
    {
      name: "Dr. Mohamed Eltawel",
      title: "",
    },
    {
      name: "Dr. Shereen Elkhouly",
      title: "",
    },
    {
      name: "Dr. Syed Shafaat",
      title: `General Practitioner,
Dibba Hospital`,
    },
    {
      name: "Dr. Hani Brejawi",
      title: "",
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
              xs: 15,
              sm: 16,
              lg: 18,
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
              xs: 11,
              sm: 13,
              lg: 13,
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

export default function OrganizingCommittee() {
  return (
    <Layout>
      <Box
        component="section"
        sx={{
          bgcolor: "#fff",
          // minHeight: "100vh",
          // px:0,
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
            // bgcolor:"red",
            // px:300
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
            Organizing Committee
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
