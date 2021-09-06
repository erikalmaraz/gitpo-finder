import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`;

export const PaginationMessage = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const PaginationControllers = styled.div`
  display: flex;
`;

export const ButtonControllers = styled.button`
  background: ${({ theme }) => (theme === "light" ? "#333" : "#f9f9f9")};
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  border: 0;
  padding: 8px;
  border-radius: 6px;
  margin: 0 8px;
`;

export const PositionIndicator = styled.button`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px;
  background-color: #eee;
  margin: 0 2px;
`;
