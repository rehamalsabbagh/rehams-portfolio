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
import {
  Add,
  ArrowOutward,
  EmojiObjects,
  KeyboardArrowDown,
  LightbulbCircle,
  StickyNote2,
} from "@mui/icons-material";
import { HeroSection } from "../components/HeroSection";
import { DevicePreview } from "../components/ProjectSection_";
import { FramedContainer } from "../components/FramedContainer";
import { useSectionObserver } from "../hooks/SectionObserver";
import { Highlight } from "../components/AboutSection";
import { sectionBaseStyles, subTitleMargins } from "../components/style";
import { EditorialRequirements } from "../components/ZigZagRequirements";
import { ScrollNext } from "../components/ScrollNext";
import { ProjectSlideshow } from "../components/ProjectSlideshow";

const renderDescription = (text: string) => {
  return text.split("|").map((part, index) => {
    // Every odd index is a highlighted part
    if (index % 2 !== 0) {
      return <Highlight key={index}>{part}</Highlight>;
    }
    return part;
  });
};

const content = (content: string[] | undefined) => {
  return (
    <Grid container spacing={4}>
      {content!.map((text, tIdx) => (
        <Reveal delay={tIdx * 0.1}>
          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            {content?.length! > 1 && (
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
            <Typography variant="body1">{renderDescription(text)}</Typography>
          </Box>
        </Reveal>
        //   </Grid>
      ))}
    </Grid>
  );
};

// --- Interface ---
interface ProjectDetailProps {
  projects: Project[];
}

export const ProjectDetailTemplate: React.FC<ProjectDetailProps> = ({
  projects,
}) => {
  const { id } = useParams<{ id: string }>();
  const { sectionRef, isVisible } = useSectionObserver(0.3);

  const project = projects.find((p) => p.id === id);
  const publicPath = process.env.PUBLIC_URL;

  const theme = useTheme();
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

      <HeroSection
        type="project"
        title={project.title}
        subtitle={project.role}
        chips={project.techStack}
        targetId={"introduction"}
        scrollLabel="View Project Details"
        devicePreview={
          <DevicePreview
            baseImg="/assets/22-3d-config.png"
            hoverImg="/assets/23-3d-config.png"
            height={{ xs: "190px", sm: "350px", lg: "40vh" }}
          />
        }
      />

      <Container maxWidth="lg">
        <Box ref={sectionRef} id={"introduction"} sx={sectionBaseStyles}>
          <FramedContainer isVisible={isVisible}>
            <Grid
              container
              spacing={8}
              alignItems="center"
              sx={{ m: 2.5 }}
              textAlign={{ xs: "center", lg: "start" }}
              display={"flex"}
            >
              <Reveal direction="up">
                <Box>
                  <Typography variant="h2">
                    {project.introduction.title}
                  </Typography>
                  <Typography variant="h5" sx={subTitleMargins}>
                    {project.introduction.subTitle}
                  </Typography>
                </Box>
                <Typography variant="body1">
                  {renderDescription(project.introduction.content![0])}
                </Typography>
              </Reveal>
            </Grid>
          </FramedContainer>
          <Box sx={{ display: "flex", position: "absolute", bottom: "0" }}>
            <ScrollNext
              targetId={"requirements"}
              label={"Client Requirements"}
              delay={1.6}
            />
          </Box>
        </Box>

        <Box id={"requirements"}>
          <Reveal direction="up">
            <Typography
              variant="h2"
              sx={{
                pt: "18vh",
                // mb: 6,
              }}
            >
              {project.requirements.title}
            </Typography>
            <Typography variant="h5" sx={subTitleMargins}>
              {project.requirements.subTitle}
            </Typography>
          </Reveal>
          <EditorialRequirements
            requirements={project.requirements.content}
          ></EditorialRequirements>
          <Box></Box>
          <Box sx={{ height: "7.5vh" }}></Box>
          <ScrollNext
            targetId={"solution"}
            label={"Solution Breakdown"}
            delay={1.6}
          />
          {/* </Box> */}
        </Box>

        <Box id={"solution"}>
          <Reveal direction="up">
            <Typography
              variant="h2"
              sx={{
                pt: "18vh",
                // mb: 6,
              }}
            >
              {project.solution.title}
            </Typography>
            <Typography variant="h5" sx={subTitleMargins}>
              {project.solution.subTitle}
            </Typography>
          </Reveal>
          {content(project.solution.content)}

          <ProjectSlideshow images={project.solution.images}></ProjectSlideshow>
        </Box>

        {/* 3. DYNAMIC SECTIONS */}
        {project.sections.map((section, sIdx) => (
          <Box key={`section-${sIdx}`} sx={{ mb: 15 }}>
            <Reveal direction="up">
              <Typography
                id={sIdx + section.title}
                variant="h2"
                sx={{
                  pt: "0",
                  mb: 6,
                }}
              >
                {section.title}
              </Typography>
            </Reveal>

            {/* List-style content (e.g., Client Requirements) */}
            {section.content &&
              // <Content content={content}></Content>
              content(section.content)}

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
                variant="h2"
                sx={{
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
        <Typography variant="body1">{paragraph}</Typography>
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
