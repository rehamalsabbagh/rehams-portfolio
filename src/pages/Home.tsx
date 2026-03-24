import { Box, Chip, Typography, useTheme } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ScrollNext } from "../components/ScrollNext";
import { sectionBaseStyles } from "../components/style";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection_";
import { ProjectTimeline } from "../components/ProjectTimeLine";
import { HeroSection } from "../components/HeroSection";
import { useSectionObserver } from "../hooks/SectionObserver";
import { projects } from "../data/projects";
import { title } from "process";

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
  direction?: "up" | "left" | "right" | "down";
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
      case "down":
        return "translateY(-50px)";
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
  // const theme = useTheme();

  // const projectsList = [
  //   { id: "projects", title: "3D Plane Seat Configurator" },
  //   { id: "project2", title: "2D 360° Vehicle Configurator" },
  //   { id: "project3", title: "Configurator Admin Portal" },
  //   { id: "project4", title: "Examiner Avatar Simulator" },
  //   { id: "project5", title: "Payment Gateway & CMS" },
  // ];

  return (
    <Box
      sx={{
        // backgroundColor: isAboutMeVisible ? "#0000ff17" : "transparent",
        transition: "background-color 0.5s ease",
      }}
    >
      <HeroSection
        type="home"
        title="REHAM ALSABBAGH"
        subtitle="Senior Web Developer"
        description="Crafting high-fidelity, accessible digital experiences where UX design meets scalable frontend engineering."
        targetId="about"
        scrollLabel="Learn More"
      />
      {/* SECTION 2: ABOUT */}
      <AboutSection></AboutSection>

      <Box sx={{ position: "relative" }}>
        <ProjectTimeline
          projects={projects.map((project, idx) => ({
            id: `project${idx + 1}`,
            title: project.title,
          }))}
        />

        {/* Shift your sections slightly right to accommodate the timeline */}
        <Box>
          {/* SECTION 3: PROJECT 1 (Text from bottom, Image from right) */}
          <ProjectSection
            id="project1"
            title="3D Plane Seat Configurator"
            subtitle="Enterprise Architecture & 3D Visualization"
            description="An enterprise React and Three.js application for real-time aircraft customization that leverages a centralized CSV structure to dynamically manage seating, pricing, and 3D visualizations within an AWS-integrated, data-driven workflow."
            linkTo="/projects/3d-plane-seat-configurator"
            baseImg="/assets/22-3d-config.png"
            hoverImg="/assets/23-3d-config.png"
            nextTargetId="project2"
            sectionBaseStyles={sectionBaseStyles}
            imageFirst={true}
          ></ProjectSection>

          {/* SECTION 4: PROJECT 2 (Text from bottom, Image from left) */}
          <ProjectSection
            id="project2"
            title="2D 360° Vehicle Configurator"
            subtitle="Layered 360° Rendering & Data-Driven Configuration"
            description="A high-performance vehicle configurator utilizing frame-based rendering and layered image stacks to enable real-time customization. Built on a modular, data-driven architecture, and supports persistent state management and automated DOC summaries."
            linkTo="/projects/2d-vehicle-configurator"
            baseImg="/assets/17-2d-config-.png"
            hoverImg="/assets/18-2d-config-.png"
            nextTargetId="project3"
            sectionBaseStyles={sectionBaseStyles}
            imageFirst={false}
          ></ProjectSection>

          <ProjectSection
            id="project3"
            title="Configurator Admin Portal"
            subtitle="Infrastructure Management & RBAC"
            description="A secure, data-driven administrative control plane utilizing AWS Cognito and S3 to orchestrate user permissions, real-time pricing logic, and global asset management for the 3D configurator ecosystem."
            linkTo="/projects/configurator-admin-control-plane"
            baseImg="/assets/24-admin-app-01.png"
            hoverImg="/assets/25-admin-app-02.png"
            nextTargetId="project4"
            sectionBaseStyles={sectionBaseStyles}
            imageFirst={true}
          ></ProjectSection>

          <ProjectSection
            id="project4"
            title="Examiner Avatar Simulator"
            subtitle="Conversational AI Visualization & State-Based Animation"
            description="A high-fidelity 3D simulation environment using Three.js to synchronize lifelike facial animations with voice synthesis, featuring a randomized behavioral engine to eliminate mechanical repetition."
            linkTo="/projects/examiner-avatar-simulator"
            baseImg="/assets/21-avatar-01.png"
            hoverImg="/assets/22-avatar-02.png"
            nextTargetId="project5"
            sectionBaseStyles={sectionBaseStyles}
            imageFirst={false} // Set to false to alternate the layout from the previous section
          ></ProjectSection>

          {/* SECTION 5: PROJECT 3 (Text from bottom, Image from right) */}
          <ProjectSection
            id="project5"
            title="Payment Gateway Website & CMS"
            subtitle="Multilingual Regional Platform & Internal CMS"
            description="A multilingual enterprise platform and custom CMS leveraging an atomic UI design system and dynamic database architecture to deliver region-specific payment services and localized content governance across nine international markets."
            linkTo="/projects/online-gateway-website"
            baseImg="/assets/19-tap-payments.png"
            hoverImg="/assets/20-tap-payments.png"
            mobileImg="/assets/21-tap-payments.png"
            nextTargetId={null}
            sectionBaseStyles={sectionBaseStyles}
            imageFirst={true}
          ></ProjectSection>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
