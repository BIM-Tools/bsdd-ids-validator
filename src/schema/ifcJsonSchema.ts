export const schemaVersion = "http://json-schema.org/draft-07/schema#"
const ifcLabel = {
    type: "string",
    maxLength: 256
}
const ifcIdentifier = {
    type: "string",
    maxLength: 256
}
const ifcText = {
    type: "string"
}
const ifcURIReference = {
    type: "string"
}
const ifcDate = {
    "type": "string",
    "pattern": "^(-)?\\d{4}-\\d{2}-\\d{2}(\\s\\S+)?$"
}

const ifcClassitication = {
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": ["IfcClassification"]
        },
        "source": ifcLabel,
        "location": ifcURIReference,
        "edition": ifcLabel,
        "editionDate": ifcDate,
        "name": ifcLabel,
        "description": ifcText,
        "specification": {
            "type": "string",
        },
        "referenceTokens": {
            "type": "array",
            "items": ifcIdentifier
        }
    },
    "required": ["type", "location"],
    "additionalProperties": false
}


const ifcClassificationReference = {
    type: "object",
    properties: {
        type: {
            type: "string",
            enum: ["IfcClassificationReference"]
        },
        location: ifcURIReference,
        identification: ifcIdentifier,
        name: ifcLabel,
        referencedSource: ifcClassitication,
        description: ifcText,
        sort: ifcIdentifier
    },
    "required": ["type"],
    "additionalProperties": false
}

const ifcMaterial = {
    type: "object",
    properties: {
        type: {
            "type": "string",
            "enum": ["IfcMaterial"]
        },
        name: ifcLabel,
        description: ifcText
    },
    required: ["type"],
    additionalProperties: false
}

const association = {
    oneOf: [
        ifcClassificationReference,
        ifcMaterial
    ]
}

const ifcProperty = {
    type: "object",
    properties: {
        type: {
            type: "string",
            enum: ["IfcProperty"]
        },
        name: ifcIdentifier,
        description: ifcText,
        specification: ifcText
    },
    required: ["type", "name"],
    additionalProperties: false
}

const ifcPropertySet = {
    type: "object",
    properties: {
        type: {
            "type": "string",
            "enum": ["IfcPropertySet"]
        },
        hasProperties: {
            type: "array",
            items: ifcProperty
        }
    },
    required: ["type", "hasProperties"],
    additionalProperties: false,
}

const ifcJsonSchema = {
    $schema: schemaVersion,
    type: "object",
    required: ["objectType"],
    properties: {
        type: {
            type: "string",
        },
        name: ifcLabel,
        description: ifcText,
        objectType: ifcLabel,
        tag: ifcLabel,
        predefinedtype: {
            type: "string",
        },
        isDefinedBy: {
            type: "array",
            items: ifcPropertySet
        },
        hasAssociations: {
            type: "array",
            items: association
        }
    }
}

export default ifcJsonSchema