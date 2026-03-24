import { Box, Typography } from "@mui/material";
import { sectionBaseStyles, subTitleStyle } from "./style";
import { NavChip, Reveal } from "../pages/Home";
import { ScrollNext } from "./ScrollNext";
import { FramedContainer } from "./FramedContainer";
import { useSectionObserver } from "../hooks/SectionObserver";

export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="span"
    sx={{
      color: "secondary.main",
      borderBottom: "1px solid",
      borderColor: "secondary.main",
      pb: 0.5,
      fontWeight: 400,
    }}
  >
    {children}
  </Box>
);

// interface AboutSectionProps {
//   aboutRef: React.RefObject<HTMLDivElement | null>;
//   isAboutMeVisible: boolean;
// }
export const AboutSection = () => {
  // Helper for the underlined secondary text
  const { sectionRef, isVisible } = useSectionObserver(0.3);

  const skillGroups = [
    [
      "React",
      "TypeScript",
      "JavaScript",
      "Component-driven",
      "Responsive Design",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Sass",
    ],
    ["Redux", "React Query", "REST", "GraphQL", "React Testing Library"],
    ["Git", "Unity DevOps", "Webpack", "Agile", "Scrum"],
  ];

  return (
    <Box id="about" ref={sectionRef} sx={sectionBaseStyles}>
      <FramedContainer isVisible={isVisible}>
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
              maxWidth: { xs: "120px", lg: "280px" },
              borderRadius: "500px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
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
          <Typography variant="h2">About Me</Typography>

          <Typography
            variant="h5"
            sx={{
              ...subTitleStyle,
              ...{ display: { xs: "none", lg: "block" } },
            }}
          >
            Senior Web Developer & UX Architect
          </Typography>

          <Typography
            variant="body1"
            sx={{
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
      </FramedContainer>
      {/* 4. SCROLL BUTTON */}
      <Box
        sx={{
          display: "flex",
          position: window.screen.height < 844 ? "static" : "absolute",
          mt: window.screen.height < 844 ? "20px" : 0,
          bottom: 0,
        }}
      >
        <ScrollNext targetId="project1" label="Projects" delay={2.2} />
      </Box>
    </Box>
  );
};
