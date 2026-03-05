import { Box, Typography } from "@mui/material";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <Box px={{ xs: 2, md: 10 }} py={10}>
      <AnimatedSection>
        <Typography variant="h2" sx={{ marginTop: "60px" }}>
          About Me
        </Typography>

        <Typography mt={3} maxWidth={700}>
          Senior Frontend Developer with 9+ years of experience delivering
          high-quality, accessible web applications for fintech and enterprise
          clients. Expert in React, modern UI architectures, and translating UX
          designs into scalable, maintainable code. Experienced in leading
          frontend projects, building design systems, and collaborating closely
          with product and UX teams. Holds a Master’s in UX Design.
        </Typography>

        <Typography mt={3}>
          • 9+ years in frontend development • React, Three.js, modern UI
          architectures • Master’s in UX Design
        </Typography>
      </AnimatedSection>
    </Box>
  );
}
