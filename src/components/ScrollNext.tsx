import { Box, Typography, keyframes, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect, useRef } from "react";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(5px); }
  60% { transform: translateY(3px); }
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

  const svgDrawDuration = 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
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

  const lineStyles = {
    content: '""',
    position: "absolute",
    top: "50%",
    width: { xs: "50px", lg: "100px" },
    height: "0.85px",
    bgcolor: theme.palette.secondary.main,
    transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease",
    transitionDelay: `${delay + svgDrawDuration}s`,
    // Idle opacity of the wings
    opacity: isVisible ? 0.5 : 0,
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        mb: 2,
        zIndex: "99",
      }}
    >
      <Box
        ref={ref}
        onClick={handleScroll}
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
          padding: "10px 30px 5px 30px",
          // 1. Idle opacity set to 0.5 when visible
          opacity: isVisible ? 0.5 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(15px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          // transitionDelay: `${delay}s`,

          "&::before": {
            ...lineStyles,
            right: "calc(100% + 20px)",
            transformOrigin: "right",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          },

          "&::after": {
            ...lineStyles,
            left: "calc(100% + 20px)",
            transformOrigin: "left",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          },

          // 2. Hover logic for opacity and arrow translation
          "&:hover": {
            opacity: 1, // Brings the whole button to full opacity
            "&::before, &::after": {
              opacity: 1, // Also brightens the side lines
            },
            ".MuiSvgIcon-root": {
              transform: "translateY(2px)", // Translates the arrow on hover
            },
          },
        }}
      >
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
            rx="30"
            ry="30"
            width="100%"
            height="100%"
            fill="none"
            stroke={theme.palette.secondary.main}
            strokeWidth="0.85"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={isVisible ? "0" : "1"}
            style={{
              transition: `stroke-dashoffset ${svgDrawDuration}s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: `${delay}s`,
            }}
          />
        </svg>

        <Typography
          variant="navButton"
          color="secondary"
          sx={{
            fontSize: "0.7rem",
            letterSpacing: 2,
          }}
        >
          {label.toUpperCase()}
        </Typography>

        <KeyboardArrowDownIcon
          color="secondary"
          sx={{
            animation: `${bounce} 4s 2`,
            fontSize: "1.1rem",
            mt: 0.5,
            // Smooth transition for the hover translation
            transition: "transform 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};
