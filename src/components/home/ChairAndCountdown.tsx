import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedNumber from "@/components/home/AnimatedNumber";
import { useDubaiCountdown } from "@/hooks/useDubaiCountdown";
function SectionCard({ title, children, withtImg }: { title: string; children: React.ReactNode; withtImg: boolean }) {
    return (
        <Card sx={{
            borderRadius: 2, boxShadow: "0 10px 30px rgba(16,24,40,0.10)", width: { md: "80%",xs:400 }, bgcolor: "#F2F2F2", height: 395, backgroundImage: withtImg ? "url(/images/countdownimage.png)" : null,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // minWidth: 400,
            maxWidth:"90%",
            mx:{xs:"auto"}
        }}>
            <CardContent sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500, color: "#2F5E7A" }}>
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
        <Container maxWidth="lg" sx={{bgcolor:"#fff"}} >
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Stack direction={{ xs: "column", md: "row" }} gap={4} >
                    <Box sx={{ flex: 1 }}  justifyItems={{ md: "flex-end", xs: "center" }} >
                        <SectionCard title="Conference Chairperson" withtImg={false}>
                            <Stack alignItems="center" gap={.5}>
                                <Box
                                    component="img"
                                    src="/images/chairperson.png"
                                    alt="Chairperson"
                                    sx={{ width: 210, objectFit: "cover" }}
                                />
                                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Dr. Muhamed Al Rohani, MD</Typography>
                                <Typography sx={{ fontSize: 12, color: "text.secondary", textAlign: "center", maxWidth: 360 }}>
                                    Associated professor RAK Medical & Health Sciences University • Consultant in Nephrology • Head of
                                    Medical Department, Dibba Hospital
                                </Typography>
                                {/* <Divider flexItem sx={{ my: 1 }} /> */}
                                <Typography sx={{ fontSize: 11, color: "text.secondary", textAlign: "center" }}>
                                    The 5th EHS Cardiovascular and Metabolic Conference
                                </Typography>
                            </Stack>
                        </SectionCard>
                    </Box>

                    <Box sx={{ flex: 1 }} justifyItems={{ md: "flex-start", xs: "center" }}>
                        <SectionCard title="Event Countdown" withtImg>
                            <Stack alignItems="center" gap={1}>
                                <Typography sx={{ fontSize: 12, color: "#2F5E7A" }}>Until the Conference Begins</Typography>

                                {/* Replace with real countdown logic later */}
                                <Stack direction="row" alignItems="baseline" gap={2} sx={{ mt: 3 }}>
                                    <Stack alignItems="center">
                                        <AnimatedNumber value={countdown.leftValue} fontSize={66} />
                                        <Typography sx={{ fontSize: 12, color: "#333333" }}>{countdown.leftLabel}</Typography>
                                    </Stack>

                                    <Typography sx={{ fontSize: 66, fontWeight: 900, color: "#333333", px: 2, lineHeight: 1 }}>
                                        :
                                    </Typography>

                                    <Stack alignItems="center">
                                        <AnimatedNumber value={countdown.rightValue} fontSize={66} />
                                        <Typography sx={{ fontSize: 12, color: "#333333" }}>{countdown.rightLabel}</Typography>
                                    </Stack>
                                </Stack>

                                <Button
                                    href="/register"
                                    variant="contained"
                                    sx={{
                                        mt: { md: 8, xs: 8 },
                                        px: 8,
                                        py: 2,
                                        borderRadius: 999,
                                        bgcolor: "#2F5E7A",
                                        boxShadow: "0 12px 24px rgba(47,94,122,0.28)",
                                        fontSize: 20
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