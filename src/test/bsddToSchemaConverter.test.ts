import { describe, expect, it } from 'vitest';
import { schemaVersion } from '../schema/ifcJsonSchema';
import convertBsddToJsonSchemas from '../converters/bsddToSchemaConverter';

describe('convertBsddToJsonSchemas', () => {
  it('should return empty array for empty bSDD class array', async () => {
    const result = await convertBsddToJsonSchemas([]);
    expect(result).toEqual([]);
  });

  it('should handle valid array with single bSDD class', async () => {
    const bsddClass = [{
      "classType": "Class",
      "relatedIfcEntityNames": [
        "IfcCommunicationsAppliance"
      ],
      "dictionaryUri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1",
      "activationDateUtc": "2022-09-26T00:00:00Z",
      "code": "apple",
      "name": "Apple",
      "uri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/apple",
      "status": "Active",
      "versionDateUtc": "2022-09-26T00:00:00Z",
    }]

    const expectedSchema = {
      $schema: schemaVersion,
      type: 'object',
      properties:
      {
        type: {
          type: "string",
          enum: ["IFCCOMMUNICATIONSAPPLIANCE"]
        }
      }

    };


    const result = await convertBsddToJsonSchemas(bsddClass);
    expect(result).toEqual([expectedSchema]);
  });

  it('should handle valid array with multiple bSDD classes', async () => {

    const bsddClasses = [{
      "classType": "Class",
      "dictionaryUri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1",
      "activationDateUtc": "2022-09-26T00:00:00Z",
      "code": "fruit",
      "name": "Fruit",
      "uri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/fruit",
      "status": "Active",
      "versionDateUtc": "2022-09-26T00:00:00Z",
    }, {
      "classType": "Class",
      "relatedIfcEntityNames": [
        "IfcCommunicationsAppliance"
      ],
      "dictionaryUri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1",
      "activationDateUtc": "2022-09-26T00:00:00Z",
      "code": "apple",
      "name": "Apple",
      "uri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/apple",
      "status": "Active",
      "versionDateUtc": "2022-09-26T00:00:00Z",
    }]

    const expectedSchema1 = {
      $schema: schemaVersion,
      type: 'object',
      properties: {}
    };

    const expectedSchema2 = {
      $schema: schemaVersion,
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: ['IFCCOMMUNICATIONSAPPLIANCE']
        }
      }
    };

    const result = await convertBsddToJsonSchemas(bsddClasses);
    // console.log(JSON.stringify(result, null, 2));
    expect(result).toEqual([expectedSchema1, expectedSchema2]);
  });

  it('should handle missing entity in relatedIfcEntityNames', async () => {
    const bsddClasses = [{
      "classType": "Class",
      "dictionaryUri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1",
      "activationDateUtc": "2022-09-26T00:00:00Z",
      "code": "fruit",
      "name": "Fruit",
      "uri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/fruit",
      "status": "Active",
      "versionDateUtc": "2022-09-26T00:00:00Z",
    }]

    const result = await convertBsddToJsonSchemas(bsddClasses);
    expect(result).toEqual([{
      $schema: schemaVersion,
      type: 'object',
      properties: {
      }
    }]);
  });

  it('should handle name restriction with enumeration', async () => {
    const bsddClasses = [{
      "classType": "Class",
      "relatedIfcEntityNames": [
        "IfcWall",
        "IfcSlab"
      ],
      "dictionaryUri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1",
      "activationDateUtc": "2022-09-26T00:00:00Z",
      "code": "apple",
      "name": "Apple",
      "uri": "https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/apple",
      "status": "Active",
      "versionDateUtc": "2022-09-26T00:00:00Z",
    }]

    const expectedSchema = {
      $schema: schemaVersion,
      type: 'object',
      properties: {
        type: {
          type: "string",
          enum: ['IFCWALL', 'IFCSLAB']
        }
      }
    };


    const result = await convertBsddToJsonSchemas(bsddClasses);
    // console.log(JSON.stringify(result, null, 2));
    expect(result).toEqual([expectedSchema]);
  });

});
