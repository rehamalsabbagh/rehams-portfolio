import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { defaultStyle } from "./ButtonLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // change after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "transparent" : "transparent",
        // "#f3f4f6": "primary",
        color: scrolled ? "#000" : "#000", // optional: adjust text color
        transition: "background-color 0.4s ease, color 0.4s ease",
        boxShadow: "1px 1px 20px #0000000a",
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={defaultStyle}>
            Reham's portfolio
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
