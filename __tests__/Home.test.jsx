import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/pages/Home";

test("renders Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const user1Link = screen.getByRole("link", { name: /User 1/i });
  expect(user1Link).toBeInTheDocument();
  expect(user1Link.getAttribute("href")).toBe("/loan-request/1");

  const user2Link = screen.getByRole("link", { name: /User 2/i });
  expect(user2Link).toBeInTheDocument();
  expect(user2Link.getAttribute("href")).toBe("/loan-request/2");
});
