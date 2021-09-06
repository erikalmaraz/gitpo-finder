import React from "react";
import Logo from "../../resources/assets/images/logo-01.png";
import LoaderType from "../../interfaces/loader.interface";
import * as S from "./Styles";
const Header = ({ theme }: LoaderType) => {
  return (
    <React.Fragment>
      <S.LoaderWrapper theme={theme}>
        <S.LoaderImg theme={theme} src={Logo} alt="Loader" />
      </S.LoaderWrapper>
    </React.Fragment>
  );
};

export default Header;
