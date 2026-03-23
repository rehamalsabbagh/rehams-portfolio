import { createTheme, CSSProperties } from "@mui/material/styles";

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
    poster: CSSProperties;
    navButton: CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: CSSProperties;
    navButton?: CSSProperties;
  }
}

// This tells the Typography component that 'poster' is a valid variant prop
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
        ...({
          //** POSTER **//
          poster: ({ theme }: { theme: any }) => ({
            fontSize: "2.5rem",
            letterSpacing: 8,
            fontWeight: 900,
            lineHeight: 1.2,
            display: "block",
            textTransform: "uppercase",
            [theme.breakpoints.up("lg")]: {
              fontSize: "6rem",
              letterSpacing: 15,
            },
          }),
          //** NAV BUTTON **//
          navButton: {
            fontSize: "0.8rem",
            letterSpacing: 1,
            fontWeight: 500,
            whiteSpace: "nowrap",
            cursor: "pointer !important",
          },
        } as any),
        //*** H1 ***//
        h1: ({ theme }) => ({
          fontSize: "2.2rem",
          letterSpacing: 5,
          fontWeight: 900,
          textTransform: "uppercase",
          [theme.breakpoints.up("lg")]: {
            fontSize: "4rem",
            letterSpacing: 10,
          },
        }),
        //*** H2 ***//
        h2: ({ theme }) => ({
          fontSize: "1.8rem",
          letterSpacing: 5,
          fontWeight: 900,
          color: theme.palette.primary.main,
          textTransform: "uppercase",
          marginBottom: "2vh",
          // You can now use your custom breakpoint here!
          // [theme.breakpoints.up("tabletLg")]: {
          //   fontSize: "2.8rem",
          // },
          [theme.breakpoints.up("lg")]: {
            fontSize: "2.8rem",
            letterSpacing: 2.5,
          },
        }),
        h3: ({ theme }) => ({
          fontSize: "1.5rem",
          letterSpacing: -1,
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 1.3,
          [theme.breakpoints.up("lg")]: {
            fontSize: "3rem",
          },
        }),
        h4: {
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: 1.4,
        },
        h5: ({ theme }) => ({
          fontSize: "1.25rem",
          letterSpacing: 3,
          fontWeight: 400,
          color: theme.palette.secondary.main,
          textTransform: "uppercase",
        }),
        h6: {
          fontSize: "1.1rem",
          fontWeight: 500,
          lineHeight: 1.6,
        },
        body1: ({ theme }) => ({
          lineHeight: 1.9,
          fontSize: "1.08rem",
          fontWeight: 300,
          color: "primary.main",
          opacity: 0.85,
          [theme.breakpoints.up("lg")]: {
            fontSize: "1.15rem",
          },
        }),
        caption: {
          fontSize: "0.875rem",
          lineHeight: 1.4,
          display: "inline-block",
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
