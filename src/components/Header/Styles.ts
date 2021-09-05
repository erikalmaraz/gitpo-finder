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

export const ThemeControllerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleSwitchContainer = styled.div`
  width: 50px;
  height: 19px;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  border: 2px solid #ddd;
  border-radius: 21px;
  position: relative;
  margin-left: 20px;
  align-items: center;
  cursor: pointer;
`;

export const CircleToggleSwitch = styled.span`
  height: 13px;
  width: 13px;
  background: ${({ theme }) => (theme === "light" ? "#444" : "#fff")};
  display: block;
  border-radius: 100%;
  position: absolute;
  bottom: 1px;
  left: ${({ theme }) => (theme === "light" ? "2px" : "30px")};
  transition: all 0.3s ease;
`;
