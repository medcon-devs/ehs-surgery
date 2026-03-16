import { Box, Container, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

function InfoPill({ icon, text,subtext }: { icon: React.ReactNode; text: string ,subtext:string}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        // bgcolor: "rgba(255,255,255,0.22)",
        // color: "white",
        px: 2,
        py: 1,
        borderRadius: 999,
        // backdropFilter: "blur(6px)",
      }}
    >
      <Box sx={{ display: "grid", placeItems: "center" }}>{icon}</Box>
      <Box>
      <Typography sx={{ fontWeight: 900, fontSize: 14,color:"#315A7B" }}>{text}</Typography>
      <Typography sx={{ fontWeight: 900, fontSize: 14 ,color:"#315A7B" }}>{subtext}</Typography>
      </Box>
    </Stack>
  );
}

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 420, md: 420 },
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        bgcolor: "#1e3b52",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
        //   background:
        //     "linear-gradient(180deg, rgba(12, 25, 38, 0.13) 0%, rgba(12,25,38,0.35) 45%, rgba(12, 25, 38, 0.27) 100%)",
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", pt:4 }}>
      <Stack direction={{ xs: "column", md: "row" }} alignItems="center" justifyContent="space-between" gap={4}>
      <Box component="img" src="/images/ehs-logo.png" alt="EHS" sx={{ width: "27%",minWidth:250,maxWidth:300 }} />
      <Box component="img" src="/images/cardio.png" alt="EHS" sx={{  width: "23%",minWidth:250,maxWidth:300 }} />
        </Stack>
        <Stack px={2} pt={{xs:5,md:0}} direction={{ xs: "column", md: "row" }} alignItems="center" justifyContent="space-between" gap={2}>
          <Box sx={{ width: { xs: "100%", md: "55%"}, }}>
            {/* <Stack direction="row" alignItems="center" gap={2}  sx={{ mb: 2,backgroundColor:"red" }}>
             
            </Stack> */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Typography variant="h2" sx={{ color: "white", fontSize: { xs: 34, md: 44 }, lineHeight: 1.1 }}>
                The 5<sup>th</sup> EHS Cardiorenal
                <br />
                and Metabolic Conference
              </Typography>
            </motion.div>

            <Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={{ mt: 3 }}>
              <InfoPill icon={<img src={"/images/calander.png"} width={60}/>}
               text="9 - 10 May 2026"
               subtext=""
               />
              <InfoPill
              icon={<img src={"/images/location.png"} width={60}/>}
                // icon={<LocationOnIcon sx={{ color: "white" }} />}
                text="DoubleTree by Hilton"
               subtext="Fujairah City Hotel"
              />
            </Stack>
          </Box>

          <Box  width={{md:"50%",xs:"100%"}}  justifyItems={"flex-end"}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >

            <Box
              component="img"
              src="/images/hero-organ.png"
              alt="Cardiorenal Visual"
              sx={{
                width: { xs: 260, md: 360 },
                height: "auto",
                dropShadow: "0 16px 40px rgba(0,0,0,0.25)",
                filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.25))",
                // bgcolor:"red",
               
                
              }}
            />
            {/* </Box> */}
          </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}