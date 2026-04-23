import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  Dialog,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { literata } from "@/lib/fonts";

// ✅ Dummy images you already have:
// const IMAGES = ["https://res.cloudinary.com/medcon-dam/image/upload/v1773726218/ehs-ckm-2026/Frontend/gal1_p606vs.png", "https://res.cloudinary.com/medcon-dam/image/upload/v1773726218/ehs-ckm-2026/Frontend/gal2_orkjy2.png", "https://res.cloudinary.com/medcon-dam/image/upload/v1773726218/ehs-ckm-2026/Frontend/gal3_ue3mxj.png"];

const IMAGES = ["https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423983/ehs-ckm-2026/Frontend/gallery/img1_arnqk4.png", 
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423983/ehs-ckm-2026/Frontend/gallery/img2_usvo54.png", 
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423983/ehs-ckm-2026/Frontend/gallery/img3_ewfa8c.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423984/ehs-ckm-2026/Frontend/gallery/img4_cisdro.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423985/ehs-ckm-2026/Frontend/gallery/img5_uzyfae.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423984/ehs-ckm-2026/Frontend/gallery/img6_uw9rmk.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423985/ehs-ckm-2026/Frontend/gallery/img7_rauwtd.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423985/ehs-ckm-2026/Frontend/gallery/img8_h1rssr.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423986/ehs-ckm-2026/Frontend/gallery/img9_v21xi3.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423986/ehs-ckm-2026/Frontend/gallery/img10_lxbb9h.png",
  "https://res.cloudinary.com/medcon-dam/image/upload/q_auto/f_auto/v1776423987/ehs-ckm-2026/Frontend/gallery/img11_volrvo.png",
];

// ✅ Multiple conferences so arrows work
const conferences = [
  {
    title: "The 4th EHS Cardiorenal  and Metabolic Conference",
    images: IMAGES,
  },
  // {
  //   title: "The 3rd EHS Cardiorenal  and Metabolic Conference",
  //   images: [...IMAGES].reverse(),
  // },
  // {
  //   title: "The 2nd EHS Cardiorenal  and Metabolic Conference",
  //   images: [IMAGES[1], IMAGES[2], IMAGES[0]],
  // },
];

function clampIndex(i: number, len: number) {
  return (i + len) % len;
}

function RoundNavButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        bgcolor: "#D8D2CF",
        color: "#2F5E7A",
        boxShadow: "0 6px 18px rgba(16,24,40,0.10)",
        "&:hover": { bgcolor: "#CFC7C4" },
        "&.Mui-disabled": { opacity: 0.45 },
      }}
    >
      {children}
    </IconButton>
  );
}

function MotionImg(props: any) {
  return (
    <Box
      component={motion.img as any}
      {...props}
      draggable={false}
      style={{ display: "block", ...props.style }}
    />
  );
}



