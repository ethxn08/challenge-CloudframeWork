import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useUserData from "../src/hooks/useUserData";
import useForm from "../src/hooks/useForm";
import LoanRequest from "../src/pages/LoanRequest";

jest.mock("../src/hooks/useUserData");
jest.mock("../src/hooks/useForm");

describe("LoanRequest component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("renders FormComponent when no error or success", () => {
    useUserData.mockReturnValue({
      formData: {},
      updateFormData: jest.fn(),
      error: null,
    });
    useForm.mockReturnValue({
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      getCurrentDate: jest.fn(),
      error: null,
      success: false,
    });

    render(
      <MemoryRouter>
        <LoanRequest />
      </MemoryRouter>
    );

    const formComponent = screen.getByTestId("form-component");
    expect(formComponent).toBeInTheDocument();
  });

  test("renders ErrorComponent when there is an error", () => {
    useUserData.mockReturnValue({
      formData: {},
      updateFormData: jest.fn(),
      error: "Error message",
    });
    useForm.mockReturnValue({
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      getCurrentDate: jest.fn(),
      error: null,
      success: false,
    });

    render(
      <MemoryRouter>
        <LoanRequest />
      </MemoryRouter>
    );

    const errorComponent = screen.getByTestId("error-component");
    expect(errorComponent).toBeInTheDocument();
  });

  test("renders SuccessComponent when success is true", () => {
    useUserData.mockReturnValue({
      formData: {},
      updateFormData: jest.fn(),
      error: null,
    });
    useForm.mockReturnValue({
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      getCurrentDate: jest.fn(),
      error: null,
      success: true,
    });

    render(
      <MemoryRouter>
        <LoanRequest />
      </MemoryRouter>
    );

    const successComponent = screen.getByTestId("success-component");
    expect(successComponent).toBeInTheDocument();
  });
});
