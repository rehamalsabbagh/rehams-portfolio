import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

interface TimelineProps {
  projects: { id: string; title: string }[];
}

export const ProjectTimeline = ({ projects }: TimelineProps) => {
  const [activeId, setActiveId] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            setIsVisible(true); // Show timeline when projects are in view
          }
        });

        // Specific check: if the first project is above the fold, hide the timeline
        const firstEntry = entries.find((e) => e.target.id === projects[0].id);
        if (
          firstEntry &&
          !firstEntry.isIntersecting &&
          firstEntry.boundingClientRect.top > 0
        ) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // 50% of the project must be visible to highlight it
        rootMargin: "-10% 0px -10% 0px", // Slight offset to feel more natural
      },
    );

    // Start observing all project IDs passed in props
    projects.forEach((proj) => {
      const el = document.getElementById(proj.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        left: "2vw",
        top: "50%",
        transform: "translateY(-50%)",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 4,
        zIndex: -1,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: isVisible ? "auto" : "none",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        pl: 3,
        borderLeft: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {projects.map((proj, index) => {
        const isActive = activeId === proj.id;
        return (
          <Box
            key={proj.id}
            onClick={() => scrollTo(proj.id)}
            sx={{
              cursor: "pointer",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                opacity: isActive ? 1 : 0.7,
              },
              opacity: isActive ? 1 : 0.3,
            }}
          >
            {/* Active Indicator Bar */}
            <Box
              sx={{
                position: "absolute",
                left: "-25px",
                top: "15%",
                height: "70%",
                width: "3px",
                bgcolor: "secondary.main",
                transform: isActive ? "scaleY(1)" : "scaleY(0)",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: "center",
              }}
            />
            <Box
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontWeight: 900,
                  color: "secondary.main",
                  mb: 0.5,
                  cursor: "pointer",
                }}
              >
                0{index + 1}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.7rem !important",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  maxWidth: "100px",
                  lineHeight: 1.3,
                  cursor: "pointer",
                  color: "primary.main",
                }}
              >
                {proj.title}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
