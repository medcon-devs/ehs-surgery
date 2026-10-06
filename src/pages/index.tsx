import Layout from "@/components/layout/Layout";
import ChairAndCountdown from "@/components/home/ChairAndCountdown";
import WelcomeMessage from "@/components/home/WelcomeMessage";
import TargetAudience from "@/components/home/TargetAudience";
import InfoCards from "@/components/home/InfoCards";
import Sponsors from "@/components/home/sponsors";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Layout>
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "#fff" }}>
        <ChairAndCountdown />
        <WelcomeMessage />
        <TargetAudience />
        <InfoCards />
        {/* <Sponsors /> */}
      </Box>
    </Layout>
  );
}
