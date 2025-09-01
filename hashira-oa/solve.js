import fs from 'fs';
import { convertBaseToBigInt, multiplyPolynomials } from './utils.js';

const fileName = process.argv[2];

if (!fileName) {
  console.error('Error: Please provide the path to a JSON test case file.');
  console.log('Usage: node solve.js <filename.json>');
  process.exit(1);
}

try {

  const fileContent = fs.readFileSync(fileName, 'utf8');
  const data = JSON.parse(fileContent);
  const m = data.keys.k - 1; 


  const roots = [];
  for (let i = 1; i <= m; i++) {
    const rootData = data[String(i)];
    if (!rootData) throw new Error(`Root data for key '${i}' is missing.`);
    roots.push(convertBaseToBigInt(rootData.value, rootData.base));
  }


  let resultPolynomial = [1n];


  for (const root of roots) {
    const currentFactor = [1n, -root]; 
    resultPolynomial = multiplyPolynomials(resultPolynomial, currentFactor);
  }


  console.log(`Final Polynomial Coefficients (for degree ${m}):`);
  console.log(resultPolynomial.map(c => c.toString()));

} catch (error) {
  console.error(`An error occurred: ${error.message}`);
  process.exit(1);
}