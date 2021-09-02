import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as S from "./Styles";
const User = () => {
  return (
    <>
      <section>
        <S.CenterContainter>
          <Sidebar />
          <div></div>
        </S.CenterContainter>
      </section>
    </>
  );
};

export default User;
