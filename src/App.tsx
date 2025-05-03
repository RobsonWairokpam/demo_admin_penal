import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import { Provider } from 'react-redux';
import { FC, ReactNode } from "react";
import Page from "./Page";
// import { store } from "./redux/store";

const App: FC = () => {
  return (
    <ProviderWrapper>
      <CssBaseline />
      <Page />
    </ProviderWrapper>
  );
};

const ProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    // <QueryClientProvider client={queryClient}>
    // <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </Provider>
  );
};
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#244D59",
      // main: "#fbfdf8",
      light: "#E8E8E8",
      dark: "#0C1F31",
    },
    secondary: {
      main: "#DB7A18",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fafafa",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#244D59",
            minHeight: 200,
          },
        },
      },
    },
  },
});

export default App;
