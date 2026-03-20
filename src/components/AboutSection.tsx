import { Box, Typography, useTheme } from "@mui/material";
import { sectionBaseStyles } from "./style";
import { NavChip, Reveal } from "../pages/Home";
import { ScrollNext } from "./ScrollNext";

interface AboutSectionProps {
  // Add "| null" to the Generic type to match the useRef initial value
  aboutRef: React.RefObject<HTMLDivElement | null>;
  isAboutMeVisible: boolean;
}
export const AboutSection = ({
  aboutRef,
  isAboutMeVisible,
}: AboutSectionProps) => {
  // Helper for the underlined secondary text

  const theme = useTheme();

  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <Box
      component="span"
      sx={{
        color: "secondary.main",
        borderBottom: "1px solid",
        borderColor: "secondary.main",
        pb: 0.5,
        fontWeight: 500,
      }}
    >
      {children}
    </Box>
  );

  const skillGroups = [
    [
      "React",
      "TypeScript",
      "JavaScript",
      "Component-driven",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Sass",
    ],
    ["Redux", "React Query", "REST", "GraphQL", "React Testing Library"],
    ["Git", "Unity DevOps", "Webpack", "Agile", "Scrum"],
  ];

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        ...sectionBaseStyles,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* 1. THE CONTENT WRAPPER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: { xs: "40px 20px", md: "4vh 3vh" },
          gap: "2vw",
          width: "fit-content",
          maxWidth: "90vw",
        }}
      >
        {/* THE SVG BORDER */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          <rect
            x="0"
            y="0"
            rx="40"
            ry="40"
            width="100%"
            height="100%"
            fill="none"
            stroke={theme.palette.secondary.main}
            strokeWidth="0.7"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={isAboutMeVisible ? "0" : "1"}
            style={{
              transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </svg>

        {/* 2. AVATAR BOX */}
        <Box
          sx={{
            width: { xs: "100%", lg: "20vw" },
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/reham-alsabbagh.png`}
            alt="Reham avatar"
            sx={{
              // width: { xs: "90%", lg: "280px" },
              maxWidth: { xs: "120px", lg: "280px" },
              borderRadius: "500px",
              opacity: isAboutMeVisible ? 1 : 0,
              transform: isAboutMeVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "all 1s ease-out",
            }}
          />
        </Box>

        {/* 3. TEXT BOX */}
        <Box
          sx={{
            width: { xs: "100%", md: "45vw" },
            zIndex: 3,
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: { xs: 8, md: 5 },
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: { xs: 2, md: 0 },

              lineHeight: 1,
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "secondary.main",
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: 3,
              mt: 1,
              mb: 4,
              display: { xs: "none", lg: "block" },
            }}
          >
            Senior Web Developer & UX Architect
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              lineHeight: 1.8,
              opacity: 0.85,
              fontSize: "1.1rem",
              mb: { xs: 0, lg: 5 },
            }}
          >
            Senior Frontend Developer with{" "}
            <Highlight>9+ years of experience</Highlight> building high-quality,
            accessible fintech and enterprise applications. Expert in React and
            modern UI architectures, I lead frontend projects and design
            systems, translating complex UX into scalable code. With a{" "}
            <Highlight>Master’s in UX Design</Highlight>, I specialized in
            bridging the gap between robust engineering and user-centricity.
          </Typography>

          {/* LEVEL 4: CORE EXPERTISE */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "secondary.main",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: 3,
                mb: 2,
              }}
            >
              Core Expertise
            </Typography>

            {skillGroups.map((group, index) => (
              <Reveal key={index} delay={0.45 + index * 0.1}>
                <Box display="flex" flexWrap="wrap" gap={1} mb="1vh">
                  {group.map((skill) => (
                    <NavChip key={skill} label={skill} />
                  ))}
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 4. SCROLL BUTTON */}
      <Box display="flex" position="absolute" bottom="0">
        <ScrollNext
          targetId="projects"
          label="Projects"
          delay={2.2}
          // outOfSight={!isAboutMeVisible}
        />
      </Box>
    </Box>
  );
};
