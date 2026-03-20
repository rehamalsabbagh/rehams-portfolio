import { Box, Container, Typography, Grid, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

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
          alignItems={{ xs: "center", lg: "flex-end" }}
          justifyContent={{ xs: "center", lg: "space-between" }}
          textAlign={{ xs: "center", lg: "start" }}
          flexDirection={{ xs: "column", lg: "row" }}
        >
          <Grid
            container
            spacing={4}
            alignItems={{ xs: "center", lg: "flex-end" }}
            justifyContent={{ xs: "center" }}
            flexDirection={{ xs: "column", lg: "row" }}
          >
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
              flexDirection: { xs: "row", lg: "row" },
              gap: 2,
              justifyContent: { lg: "flex-end" },
            }}
          >
            {[
              { label: "Email", href: "mailto:reham.alsabbagh@gmail.com" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/reham-alsabbagh-a53426122/",
              },
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
                  border: `1px solid ${theme.palette.secondary.main}`,
                  textDecoration: "none",
                  color: "secondary.main",
                  textAlign: "center",
                  // fontWeight: 800,
                  textTransform: "uppercase",
                  opacity: { xs: 0.7, lg: 0.5 },
                  fontSize: "0.8rem",
                  letterSpacing: 1.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                    // bgcolor: "primary.main",
                    // color: "background.default",
                    // borderColor: "primary.main",
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Bottom Small Print */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2,
            opacity: 0.4,
            textAlign: { xs: "center", lg: "start" },
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
