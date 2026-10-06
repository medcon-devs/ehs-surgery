import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedNumber({
  value,
  fontSize = 66,
  fontSizeMobile = 60,
}: {
  value: number;
  fontSize?: number;
  fontSizeMobile?:number;
}) {
  const text = String(value).padStart(2, "0");

  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      {text.split("").map((digit, idx) => (
        <Box key={idx} sx={{ width: {md:fontSize * 0.6,xs:fontSizeMobile * 0.6}, textAlign: "center" }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={digit}
              initial={{ y: -18, opacity: 0, filter: "blur(2px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 18, opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Typography sx={{ fontSize:{md:fontSize,xs:fontSizeMobile}, fontWeight: 900, color: "#050505", lineHeight: 1 }}>
                {digit}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      ))}
    </Box>
  );
}
