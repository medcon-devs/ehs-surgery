import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedNumber from "@/components/home/AnimatedNumber";
import { useDubaiCountdown } from "@/hooks/useDubaiCountdown";
import { literata } from "@/lib/fonts";

function SectionCard({ title, children, withtImg,variant }: { title: string; children: React.ReactNode; withtImg: boolean;variant?: String }) {
    return (
        <Card sx={{
            borderRadius: 2, boxShadow: "0 10px 30px rgba(16,24,40,0.10)", width: { md: "80%", xs: "100%" }, bgcolor: "#F2F2F2", height: {md:365,xs:"auto"}, backgroundImage: withtImg ? "url(https://res.cloudinary.com/medcon-dam/image/upload/v1785145854/EHS-surgery-conference/countdownsurgery_pbbuok.png)" : null,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // minWidth: 400,
            maxWidth: {md:"90%",xs:450,},
            mx: { xs: "auto" }
        }}>
            <CardContent sx={{ pt: {md:2,xs:1} }}>
                <Typography variant="h4" sx={{ display:{md:"block",xs:'none'},textAlign: "center", fontWeight:'bold', color: "#000", fontFamily: `${literata.style.fontFamily}, serif`, }} className={literata.className}>
                    {title}
                </Typography>
                <Typography variant="h5" sx={{ display:{xs:"block",md:'none'},textAlign: "center", fontWeight:'bold', color: "#000", fontFamily: `${literata.style.fontFamily}, serif`, }} className={literata.className}>
                    {title}
                </Typography>
                <Box sx={{ mt: 0 }}>{children}</Box>
            </CardContent>
        </Card>
    );
}

export default function ChairAndCountdown() {
    const countdown = useDubaiCountdown();
    return (
        <Container maxWidth="lg" sx={{ bgcolor: "#fff" }} >
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Stack direction={{ xs: "column", md: "row" }} gap={4} >
                    {/* <Box sx={{ flex: 1 }}  justifyItems={{ md: "flex-end", xs: "center" }} >
                        <SectionCard title="Conference Chairperson" withtImg={false}>
                            <Stack alignItems="center" gap={.5}>
                                <Box
                                    component="img"
                                    src="https://res.cloudinary.com/medcon-dam/image/upload/v1773726216/ehs-ckm-2026/Frontend/chairperson_fg0wif.png"
                                    alt="Chairperson"
                                    sx={{ width: 210, objectFit: "cover" }}
                                />
                                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Dr. Muhamed Al Rohani, MD</Typography>
                                <Typography sx={{ fontSize: 12, color: "text.secondary", textAlign: "center", maxWidth: 360 }}>
                                    Associated professor RAK Medical & Health Sciences University • Consultant in Nephrology • Head of
                                    Medical Department, Dibba Hospital
                                </Typography>
                                <Typography sx={{ fontSize: 11, color: "text.secondary", textAlign: "center" }}>
                                    The 5th EHS Cardiovascular and Metabolic Conference
                                </Typography>
                            </Stack>
                        </SectionCard>
                    </Box> */}

                    <Box sx={{ flex: 1 }} justifyItems={{ md: "flex-start", xs: "center" }}>
                        <SectionCard title="Event Countdown" withtImg >
                            <Stack alignItems="center" gap={{md:1,xs:0}}>
                                <Typography sx={{ fontSize: 12, color: "#000" }}>Until the Conference Begins</Typography>

                                {/* Replace with real countdown logic later */}
                                <Stack direction="row" alignItems="baseline" gap={{md:2,xs:1}} sx={{ mt: 3 }}>
                                    <Stack alignItems="center">
                                        <AnimatedNumber value={countdown.leftValue} fontSize={66}  fontSizeMobile={40}/>
                                        <Typography sx={{ fontSize: 12, color: "#333333" }}>{countdown.leftLabel}</Typography>
                                    </Stack>

                                    <Typography sx={{ fontSize: 66, fontWeight: 900, color: "#333333",  lineHeight: 1 }}>
                                    </Typography>
                                    <Typography  sx={{ fontSize: {md:66,xs:40}, fontWeight: 900, color: "#000",  lineHeight: 1 }}>:</Typography>
                                    <Stack alignItems="center" ml={{xs:.7}}>
                                        <AnimatedNumber value={countdown.rightValue} fontSize={66} fontSizeMobile={40}/>
                                        <Typography sx={{ fontSize: 12, color: "#333333" }}>{countdown.rightLabel}</Typography>
                                    </Stack>
                                </Stack>

                                <Button
                                    href="/register"
                                    variant="contained"
                                    sx={{
                                        mt: 2.5,
                                        minWidth: 210,
                                        borderRadius: 999,
                                        py: 1.1,
                                        bgcolor: "#c9993e",
                                        background: "linear-gradient(90deg, #ad7f2d 0%, #f0cc80 100%)",
                                        color: "#fff",
                                        fontSize: 18,
                                        fontWeight: 800,
                                        textTransform: "none",
                                        boxShadow: "none",
                                    }}
                                >
                                    Register Now
                                </Button>

                            </Stack>
                        </SectionCard>
                    </Box>
                </Stack>
            </motion.div>
        </Container>
    );
}