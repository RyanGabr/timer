import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Screen } from "./screen";
import { ThemeProvider } from "./components/theme-provider";
import "./styles/global.css";
import { TimerProvider } from "./context/timer-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TimerProvider>
        <Screen />
      </TimerProvider>
    </ThemeProvider>
  </StrictMode>
);
