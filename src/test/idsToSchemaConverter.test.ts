import { describe, expect, it } from 'vitest';
import convertIdsToJsonSchemas, { convertIdsValueToJsonSchema } from '../converters/idsToSchemaConverter';
import { schemaVersion } from '../schema/ifcJsonSchema';

describe('convertIdsValueToJsonSchema', () => {
    it('should handle simpleValue', () => {
        const idsValue = { simpleValue: ['testValue'] };
        const result = convertIdsValueToJsonSchema(idsValue);
        expect(result).toEqual({ type: 'string', enum: ['testValue'] });
    });

    it('should handle restriction with base', () => {
        const idsValue = { restriction: [{ $: { base: 'string' } }] };
        const result = convertIdsValueToJsonSchema(idsValue);
        expect(result).toEqual({ type: 'string' });
    });

    it('should handle restriction with pattern', () => {
        const idsValue = {
            restriction: [{ $: { base: 'string' }, pattern: [{ $: { value: '\\d+' } }] }]
        };
        const result = convertIdsValueToJsonSchema(idsValue);
        expect(result).toEqual({ type: 'string', pattern: '\\d+' });
    });

    it('should handle restriction with enumeration', () => {
        const idsValue = { restriction: [{ $: { base: 'string' }, enumeration: [{ $: { value: 'value1' } }, { $: { value: 'value2' } }] }] };
        const result = convertIdsValueToJsonSchema(idsValue);
        expect(result).toEqual({ type: 'string', enum: ['value1', 'value2'] });
    });

    it('should throw error for unsupported format', () => {
        const idsValue = {};
        expect(() => convertIdsValueToJsonSchema(idsValue)).toThrow('Unsupported idsValue format');
    });
});


describe('convertIdsToJsonSchemas', () => {
    it('should return empty array for empty xmlString', async () => {
        const xmlString = '';
        const result = await convertIdsToJsonSchemas(xmlString);
        expect(result).toEqual([]);
    });

    it('should handle valid xmlString with single specification', async () => {
        const xmlString = `
      <ids>
        <specifications>
          <specification>
            <requirements>
              <entity>
                <name>
                  <simpleValue>IFCWALL</simpleValue>
                </name>
              </entity>
            </requirements>
          </specification>
        </specifications>
      </ids>`;

        const expectedSchema = {
            $schema: schemaVersion,
            type: 'object',
            properties: {
                type: {
                    type: "string",
                    enum: ['IFCWALL']
                }
            }
        };


        const result = await convertIdsToJsonSchemas(xmlString);
        expect(result).toEqual([expectedSchema]);
    });

    it('should handle valid xmlString with multiple specifications', async () => {
        const xmlString = `
      <ids>
        <specifications>
          <specification>
            <requirements>
              <entity>
                <name>
                  <simpleValue>IFCWALL</simpleValue>
                </name>
                <predefinedType>
                  <simpleValue>SOLID</simpleValue>
                </predefinedType>
              </entity>
            </requirements>
          </specification>
          <specification>
            <requirements>
              <entity>
                <name>
                  <simpleValue>IFCSLAB</simpleValue>
                </name>
              </entity>
            </requirements>
          </specification>
        </specifications>
      </ids>`;

        const expectedSchema1 = {
            $schema: schemaVersion,
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    enum: ['IFCWALL']
                },
                predefinedType: {
                    type: 'string',
                    enum: ['SOLID']
                }
            }
        };

        const expectedSchema2 = {
            $schema: schemaVersion,
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    enum: ['IFCSLAB']
                }
            }
        };

        const result = await convertIdsToJsonSchemas(xmlString);
        console.log(result);
        expect(result).toEqual([expectedSchema1, expectedSchema2]);
    });

    it('should handle missing entity in requirements', async () => {
        const xmlString = `
      <ids>
        <specifications>
          <specification>
            <requirements>
              </requirements>
          </specification>
        </specifications>
      </ids>`;

        const result = await convertIdsToJsonSchemas(xmlString);
        expect(result).toEqual([{
            $schema: schemaVersion,
            type: 'object',
            properties: {
            }
        }]);
    });

    it('should handle name restriction with enumeration', async () => {
        const xmlString = `
      <ids>
        <specifications>
          <specification>
            <requirements>
              <entity>
                <name>
                  <restriction base="string">
                    <enumeration value="IFCWALL" />
                    <enumeration value="IFCSLAB" />
                  </restriction>
                </name>
              </entity>
            </requirements>
          </specification>
        </specifications>
      </ids>`;

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


        const result = await convertIdsToJsonSchemas(xmlString);
        expect(result).toEqual([expectedSchema]);
    });

    it('should handle name restriction with pattern', async () => {
        const xmlString = `
      <ids>
        <specifications>
          <specification>
            <requirements>
              <entity>
                <name>
                  <restriction base="string">
                    <pattern value="[A-Z]{2}[0-9]{2}" />
                  </restriction>
                </name>
              </entity>
            </requirements>
          </specification>
        </specifications>
      </ids>`;

        const expectedSchema = {
            $schema: schemaVersion,
            type: 'object',
            properties: {
                type: {
                    type: "string",
                    pattern: '[A-Z]{2}[0-9]{2}'
                }
            }
        };


        const result = await convertIdsToJsonSchemas(xmlString);
        expect(result).toEqual([expectedSchema]);
    });
});
