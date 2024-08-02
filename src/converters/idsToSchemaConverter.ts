import { parseStringPromise } from 'xml2js';
import { schemaVersion } from '../schema/ifcJsonSchema';
import { IdsValue, Specification } from '../types/ids';
import { JSONSchema7Type } from 'json-schema';

const options = {
    // trim: true,
    // explicitRoot: false,
    // explicitArray: false, // Prevent single elements from being wrapped in arrays
    normalize: true // Convert text nodes to string values
};


export function convertIdsValueToJsonSchema(idsValue: IdsValue): JSONSchema7Type {
    if (idsValue.simpleValue) {
        return { type: 'string', enum: idsValue.simpleValue };
    } else if (idsValue.restriction) {
        const restriction = idsValue.restriction[0];
        const baseType = restriction.$.base;
        const { pattern, enumeration } = restriction;
        const schema: JSONSchema7Type = { type: baseType || 'string' }; // Extract base value

        if (pattern) {
            schema.pattern = pattern?.[0]?.$.value;
        }

        if (enumeration) {
            schema.enum = enumeration.map(item => item.$.value);
        }

        return schema;
    } else {
        throw new Error('Unsupported idsValue format');
    }
}

function convertIfcClassificationReferenceToSchema(classificationFacet: any): any {
    const value = classificationFacet.value?.[0];
    const system = classificationFacet.system?.[0];

    return {
        type: 'object',
        properties: {
            type: { type: 'string', enum: ['IfcClassificationReference'] },
            identification: convertIdsValueToJsonSchema(value),
            referencedSource: {
                type: 'object',
                properties: {
                    type: { type: 'string', enum: ['IfcClassification'] },
                    name: convertIdsValueToJsonSchema(system)
                },
                required: ['type', 'name']
            }
        },
        required: ['type', 'identification', 'referencedSource']
    };
}

function convertSpecificationToSchema(specification: Specification): JSONSchema7Type {
    const requirements = specification.requirements?.[0];
    if (!requirements) {
        return null;
    }
    const schema = {
        $schema: schemaVersion,
        type: 'object',
        properties: {} as Record<string, any>
    };

    const entityFacet = requirements?.entity?.[0];
    if (entityFacet) {
        if (entityFacet.name?.length) {
            schema.properties['type'] = convertIdsValueToJsonSchema(entityFacet.name[0]);
        }
        if (entityFacet.predefinedType?.length) {
            schema.properties['predefinedType'] = convertIdsValueToJsonSchema(entityFacet.predefinedType[0]);
        }
    }
    const classificationFacets = requirements?.classification;
    if (classificationFacets) {
        schema.properties['hasAssociations'] = {
            type: 'array',
            items: classificationFacets.map((classificationFacet) => 
                convertIfcClassificationReferenceToSchema(classificationFacet)
            )
        };
    }
    return schema;
}


async function convertIdsToJsonSchemas(xmlString: string): Promise<JSONSchema7Type[]> {
    try {
        const idsDoc = await parseStringPromise(xmlString, options);
        const specifications: any = idsDoc?.ids?.specifications?.[0].specification ?? [];

        if (!specifications.length) {
            return [];
        }

        return specifications.map((specification: Specification) =>
            convertSpecificationToSchema(specification)
        ).filter((schema: JSONSchema7Type) => schema !== null);

    } catch (error) {
        throw error;
    }
}


export default convertIdsToJsonSchemas;