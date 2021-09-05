import React, { useState } from "react";
import HeaderType from "../../interfaces/header.interfaces";
import * as S from "./Styles";
const Header = ({ themeToggler }: HeaderType) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const isLigthThemeSelected = theme === "light";
    themeToggler();
    if (isLigthThemeSelected) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <React.Fragment>
      <S.Wrapper>
        <div>
          <img src="../assets/images/logo-01.png" alt="Logo" />
        </div>
        <S.ThemeControllerWrapper>
          <S.AuthorContainer>
            <span>By Erik Almaraz</span>
            <img src="../assets/icons/github-icon.png" alt="Github repo" />
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
