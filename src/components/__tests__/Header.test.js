import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header/Header";
import { ModalProvider } from "../../contexts/useModal";
import { BrowserRouter } from "react-router-dom";

//This is a basic render test.
test("Renders header component", () => {
  const { getByRole } = render(
    <ModalProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ModalProvider>,
  );
  const headerElement = getByRole("banner");
  expect(headerElement).toBeInTheDocument();
});
