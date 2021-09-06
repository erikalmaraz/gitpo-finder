import React from "react";
import PaginationType from "../../interfaces/pagination.interface";
import * as S from "./Styles";
const Pagination = ({ totalItems, nextPage, prevPage, theme }: PaginationType) => {
  return (
    <React.Fragment>
      <S.PaginationContainer>
        <S.PaginationMessage>We found {totalItems} repos.</S.PaginationMessage>
        <S.PaginationControllers>
          <S.ButtonControllers theme={theme} onClick={prevPage}>Prev</S.ButtonControllers>
          <S.ButtonControllers theme={theme} onClick={nextPage}>Next</S.ButtonControllers>
        </S.PaginationControllers>
      </S.PaginationContainer>
    </React.Fragment>
  );
};

export default Pagination;
