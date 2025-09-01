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
node solve.js <path_to_json_file>