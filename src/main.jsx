// import { createRoot } from "react-dom/client";
// import { ThemeProvider } from "@mui/material/styles";

// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { lightTheme, darkTheme } from "./theme.jsx";

// createRoot(document.getElementById("root")).render(
//   <ThemeProvider theme={darkTheme}>
//     <BrowserRouter basename="/DashboardReact">
//       <App />
//     </BrowserRouter>
//   </ThemeProvider>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { lightTheme, darkTheme } from "./theme.jsx";

function Root() {
  const isDarkMode = false; // 👈 abhi false rakho (light mode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter basename="/DashboardReact">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
