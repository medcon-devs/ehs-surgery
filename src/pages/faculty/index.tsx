import Layout from "@/components/layout/Layout";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { literata } from "@/lib/fonts";

type FacultyMember = {
  name: string;
  titleLines: string[];
  image?: string;
};

const facultyLeft: FacultyMember[] = [
  {
    name: "Dr. Muhamed Al Rohani, MD",
    image:
      "https://res.cloudinary.com/medcon-dam/image/upload/v1773726216/ehs-ckm-2026/Frontend/chairperson_fg0wif.png",
    titleLines: [
      "Associated professor RAK Medical & Health Sciences University,",
      "Consultant in Nephrology", 
      "Head of Medical Department Dibba hospital",
      "Chairman, Organizing Committee",
      "The 5th EHS Cardiovascular and Metabolic Conference",
    ],
  },
  {
    name: "Dr. Mohamed Salah",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651216/ehs-ckm-2026/Frontend/Mohamed_Salah_Meselhy_Osman-fac_gxabgv.png",
    titleLines: [
      "Seinor Cardiology Consultant and Head of Cardiology",
      "Kalba Hospital, Professor of Cardiology Suez Canal University"
    ],
  },
  {
    name: "Dr. Enji Hamdy Elsawy",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/v1776683109/ehs-ckm-2026/Frontend/Enji_wxetzq.png",
    titleLines: [
      "Consultant Neurolgy", 
      "Fujairah Hospital",
    ],
  },
  {
    name: "Dr. Medhat Ali",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776254580/ehs-ckm-2026/Frontend/medhat_ali_jo0min.png",
    titleLines: [
      "Nephrology Consultant, EHS",
      "Umm Al Quwain Hospital"
    ],
  },
  {
    name: "Dr. Bahaa Zayed",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776254797/ehs-ckm-2026/Frontend/bahaa_jqe3ec.png",
    titleLines: [
      "Professor of Nephrology, Cairo University",
      "Consultant of Internal Medicine and Nephrology",
      "Fujairah Hospital",
    ],
  },
  {
    name: "Dr. Salem Omar",
    image: "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775649145/ehs-ckm-2026/Frontend/Salem_Abdula_Salem_Omar_sjilsb.png",
    titleLines: [
      "Consultants in Internal Medicine",
      "Dibba Hospital, EHS",
    ],
  },
  {
    name: "Dr. Dawlat Sany",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651217/ehs-ckm-2026/Frontend/Dawlat_Hussein_Sany-fac_kp0jtc.png",
    titleLines: [
      "Consultant Internal Medicine / Nephrology",
      "Kalba Hospital",
      "Sharjah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Amr ElFaramawy",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776414186/ehs-ckm-2026/Frontend/Mask_Group_8_u7yyng.png",
    titleLines: [
      "Cardiologist consultant",
      "Fujairah hospital",
    ],
  },
  {
    name: "Dr. Aseilah Al Qaydi",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776255156/ehs-ckm-2026/Frontend/aseilah_mgcxqx.png",
    titleLines: [
      "Internal Medicine Consultant",
      "Al Fujairah Hospital ",
    ],
  },
  {
    name: "Dr. Adel Al Maytamy",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776255288/ehs-ckm-2026/Frontend/mataymy_fjtulz.png",
    titleLines: [
      "Consultant Anesthesiologist",
      "Tawam Hospital, Al Ain",
      "Abu Dhabi, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Wameedh AlBassam",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651217/ehs-ckm-2026/Frontend/Wameedh_Al_Bassam-fac_v7ijh3.png",
    titleLines: [
      "Senior Consultant, Otolaryngology –",
      "Head & Neck Surgery (ENT)",
      "Fujairah Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Ahmed Abdelmageed",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776255630/ehs-ckm-2026/Frontend/adbelmaged_j2gdlz.png",
    titleLines: [
      "Emergency Medicine Specialist",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  
  {
    name: "Dr. Ghamdan Alsadeh",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776255767/ehs-ckm-2026/Frontend/ghamdan_iufl7r.png",
    titleLines: [
      "Consultant Critical Care Medicine", 
      "Head of ICU Department, IBHO Hospital", 
      "Associate Professor, RAK University",
    ],
  },
  {
    name: "Dr. Ammar Al Farroukh",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776255889/ehs-ckm-2026/Frontend/ammar_q3zozj.png",
    titleLines: [
      "Pediatric Consultant",
      "Head of Pediatric Department",
      "Alsharq Hospital Dibba",
    ],
  },
  {
    name: "Dr. Ahmed Mohamed",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776414614/ehs-ckm-2026/Frontend/Component_2_1_lo4ffz.png",
    titleLines: [
      "Consultant - Reproductive Medicine and Infertility",
    ],
  },
  {
    name: "Dr. Hanadi Widatallah",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/v1776684002/ehs-ckm-2026/Frontend/Hanadi_ha4grf.png",
    titleLines: [
      "Consultant Obstetrician and Gynaecologist, Reproductive",
      "Medicine And Infertility",
      "HOD OB/GYN Department",
      "Dibba Hospital",
    ],
  },
  
];

const facultyRight: FacultyMember[] = [
  
  {
    name: "Dr. Amrish Agrawal",
    image:
      "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776256316/ehs-ckm-2026/Frontend/amrish_mbqjzo.png",
    titleLines: [
      "Senior Consultant Cardiology, Fujairah Hospital, EHS, UAE", 
      "Professor of Medicine, RAK University of Health Sciences",
    ],
  },
  {
    name: "Dr. Abdul Nasser Oudeh",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651216/ehs-ckm-2026/Frontend/Abdulnasser-fac_qukv7e.png",
    titleLines: [
      "Specialist & Interventional Cardiologist",
      "Al Sharq Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Rayan Khojali",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776414893/ehs-ckm-2026/Frontend/Component_3_1_x5omzt.png",
    titleLines: [
      "General Practitioner",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates"
    ],
  },
  
  {
    name: "Dr. Ramadan Arafa",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776252945/ehs-ckm-2026/Frontend/ramdan_qbruaf.png",
    titleLines: [
      "Consultant Physician",
      "Fujairah Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Mohammed Edan",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651218/ehs-ckm-2026/Frontend/mohammed_edan_h1erzh.png",
    titleLines: [
      "Consultant Internal Medicine and Nephrology",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Annas Qasem",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651217/ehs-ckm-2026/Frontend/Annas_Qasem-fac_m7mjgi.png",
    titleLines: [
      "Consultant Internal Medicine & Nephrology",
      "Ibrahim Bin Hamad Obaidullah Hospital (IBHOH), RAK",
    ],
  },
  {
    name: "Dr. Mohammed Babiker",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776415120/ehs-ckm-2026/Frontend/Component_4_1_a3rl97.png",
    titleLines: [
      "Consultant Internal Medicine",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Waheed Farid",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651218/ehs-ckm-2026/Frontend/Waheed_Farid_ibgjhj.png",
    titleLines: [
      "Consultant Cardiologist & Head of Cardiology",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Hatem Abdelkhalek",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651217/ehs-ckm-2026/Frontend/hatem_q6fkls.png",
    titleLines: [
      "ICU Specialist, Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Abobakr Abdelkader",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776257179/ehs-ckm-2026/Frontend/abobaker_cdjoxm.png",
    titleLines: [
      "Emergency Specialist",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  // {
  //   name: "Dr. Abdelaal Elbahnasy",
  //   image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651389/ehs-ckm-2026/Frontend/avatar_fja2dg.png",
  //   titleLines: [
  //     "Emergency Medicine Specialist",
  //     "King Abdulaziz Airbase Hospital",
  //     "Saudi Arabia",
  //   ],
  // },
  {
    name: "Dr. Eman Elmahdi",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/v1776684230/ehs-ckm-2026/Frontend/Eman_lhvbtr.png",
    titleLines: [
      "Emergency Medicine Specialist",
      "Dibba Hospital ",
    ],
  },
  {
    name: "Dr. Anaam Hasson",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776257371/ehs-ckm-2026/Frontend/anaam_elqmyg.png",
    titleLines: [
      "MO Consultant Obstetrics & Gynecology",
      "Al Sharq Hospital",
    ],
  },
  // {
  //   name: "Dr. Atif Bashir Eltayeb",
  //   image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1775651216/ehs-ckm-2026/Frontend/atif_yiajic.png",
  //   titleLines: [
  //     "Consultant, General Obstetrics and Gynaecology",
  //     "Latifa Hospital",
  //     "Dubai, United Arab Emirates",
  //   ],
  // },
  {
    name: "Dr. Ali Muhibaldin",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776322287/ehs-ckm-2026/Frontend/moheb_sututb.png",
    titleLines: [
      "Cardiology Specialist",
      "Dibba Hospital",
      "Fujairah, United Arab Emirates",
    ],
  },
  {
    name: "Dr. Sabaa Alhemyari",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776322287/ehs-ckm-2026/Frontend/sabaa_l8qsyu.png",
    titleLines: [
      "Ph.D Clinical Pharmacist",
      "EHS",
    ],
  },
  {
    name: "Dr. Hassan Al Hakim",
    image:"https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776256088/ehs-ckm-2026/Frontend/hasan_odlh3h.png",
    titleLines: [
      "Pulmonology Specialist",
      "Dibba Hospital",
    ],
  },
];

function FacultyImage({ image, name }: { image?: string; name: string }) {
  return (
    <Box
      sx={{
        width: { xs: 86, md: 92 },
        minWidth: { xs: 86, md: 92 },
        height: { xs: 110, md: 118 },
        bgcolor: "#d6ceca",
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {image ? (
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <Box
          component="img"
          src="https://res.cloudinary.com/medcon-dam/image/upload/v1774585350/ehs-ckm-2026/Frontend/avatar-placeholder_lx8g3j.png"
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </Box>
  );
}

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        bgcolor: "#f6f4f4",
        borderRadius: "14px",
        overflow: "hidden",
        minHeight: { xs: 118, md: 132 },
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        "&::after": {
          content: '""',
          position: "absolute",
          left: { xs: 90, md: 100 },
          right: 0,
          bottom: 0,
          height: 8,
          bgcolor: "#3f6487",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
      }}
    >
      <Box sx={{ pt: 1.4 }}>
        <FacultyImage image={member.image} name={member.name} />
      </Box>

      <Box
        sx={{
          flex: 1,
          px: { xs: 1.8, md: 2 },
          pt: { xs: 1.8, md: 2 },
          pb: { xs: 2.2, md: 2.4 },
        }}
      >
        <Typography
          sx={{
            color: "#3a3a3a",
            fontSize: { xs: 16, md: 17 },
            fontWeight: 400,
            lineHeight: 1.25,
            mb: 1,
          }}
        >
          {member.name}
        </Typography>

        {member.titleLines.map((line, i) => (
          <Typography
            key={i}
            sx={{
              color: "#5f5f5f",
              fontSize: { xs: 12, md: 11.5 },
              lineHeight: 1.35,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

function FacultyColumn({ items }: { items: FacultyMember[] }) {
  return (
    <Grid container spacing={{ xs: 2.5, md: 3 }}>
      {items.map((member, index) => (
        <Grid key={index} size={12}>
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
        sx={{
          bgcolor: "#f3f3f3",
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg" sx={{ maxWidth: "980px !important" }}>
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
            Faculty
          </Typography>

          <Box
            sx={{
              height: 5,
              bgcolor: "#cbbfda",
              width: "100%",
              mb: { xs: 4, md: 5 },
            }}
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FacultyColumn items={facultyLeft} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FacultyColumn items={facultyRight} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}