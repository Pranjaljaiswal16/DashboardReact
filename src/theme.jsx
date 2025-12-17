// import { createTheme } from "@mui/material/styles";

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

// export const darkTheme = createTheme({
//   components: {
//     MuiMenu: {
//       styleOverrides: {
//         paper: {
//           backgroundColor: "#2b3c5f",
//           color: "rgba(255, 255, 255, 0.7)",
//           borderRadius: "10px",
//         },
//       },
//     },
//     MuiList: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#2b3c5f",
//         },
//       },
//     },
//   },
// });

import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#071739" : "#f5f5f5",
        paper: mode === "dark" ? "#2b3c5f" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },

    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#2b3c5f" : "#ffffff",
            color: mode === "dark" ? "#ffffff" : "#000000",
            borderRadius: "10px",
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? "rgba(255,255,255,0.85)" : "#000",
            "&:hover": {
              backgroundColor:
                mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)",
            },
          },
        },
      },
    },
  });
