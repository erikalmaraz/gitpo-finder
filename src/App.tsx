import React, { useState } from "react";
import { Router, RouteComponentProps, Link } from "@reach/router";
import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import Header  from "./components/Header/Header";
function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
        </Router>
      </ThemeProvider>
    </>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
