import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { darkTheme } from "./theme.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter basename="/DashboardReact">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
