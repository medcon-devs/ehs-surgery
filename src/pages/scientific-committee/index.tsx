import Layout from "@/components/layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import { literata } from "@/lib/fonts";

type CommitteeMember = {
  name: string;
  title: string;
  image?: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr. Yosra Al Salami",
    title: `Consultant Family Medicine
Assistant Director for Medical Affairs in 
Dibba Hospital`,
    image:
      "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649145/ehs-ckm-2026/Frontend/Yosra_Al_Salami_zd7pdi.png",
  },
  {
    name: "Dr. Muhamed Al Rohani, MD",
    title: `Associated professor RAK Medical & Health Sciences
    University, Consultant in Nephrology 
    Head of Medical Department  Dibba hospital`,
    image:
      "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649145/ehs-ckm-2026/Frontend/rohani_g05qhb.png",
  }, 
  {
    name: "Dr. Ramadan Arafa",
    title: `Consultant Physician
Al Fujairah Hospital, EHS`,
    image: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776252945/ehs-ckm-2026/Frontend/ramdan_qbruaf.png"
  },
  {
    name: "Dr. Salem Omar",
    title: `Consultants in Internal Medicine
Dibba Hospital, EHS`,
    image: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649145/ehs-ckm-2026/Frontend/Salem_Abdula_Salem_Omar_sjilsb.png"
  },
  {
    name: "Dr. Bahaa Zayed",
    title: `Consultant Nephrologist 	
Al Fujairah Hospital, EHS`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776253146/ehs-ckm-2026/Frontend/bahaa_dk2ybn.png"
  },
  {
    name: "Dr. Dawlat Sany",
    title: `Consultant Internal Medicine/ Nephrology	
Kalba Hospital, EHS`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649144/ehs-ckm-2026/Frontend/Dawlat_Hussein_Sany_vtjnro.png"
  },
  {
    name: "Dr. Wameedh Al Bassam",
    title: `Senior Consultant, Otolaryngology	
Al Fujairah Hospital, EHS`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649144/ehs-ckm-2026/Frontend/Wameedh_Al_Bassam_slkarw.png"
  },
  {
    name: "Dr. Mohamed Salah",
    title: `Senior Consultant Cardiologist	
Kalba Hospital, EHS`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649144/ehs-ckm-2026/Frontend/Mohamed_Salah_Meselhy_Osman_g51ahw.png"
  },
  {
    name: "Dr. Thair Fadhel Khuziem",
    title: `Consultant Interventional Cardiologist
Al Fujairah Hospital, EHS`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649144/ehs-ckm-2026/Frontend/Thair_Fadhel_Khuziem_nxaan6.png"
  },
  {
    name: "Dr. Annas Qasem",
    title: `Consultant Internal Medicine & Nephrology	
Ibrahim Bin Hamad Obaidullah Hospital (IBHOH), RAK`,
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649144/ehs-ckm-2026/Frontend/Annas_Qasem_fwwxoo.png"
  },
  
];

function SpeakerShape({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 92, md: 112 },
        height: { xs: 92, md: 116 },
        flexShrink: 0,
      }}
    >
      {/* Background avatar shape */}
      <Box
        component="img"
        src="https://res.cloudinary.com/medcon-dam/image/upload/v1773726225/ehs-ckm-2026/Frontend/avatar_scientific_comittee_hki8x1.png"
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Speaker image on top */}
      {image && (
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      )}
    </Box>
  );
}

function CommitteeCard({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image?: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: { xs: 1.5, md: 2.5 },
      }}
    >
      <SpeakerShape name={name} image={image} />

      <Box sx={{ pt: { xs: 0.5, md: 1.2 }, minWidth: 0 }}>
        <Typography
          sx={{
            color: "#4b4b4b",
            fontSize: { xs: 18, md: 17 },
            fontWeight: 400,
            mb: 1,
            lineHeight: 1.25,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "#5f5f5f",
            fontSize: { xs: 11, md: 12 },
            lineHeight: 1.28,
            whiteSpace: "pre-line",
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
        sx={{
          bgcolor: "#f3f3f3",
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg" sx={{ maxWidth: "920px !important" }}>
          <Typography
            sx={{
              color: "#315D7C",
              fontSize: { xs: 30, md: 40 },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 2,
              fontFamily: `${literata.style.fontFamily}, serif`,
            }}
            className={literata.className}
          >
            Scientific Committee
          </Typography>

          <Box
            sx={{
              height: 5,
              bgcolor: "#cbbfda",
              width: "100%",
              mb: { xs: 4, md: 5 },
            }}
          />

          <Grid container spacing={{ xs: 4, md: 5 }}>
            {committeeMembers.map((member, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <CommitteeCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}