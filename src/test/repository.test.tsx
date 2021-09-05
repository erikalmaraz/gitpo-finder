import React from "react";
import { render, screen } from "@testing-library/react";
import Repository from "../components/Repository/Repository";
import renderer from "react-test-renderer";

it("Should render Repository correctly", () => {
  const props = {
    name: "Repository name",
    description: "Repository desc",
    language: "JavaScript",
  };
  const tree = renderer.create(<Repository {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
