import React from "react";
import * as S from "./Styles";
import RepositoryFiltersType from "../../interfaces/repositoryFilters.interface";

const RepositoryFilters = ({
  setSearchByName,
  setSearchByType,
  theme,
}: RepositoryFiltersType) => {
  return (
    <>
      <S.FiltersContainer>
        <S.SearchRepositoryContainer>
          <S.SearchRepositoryInput
            type="text"
            theme={theme}
            placeholder="Type a repo name..."
            onChange={(e) => setSearchByName(e.target.value)}
          />
        </S.SearchRepositoryContainer>
        <div>
          <S.SelectFilter onChange={(e) => setSearchByType(e.target.value)}>
            <option value="">Language</option>
            <option value="">All</option>
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="css">CSS</option>
            <option value="c#">C#</option>
            <option value="elixir">Elixir</option>
            <option value="rust">Rust</option>
            <option value="java">Java</option>
            <option value="r">R</option>
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
