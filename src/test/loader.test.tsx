import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader/Loader";
import renderer from "react-test-renderer";

test("Should render Loader correctly", () => {
  const props = {
    theme: "light"
  }
  const tree = renderer.create(<Loader {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
