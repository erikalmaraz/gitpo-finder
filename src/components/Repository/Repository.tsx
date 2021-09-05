import React from "react";
import RespositoryType from "../../interfaces/repository.interface";
import * as S from "./Styles";
const Repository = ({ name, description, language }: RespositoryType) => {
  return (
    <React.Fragment>
      <S.RepoContainer>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.Language>{language}</S.Language>
      </S.RepoContainer>
    </React.Fragment>
  );
};

export default Repository;
