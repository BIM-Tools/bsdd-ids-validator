import { expect, describe, it } from 'vitest';
import { validateIfcJson, validateJsonSchema } from '../validator';

describe('validateIfcJson', () => {
    it('should validate a valid ifcJSON', () => {
        const ifcJson = {
            type: 'IfcWall',
            objectType: 'breedplaatvloer',
        };

        const result = validateIfcJson(ifcJson);
        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    it('should return errors for invalid ifcJSON', () => {
        const ifcJson = {
            type: 'IfcWall',
            objectType: 'a'.repeat(257)
        };

        const result = validateIfcJson(ifcJson);
        expect(result.valid).toBe(false);
        expect(result.errors).toHaveLength(1);
    });

    it('should validate a valid IDS specification or bSDD class', () => {
        const ifcJson = {
            type: 'IfcWall',
            objectType: 'breedplaatvloer'
        };
        const jsonSchema = {
            "type": "object",
            "required": ["objectType"],
            "properties": {
                "objectType": {
                    "type": "string",
                    "enum": ["breedplaatvloer"]
                }
            }
        };

        const result = validateJsonSchema(ifcJson, jsonSchema);
        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    it('should return errors for invalid IDS specification or bSDD class', () => {
        const ifcJson = {
            type: 'IfcWall',
            objectType: 'kanaalplaatvloer'
        };
        const jsonSchema = {
            "type": "object",
            "required": ["objectType"],
            "properties": {
                "objectType": {
                    "type": "string",
                    "enum": ["breedplaatvloer"]
                }
            }
        };

        const result = validateJsonSchema(ifcJson, jsonSchema);
        expect(result.valid).toBe(false);
        expect(result.errors).toHaveLength(1);
    });
});