export default function GallerySection() {
  const [confIndex, setConfIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Lightbox
  const [open, setOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const conf = conferences[confIndex];
  const main = conf.images[activeIndex];

  const openLightbox = (startIndex: number) => {
    setLightboxIndex(startIndex);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const nextImage = React.useCallback(() => {
    setLightboxIndex((i) => clampIndex(i + 1, conf.images.length));
  }, [conf.images.length]);

  const prevImage = React.useCallback(() => {
    setLightboxIndex((i) => clampIndex(i - 1, conf.images.length));
  }, [conf.images.length]);

  // keyboard support in popup
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, nextImage, prevImage]);

  // When conference changes, reset selected image
  const goPrevConf = () => {
    setConfIndex((v) => {
      const next = clampIndex(v - 1, conferences.length);
      return next;
    });
    setActiveIndex(0);
  };

  const goNextConf = () => {
    setConfIndex((v) => {
      const next = clampIndex(v + 1, conferences.length);
      return next;
    });
    setActiveIndex(0);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 6 }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, color: "#2F5E7A", mb: 2,fontFamily: `${literata.style.fontFamily}, serif`, }}
          className={literata.className}
        >
          Gallery from Previous Conferences:
        </Typography>

        {/* Thick line like screenshot */}
        <Divider sx={{ mb: 3, borderColor: "#315A7B", borderBottomWidth: 5 }} />

        {/* Main white box */}
        <Box
          sx={{
            // bgcolor: "white",
            // borderRadius: 2,
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 2.5 },
            // boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
          }}
        >
          {/* Header row */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, md: 34 },
                fontWeight: 400,
                color: "#111",
                fontFamily: `${literata.style.fontFamily}, serif`,
              }}
              className={literata.className}
            >
              {conf.title}
            </Typography>

            {/* <Stack direction="row" gap={1.5}>
              <RoundNavButton onClick={goPrevConf}>
                <ChevronLeftIcon />
              </RoundNavButton>
              <RoundNavButton onClick={goNextConf}>
                <ChevronRightIcon />
              </RoundNavButton>
            </Stack> */}
          </Stack>

          {/* Main image (click to open popup) */}
          <Box sx={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <MotionImg
                key={main}
                src={main}
                alt="Gallery main"
                onClick={() => openLightbox(activeIndex)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
                style={{
                  width: "100%",
                  // height: fullScreen ? 240 : 360,
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 6,
                  cursor: "zoom-in",
                  userSelect: "none",
                }}
              />
            </AnimatePresence>
          </Box>

          {/* Thumbnails strip */}
          <Stack
            direction="row"
            gap={1.3}
            sx={{
              mt: 2,
              pb: 0.5,
              pt:1,
              pl:.7,
              pr:.7,
              overflowX: "auto",
              "&::-webkit-scrollbar": { height: 8 },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,0,0,0.18)",
                // borderRadius: 99,
              },
            }}
          >
            {conf.images.map((src, i) => {
              const selected = i === activeIndex;
              return (
                <Box
                  key={`${src}-${i}`}
                  onClick={() => setActiveIndex(i)}
                  sx={{
                    flex: "0 0 auto",
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    outline: selected ? "3px solid #2F5E7A" : "2px solid transparent",
                    outlineOffset: selected ? 2 : 0,
                    transition: "transform 160ms ease, outline 160ms ease",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`thumb-${i + 1}`}
                    sx={{
                      width: { xs: 140, md: 200 },
                      height: { xs: 78, md: 92 },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              );
            })}
          </Stack>

          {/* View all */}
          <Stack alignItems="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={() => openLightbox(0)} // ✅ active image first one
              sx={{
                bgcolor: "#2F5E7A",
                px: 8,
                py:1,
                mt:3,
                borderRadius: 999,
                boxShadow: "0 12px 24px rgba(47,94,122,0.22)",
                "&:hover": { bgcolor: "#284F66" },
                fontSize:15
              }}
            >
              View All
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* LIGHTBOX POPUP */}
      <Dialog
        open={open}
        onClose={closeLightbox}
        fullScreen={fullScreen}
        PaperProps={{
          sx: {
            bgcolor: "rgb(255, 255, 255)",
            backdropFilter: "blur(10px)",
            borderRadius: fullScreen ? 0 : 1,
            // overflow: "hidden",
            width: fullScreen ? "100vw" : 980, maxWidth: "100vw"
          },
        }}
      >
        <Box sx={{ position: "relative", width: fullScreen ? "100vw" : 980, maxWidth: "100vw" }}>
          {/* Close */}
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 3,
              bgcolor: "rgba(1, 9, 18, 0.14)",
              color: "#020d13",
              "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Prev / Next */}
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              bgcolor: "rgba(133, 162, 195, 0.14)",
              color: "#2F5E7A",
              "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              bgcolor: "rgba(133, 162, 195, 0.14)",
              color: "#2F5E7A",
              "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Image */}
          <Box sx={{ p: fullScreen ? 1.5 : 2.5 }}>
            <AnimatePresence mode="wait">
              <MotionImg
                key={`${confIndex}-${lightboxIndex}`}
                src={conf.images[lightboxIndex]}
                alt="lightbox"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{
                  width: "100%",
                  height: fullScreen ? "72vh" : 560,
                  objectFit: "contain",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.06)",
                }}
              />
            </AnimatePresence>

            {/* Thumbs inside popup */}
            <Stack
              direction="row"
              gap={1}
              sx={{
                mt: 2,
                overflowX: "auto",
                pb: 1,
                pt:1,
                "&::-webkit-scrollbar": { height: 8 },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(255,255,255,0.22)",
                  borderRadius: 2,
                },
              }}
            >
              {conf.images.map((src, i) => {
                const selected = i === lightboxIndex;
                return (
                  <Box
                    key={`lb-${src}-${i}`}
                    onClick={() => setLightboxIndex(i)}
                    sx={{
                      flex: "0 0 auto",
                      borderRadius: 1,
                      overflow: "hidden",
                      cursor: "pointer",
                      outline: selected ? "3px solid #FFFFFF" : "2px solid transparent",
                      outlineOffset: selected ? 2 : 0,
                      opacity: selected ? 1 : 0.72,
                      transition: "opacity 160ms ease, transform 160ms ease, outline 160ms ease",
                      "&:hover": { opacity: 1, transform: "translateY(-2px)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={`lb-thumb-${i}`}
                      sx={{
                        width: { xs: 120, md: 150 },
                        height: { xs: 68, md: 84 },
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                );
              })}
            </Stack>

            
          </Box>
        </Box>
      </Dialog>
    </Container>
  );
}