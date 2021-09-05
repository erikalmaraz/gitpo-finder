import React, { useState } from "react";
import { Router, RouteComponentProps, Link } from "@reach/router";
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
// Layout componets
import Header from "./components/Header/Header";
// Views/Containers
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
          <RouterPage path="/user/:username" pageComponent={<User />} />
        </Router>
      </ThemeProvider>
    </>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
