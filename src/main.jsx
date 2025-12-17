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
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { getTheme } from "./theme";

function Root() {
  const isDarkMode = false; // abhi test ke liye

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={getTheme(isDarkMode ? "dark" : "light")}>
      <CssBaseline />
      <BrowserRouter basename="/DashboardReact">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
