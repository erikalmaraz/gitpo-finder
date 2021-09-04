import React from "react";
import styled from "styled-components";

export const SearchRepositoryInput = styled.input.attrs({
  type: "text",
  placeholder: "Type a repo name...",
})`
  width: 100%;
  max-width: 600px;
  border-radius: 6px;
  border: 1px solid #999;
  padding: 10px;
  margin: 10px 0;
  background: #ddd;
`;
