import styled from "styled-components";
export const CenterContainter = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
