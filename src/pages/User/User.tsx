import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserFinder from "../../components/UserFinder/UserFinder"
import * as S from "./Styles";

const User = () => {
  return (
    <>
      <section>
        {/* Search Other User */}
        <S.FinderContainer>
          <UserFinder />
        </S.FinderContainer>
        {/* End Search Other User */}
        <S.CenterContainter>
          <Sidebar />
          {/* Repositories Tab */}
          <div></div>
          {/* End Repositories Tab */}
        </S.CenterContainter>
      </section>
    </>
  );
};

export default User;
