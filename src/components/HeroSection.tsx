import React, { ReactNode } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { ScrollNext } from "./ScrollNext";
import { NavChip, Reveal } from "../pages/Home";
import { sectionBaseStyles } from "./style";

interface HeroProps {
  type: "home" | "project";
  title: string;
  subtitle: string;
  description?: string;
  chips?: string[];
  devicePreview?: ReactNode;
  targetId: string;
  scrollLabel: string;
}

export const HeroSection = ({
  type,
  title,
  subtitle,
  description,
  chips,
  devicePreview,
  targetId,
  scrollLabel,
}: HeroProps) => {
  const isProject = type === "project";

  return (
    <Box sx={sectionBaseStyles}>
      <Box
        sx={{
          px: 4,
          mt: { xs: "-3vh", lg: "-8vh" },
          textAlign: "center",
          maxWidth: "1200px",
          //   minWidth: { xs: "190px", lg: "auto" },
          zIndex: 2,
        }}
      >
        {/* 1. Device Preview (Project Only) */}
        {isProject && devicePreview && (
          <Reveal direction="down" delay={0.2}>
            <Box
              sx={{
                mb: { xs: 4, lg: 0 },
                transform: "scale(1)",
                transition: "transform 0.5s ease-out",
              }}
            >
              {devicePreview}
            </Box>
          </Reveal>
        )}

        {/* 2. Title & Subtitle Group */}
        <Reveal direction="up" delay={0.4}>
          <Typography
            variant={isProject ? "h2" : "poster"}
            sx={{
              marginBottom: "1vh",
              display: "block",
              background: "linear-gradient(180deg, #292929 30%, #535353 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: "secondary.main",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: { xs: 3, md: 6 },
              fontSize: { xs: "0.85rem", md: "1.2rem" },
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
        </Reveal>

        {/* 3. Description (Home) or Chips (Project) */}
        {!isProject ? (
          <Reveal direction="up" delay={0.8}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                fontStyle: "italic",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              {description}
            </Typography>
          </Reveal>
        ) : (
          <Reveal direction="up" delay={0.8}>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              //   sx={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {chips?.map((tech) => (
                <NavChip key={tech} label={tech} />
              ))}
            </Stack>
          </Reveal>
        )}
      </Box>

      {/* 4. Scroll Indicator */}
      <Box sx={{ display: "flex", position: "absolute", bottom: "0" }}>
        <ScrollNext targetId={targetId} label={scrollLabel} delay={1.6} />
      </Box>
    </Box>
  );
};
