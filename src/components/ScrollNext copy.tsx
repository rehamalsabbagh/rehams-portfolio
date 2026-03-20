import { Box, Typography, keyframes, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect, useRef } from "react";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(5px);}
  60% {transform: translateY(3px);}
`;

export const ScrollNext = ({
  targetId,
  label,
  delay = 1.2,
}: {
  targetId: string;
  label: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Internal morph state
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // 1. Initial Fade-in Observer
  useEffect(() => {
    const appearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) appearObserver.observe(ref.current);
    return () => appearObserver.disconnect();
  }, [delay]);

  // 2. Internal Scroll Monitor
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Logic: If the component's top edge moves above 70% of the screen height,
      // it means the user is scrolling "into" the next section.
      if (rect.top < windowHeight * 0.2) {
        setIsCollapsed(true);
      } else if (rect.top > windowHeight * 0.9) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAction = () => {
    // 3. Click triggers both the scroll and the morph
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setIsCollapsed(true);
  };

  return (
    <Box
      ref={ref}
      onClick={handleAction}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: isCollapsed ? "default" : "pointer",
        position: "relative",
        padding: isCollapsed ? "0" : "10px 30px 5px 30px",
        height: isCollapsed ? "0px" : "60px",
        width: "auto",
        minWidth: "160px",
        mt: 8,
        mb: 2,
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: isCollapsed ? "0.4s" : "0s",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: isCollapsed ? "1px" : "100%",
          pointerEvents: "none",
          overflow: "visible",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: isCollapsed ? "0.4s" : "0s",
        }}
      >
        <rect
          x="0"
          y="0"
          rx={isCollapsed ? "0" : "30"}
          ry={isCollapsed ? "0" : "30"}
          width="100%"
          height="100%"
          fill="none"
          stroke={theme.palette.secondary.main}
          strokeWidth="0.85"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={isVisible ? "0" : "1"}
          style={{
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isCollapsed ? "0.4s" : "0s",
          }}
        />
      </svg>

      <Box
        sx={{
          opacity: isCollapsed ? 0 : 0.6,
          visibility: isCollapsed ? "hidden" : "visible",
          // transform: isCollapsed ? "scale(0.8)" : "scale(1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "opacity 0.4s ease, transform 0.4s ease, visibility 0.4s",
          transitionDelay: isCollapsed ? "0s" : "0.8s",
        }}
      >
        <Typography
          variant="navButton"
          color="secondary"
          sx={{ fontSize: "0.75rem", letterSpacing: 2 }}
        >
          {label.toUpperCase()}
        </Typography>
        <KeyboardArrowDownIcon
          color="secondary"
          sx={{ animation: `${bounce} 4s infinite` }}
        />
      </Box>
    </Box>
  );
};
