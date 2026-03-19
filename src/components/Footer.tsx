import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontWeight: 700,
    transition: "0.3s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  };

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.default", pt: 10, pb: 5 }}
    >
      <Container style={{ maxWidth: "75vw" }}>
        {/* Horizontal Divider with specific style */}
        <Box
          sx={{
            height: "1px",
            bgcolor: theme.palette.divider,
            mb: 8,
            opacity: 0.5,
          }}
        />

        <Grid
          container
          spacing={4}
          alignItems={{ lg: "flex-end", md: "center" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          textAlign={{ xs: "center", md: "start" }}
        >
          <Grid
            container
            spacing={4}
            alignItems={{ lg: "flex-end", md: "center" }}
            justifyContent={{ xs: "center" }}
            flexDirection={{ xs: "column", md: "row" }}
          >
            {/* Brand/Name Section */}
            {/* <Grid item xs={12} md={6}> */}

            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: -1,
                lineHeight: 1,
                mb: 0,
              }}
            >
              Reham <br /> Alsabbagh
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, letterSpacing: 1 }}>
              © {currentYear} — Senior Frontend Developer
            </Typography>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              gap: 2,
              justifyContent: { md: "flex-end" },
            }}
          >
            {[
              { label: "Email", href: "mailto:reham.alsabbagh@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/reham" },
            ].map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: "50px",
                  border: `1px solid ${theme.palette.secondary.main}33`,
                  textDecoration: "none",
                  color: "primary.main",
                  textAlign: "center",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  letterSpacing: 1.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "background.default",
                    borderColor: "primary.main",
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Contact "Bubble" Section */}
        {/* <Grid item xs={12} md={6}> */}

        {/* </Grid> */}
        {/* </Grid> */}

        {/* Bottom Small Print */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            opacity: 0.4,
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
            Built with React & TypeScript
          </Typography>
          <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
            Design & Code by Reham
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
