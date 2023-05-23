import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles/global";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
