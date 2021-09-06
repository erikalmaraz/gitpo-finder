import React, { useState } from "react";
import HeaderType from "../../interfaces/header.interfaces";
import { Link } from "@reach/router";
import * as S from "./Styles";
const Header = ({ themeToggler, currentTheme }: HeaderType) => {
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    themeToggler();
  };

  return (
    <React.Fragment>
      <S.Wrapper>
        <div>
          <Link to="/">
            <S.ImageTheme
              theme={theme}
              src="../assets/images/logo-01.png"
              alt="Logo"
            />
          </Link>
        </div>
        <S.ThemeControllerWrapper>
          <S.AuthorContainer>
            <span>By Erik Almaraz </span>
            <S.ImageTheme
              theme={theme}
              src="../assets/icons/github-icon.png"
              alt="Github repo"
            />
          </S.AuthorContainer>
          <S.ToggleSwitchContainer onClick={toggleTheme} theme={theme}>
            <S.CircleToggleSwitch theme={theme}></S.CircleToggleSwitch>
          </S.ToggleSwitchContainer>
        </S.ThemeControllerWrapper>
      </S.Wrapper>
    </React.Fragment>
  );
};

export default Header;
