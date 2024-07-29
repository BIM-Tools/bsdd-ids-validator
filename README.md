# bsdd-ids-validator

Typescript library for validating ifcJSON data against bSDD and IDS rules.


`bsdd-ids-validator` is a TypeScript library that unifies the validation of buildingSMART Data Dictionary (bSDD) data and Information Delivery Specification (IDS) XML files, both essential for Industry Foundation Classes (IFC) models. It provides tools to convert IDS XML and bSDD dictionaries to JSON Schemas and validate IFC JSON objects against these schemas, ensuring consistent and accurate BIM model validation.

## Features

1. **IDS XML Parser and Converter**: Converts IDS Specifications to IFC JSON Schemas.
2. **bSDD Dictionary Downloader and Converter**: Downloads and converts bSDD dictionary classes to IFC JSON Schemas.
3. **Validator**: Validates IFC JSON objects against the JSON Schemas and returns validation results with comments.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
