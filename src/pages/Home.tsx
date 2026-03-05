import { Box, Typography, Button } from "@mui/material";
import AnimatedSection from "../components/AnimatedSection";
import ButtonLink, { defaultStyle } from "../components/ButtonLink";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ height: "calc(100vh - 23px)" }}>
      <Box px={{ xs: 2, md: 25 }} py={14}>
        <AnimatedSection>
          <Box sx={{ marginTop: "6vh" }}>
            <Typography variant="h1">Reham Alsabbagh</Typography>

            <Typography variant="h2" color="secondary" sx={{ mt: 2 }}>
              Senior Web Developer
            </Typography>

            <Typography sx={{ mt: 3, maxWidth: 600 }}>
              Building high-quality, scalable web applications with React and
              design-led UX.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="secondary">
                <ButtonLink to={"/about"}>About Me</ButtonLink>
              </Button>
              <Button
                color="secondary"
                sx={{ ml: 2 }}
                href="/assets/Reham Alsabbagh - resume.pdf"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                color="secondary"
                sx={{ ml: 2 }}
                href="https://www.linkedin.com/in/reham-alsabbagh-a53426122/"
                target="_blank"
              >
                LinkedIn
              </Button>
              {/* <Button sx={{ ml: 2 }} href="https://github.com">
                GitHub
              </Button> */}
            </Box>
          </Box>
        </AnimatedSection>

        {/* Project previews */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            mt: 8,
          }}
        >
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} style={defaultStyle}>
              <Box
                sx={{
                  height: 200,
                  backgroundColor: "#E5E7EB",
                  backgroundImage: `url(${project.cover})`,
                  backgroundPosition: "center",
                  backgroundSize: "105% auto",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 2,
                  transition: "background-size 0.6s ease",
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  "&:hover": {
                    backgroundSize: "115% auto",
                  },
                }}
              >
                <span style={{ margin: "auto" }}>{project.title}</span>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
