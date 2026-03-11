import { Box, Chip, Typography, useTheme } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { ScrollNext } from "../components/ScrollNext";
import { Download, DownloadDoneSharp } from "@mui/icons-material";

/**
 * Reusable Animation Wrapper
 * Controls opacity and translation based on scroll
 */
const Reveal = ({
  children,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => {
            setIsVisible(true);
          }, 500);
        // else setIsVisible(false);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      default:
        return "none";
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

/**
 * Reusable Chip Component
 */
const NavChip = ({ label }: { label: string }) => (
  <Chip
    label={label}
    variant="outlined"
    color="primary"
    sx={{
      transition: "0.3s opacity",
      opacity: 0.4,
      cursor: "pointer",
      "&:hover": { opacity: 1 },
    }}
  />
);

/**
 * MacBook Preview Component (Handles the hover effect)
 */
const MacbookPreview = ({
  baseImg,
  hoverImg,
}: {
  baseImg: string;
  hoverImg: string;
}) => {
  const publicPath = process.env.PUBLIC_URL;
  const commonStyles = {
    height: "55vh",
    minWidth: "280px",
    position: "absolute" as const,
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "55vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Base Image */}
      <img src={`${publicPath}${baseImg}`} style={commonStyles} alt="base" />

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
      <img
        src={`${publicPath}/assets/apple-macbookpro16-front.png`}
        style={{ ...commonStyles, pointerEvents: "none" }}
        alt="macbook frame"
      />
    </Box>
  );
};

const Home = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setIsAboutMeVisible(true), 500);
        } else {
          clearTimeout(timer);
          setIsAboutMeVisible(false);
        }
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Shared styles for sections
  const sectionBaseStyles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    gap: "3vw",
    position: "relative",
    px: { xs: 4, md: 0 },
    overflow: "hidden",
  };

  return (
    <Box
      sx={{
        backgroundColor: isAboutMeVisible
          ? // ? "linear-gradient(180deg, #ffffff00, #0000ff17, #0000ff26, #ffffff00)"
            "#0000ff17"
          : "transparent",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* SECTION 1: HERO */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <AnimatedSection>
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="poster"
              sx={{ marginBottom: "7vh", display: "block", letterSpacing: 10 }}
            >
              REHAM ALSABBAGH
            </Typography>
            <Typography
              variant="h2"
              sx={{ mb: 2, color: "secondary.main", fontWeight: 700 }}
            >
              Senior Web Developer
            </Typography>
            {/* <Box
              display="flex"
              gap={1}
              justifyContent={"center"}
              left={0}
              right={0}
              marginBottom={"3vh"}
            >
              {[
                "React",
                "TypeScript",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Tailwind",
                "Sass",
              ].map((label) => (
                <NavChip key={label} label={label} />
              ))}
            </Box>
            <Box
              display="flex"
              gap={1}
              justifyContent={"center"}
              left={0}
              right={0}
            >
              {["Redux", "React Query", "REST APIs", "GraphQL"].map((label) => (
                <NavChip key={label} label={label} />
              ))}
            </Box> */}
          </Box>
        </AnimatedSection>

        <Box display="flex" position="absolute" bottom="3vh">
          <ScrollNext targetId="about" label="About" delay={0.7} />
        </Box>
      </Box>

      {/* SECTION 2: ABOUT */}
      <Box
        id="about"
        ref={aboutRef}
        sx={{
          ...sectionBaseStyles,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column", // Stack content and the ScrollNext button
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 1. THE CONTENT WRAPPER: This defines the border's size */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: { xs: "40px 20px", md: "4vh 3vh" }, // Internal spacing from the border
            gap: "2vw",
            width: "fit-content", // Shrinks the box to hug the avatar + text
            maxWidth: "90vw",
          }}
        >
          {/* THE SVG BORDER: Now relative to THIS box */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            <rect
              x="0"
              y="0"
              rx="40"
              ry="40"
              width="100%"
              height="100%"
              fill="none"
              stroke={theme.palette.secondary.main}
              strokeWidth="0.7"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={isAboutMeVisible ? "0" : "1"}
              style={{
                transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </svg>

          {/* 2. AVATAR BOX: Smaller width */}
          <Box
            sx={{
              width: { xs: "100%", md: "20vw" },
              textAlign: "center",
              zIndex: 3,
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/reham-alsabbagh.png`}
              alt="Reham avatar"
              style={{
                width: "100%",
                maxWidth: "280px",
                borderRadius: "500px",
                opacity: isAboutMeVisible ? 1 : 0,
                transform: isAboutMeVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 1s ease-out",
              }}
            />
          </Box>

          {/* 3. TEXT BOX: Larger width */}
          <Box
            sx={{
              width: { xs: "100%", md: "45vw" },
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" sx={{ color: "secondary.main", mb: 3 }}>
              About Me
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", lineHeight: 1.6 }}
            >
              Senior Frontend Developer with 9+ years of experience delivering
              high-quality, accessible web applications for fintech and
              enterprise clients. Expert in React, modern UI architectures, and
              translating UX designs into scalable, maintainable code.
              Experienced in leading frontend projects, building design systems,
              and collaborating closely with product and UX teams. Holds a
              Master’s in UX Design.
            </Typography>

            {/* Skills Grouping */}
            <Box
              sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Reveal delay={0.2}>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {[
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Component-driven",
                    "HTML5",
                    "CSS3",
                    "Tailwind",
                    "Sass",
                  ].map((s) => (
                    <NavChip key={s} label={s} />
                  ))}
                </Box>
              </Reveal>
              <Reveal delay={0.2}>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {[
                    "Redux",
                    "React Query",
                    "REST",
                    "GraphQL",
                    "React Testing Library",
                  ].map((s) => (
                    <NavChip key={s} label={s} />
                  ))}
                </Box>
              </Reveal>

              <Reveal delay={0.2}>
                <Box display={"flex"} flexWrap="wrap" gap={1}>
                  {["Git", "Unity DevOps", "Webpack", "Agile", "Scrum"].map(
                    (label) => (
                      <NavChip key={label} label={label} />
                    ),
                  )}
                </Box>
              </Reveal>
              {/* <Reveal delay={0.2}>
                <Box
                  display={"flex"}
                  gap={"7px"}
                  marginTop={"2vh"}
                  justifyContent={"flex-end"}
                  alignItems={"anchor-center"}
                >
                  <Typography variant="body1">Download Resume</Typography>
                  <Download sx={{ fontSize: "1em", verticalAlign: "bottom" }} />
                </Box>
              </Reveal> */}
            </Box>
          </Box>
        </Box>

        {/* 4. SCROLL BUTTON: Outside the border box */}
        <Box display="flex" position="absolute" bottom="3vh">
          <ScrollNext targetId="projects" label="Projects" delay={2.2} />
        </Box>
      </Box>

      {/* SECTION 3: PROJECT 1 (Text from bottom, Image from right) */}
      <Box id="projects" sx={sectionBaseStyles}>
        <Box sx={{ width: { xs: "100%", md: "25vw" }, zIndex: 3, p: 4 }}>
          <Reveal direction="up">
            <Typography variant="h2" color="secondary" sx={{ mb: 3 }}>
              3D Plane Seat Configurator
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ lineHeight: 1.6 }}
            >
              The 3D Plane Seat Configurator is an enterprise React and Three.js
              application for customizing aircraft layouts in real time. Driven
              by a centralized CSV structure, the platform dynamically manages
              seat components, pricing, and 3D visualizations. This
              AWS-integrated system streamlines complex engineering into a
              seamless, data-driven workflow.
            </Typography>
            <Link to="" style={{ textDecoration: "none" }}>
              <Typography color="secondary" sx={{ mt: 3 }}>
                {"Read More >"}
              </Typography>
            </Link>
          </Reveal>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "45vw" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Reveal direction="right" delay={0.2}>
            <MacbookPreview
              baseImg="/assets/15-3d-config-.png"
              hoverImg="/assets/16-3d-config-.png"
            />
          </Reveal>
        </Box>

        <Box display="flex" position="absolute" bottom="3vh">
          <ScrollNext targetId="project2" label="Next Project" delay={1.3} />
        </Box>
      </Box>

      {/* SECTION 4: PROJECT 2 (Text from bottom, Image from left) */}
      <Box id="project2" sx={sectionBaseStyles}>
        <Box
          sx={{
            width: { xs: "100%", md: "45vw" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Reveal direction="left" delay={0.2}>
            <MacbookPreview
              baseImg="/assets/17-2d-config-.png"
              hoverImg="/assets/18-2d-config-.png"
            />
          </Reveal>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "25vw" }, zIndex: 3, p: 4 }}>
          <Reveal direction="up">
            <Typography variant="h2" color="secondary" sx={{ mb: 3 }}>
              2D 360° Vehicle Configurator
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ lineHeight: 1.6 }}
            >
              The 3D Plane Seat Configurator is an enterprise React and Three.js
              application for customizing aircraft layouts in real time. Driven
              by a centralized CSV structure, the platform dynamically manages
              seat components, pricing, and 3D visualizations. This
              AWS-integrated system streamlines complex engineering into a
              seamless, data-driven workflow.
            </Typography>
            <Link to="" style={{ textDecoration: "none" }}>
              <Typography color="secondary" sx={{ mt: 3 }}>
                {"Read More >"}
              </Typography>
            </Link>
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
