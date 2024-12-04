// export const add = (numbers) => {
//   if (!numbers) return 0;

//   let delimiter = /,|\n/;
//   if (numbers.startsWith("//")) {
//     const parts = numbers.split("\n");
//     delimiter = new RegExp(parts[0][2]);
//     numbers = parts[1];
//   }

//   const numArray = numbers.split(delimiter).map(Number);
//   const negatives = numArray.filter((num) => num < 0);
//   if (negatives.length) {
//     throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
//   }

//   return numArray.reduce((sum, num) => sum + num, 0);
// };

export const add = (numbers) => {

  // Step 1: Handle empty input
  if (!numbers) return 0;

  let delimiter = /,|\n/; // Default delimiters: comma and newline

  // Step 2: Handle custom delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2); // Split into two parts: delimiter and numbers
    const customDelimiter = parts[0].slice(2); // Extract delimiter after "//"
    delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters
    numbers = parts[1]; // Update numbers to the remaining part
  }

  // Step 3: Split numbers and convert to integers
  const numArray = numbers.split(delimiter).map(num => Number(num));

  // Step 4: Check for negative numbers
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // Step 5: Calculate and return the sum
  return numArray.reduce((sum, num) => sum + num, 0);
};

