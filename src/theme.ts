import { createTheme } from "@mui/material/styles";

// 1. Module augmentation to allow TypeScript to recognize the new breakpoint
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    tabletLg: true; // New breakpoint
    lg: true;
    xl: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    navButton: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    navButton: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    navButton: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      tabletLg: 1050, // Custom point between 900 and 1200
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Instrument Sans, system-ui, sans-serif",
    poster: {
      fontSize: "5.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
      display: "block",
    },
    h1: {
      fontWeight: 700,
      xs: {
        fontSize: "2.5rem",
        lineHeight: 1.5,
      },
      lg: {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: 0.6,
    },
    caption: {
      fontSize: "0.875rem",
      lineHeight: 1.4,
      display: "inline-block",
    },
    navButton: {
      fontSize: "0.8rem",
      fontWeight: 500,
      letterSpacing: 1,
      whiteSpace: "nowrap",
      cursor: "pointer !important",
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      // main: "#634aa7",
      main: "#373cd1",
    },
    background: {
      default: "#f3f3f3",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "default",
          userSelect: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          cursor: "default",
        },
      },
    },
  },
});
