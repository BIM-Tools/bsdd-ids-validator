import { schemaVersion } from '../schema/ifcJsonSchema';
import { JSONSchema7Type } from 'json-schema';
import { ClassContractV1 } from '../types/bsdd';
import { getIfcClassAndPredefinedType } from './ifcBsddConverters';


function convertClassToSchema(bsddClass: ClassContractV1): JSONSchema7Type {
    if (!bsddClass) {
        return null;
    }
    const schema = {
        $schema: schemaVersion,
        type: 'object',
        properties: {} as Record<string, any>
    };
    const relatedIfcEntityNames = bsddClass.relatedIfcEntityNames;

    if (relatedIfcEntityNames && relatedIfcEntityNames.length) {
        if (relatedIfcEntityNames.length > 1) {
            // TODO determine how to define the schema, for every option a fully new schema or all options mixed up
            const types = new Set<string>([]);
            const predefinedTypes = new Set<string>([]);
            relatedIfcEntityNames.forEach(entity => {
                const { type, predefinedType } = getIfcClassAndPredefinedType(entity);
                if (type) { types.add(type) }
                if (predefinedType) { predefinedTypes.add(predefinedType) }


            });
            if (types.size) {
                schema.properties['type'] = {
                    type: "string",
                    enum: Array.from(types, type => type.toUpperCase())
                };
            }
            if (predefinedTypes.size) {
                schema.properties['predefinedType'] = {
                    type: "string",
                    enum: Array.from(predefinedTypes, predefinedType => predefinedType.toUpperCase())
                };
            }
        } else {
            const { type, predefinedType } = getIfcClassAndPredefinedType(relatedIfcEntityNames[0]);
            if (type) {
                schema.properties['type'] = {
                    type: "string", enum: [type.toUpperCase()]
                };
            }
            if (predefinedType) {
                schema.properties['predefinedType'] = { type: "string", enum: [predefinedType.toUpperCase()] };
            }
        }
    }

    return schema;
}


async function convertBsddToJsonSchemas(bsddClasses: ClassContractV1[]): Promise<JSONSchema7Type[]> {
    try {

        if (!bsddClasses.length) {
            return [];
        }

        return bsddClasses.map((bsddClass: ClassContractV1) =>
            convertClassToSchema(bsddClass)
        ).filter((schema: JSONSchema7Type) => schema !== null);

    } catch (error) {
        throw error;
    }
}


export default convertBsddToJsonSchemas;