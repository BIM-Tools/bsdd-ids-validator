export interface Ids {
    info: Info;
    specifications: Specification[];
}

export interface Enumeration { $: { value: string } }

export interface Pattern { $: { value: string } }

export interface Restriction {
    $: { base: string; }
    pattern?: Pattern[];
    enumeration?: Enumeration[];
}

export interface IdsValue {
    simpleValue?: string[];
    restriction?: Restriction[];
}

export interface Info {
    title: string;
    copyright?: string;
    version?: string;
    description?: string;
    author?: string;
    date?: string;
    purpose?: string;
    milestone?: string;
}

export interface Specification {
    name: string;
    ifcVersion: string;
    identifier?: string;
    description?: string;
    instructions?: string;
    applicability: Applicability;
    requirements?: Requirements[];
}

export interface Applicability {
    entity?: Entity[];
    partOf?: PartOf[];
    classification?: Classification[];
    attribute?: Attribute[];
    property?: Property[];
    material?: Material[];
}

export interface Entity {
    name: IdsValue[];
    predefinedType?: IdsValue[];
}

export interface PartOf {
    entity: Entity;
    relation?: string;
}

export interface Classification {
    value: string;
    system: string;
}

export interface Attribute {
    name: string;
    value?: string;
}

export interface Property {
    propertySet: string;
    baseName: string;
    value?: string;
    dataType?: string;
}

export interface Material {
    value?: string;
}

export interface Requirements {
    entity?: Entity[];
    partOf?: PartOf[];
    classification?: Classification[];
    attribute?: Attribute[];
    property?: Property[];
    material?: Material[];
}
