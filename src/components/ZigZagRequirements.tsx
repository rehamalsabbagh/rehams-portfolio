import React from "react";
import { Box, Typography, useTheme, alpha } from "@mui/material";
import { motion, Variants } from "framer-motion";

interface Props {
  requirements: string[] | undefined;
}

const EditorialItem = ({ text, index }: { text: string; index: number }) => {
  const theme = useTheme();

  // Reveal animation: Text wipes in from left to right
  const textVariants: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.15, duration: 5 },
    },
  };

  return (
    <Box sx={{ display: "flex", gap: 6, mb: 6, position: "relative" }}>
      {/* THE LEFT TRACK (NUMBERS) */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "20px",
        }}
      >
        <motion.div
          variants={circleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.palette.secondary.main,
            marginTop: "8px",
            zIndex: 2,
          }}
        />
        {/* The connecting segment */}
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            bottom: "-48px", // Connects to the next item
            width: "1px",
            bgcolor: alpha(theme.palette.text.primary, 0.1),
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>

      {/* THE RIGHT TRACK (CONTENT) */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            fontWeight: 700,
            color: alpha(theme.palette.text.primary, 0.4),
            mb: 0.5,
            fontSize: "0.7rem",
            letterSpacing: 2,
          }}
        >
          {(index + 1).toString().padStart(2, "0")}
        </Typography>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Typography variant="body1">{text}</Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export const EditorialRequirements = ({ requirements }: Props) => {
  if (!requirements || requirements.length === 0) return null;

  return (
    <Box sx={{ py: 5, maxWidth: "800px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {requirements.map((req, i) => (
          <EditorialItem key={i} text={req} index={i} />
        ))}
      </Box>
    </Box>
  );
};
