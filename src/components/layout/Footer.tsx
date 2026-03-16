import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    // <Box
    //   sx={{
    //     mt: 6,
    //     bgcolor: "red",
    //     color: "white",
    //     position: "relative",
    //     // overflow: "hidden",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       // position: "absolute",
    //       // inset: 0,
    //       zIndex:100,
    //       backgroundImage: "url(/images/footer.png)",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       bottom:10
    //       // opacity: 0.25,
    //     }}
    //   />
   
    // </Box>
    <Box width={1} position={"relative"} height={{md:"auto",xs:100}}
    
    sx={{
      // bgcolor:"red"
      // backgroundImage: "url(/images/footer.png)",
      //       backgroundSize: "cover",
      //       backgroundPosition: "center",
    }}>
      {/* <Box width={1} height={100} 
       sx={{
         backgroundImage: "url(/images/footer.png)",
               backgroundSize: "cover",
               backgroundPosition: "center",
       }}
      > */}

        <img src={"/images/footer.png"}  />
        <Box  width={1} height={80} position={"absolute"} top={-40} right={0}>
          <Container maxWidth="lg"  sx={{justifyItems:"flex-end",textAlign:"end"}} >
            {/* <Box height={100} width={100}></Box> */}
            <Box minWidth={80} width={"12%"}
            // width={{md:150,sm:100,xs:100}}
            >
            <img src={"/images/hero-organ.png"} />
            </Box>
          </Container>
        </Box>
      {/* </Box> */}
      <Box width={1} height={{xs:50,md:50}} position={"absolute"} bottom={0} bgcolor={"#315A7B"} py={2}>
         <Container maxWidth="lg" >
         <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
           <Stack direction="row" alignItems="center" gap={1}>
             <Box component="img" src="/images/medcon_logo.png" alt="Medcon" sx={{ height: 22 }} />
           </Stack>

           <Stack direction="row" gap={2} alignItems="center">
             <MuiLink href="https://www.medcon.ae/privacy.html" underline="hover" color="white" sx={{ fontSize: 13 }}>
               Privacy Policy
             </MuiLink>
             <Typography sx={{ opacity: 0.5,color:"white" }}> | </Typography>
             <MuiLink href="https://www.medcon-me.com/contact-us/" underline="hover" color="white" sx={{ fontSize: 13 }}>
               Contact us
             </MuiLink>
           </Stack>
         </Stack>
       </Container>
      </Box>
    </Box>
  );
}