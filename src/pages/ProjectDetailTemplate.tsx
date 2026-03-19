import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  Collapse,
} from "@mui/material";
import { NavChip, Reveal } from "./Home";
import { Project } from "../data/projects";
import { ProjectsContent } from "../components/Navbar";
import { Add, ArrowOutward, KeyboardArrowDown } from "@mui/icons-material";

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
      <Box
        sx={{
          pt: { xs: 15, md: 22 },
          pb: { xs: 7, md: 4 },
          px: 4,
          textAlign: "center",
        }}
      >
        <Reveal direction="up">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: -2,
              fontSize: { xs: "2.5rem", md: "4rem" },
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
              marginBottom: { xs: 7, md: 15 },
            }}
          />
        </Reveal>
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
                      {section?.content?.length! > 1 && (
                        <Typography
                          sx={{
                            color: "secondary.main",
                            fontWeight: 800,
                            mt: 0.5,
                          }}
                        >
                          {(tIdx + 1).toString().padStart(2, "0")}
                        </Typography>
                      )}
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
                  <Box key={`sub-${subIdx}`} sx={{ mb: 5 }}>
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
                      <CollapsibleSubsection sub={sub}></CollapsibleSubsection>
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
                                mb: 10,
                                // border: `1px solid ${theme.palette.secondary.main}22`,
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

        {/* {project.visitWebsite !== "" && (
          <Reveal direction="up">
            <Box
              sx={{
                "&:hover": {
                  "& .arrow-icon": {
                    transform: "translate(2px, -2px)",
                  },
                },
              }}
            >
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
                {"Visit Live Website"}
              </Typography>
              <ArrowOutward
                className="arrow-icon"
                sx={{
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Reveal>
        )} */}

        {project.visitWebsite !== "" && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mb: 20,
              // borderBottom: "1px solid",
            }}
          >
            <Box
              component="a"
              href={project.visitWebsite}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                color: "primary.main",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                textDecoration: "underline",
                textDecorationLine: "1px",
                "&:hover": {
                  transform: "translateY(-3px)",

                  "& .arrow-icon": {
                    transform: "translate(2px, -2px)",
                  },
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "primary.main",
                  letterSpacing: -1,
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  cursor: "pointer",
                }}
              >
                {"Visit Live Website"}
              </Typography>

              <ArrowOutward
                className="arrow-icon"
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Box>
        )}

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
        <ProjectsContent
          justifyContent="start"
          onClick={() => {}}
          excludeProjectById={id!}
        ></ProjectsContent>
      </Container>
    </Box>
  );
};

export default ProjectDetailTemplate;

export const CollapsibleSubsection = ({ sub }: { sub: any }) => {
  const [expanded, setExpanded] = useState(false);

  const isCollapsible = sub.content && sub.content.length > 1;

  const renderContent = () =>
    sub.content.map((paragraph: string, pIdx: number) => (
      <Box key={pIdx} sx={{ display: "flex", gap: 3, mb: 2 }}>
        {isCollapsible && (
          <Typography
            sx={{
              color: "secondary.main",
              fontWeight: 800,
              mt: 0.5,
            }}
          >
            ▪
          </Typography>
        )}
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
    ));

  return (
    <Reveal direction="up">
      <Box
        sx={{
          pb: isCollapsible ? 5 : 0,
          borderBottom: isCollapsible ? "1px solid rgba(0,0,0,0.05)" : "none",
        }}
      >
        {/* TITLE ROW */}
        <Box
          onClick={() => isCollapsible && setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: isCollapsible ? "pointer" : "default",
            mb: isCollapsible && !expanded ? 0 : 3,
            transition: "margin 0.3s ease",
            "&:hover .sub-title": {
              color: isCollapsible ? "primary.main" : "secondary.main",
            },
            "&:hover .read-more-text": {
              color: "primary.main",
            },
          }}
        >
          <Typography
            className="sub-title"
            variant="h5"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 2,
              transition: "color 0.3s ease",
              cursor: isCollapsible ? "pointer" : "inherit",
            }}
          >
            {sub.title}
          </Typography>

          {isCollapsible && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "secondary.main",
                transition: "color 0.3s ease",
              }}
            >
              {/* <Typography
                className="read-more-text"
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {expanded ? "Read Less" : "Read More"}
              </Typography> */}
              <KeyboardArrowDown
                sx={{
                  fontSize: "1.2rem",
                  transition: "transform 0.4s ease",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Box>
          )}
        </Box>

        {/* CONTENT AREA */}
        {isCollapsible ? (
          <Collapse in={expanded} timeout="auto">
            <Box sx={{ mt: 2 }}>{renderContent()}</Box>
          </Collapse>
        ) : (
          <Box sx={{ mt: 1 }}>{renderContent()}</Box>
        )}
      </Box>
    </Reveal>
  );
};
