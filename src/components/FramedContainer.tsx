import { Box, useTheme, SxProps, Theme } from "@mui/material";
import React from "react";

interface FramedContainerProps {
  children: React.ReactNode;
  isVisible: boolean;
  // Use MUI's internal type for padding to ensure compatibility
  padding?: any;
  borderRadius?: number;
  sx?: SxProps<Theme>;
}

export const FramedContainer = ({
  children,
  isVisible,
  padding = { xs: "20px 20px", md: "4vh 3vh" },
  borderRadius = 40,
  sx,
}: FramedContainerProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        // Pass padding safely here
        padding: padding,
        gap: "2vw",
        width: "fit-content",
        maxWidth: "90vw",
        // Spread external sx last so it can override defaults if needed
        ...sx,
      }}
    >
      {/* THE REUSABLE SVG BORDER */}
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
          rx={borderRadius}
          ry={borderRadius}
          width="100%"
          height="100%"
          fill="none"
          stroke={theme.palette.secondary.main}
          strokeWidth="0.7"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={isVisible ? "0" : "1"}
          style={{
            transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>

      {/* RENDER CONTENT INSIDE */}
      <Box
        sx={{
          zIndex: 3,
          display: "inherit",
          flexDirection: "inherit",
          alignItems: "inherit",
          gap: "inherit",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
