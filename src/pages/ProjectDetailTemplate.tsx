import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import { NavChip, Reveal } from "./Home";
import { Project } from "../data/projects";
import { ProjectsContent } from "../components/Navbar";

// --- Interface ---
interface ProjectDetailProps {
  projects: Project[];
}

export const ProjectDetailTemplate: React.FC<ProjectDetailProps> = ({
  projects,
}) => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();

  const project = projects.find((p) => p.id === id);
  const publicPath = process.env.PUBLIC_URL;

  if (!project) {
    return (
      <Box sx={{ py: 20, textAlign: "center" }}>
        <Typography variant="h4" color="primary">
          Project Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", pb: 15 }}>
      {/* 1. HERO SECTION */}
      <Box sx={{ pt: { xs: 15, md: 22 }, pb: 10, px: 4, textAlign: "center" }}>
        <Reveal direction="up">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: -2,
              fontSize: { xs: "2.5rem", md: "5rem" },
              color: "primary.main",
              lineHeight: { xs: 1.3, md: 0.8 },
              mb: 2,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: 6,
              mb: 6,
            }}
          >
            {project.role}
          </Typography>
        </Reveal>

        <Reveal delay={0.3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1.5,
              mb: { xs: 0, lg: 5 },
            }}
          >
            {project.techStack.map((tech) => (
              <NavChip key={tech} label={tech} />
            ))}
          </Box>
        </Reveal>
      </Box>

      <Container maxWidth="lg">
        {/* 2. INTRODUCTION SECTION */}
        <Grid
          container
          spacing={8}
          alignItems="center"
          sx={{ mb: 15 }}
          textAlign={{ xs: "center", lg: "start" }}
        >
          {/* <Grid item xs={12} md={7}> */}
          <Reveal direction="up">
            <Typography
              variant="h5"
              sx={{
                color: "secondary.main",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: 3,
                mb: 3,
              }}
            >
              Introduction
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                fontSize: "1.1rem",
                color: "primary.main",
                opacity: 0.85,
              }}
            >
              {project.introduction}
            </Typography>
          </Reveal>
        </Grid>
        {/* <Grid item xs={12} md={5}> */}
        <Reveal direction="left" delay={0.4}>
          <Box
            component="img"
            src={`${publicPath}${project.image}`}
            alt="Project detail"
            sx={{
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              filter: "grayscale(20%)",
              transition: "filter 0.5s ease",
              "&:hover": { filter: "grayscale(0%)" },
              marginBottom: 15,
            }}
          />
        </Reveal>
        {/* </Grid> */}
        {/* </Grid> */}

        {/* 3. DYNAMIC SECTIONS */}
        {project.sections.map((section, sIdx) => (
          <Box key={`section-${sIdx}`} sx={{ mb: 15 }}>
            <Reveal direction="up">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "primary.main",
                  letterSpacing: -1,
                  mb: 6,
                  fontSize: { xs: "2rem", md: "3.5rem" },
                }}
              >
                {section.title}
              </Typography>
            </Reveal>

            {/* List-style content (e.g., Client Requirements) */}
            {section.content && (
              <Grid container spacing={4}>
                {section.content.map((text, tIdx) => (
                  //   <Grid item xs={12} md={6} key={`text-${tIdx}`}>

                  <Reveal delay={tIdx * 0.1}>
                    <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                      <Typography
                        sx={{
                          color: "secondary.main",
                          fontWeight: 800,
                          mt: 0.5,
                        }}
                      >
                        {(tIdx + 1).toString().padStart(2, "0")}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: 1.8,
                          opacity: 0.8,
                          fontSize: "1.05rem",
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  </Reveal>
                  //   </Grid>
                ))}
              </Grid>
            )}

            {/* Sub-sections (e.g., Architecture, Solution details) */}
            {section.subsections && (
              <Box sx={{ mt: 4 }}>
                {section.subsections.map((sub, subIdx) => (
                  <Box key={`sub-${subIdx}`} sx={{ mb: 10 }}>
                    {/* FIXED: flexDirection only on container to avoid TS errors */}
                    <Grid
                      container
                      spacing={6}
                      flexDirection={{
                        xs: "column",
                        md: subIdx % 2 !== 0 ? "row-reverse" : "row",
                      }}
                      alignItems="center"
                    >
                      {/* <Grid item xs={12} md={sub.images.length > 0 ? 7 : 12}> */}
                      <Reveal direction="up">
                        <Typography
                          variant="h5"
                          sx={{
                            color: "secondary.main",
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: 2,
                            mb: 3,
                          }}
                        >
                          {sub.title}
                        </Typography>
                        {sub.content.map((paragraph, pIdx) => (
                          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                            <Typography
                              sx={{
                                color: "secondary.main",
                                fontWeight: 800,
                                mt: 0.5,
                              }}
                            >
                              {/* {(pIdx + 1).toString().padStart(2, "0")} */}▪
                            </Typography>
                            <Typography
                              sx={{
                                lineHeight: 1.8,
                                opacity: 0.8,
                                fontSize: "1.05rem",
                              }}
                            >
                              {paragraph}
                            </Typography>
                          </Box>
                          //   <Typography
                          //     key={`p-${pIdx}`}
                          //     sx={{
                          //       mb: 3,
                          //       lineHeight: 1.8,
                          //       opacity: 0.85,
                          //       fontSize: "1.05rem",
                          //     }}
                          //   >
                          //     {paragraph}
                          //   </Typography>
                        ))}
                      </Reveal>
                      {/* </Grid> */}

                      {sub.images.length > 0 && (
                        // <Grid item xs={12} md={5}>
                        <Reveal direction="up" delay={0.2}>
                          {sub.images.map((img, imgIdx) => (
                            <Box
                              key={`img-${imgIdx}`}
                              component="img"
                              src={`${publicPath}${img}`}
                              alt={sub.title}
                              sx={{
                                width: "100%",
                                borderRadius: "12px",
                                mb: 2,
                                border: `1px solid ${theme.palette.secondary.main}22`,
                                display: "block",
                              }}
                            />
                          ))}
                        </Reveal>
                        // </Grid>
                      )}
                    </Grid>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
        <Typography
          variant="h5"
          sx={{
            color: "secondary.main",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 0,
          }}
        >
          {"View More Projects"}
        </Typography>
        <ProjectsContent></ProjectsContent>
      </Container>
    </Box>
  );
};

export default ProjectDetailTemplate;
