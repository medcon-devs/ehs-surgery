import Layout from "@/components/layout/Layout";
import ComingSoon from "@/components/common/ComingSoon";
import { Box, Container, Typography } from "@mui/material";

export default function Faculty() {
  return (
    <Layout>
      {/* <ComingSoon/> */}

      <Box sx={{ bgcolor: "#f7f6f6", py: { xs: 4, md: 6 },height:500 }}>
        <Container maxWidth="md" sx={{ maxWidth: "860px !important" }}>
          <Typography
            sx={{
              color: "#315D7C",
              fontSize: { xs: 28, md: 38 },
              fontWeight: 400,
              lineHeight: 1.1,
              mb:2
            }}
          >
            Faculty
          </Typography>

          <Box sx={{ height: 6, bgcolor: "#cbbfda", my: 1.2 }} />
        </Container>
      </Box>

    </Layout>
  );
}