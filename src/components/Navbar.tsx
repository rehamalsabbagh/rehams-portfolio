import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Collapse,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { defaultStyle } from "./ButtonLink";
import { projects } from "../data/projects";

// Mocking the Projects Data (imported or defined locally)
// const projects = [
//   {
//     id: "3d-plane-seat-configurator",
//     title: "3D Plane Seat Configurator",
//     image: "/assets/06-3d-config-02.png",
//   },
//   {
//     id: "2d-vehicle-configurator",
//     title: "2D 360° Vehicle Configurator",
//     image: "/assets/18-2d-config.png",
//   },
//   {
//     id: "online-gateway-website",
//     title: "Payment Gateway Website & CMS",
//     image: "/assets/11-tap-website-01.png",
//   },
// ];

type DropdownType = "projects" | "contact" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setActiveDropdown(null);
  };

  const handleClickAway = () => {
    if (activeDropdown && !mobileOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (type: DropdownType) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  // Reusable Wrapper for Dropdown Content
  const DropdownWrapper = ({ children }: { children: React.ReactNode }) => (
    <Box
      sx={{
        bgcolor: isMobile ? "transparent" : "rgba(255, 255, 255, 0.98)",
        borderTop: isMobile ? "none" : `1px solid ${theme.palette.divider}`,
        backdropFilter: isMobile ? "none" : "blur(10px)",
      }}
    >
      {children}
      <KeyboardDoubleArrowUp
        sx={{
          display: "block",
          margin: "auto",
          py: 2,
          fontSize: "3.5rem",
          cursor: "pointer",
          color: "secondary.main",
        }}
        onClick={() => setActiveDropdown(null)}
      />
    </Box>
  );

  const ContactContent = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: { xs: 2, md: 4 },
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, md: 2 },
        px: 0,
      }}
    >
      {[
        {
          label: "Email",
          value: "reham.alsabbagh@gmail.com",
          href: "mailto:reham.alsabbagh@gmail.com",
        },
        {
          label: "Social",
          value: "LinkedIn",
          href: "https://www.linkedin.com/in/reham-alsabbagh-a53426122/",
        },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{
            textAlign: "center",
            border: `1px solid ${theme.palette.secondary.main}22`,
            borderRadius: "30px",
            width: { xs: "100%", md: "25vw" },
            py: 5,
          }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: 3, color: "secondary.main" }}
          >
            {item.label}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              {item.value}
            </a>
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor:
              scrolled || activeDropdown
                ? "rgba(255, 255, 255, 0.8)"
                : "transparent",
            backdropFilter: scrolled || activeDropdown ? "blur(10px)" : "none",
            color: "primary.main",
            transition: "all 0.4s ease",
            boxShadow: scrolled ? "0px 2px 20px rgba(0,0,0,0.05)" : "none",
            zIndex: "99999",
          }}
        >
          <Toolbar
            sx={{ justifyContent: "space-between", px: { xs: 1, md: "2vw" } }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, textTransform: "uppercase" }}
            >
              <Link
                to="/"
                style={defaultStyle}
                onClick={() => setActiveDropdown(null)}
              >
                Reham Alsabbagh
              </Link>
            </Typography>

            {!isMobile && (
              <Box display="flex" gap={4} alignItems="center">
                <Box
                  component={"span"}
                  sx={{
                    ...defaultStyle,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    opacity: "0.7",
                    transition: "0.3s opacity",
                    ":hover": {
                      opacity: "1",
                    },
                    fontWeight: 700,
                  }}
                  // to="/resume"
                >
                  Resume
                </Box>
                <Box
                  component="span"
                  onClick={() => toggleDropdown("projects")}
                  sx={{
                    ...defaultStyle,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    opacity: "0.7",
                    transition: "0.3s opacity",
                    ":hover": {
                      opacity: "1",
                    },
                    color:
                      activeDropdown === "projects"
                        ? "secondary.main"
                        : "inherit",
                    fontWeight: 700,
                  }}
                >
                  Projects
                </Box>
                <Box
                  component="span"
                  onClick={() => toggleDropdown("contact")}
                  sx={{
                    ...defaultStyle,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    opacity: "0.7",
                    transition: "0.3s opacity",
                    ":hover": {
                      opacity: "1",
                    },
                    color:
                      activeDropdown === "contact"
                        ? "secondary.main"
                        : "inherit",
                    fontWeight: 700,
                  }}
                >
                  Contact me
                </Box>
              </Box>
            )}

            {isMobile && (
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>

          {!isMobile && (
            <>
              <Collapse in={activeDropdown === "contact"} unmountOnExit>
                <DropdownWrapper>
                  <ContactContent />
                </DropdownWrapper>
              </Collapse>
              <Collapse in={activeDropdown === "projects"} unmountOnExit>
                <DropdownWrapper>
                  <ProjectsContent
                    justifyContent="center"
                    excludeProjectById="random=5345435" // NONE
                    onClick={() => {
                      setActiveDropdown(null);
                      setMobileOpen(false);
                    }}
                  />
                </DropdownWrapper>
              </Collapse>
            </>
          )}
        </AppBar>
      </ClickAwayListener>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: "100%", bgcolor: "background.default", p: 3 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>
        <List sx={{ textAlign: "center" }}>
          <ListItem sx={{ justifyContent: "center" }}>
            <Link
              to="/resume"
              style={{ textDecoration: "none" }}
              onClick={handleDrawerToggle}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Resume
              </Typography>
            </Link>
          </ListItem>

          {/* Mobile Projects */}
          <ListItem sx={{ flexDirection: "column", p: 0 }}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                color:
                  activeDropdown === "projects"
                    ? "secondary.main"
                    : "primary.main",
              }}
              onClick={() => toggleDropdown("projects")}
            >
              Projects
            </Typography>
            <Collapse in={activeDropdown === "projects"} sx={{ width: "100%" }}>
              <ProjectsContent
                justifyContent="center"
                excludeProjectById="random-040634834" // NONE
                onClick={() => {
                  setActiveDropdown(null);
                  setMobileOpen(false);
                }}
              ></ProjectsContent>
            </Collapse>
          </ListItem>

          {/* Mobile Contact */}
          <ListItem sx={{ flexDirection: "column", p: 0 }}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                color:
                  activeDropdown === "contact"
                    ? "secondary.main"
                    : "primary.main",
              }}
              onClick={() => toggleDropdown("contact")}
            >
              Contact me
            </Typography>
            <Collapse in={activeDropdown === "contact"} sx={{ width: "100%" }}>
              <ContactContent />
            </Collapse>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
