import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom"; // Or your routing library
import { Reveal } from "../pages/Home";
import { ScrollNext } from "./ScrollNext";

/**
 * MacBook Preview Component (Handles the hover effect)
 */

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  linkTo: string;
  baseImg: string;
  hoverImg: string;
  nextTargetId: string;
  imageFirst?: boolean; // Controls row order
  sectionBaseStyles: any;
}

export const ProjectSection = ({
  id,
  title,
  subtitle,
  description,
  linkTo,
  baseImg,
  hoverImg,
  nextTargetId,
  imageFirst = false,
  sectionBaseStyles,
}: ProjectSectionProps) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      sx={{
        ...sectionBaseStyles,
        position: "relative",
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          lg: imageFirst ? "row-reverse" : "row",
        },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1, lg: "5vw" },
      }}
    >
      {/* TEXT CONTENT COLUMN */}
      <Box
        sx={{
          width: { xs: "100%", lg: "25vw" },
          zIndex: 3,
          p: { xs: 1, lg: 4 },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Reveal direction="up">
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: -0.5,
              fontSize: { xs: "1.8rem", lg: "2.2rem" },
              lineHeight: 1.1,
              marginBottom: "1.5vh",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 3,
              mt: 1.5,
              mb: 3,
              fontSize: "1rem",
            }}
          >
            {subtitle}
          </Typography>

          <Typography
            variant="body1"
            color="primary"
            sx={{
              lineHeight: 1.8,
              opacity: 0.85,
              fontSize: "1rem",
            }}
          >
            {description}
          </Typography>

          <Link to={linkTo} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                mt: 4,
                color: "secondary.main",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  gap: 1.5,
                  borderBottomColor: "secondary.main",
                },
              }}
            >
              Read Case Study {">"}
            </Typography>
          </Link>
        </Reveal>
      </Box>

      {/* IMAGE / PREVIEW COLUMN */}
      <Box
        sx={{
          width: { xs: "100%", lg: "45vw" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Reveal direction={imageFirst ? "left" : "right"} delay={0.2}>
          <MacbookPreview baseImg={baseImg} hoverImg={hoverImg} />
        </Reveal>
      </Box>

      {/* NAVIGATION */}
      <Box display="flex" position="absolute" bottom="3vh">
        <ScrollNext targetId={nextTargetId} label="Next Project" delay={1.3} />
      </Box>
    </Box>
  );
};

const MacbookPreview = ({
  baseImg,
  hoverImg,
}: {
  baseImg: string;
  hoverImg: string;
}) => {
  const publicPath = process.env.PUBLIC_URL;
  const commonStyles = {
    height: { xs: "190px", sm: "350px", lg: "50vh" },
    minWidth: "280px",
    position: "absolute" as const,
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "190px", sm: "350px", lg: "50vh" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Base Image */}
      <Box
        component="img"
        src={`${publicPath}${baseImg}`}
        sx={commonStyles}
        alt="base"
      />

      {/* Hover Image */}
      <Box
        component="img"
        src={`${publicPath}${hoverImg}`}
        alt="hover"
        sx={{
          ...commonStyles,
          opacity: 0,
          transition: "opacity 0.3s ease",
          "&:hover": { opacity: 1 },
        }}
      />

      {/* Frame (Always on Top) */}
      <Box
        component="img"
        src={`${publicPath}/assets/apple-macbookpro16-front.png`}
        sx={{ ...commonStyles, pointerEvents: "none" }}
        alt="macbook frame"
      />
    </Box>
  );
};
