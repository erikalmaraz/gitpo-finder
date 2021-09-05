import styled from "styled-components";

export const Finder = styled.input`
  width: 100%;
  max-width: 600px;
  border-radius: 6px;
  border: 1px solid #999;
  padding: 10px;
  margin: 10px 0;
  background: #ddd;
`;

export const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  background: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  border: 0;
  padding: 8px;
  margin-top: 10px;
  font-weight: bold;
  min-width: 120px;
  font-size: 16px;
`;