// const theme = useTheme();

interface ProjectsContentProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  excludeProjectById: string;
  justifyContent: string;
}

export const ProjectsContent = ({
  onClick,
  excludeProjectById = "random-53453454",
  justifyContent,
}: ProjectsContentProps) => {
  var theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: justifyContent ?? "center",
        gap: 5,
        pt: { xs: 4, md: 6 },
        pb: { xs: 4, md: 2 },
        px: 0,
      }}
    >
      {projects
        .filter((p) => p.id !== excludeProjectById)
        .map((proj) => {
          return (
            <Link
              key={proj.id}
              to={`/projects/${proj.id}`}
              onClick={onClick}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", md: "20vw" },
                  // p: 3,
                  transition: "0.3s",
                  // bgcolor: "#ffffff20",
                  "&:hover": {
                    // bgcolor: "#ffffff50",
                    // boxShadow: "0 0 20px #0000000a",
                  },
                }}
              >
                <Box
                  // component="img"
                  // src={process.env.PUBLIC_URL + proj.image}
                  sx={{
                    width: "100%",
                    height: "248px",
                    mb: 2,
                    aspectRatio: "48:31",
                    backgroundSize: "96%",
                    transition: "0.3s all",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + proj.image + ")",
                    ":hover": {
                      backgroundSize: "100%",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "primary.main",
                    letterSpacing: 1,
                  }}
                >
                  {proj.title}
                </Typography>
              </Box>
            </Link>
          );
        })}
    </Box>
  );
};
