import { Box } from "@mui/material";
import TopNav from "./TopNav";
import Footer from "./Footer";
import HeroSection from "../common/HeroSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <TopNav />
      <HeroSection />
      <Box component="main" sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
}