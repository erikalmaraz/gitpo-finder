import React from "react";
import { Wrapper, AuthorContainer } from "./Styles";
const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <img src="../assets/images/logo-01.png" alt="Logo" />
        </div>
        <AuthorContainer>
          <span>By Erik Almaraz</span>
          <img src="../assets/icons/github-icon.png" alt="Github repo" />
        </AuthorContainer>
      </Wrapper>
    </>
  );
};

export default Header;
