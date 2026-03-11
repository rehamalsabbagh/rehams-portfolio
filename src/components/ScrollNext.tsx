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
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      ref={ref}
      onClick={handleScroll}
      sx={{
        display: "inline-flex", // Ensures box hugs the text size
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        padding: "10px 30px 5px 30px",
        mt: 6,
        opacity: isVisible ? 0.6 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        ":hover": {
          opacity: isVisible ? 1 : 0,
        },
      }}
    >
      {/* Dynamic SVG Rounded Border */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "visible", // Prevents stroke clipping
        }}
      >
        <rect
          x="0"
          y="0"
          rx="30" // Adjust for roundness
          ry="30"
          width="100%"
          height="100%"
          fill="none"
          stroke={theme.palette.secondary.main} // Dynamically gets your theme color
          strokeWidth="0.85"
          pathLength="1" // Normalizes the path to 1
          strokeDasharray="1"
          strokeDashoffset={isVisible ? "0" : "1"} // 1 = fully hidden, 0 = fully drawn
          style={{
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>

      <Typography
        variant="navButton"
        color="secondary"
        sx={{
          mb: 0.5,
          marginBottom: 0,
        }}
      >
        {label.toUpperCase()}
      </Typography>
      <KeyboardArrowDownIcon
        color="secondary"
        sx={{ animation: `${bounce} 4s 3` }}
      />
    </Box>
  );
};
