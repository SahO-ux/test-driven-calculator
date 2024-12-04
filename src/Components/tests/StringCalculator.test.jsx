import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

test("should calculate sum for valid input", () => {
  render(<StringCalculator />);

  const inputField = screen.getByPlaceholderText("Enter numbers");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(inputField, { target: { value: "1\\n2,3" } }); // Use \\n to simulate the input
  fireEvent.click(calculateButton);
  const resultDisplay = screen.getByTestId("result-display");

  expect(resultDisplay.textContent).toBe("6"); // Ensure the UI shows the correct result
});

test("should handle custom delimiters", () => {
  render(<StringCalculator />);

  const inputField = screen.getByPlaceholderText("Enter numbers");
  const calculateButton = screen.getByText("Calculate");
  const resultDisplay = screen.getByTestId("result-display");

  fireEvent.change(inputField, { target: { value: "//;\n1;2" } }); // Custom delimiter ;
  fireEvent.click(calculateButton);

  expect(resultDisplay.textContent).toBe("3"); // Ensure the UI shows the correct result
});

test("should throw an error for negative numbers", () => {
  render(<StringCalculator />);

  const inputField = screen.getByPlaceholderText("Enter numbers");
  const calculateButton = screen.getByText("Calculate");
  const resultDisplay = screen.getByTestId("result-display");

  fireEvent.change(inputField, { target: { value: "1,-2,3" } });
  fireEvent.click(calculateButton);

  expect(resultDisplay.textContent).toBe("negative numbers not allowed: -2");
});
