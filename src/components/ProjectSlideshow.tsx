import React from "react";
import { Box, useTheme, alpha } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

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
        "& .swiper": {
          width: "100%",
          paddingTop: "50px",
          paddingBottom: "50px",
        },
        ".swiper-coverflow": {
          // overflow: "visible",
        },
        "& .swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: { xs: "280px", md: "80%" }, // Adjust size based on your screenshots
          height: { xs: "200px", md: "auto" },
          filter: "blur(0.5px)",
          transition: "filter 0.3s ease",
        },
        "& .swiper-slide-active": {
          filter: "blur(0px)",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0, // Keeps images flat (minimalist)
          stretch: 600, // Negative value pulls the side images CLOSER to the center (overlapping behind)
          depth: 250, // Higher value pushes side images further "back" in 3D space
          modifier: 1, // Effect multiplier
          scale: 0.8, // Side images will be 80% the size of the center image
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
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
