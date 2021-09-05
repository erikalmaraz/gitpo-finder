import React from "react";
import * as S from "./Styles";
import RepositoryFiltersType from "../../interfaces/repositoryFilters.interface";

const RepositoryFilters = ({
  filterByName,
  filterByLanguage,
}: RepositoryFiltersType) => {
  return (
    <>
      <S.FiltersContainer>
        <S.SearchRepositoryContainer>
          <S.SearchRepositoryInput
            type="text"
            placeholder="Type a repo name..."
            onChange={(e) => filterByName(e.target.value)}
          />
        </S.SearchRepositoryContainer>
        <div>
          <S.SelectFilter onChange={(e) => filterByLanguage(e.target.value)}>
            <option value="">Language</option>
            <option value="">All</option>
            <option value="javascript">JavaScript</option>
          </S.SelectFilter>
        </div>
        <div>
          <S.SelectFilter>
            <option value="">Type</option>
            <option value="">All</option>
            <option value="">Fork</option>
            <option value="">Archive</option>
            <option value="">Source</option>
          </S.SelectFilter>
        </div>
      </S.FiltersContainer>
    </>
  );
};

export default RepositoryFilters;
