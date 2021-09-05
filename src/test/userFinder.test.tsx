import React from "react";
import { render, screen } from "@testing-library/react";
import UserFinder from "../components/UserFinder/UserFinder";
import renderer from "react-test-renderer";

test("Should render UserFinder correctly", () => {
  const tree = renderer.create(<UserFinder />).toJSON();
  expect(tree).toMatchSnapshot();
});

