import styled from "styled-components";

export const Finder = styled.input.attrs({
  type: "text",
})`
  width: 80%;
  max-width: 200px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

export const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  background: #333;
  color: #fff;
  text-align: center;
  min-width: 90px;
  border-radius: 5px;
`;
