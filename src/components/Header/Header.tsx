import React, { useState } from "react";
import HeaderType from "../../interfaces/header.interfaces";
import { Link } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Styles";

library.add(fas);

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
          <S.SwitchThemeWrapper>
            <FontAwesomeIcon icon="sun" />
            <S.ToggleSwitchContainer onClick={toggleTheme} theme={theme}>
              <S.CircleToggleSwitch theme={theme}></S.CircleToggleSwitch>
            </S.ToggleSwitchContainer>
            <FontAwesomeIcon icon="moon" />
          </S.SwitchThemeWrapper>
        </S.ThemeControllerWrapper>
      </S.Wrapper>
    </React.Fragment>
  );
};

export default Header;
