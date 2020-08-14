import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

//This is a basic render test.
test("Renders header component", () => {
  const { getByRole } = render(<Header />);
  const headerElement = getByRole("banner");
  expect(headerElement).toBeInTheDocument();
});
