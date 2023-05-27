import { getCurrentDate } from "../src/utils/utils";

describe("getCurrentDate", () => {
  test("debería devolver la fecha actual en el formato correcto", () => {
    const today = new Date();
    const expectedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    expect(getCurrentDate()).toEqual(expectedDate);
  });
});
