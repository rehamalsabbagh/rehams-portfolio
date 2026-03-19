import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Reveal } from "../pages/Home";
import { ScrollNext } from "./ScrollNext";

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  linkTo: string;
  baseImg: string;
  hoverImg: string;
  mobileImg?: string; // New Optional Prop
  nextTargetId: string;
  imageFirst?: boolean;
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
  mobileImg,
  nextTargetId,
  imageFirst = false,
  sectionBaseStyles,
}: ProjectSectionProps) => {
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
              mb: "1.5vh",
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
            sx={{ lineHeight: 1.8, opacity: 0.85, fontSize: "1rem" }}
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
                "&:hover": { gap: 1.5, borderBottomColor: "secondary.main" },
              }}
            >
              Read Case Study {">"}
            </Typography>
          </Link>
        </Reveal>
      </Box>

      {/* DEVICE PREVIEW COLUMN */}
      <Box
        sx={{
          width: { xs: "100%", lg: "45vw" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Reveal direction={imageFirst ? "left" : "right"} delay={0.2}>
          <DevicePreview
            baseImg={baseImg}
            hoverImg={hoverImg}
            mobileImg={mobileImg}
          />
        </Reveal>
      </Box>

      <Box display="flex" position="absolute" bottom="3vh">
        <ScrollNext targetId={nextTargetId} label="Next Project" delay={1.3} />
      </Box>
    </Box>
  );
};

/**
 * DevicePreview handles both Macbook and (optional) Phone frames
 */
const DevicePreview = ({
  baseImg,
  hoverImg,
  mobileImg,
}: {
  baseImg: string;
  hoverImg: string;
  mobileImg?: string;
}) => {
  const publicPath = process.env.PUBLIC_URL || "";

  // Shared sizes for MacBook elements
  const macSizes = {
    height: { xs: "190px", sm: "350px", lg: "50vh" },
    width: "auto",
    display: "block",
  };

  return (
    <Box
      sx={{
        position: "relative",
        // The container height should match the MacBook height to stay centered with text
        height: { xs: "190px", sm: "350px", lg: "50vh" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // This keeps it vertically centered with the text column
      }}
    >
      {/* 1. MACBOOK GROUP (The Anchor) */}
      <Box sx={{ position: "relative", lineHeight: 0 }}>
        {/* Base Screenshot */}
        <Box
          component="img"
          src={`${publicPath}${baseImg}`}
          sx={{ ...macSizes }}
          alt="base"
        />

        {/* Hover Screenshot */}
        <Box
          component="img"
          src={`${publicPath}${hoverImg}`}
          alt="hover"
          sx={{
            ...macSizes,
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            transition: "opacity 0.3s ease",
            "&:hover": { opacity: 1 },
          }}
        />

        {/* MacBook Frame (Always on Top) */}
        <Box
          component="img"
          src={`${publicPath}/assets/apple-macbookpro16-front.png`}
          sx={{
            ...macSizes,
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
          alt="macbook frame"
        />

        {/* 2. PHONE GROUP (Overlaid on the Anchor) */}
        {mobileImg && (
          <Box
            sx={{
              position: "absolute",
              height: { xs: "110px", sm: "200px", lg: "28vh" },
              // bottom: { xs: "-15px", lg: "-25px" }, // Positioned relative to MacBook bottom
              // left: { xs: "-5%", lg: "-10%" }, // Positioned relative to MacBook left
              bottom: 0,
              left: 0,
              zIndex: 10,
              filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.4))",
              lineHeight: 0,
            }}
          >
            {/* Phone Screenshot */}
            <Box
              component="img"
              src={`${publicPath}${mobileImg}`}
              sx={{
                height: "100%",
                width: "auto",
                position: "absolute",
                // top: "3%",
                // left: "50%",
                // transform: "translateX(-50%)",
                borderRadius: { xs: "6px", lg: "12px" },
                zIndex: 1,
              }}
              alt="mobile screenshot"
            />
            {/* Phone Frame */}
            <Box
              component="img"
              src={`${publicPath}/assets/Iphone-Frame-PNG-File.png`}
              sx={{
                height: "100%",
                width: "auto",
                position: "relative",
                zIndex: 2,
                pointerEvents: "none",
              }}
              alt="phone frame"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
