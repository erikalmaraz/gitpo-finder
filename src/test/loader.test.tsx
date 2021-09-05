import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader/Loader";
import renderer from "react-test-renderer";

test("Should render Loader correctly", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
