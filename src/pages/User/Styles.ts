import styled from "styled-components";
export const CenterContainter = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FinderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 22px;
  margin-top: 22px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 23px;
  display: flex;
  div {
    &:nth-child(1) {
      width: 50%;
    }
    &:nth-child(2) {
      width: 200px;
      margin-left: 10px;
    }
  }
`;

export const RepositoryOverviewContainer = styled.div`
  width: 70%;
  padding-top: 20px;
  padding-left: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RepositoryListContainer = styled.div`
  padding-top: 20px;
`;

export const TabsContainer = styled.div`
  border-bottom: 2px solid #ccc;
  width: 100%;
`;

export const TabItem = styled.div`
  max-width: 125px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 2px solid
    ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  padding-bottom: 5px;
  margin-bottom: -2px;
  cursor: pointer;
  display: flex;
`;

export const TabItemIcon = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const UserWasntFound = styled.div`
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 0.9rem;
`;
