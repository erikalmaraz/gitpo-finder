import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import renderer from "react-test-renderer";

test("Should render Loader correctly", () => {
  const props = {
    themeToggler: jest.fn,
  };
  const tree = renderer.create(<Header {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
