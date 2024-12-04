// import { add } from "./add";

// test("returns 0 for an empty string", () => {
//   expect(add("")).toBe(0);
// });

// test("returns the number itself if a single number is passed", () => {
//   expect(add("1")).toBe(1);
// });

// test("returns the sum for two numbers", () => {
//   expect(add("1,5")).toBe(6);
// });

// test("handles newlines as delimiters", () => {
//   expect(add("1\n2,3")).toBe(6);
// });

// test("supports custom delimiters", () => {
//   expect(add("//;\n1;2")).toBe(3);
// });

// test("throws an exception for negative numbers", () => {
//   expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
// });

// test("shows all negative numbers in the exception", () => {
//   expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
// });
// add.test.js
import { add } from "./add";

describe("String Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should handle single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should handle two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should handle multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("should handle newline as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6); // Should correctly handle \n
  });

  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3); // Custom delimiter ;
    expect(add("//|\n1|2|3")).toBe(6); // Custom delimiter |
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow(
      "negative numbers not allowed: -2, -3"
    );
  });

  test("should handle large number of inputs", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  test("should replace \\n with newline character", () => {
    const inputValue = "1\\n2,3";
    const normalizedInput = inputValue.replace(/\\n/g, "\n"); // Ensure \\n gets replaced with \n
    expect(add(normalizedInput)).toBe(6);
  });
});
