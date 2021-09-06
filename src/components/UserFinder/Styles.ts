import styled from "styled-components";

export const Finder = styled.input`
  width: 100%;
  max-width: 600px;
  border-radius: 6px;
  border: 1px solid #999;
  padding: 10px;
  margin: 10px 0;
  background: ${({ theme }) => (theme === "light" ? "#ddd" : "#f9f9f9")};
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  text-align: center;
  border-radius: 5px;
  border: 0;
  padding: 8px;
  margin-top: 10px;
  font-weight: bold;
  min-width: 120px;
  font-size: 16px;
`;
