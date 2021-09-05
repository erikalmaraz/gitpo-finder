import React from "react";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 70px;
  align-items: center;
  padding: 0 50px;
  z-index: 9;
  position: relative;
  img {
    &:nth-child(1) {
      width: 110px;
    }
    &:nth-child(2) {
      width: 30px;
    }
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  span {
    margin-right: 12px;
  }
`;
