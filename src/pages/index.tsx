import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/common/HeroSection";
import ChairAndCountdown from "@/components/home/ChairAndCountdown";
import WelcomeMessage from "@/components/home/WelcomeMessage";
import GallerySection from "@/components/home/GallerySection";
import TargetAudience from "@/components/home/TargetAudience";
import InfoCards from "@/components/home/InfoCards";
import ComplianceNotice from "@/components/home/ComplianceNotice";
import Sponsors from "@/components/home/sponsors";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Layout>
      {/* <HeroSection /> */}
      <Box sx={{ py: 4 ,bgcolor:"#fff"}}>
        <ChairAndCountdown />
        <WelcomeMessage />
        <GallerySection />
        <TargetAudience />
        <InfoCards />
        <ComplianceNotice />
        <Sponsors />
      </Box>
    </Layout>
  );
}