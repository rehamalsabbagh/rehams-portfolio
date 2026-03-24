import React from "react";
import { Box, useTheme, alpha } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  images: string[];
}

export const ProjectSlideshow = ({ images }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        overflow: "hidden", // Prevents horizontal scrollbar during transitions
        "& .swiper": {
          width: "100%",
          paddingY: "50px",
          perspective: "1200px", // Adds depth to the 3D effect
        },
        "& .swiper-slide": {
          width: { xs: "300px", md: "900px" }, // Fixed widths work better for Coverflow
          height: "auto",
          transition: "opacity 0.3s ease", // Only transition opacity, NOT filter or transform
          opacity: 0.4,
          "& img": {
            display: "block",
            width: "100%",
            borderRadius: "12px",
            // Force hardware acceleration for the image itself
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          },
        },
        "& .swiper-slide-active": {
          opacity: 1,
          zIndex: 10,
          color: theme.palette.secondary.main,
        },
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        speed={600} // Smoother transition speed
        coverflowEffect={{
          rotate: 0,
          stretch: 150, // Reduced from 600 to pull them in reasonably
          depth: 200, // Pushes side slides back
          modifier: 1,
          scale: 0.85, // Scale side slides
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={process.env.PUBLIC_URL + src}
              alt={`Project screenshot ${index}`}
              sx={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
