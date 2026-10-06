import { Box } from "@mui/material";
import TopNav from "./TopNav";
import Footer from "./Footer";
import HeroSection from "../common/HeroSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ width: "100%", minWidth: 0, minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
   
      <HeroSection />
      <TopNav />
      <Box component="main" sx={{ width: "100%", minWidth: 0, flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
}
