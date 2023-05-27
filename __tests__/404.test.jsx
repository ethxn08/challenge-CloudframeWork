import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Func404 from "../src/pages/404";

test("renders Func404 component", () => {
  render(
    <MemoryRouter>
      <Func404 />
    </MemoryRouter>
  );

  const errorHeading = screen.getByText(/Error 404/i);
  expect(errorHeading).toBeInTheDocument();

  const homeLink = screen.getByRole("link", { name: /Go Home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute("href")).toBe("/");
});
