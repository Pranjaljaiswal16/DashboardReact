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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#2b3c5f",
          color: "rgba(255,255,255,0.7)",
          borderRadius: "10px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3c5f",
        },
      },
    },
  },
});
