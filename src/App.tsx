import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import GlobalStyles from "./styles/global";
import AppRoutes from "./routes";
import { ChessProvider } from "./contexts/chessContext";
import {WindowDimensionProvider} from "./contexts/windowDimensionContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ChessProvider>
          <WindowDimensionProvider>
            <GlobalStyles />
            <AppRoutes />
          </WindowDimensionProvider>
        </ChessProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
