import React from "react";
import { render, screen } from "@testing-library/react";
import UserFinder from "../components/UserFinder/UserFinder";
import renderer from "react-test-renderer";

test("Should render UserFinder correctly", () => {
  const props = {
    theme: "light"
  }
  const tree = renderer.create(<UserFinder {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

