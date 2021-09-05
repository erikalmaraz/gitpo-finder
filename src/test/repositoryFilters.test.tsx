import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoryFilters from "../components/RepositoryFilters/RepositoryFilters";
import renderer from "react-test-renderer";

test("Should render RepositoryFilters correctly", () => {
  const props = {
    filterByName: jest.fn(),
    filterByLanguage: jest.fn(),
  };
  const tree = renderer
    .create(
      <RepositoryFilters
        filterByName={props.filterByName}
        filterByLanguage={props.filterByLanguage}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
