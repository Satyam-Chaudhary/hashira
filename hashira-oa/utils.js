/**
 * Converts a string representation of a number from a given base to a BigInt.
 * @param {string} valueString The string to convert (e.g., "111", "aed70").
 * @param {number|string} base The numerical base (e.g., 2, 16).
 * @returns {BigInt} The BigInt representation of the number.
 */
export function convertBaseToBigInt(valueString, base) {
  const bigIntBase = BigInt(base);
  let result = 0n; // 'n' denotes a BigInt literal

  for (let i = 0; i < valueString.length; i++) {
    const char = valueString[i];
    
    // Use parseInt on the single character to get its decimal value.
    const digit = parseInt(char, base);

    result = result * bigIntBase + BigInt(digit);
  }
  return result;
}

/**
 * Multiplies two polynomials represented by their coefficient arrays.
 * @param {BigInt[]} poly1 Coefficients of the first polynomial.
 * @param {BigInt[]} poly2 Coefficients of the second polynomial.
 * @returns {BigInt[]} Coefficients of the resulting polynomial.
 */
export function multiplyPolynomials(poly1, poly2) {
  // The degree of the result is the sum of the degrees of the inputs.
  // The number of coefficients is degree + 1.
  const resultSize = poly1.length + poly2.length - 1;
  const result = Array(resultSize).fill(0n);

  for (let i = 0; i < poly1.length; i++) {
    for (let j = 0; j < poly2.length; j++) {
      // The product of x^i and x^j is x^(i+j)
      result[i + j] += poly1[i] * poly2[j];
    }
  }
  return result;
}