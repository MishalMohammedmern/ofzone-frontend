// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // --- TextField / OutlinedInput: remove borders globally ---
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          backgroundColor: "#fff",
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    // --- Buttons: optional rounded by default ---
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },

    // --- TableContainer scrollbar styles (for any table) ---
    MuiTableContainer: {
      styleOverrides: {
        root: {
          "&::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        },
      },
    },
  },
});

export default theme;
