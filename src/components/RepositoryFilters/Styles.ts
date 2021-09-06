import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const SearchRepositoryContainer = styled.div`
  width: 80%;
  max-width: 311px;
  margin-right: 5px;
`;

export const SearchRepositoryInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  background: ${({ theme }) => (theme === "light" ? "#ddd" : "#f9f9f9")};
`;

export const SelectFilter = styled.select`
  padding: 8px;
  border-radius: 6px;
  margin: 0 5px;
`;
