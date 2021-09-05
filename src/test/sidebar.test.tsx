import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar/Sidebar";
import renderer from "react-test-renderer";

it("Should render Sidebar correctly", () => {
  const props = {
    name: "Erik Almaraz",
    image: "https://avatars.githubusercontent.com/u/12221606?v=4",
    description: "Description test",
    username: "greatelse",
  };
  const tree = renderer.create(<Sidebar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
