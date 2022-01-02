import "./App.css";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import theme from "./theme.js";
import Home from "./pages/Home/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
