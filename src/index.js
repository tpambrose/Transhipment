import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#26AAE1",
      contrastText: "#fff",
    },
  },
  typography: {
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "18px",
      color: "#000000",
    },
    subtitle1: {
      fontFamily: "'Roboto'",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12.6204px",
      lineHeight: "15px",
      color: "#9E9E9E",
    },
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  </Provider>
);
