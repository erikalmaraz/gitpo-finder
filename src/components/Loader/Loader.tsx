import React from "react";
import Loading from '../../resources/assets/images/loader.gif';
import * as S from "./Styles";
const Header = () => {
  return (
    <React.Fragment>
      <S.LoaderWrapper>
        <S.LoaderImg src={Loading} alt="Loader"/>
      </S.LoaderWrapper>
    </React.Fragment>
  );
};

export default Header;
