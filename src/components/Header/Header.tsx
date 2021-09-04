import React from "react";
import * as S from "./Styles";
const Header = () => {
  return (
    <>
      <S.Wrapper>
        <div>
          <img src="../assets/images/logo-01.png" alt="Logo" />
        </div>
        <S.AuthorContainer>
          <span>By Erik Almaraz</span>
          <img src="../assets/icons/github-icon.png" alt="Github repo" />
        </S.AuthorContainer>
      </S.Wrapper>
    </>
  );
};

export default Header;
