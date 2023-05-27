import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormComponent from "../src/components/FormComponent";
import { getCurrentDate } from "../src/utils/utils";

describe("FormComponent", () => {
  const formData = {
    name: "John",
    surname: "Doe",
    email: "johndoe@example.com",
    phone: "123456789",
    age: 30,
    loan_amount: "500",
    loan_date: "2023-05-27",
    loan_weeks: "4",
    check: true,
  };

  test("renders the form with initial data", () => {
    const getCurrentDate = jest.fn();
    render(
      <FormComponent formData={formData} getCurrentDate={getCurrentDate} />
    );

    expect(screen.getByTestId("name")).toHaveValue("Nombre: John");
    expect(screen.getByTestId("surname")).toHaveValue("Apellidos: Doe");
    expect(screen.getByTestId("email")).toHaveValue(
      "Email: johndoe@example.com"
    );
    expect(screen.getByTestId("phone")).toHaveValue("123456789");
    expect(screen.getByTestId("age")).toHaveValue(30);
    expect(screen.getByTestId("loan_amount")).toHaveValue("500");
    expect(screen.getByTestId("loan_date")).toHaveValue("2023-05-27");
    expect(screen.getByTestId("loan_weeks")).toHaveValue("4");
    expect(
      screen.getByLabelText("Aceptar términos y condiciones")
    ).toBeChecked();
  });

  test("calls handleChange when phone input is changed", () => {
    const handleChange = jest.fn();
    const getCurrentDate = jest.fn();

    render(
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        getCurrentDate={getCurrentDate}
      />
    );

    const phoneInput = screen.getByPlaceholderText("Teléfono");
    fireEvent.change(phoneInput, { target: { value: "987654321" } });

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test("calls handleSubmit when form is submitted", () => {
    const getCurrentDate = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <FormComponent
        formData={formData}
        handleSubmit={handleSubmit}
        getCurrentDate={getCurrentDate}
      />
    );

    const submitButton = screen.getByText("Enviar solicitud");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
