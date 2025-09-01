# Hashira Placements - Polynomial Solver 

This project is a command-line application built with Node.js that solves a specific algorithmic challenge: reconstructing a polynomial's coefficients from a given set of its roots.

The script is designed to parse a complex JSON input, handle roots provided in various numerical bases, and perform polynomial multiplication using arbitrarily large integers to ensure precision.

***

## Features 

* **JSON Input Parsing**: Reads and interprets complex test cases provided in JSON format.
* **Arbitrary Base Conversion**: Includes a utility to convert number strings from any base (e.g., binary, hexadecimal) into a standard format.
* **Large Number Support**: Utilizes JavaScript's native `BigInt` to flawlessly handle extremely large integers, preventing common overflow and precision errors.
* **Polynomial Multiplication**: Implements the core mathematical algorithm to expand a polynomial from its factored form `(x - r₁)(x - r₂)...` into its standard coefficient form.
* **Modular Code**: Helper functions are neatly organized into a separate `utils.js` file for clarity and reusability.

***

## Requirements

* [Node.js](https://nodejs.org/) (version 14.x or higher is recommended)

***

## Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <repo-name>
    ```

2.  Navigate into the project directory:
    ```bash
    cd <hashira-oa>
    ```
    *No external dependencies are required, so you don't need to run `npm install`.*

***

## Usage

The script is run from the command line and accepts a single argument: the path to the JSON test case file.

### Syntax
```bash
node solve.js <testcase1.json, testcase2.json>

Expected Output
Below is the console output when running the script with the provided test cases.

Test Case 1
Final Polynomial Coefficients (for degree 2):
[ '1', '-11', '28' ]
Test Case 2
Final Polynomial Coefficients (for degree 6):
[
  '1',
  '-16035585567652874221',
  '62896005845998832818285892998257358574',
  '-70101247814242093515413229739756995082336947152628757106',
  '24591744981099998090053815670990379635936553571500369726557542164707725669',
  '-2592352525729807210924107937826892194086488679171703356477006557000617068415514509018873217',
  '2555329762523754641638371521787153182033159975203073626408066416562448111114093826928388280970414872420300'
]
File Structure
/
├── solve.js             # Main executable script
├── utils.js             # Helper functions (base conversion, multiplication)
├── testcase1.json       # Sample test case with standard numbers
└── testcase2.json       # Sample test case with 

