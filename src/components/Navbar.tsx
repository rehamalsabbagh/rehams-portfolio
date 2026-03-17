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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { defaultStyle } from "./ButtonLink";

// Mocking the Projects Data (imported or defined locally)
const projects = [
  {
    id: "3d-plane-seat-configurator",
    title: "3D Plane Seat Configurator",
    image: "/assets/06-3d-config-02.png",
  },
  {
    id: "2d-vehicle-configurator",
    title: "2D 360° Vehicle Configurator",
    image: "/assets/09-2d-config-01.png",
  },
  {
    id: "online-gateway-website",
    title: "Payment Gateway Website & CMS",
    image: "/assets/11-tap-website-01.png",
  },
];

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
        pb: 2,
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
        py: { xs: 4, md: 6 },
        px: 4,
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
          href: "https://linkedin.com/in/reham",
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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 4 } }}>
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
              <Link style={defaultStyle} to="/resume">
                Resume
              </Link>
              <Box
                component="span"
                onClick={() => toggleDropdown("projects")}
                sx={{
                  ...defaultStyle,
                  cursor: "pointer",
                  color:
                    activeDropdown === "projects"
                      ? "secondary.main"
                      : "inherit",
                  fontWeight: activeDropdown === "projects" ? "700" : "inherit",
                }}
              >
                Projects
              </Box>
              <Box
                component="span"
                onClick={() => toggleDropdown("contact")}
                sx={{
                  ...defaultStyle,
                  cursor: "pointer",
                  color:
                    activeDropdown === "contact" ? "secondary.main" : "inherit",
                  fontWeight: activeDropdown === "contact" ? "700" : "inherit",
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
}

export const ProjectsContent = ({ onClick }: ProjectsContentProps) => {
  var theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: 3,
        py: { xs: 4, md: 6 },
        px: 4,
      }}
    >
      {projects.map((proj) => (
        <Link
          key={proj.id}
          to={`/projects/${proj.id}`}
          onClick={onClick}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              textAlign: "center",
              border: `1px solid ${theme.palette.secondary.main}22`,
              borderRadius: "30px",
              width: { xs: "100%", md: "25vw" },
              p: 3,
              transition: "0.3s",
              "&:hover": { bgcolor: `${theme.palette.secondary.main}08` },
            }}
          >
            <Box
              component="img"
              src={process.env.PUBLIC_URL + proj.image}
              sx={{
                width: "100%",
                borderRadius: "15px",
                mb: 2,
                aspectRatio: "16/9",
                objectFit: "cover",
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
      ))}
    </Box>
  );
};
