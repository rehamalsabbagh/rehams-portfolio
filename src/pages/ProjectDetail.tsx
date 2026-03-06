import { Link, useParams } from "react-router-dom";
import { Box, Typography, Stack, Divider, Chip } from "@mui/material";
import { projects } from "../data/projects";
import AnimatedSection from "../components/AnimatedSection";
import { defaultStyle } from "../components/ButtonLink";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Typography>Project not found</Typography>;

  // utils/generatePastelGradient.ts

  function generatePastelGradient() {
    const randomPastel = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 30 + Math.random() * 15; // 30–45% → much less saturated
      const lightness = 85 + Math.random() * 10; // 75–85% → lighter but soft
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const color1 = randomPastel();
    const color2 = randomPastel();
    const color3 = randomPastel();

    return {
      background: `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`,
      // filter: "blur(60px)",
    };
  }

  return (
    <Box textAlign="center">
      <Stack spacing={5}>
        {/* Header */}

        <Box
          sx={{
            backgroundImage:
              "url(" + process.env.PUBLIC_URL + project.cover + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "70vh",
            display: "flex",
            paddingTop: "64px",
          }}
        >
          <Box
            py={8}
            sx={{
              px: { xs: 2, md: 6 },
              maxWidth: {
                xl: "75vw",
              },
              margin: "auto",
            }}
          >
            <Typography variant="h3" gutterBottom>
              {project.title}
            </Typography>

            <Typography variant="subtitle1" color="secondary" gutterBottom>
              {project.role}
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              mt={2}
              gap={1}
              // display={"inline-flex"}
              sx={{
                display: {
                  xs: "inline-block",
                  sm: "inline-flex",
                },
              }}
            >
              {project.techStack?.map((tech, index) => (
                <Chip key={index} label={tech} sx={{ marginBottom: "10px" }} />
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Introduction */}
        {project.introduction && (
          <AnimatedSection>
            <Box
              py={8}
              sx={{
                px: { xs: 2, md: 6 },
                paddingTop: 0,
                paddingBottom: 0,
                maxWidth: {
                  xl: "75vw",
                },
                margin: "auto",
              }}
            >
              <Typography variant="body1" paragraph>
                {project.introduction}
              </Typography>
            </Box>
          </AnimatedSection>
        )}

        {project.image && (
          <AnimatedSection>
            <Box
              py={8}
              sx={{
                px: { xs: 2, md: 6 },
                paddingTop: 0,
                paddingBottom: 0,
                maxWidth: {
                  xl: "75vw",
                },
                margin: "auto",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + project.image}
                alt={project.image}
                style={{ width: "100%" }}
              ></img>
            </Box>
          </AnimatedSection>
        )}

        <Divider />

        {/* Dynamic Sections */}
        {project.sections &&
          project.sections?.map((section, index) => (
            <AnimatedSection>
              <Box
                key={index}
                sx={{
                  ...{
                    padding: section.content?.length === 1 ? "6vh 0" : "",
                  },
                  ...(section.content?.length === 1
                    ? generatePastelGradient()
                    : {}),
                }}
              >
                <Box
                  py={8}
                  sx={{
                    px: { xs: 2, md: 6 },
                    paddingTop: 0,
                    paddingBottom: 0,
                    maxWidth: {
                      xl: "75vw",
                    },
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {section.title}
                  </Typography>

                  {/* Section Content */}
                  {section.content && (
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        marginTop: "15px",
                      }}
                    >
                      {section.content.map((item, idx) => (
                        <span key={idx}>
                          <Typography variant="body1" paragraph>
                            {section.content?.length === 1 ? "" : "• "}
                            {item}
                          </Typography>
                        </span>
                      ))}
                    </ul>
                  )}
                </Box>
                {/* Subsections */}
                {section.subsections &&
                  section.subsections.map((sub, subIndex) => (
                    <Box
                      key={subIndex}
                      mt={4}
                      sx={{
                        ...{
                          padding: sub.content.length === 1 ? "6vh 0" : "",
                        },
                        ...(sub.content.length === 1
                          ? generatePastelGradient()
                          : {}),
                      }}
                    >
                      <Box
                        py={8}
                        sx={{
                          px: { xs: 2, md: 6 },
                          paddingTop: 0,
                          paddingBottom: 0,

                          maxWidth: {
                            xl: "75vw",
                          },
                          margin: "auto",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{ fontWeight: "bold" }}
                        >
                          {sub.title}
                        </Typography>

                        <ul style={{ paddingLeft: "20px", margin: 0 }}>
                          {sub.content.map((item, idx) => (
                            <span key={idx}>
                              <Typography variant="body1" paragraph>
                                {sub.content.length === 1 ? "" : "• "}
                                {item}
                              </Typography>
                            </span>
                          ))}
                        </ul>

                        <Stack direction="row" flexWrap="wrap" mt={2} gap={1}>
                          {sub.images?.map((image, index) => (
                            <img
                              key={index}
                              src={process.env.PUBLIC_URL + image}
                              alt={image}
                              style={{ width: "100%", marginTop: "2vh" }}
                            ></img>
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </AnimatedSection>
          ))}

        {/* Related Projects Section */}
        <Box py={10} px={{ xs: 2, md: 6 }} margin="auto !important">
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
          >
            Other Projects
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(" + (projects.length - 1) + ", 1fr)",
              },
              gap: 4,
              mt: 8,
            }}
          >
            {projects
              .filter((p) => p.id !== id)
              .map((project) => (
                <Link to={`/projects/${project.id}`} style={defaultStyle}>
                  <Box
                    sx={{
                      height: 200,
                      width: {
                        xs: "85vw",
                        sm: "20vw",
                        md: "20vw",
                      },
                      backgroundColor: "#E5E7EB",
                      backgroundImage: `url(${process.env.PUBLIC_URL + project.cover})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: 2,
                      transition: "background-size 0.6s ease",
                      cursor: "pointer",
                      display: "flex",
                      fontWeight: "500",
                      "&:hover": {
                        // backgroundSize: "115%",
                      },
                    }}
                  >
                    <span style={{ margin: "auto", padding: "10px" }}>
                      {project.title}
                    </span>
                  </Box>
                </Link>
              ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
