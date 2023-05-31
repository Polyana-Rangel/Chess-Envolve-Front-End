import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles/global";
import AppRoutes from "./routes";
import { ChessProvider } from "./contexts/chessContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ChessProvider>
          <GlobalStyles />
          <AppRoutes />
        </ChessProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
