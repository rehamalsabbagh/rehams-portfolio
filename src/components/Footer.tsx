import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    // <Box sx={{ position: "relative", height: "100" }}>
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "23px",
        backgroundColor: "#dbdbdb",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: "13px", margin: "auto" }}>
          © {new Date().getFullYear()} Reham Alsabbagh — Frontend Developer
        </Typography>
      </Box>
    </Box>
    // </Box>
  );
}
