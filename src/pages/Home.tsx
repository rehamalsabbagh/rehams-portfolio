import { Box, Chip, Typography, useTheme } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ScrollNext } from "../components/ScrollNext";
import { sectionBaseStyles } from "../components/style";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection_";

/**
 * Reusable Animation Wrapper
 * Controls opacity and translation based on scroll
 */
export const Reveal = ({
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
        transition: `all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
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
export const NavChip = ({ label }: { label: string }) => (
  <Chip
    label={label}
    variant="outlined"
    color="primary"
    sx={{
      transition: "0.3s opacity",
      opacity: 0.4,
      "&:hover": { opacity: 1 },
    }}
  />
);

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
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: 4, textAlign: "center", maxWidth: "1200px" }}>
          {/* POSTER NAME WITH DELAYED CHARACTER ANIMATION */}
          <Reveal direction="up">
            <Typography
              variant="poster"
              sx={{
                marginBottom: "4vh",
                display: "block",
                letterSpacing: { xs: 8, md: 15 },
                fontSize: { xs: "3rem", md: "6rem" }, // Responsive sizing
                fontWeight: 900,
                textTransform: "uppercase",
                background:
                  "linear-gradient(180deg, #292929 30%, #535353 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REHAM ALSABBAGH
            </Typography>

            {/* TITLES WITH STAGGERED FADE-IN */}
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                color: "secondary.main",
                fontWeight: 300, // Thinner weight looks more "Senior/Expert"
                textTransform: "uppercase",
                letterSpacing: 4,
              }}
            >
              Senior Web Developer
            </Typography>
          </Reveal>

          {/* THE STATEMENT */}
          <Reveal direction="up" delay={0.7}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "primary.main",
                lineHeight: 1.8,
                opacity: 0.8,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Crafting high-fidelity, accessible digital experiences where UX
              design meets scalable frontend engineering.
            </Typography>
          </Reveal>
        </Box>

        {/* SCROLL INDICATOR */}
        <Box display="flex" position="absolute" bottom="3vh">
          <ScrollNext targetId="about" label="Learn More" delay={1.7} />
        </Box>
      </Box>

      {/* SECTION 2: ABOUT */}
      <AboutSection
        aboutRef={aboutRef}
        isAboutMeVisible={isAboutMeVisible}
      ></AboutSection>

      {/* SECTION 3: PROJECT 1 (Text from bottom, Image from right) */}
      <ProjectSection
        id="projects"
        title="3D Plane Seat Configurator"
        subtitle="Enterprise Architecture & 3D Visualization"
        description="An enterprise React and Three.js application for real-time aircraft customization that leverages a centralized CSV structure to dynamically manage seating, pricing, and 3D visualizations within an AWS-integrated, data-driven workflow."
        linkTo="/projects/3d-plane-seat-configurator"
        baseImg="/assets/22-3d-config.png"
        hoverImg="/assets/23-3d-config.png"
        nextTargetId="project2"
        sectionBaseStyles={sectionBaseStyles}
      ></ProjectSection>

      {/* SECTION 4: PROJECT 2 (Text from bottom, Image from left) */}
      <ProjectSection
        id="project2"
        title="2D 360° Vehicle Configurator"
        subtitle="Layered 360° Rendering & Data-Driven Configuration"
        description="A high-performance vehicle configurator utilizing frame-based rendering and layered image stacks to enable real-time customization. Built on a modular, data-driven architecture, and supports persistent state management and automated PDF summaries."
        linkTo="/projects/2d-vehicle-configurator"
        baseImg="/assets/17-2d-config-.png"
        hoverImg="/assets/18-2d-config-.png"
        nextTargetId="project3"
        sectionBaseStyles={sectionBaseStyles}
        imageFirst={true}
      ></ProjectSection>

      {/* SECTION 5: PROJECT 3 (Text from bottom, Image from right) */}
      <ProjectSection
        id="project3"
        title="Payment Gateway Website & CMS"
        subtitle="Multilingual Regional Platform & Internal CMS"
        description="A multilingual enterprise platform and custom CMS leveraging an atomic UI design system and dynamic database architecture to deliver region-specific payment services and localized content governance across nine international markets."
        linkTo="/projects/online-gateway-website"
        baseImg="/assets/19-tap-payments.png"
        hoverImg="/assets/20-tap-payments.png"
        mobileImg="/assets/21-tap-payments.png"
        nextTargetId=""
        sectionBaseStyles={sectionBaseStyles}
        // imageFirst={true}
      ></ProjectSection>
    </Box>
  );
};

export default Home;
