import ifcJsonSchema from '../schema/ifcJsonSchema';
import { ValidationResult } from '../types/validator';
import Ajv from 'ajv';

const ajv = new Ajv();
const compiledIfcSchema = ajv.compile(ifcJsonSchema);

export const validateIfcJson = (ifcJson: any): ValidationResult => {
  const valid = compiledIfcSchema(ifcJson);
  return {
    valid,
    errors: compiledIfcSchema.errors || []
  };
};

export const validateJsonSchema = (ifcJson: any, jsonSchema: any): ValidationResult => {
  const compiledJsonSchema = ajv.compile(jsonSchema);
  const valid = compiledJsonSchema(ifcJson);
  return {
    valid,
    errors: compiledJsonSchema.errors || []
  };
};