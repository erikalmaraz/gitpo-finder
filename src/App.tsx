import React, { useEffect, useState } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
// Layout componets
import Header from "./components/Header/Header";
// Views/Containers
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {
  const savedTheme = localStorage.getItem("theme");
  const themeMemoized = savedTheme ? savedTheme : "light";
  const [theme, setTheme] = useState(themeMemoized);
  console.log(theme, " Theme");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} currentTheme={theme} />
        <Router>
          <RouterPage path="/" pageComponent={<Home theme={theme} />} />
          <RouterPage
            path="/user/:username"
            pageComponent={<User theme={theme} />}
          />
        </Router>
      </ThemeProvider>
    </>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
