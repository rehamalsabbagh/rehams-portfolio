import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  palette: {
    primary: {
      main: "#111827",
    },
    secondary: {
      main: "#00036d",
    },
    background: {
      default: "#f3f3f3",
    },
  },
});
