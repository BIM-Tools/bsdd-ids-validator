export interface ClassContractV1 {
    /** URI of the dictionary */
    dictionaryUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the dictionary
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Formal definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Description */
    description?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    uri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Class */
    classType?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the class */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassReference?: ClassReferenceContractV1;
    /** List of the properties of this class */
    classProperties?: ClassPropertyContractV1[] | null;
    /** List of relations to other classes, can be reference to classes of other dictionaries */
    classRelations?: ClassRelationContractV1[] | null;
    /** List of child classes (only filled if requested) */
    childClassReferences?: ClassReferenceContractV1[] | null;
    /** List of relations of other classes to this class (only filled if requested) */
    reverseClassRelations?: ClassReverseRelationContractV1[] | null;
}

export interface ClassListItemContractV1 {
    uri?: string | null;
    code?: string | null;
    name?: string | null;
    classType?: string | null;
    referenceCode?: string | null;
    parentClassCode?: string | null;
    children?: ClassListItemContractV1[] | null;
}

export interface ClassPropertyContractV1 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    uri?: string | null;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /**
     * Definition of the property.
     * Description is same as definition if at Property level no description has been given.
     */
    definition?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the class */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Class-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Class-Property level to define a more strict list.
     */
    allowedValues?: ClassPropertyValueContractV1[] | null;
    /** Predefined value: if the class can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same dictionary as the class. */
    propertyCode?: string | null;
    /** Name of the Dictionary this property belongs to */
    propertyDictionaryName?: string | null;
    /** Uri of the Dictionary this property belongs to */
    propertyDictionaryUri?: string | null;
    /** Unique identification of the property */
    propertyUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}

export interface ClassPropertyValueContractV1 {
    /** Globally unique identification of the value */
    uri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface ClassReferenceContractV1 {
    /** @minLength 1 */
    uri: string;
    name?: string | null;
    code?: string | null;
}

export interface ClassRelationContractV1 {
    uri?: string | null;
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related class
     * @minLength 1
     */
    relatedClassUri: string;
    /** Name of the related class */
    relatedClassName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the class relations of one relation type
     * @format double
     */
    fraction?: number | null;
}

export interface ClassReverseRelationContractV1 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * URI of the reverse related class
     * @minLength 1
     */
    classUri: string;
    /** Name of the reverse related class */
    className?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the class relations of one relation type
     * @format double
     */
    fraction?: number | null;
    /** The URI of the dictionary that contains the reverse related class. This URI can be used to retrieve the dictionary */
    dictionaryUri?: string | null;
}

export interface ClassSearchResponseClassContractV1 {
    /** Unique identification of the dictionary the class belongs to */
    dictionaryUri?: string | null;
    /** Name of the dictionary the class belongs to */
    dictionaryName?: string | null;
    /** Name of the class */
    name?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the class */
    uri?: string | null;
    /** Type of the class */
    classType?: string | null;
    description?: string | null;
    parentClassName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}

export interface ClassSearchResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    /** The list of Classes found */
    classes?: ClassSearchResponseClassContractV1[] | null;
}

export interface ClassSearchResultContractV1 {
    /** Name of the Class */
    name?: string | null;
    /** Unique identification of the Class */
    uri?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Type of the class */
    classType?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
}

export interface ClassificationContractV3 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Classification */
    classificationType?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the classification */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassificationReference?: ClassificationReferenceContractV3;
    /** List of the properties of this classification */
    classificationProperties?: ClassificationPropertyContractV3[] | null;
    /** List of relations to other classifications, can be reference to classifications of other domains */
    classificationRelations?: ClassificationRelationContractV3[] | null;
    /** List of child classifications (only filled if requested) */
    childClassificationReferences?: ClassificationReferenceContractV3[] | null;
}

export interface ClassificationContractV4 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Type of Classification */
    classificationType?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** List of synonyms for the classification */
    synonyms?: string[] | null;
    /** List of related IFC entity names (version independent) */
    relatedIfcEntityNames?: string[] | null;
    parentClassificationReference?: ClassificationReferenceContractV4;
    /** List of the properties of this classification */
    classificationProperties?: ClassificationPropertyContractV4[] | null;
    /** List of relations to other classifications, can be reference to classifications of other domains */
    classificationRelations?: ClassificationRelationContractV4[] | null;
    /** List of child classifications (only filled if requested) */
    childClassificationReferences?: ClassificationReferenceContractV4[] | null;
}

export interface ClassificationListItemContractV2 {
    namespaceUri?: string | null;
    code?: string | null;
    name?: string | null;
    referenceCode?: string | null;
    parentClassificationCode?: string | null;
    children?: ClassificationListItemContractV2[] | null;
}

export interface ClassificationListItemContractV3 {
    namespaceUri?: string | null;
    code?: string | null;
    name?: string | null;
    referenceCode?: string | null;
    parentClassificationCode?: string | null;
    children?: ClassificationListItemContractV3[] | null;
}

export interface ClassificationPropertyContractV3 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the classification */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of possible values
     * This list does not need to be the same as the list of PossibleValues in the Property contract
     * because this list can be overruled at Classification-Property level to define a more strict list.
     */
    possibleValues?: ClassificationPropertyValueContractV3[] | null;
    /** Predefined value: if the classification can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the classification. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}

export interface ClassificationPropertyContractV4 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    namespaceUri?: string | null;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the classification */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Classification-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Classification-Property level to define a more strict list.
     */
    allowedValues?: ClassificationPropertyValueContractV4[] | null;
    /** Predefined value: if the classification can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the classification. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}

export interface ClassificationPropertyValueContractV3 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface ClassificationPropertyValueContractV4 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface ClassificationReferenceContractV3 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}

export interface ClassificationReferenceContractV4 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}

export interface ClassificationRelationContractV3 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the classification relations of one relation type
     * @format double
     */
    fraction?: number | null;
}

export interface ClassificationRelationContractV4 {
    namespaceUri?: string | null;
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
    /**
     * Optional provision of a fraction of the total amount (e.g. volume or weight) that applies to the classification relations of one relation type
     * @format double
     */
    fraction?: number | null;
}

export interface ClassificationSearchResponseClassificationContractV1 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}

export interface ClassificationSearchResponseContractV1 {
    /** The list of Classifications found */
    classifications?: ClassificationSearchResponseClassificationContractV1[] | null;
}

export interface ClassificationSearchResultContractV2 {
    /** Name of the Classification */
    name?: string | null;
    /** Unique identification of the Classification */
    namespaceUri?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
}

export interface CountryContractV1 {
    code?: string | null;
    name?: string | null;
}

export interface DictionaryClassesResponseContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classes?: ClassListItemContractV1[] | null;
    /**
     * Total number of classes within the dictionary.
     * @format int32
     */
    classesTotalCount?: number | null;
    /** @format int32 */
    classesOffset?: number | null;
    /**
     * The returned number of classes.
     * @format int32
     */
    classesCount?: number | null;
}

export interface DictionaryContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}

export interface DictionaryPropertiesResponseContractV1 {
    /** @minLength 1 */
    uri: string;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    properties?: PropertyListItemContractV1[] | null;
    /**
     * Total number of properties within the dictionary.
     * @format int32
     */
    propertiesTotalCount?: number;
    /** @format int32 */
    propertiesOffset?: number;
    /**
     * The returned number of properties.
     * @format int32
     */
    propertiesCount?: number;
}

export interface DictionaryResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    dictionaries?: DictionaryContractV1[] | null;
}

export interface DictionarySearchResultContractV1 {
    name?: string | null;
    uri?: string | null;
    classes?: ClassSearchResultContractV1[] | null;
}

export interface DomainContractV2 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}

export interface DomainContractV3 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
}

export interface DomainSearchResultContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
    materials?: MaterialSearchResultContractV1[] | null;
}

export interface DomainSearchResultContractV2 {
    name?: string | null;
    namespaceUri?: string | null;
    classifications?: ClassificationSearchResultContractV2[] | null;
}

export interface DomainWithClassificationsContractV2 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classifications?: ClassificationListItemContractV2[] | null;
}

export interface DomainWithClassificationsContractV3 {
    namespaceUri?: string | null;
    /** @minLength 1 */
    name: string;
    /** @minLength 1 */
    version: string;
    /** @minLength 1 */
    organizationCodeOwner: string;
    /** @minLength 1 */
    organizationNameOwner: string;
    /**
     * The default language for this domain
     * @minLength 1
     */
    defaultLanguageCode: string;
    /** Name or short description of the license under which you can use this data */
    license?: string | null;
    /** URL where you can find more details about the license */
    licenseUrl?: string | null;
    /** Name or short description of the quality assurance procedure used while creating and maintaining the domain data */
    qualityAssuranceProcedure?: string | null;
    /** URL where you can find more details about the quality assurance procedure */
    qualityAssuranceProcedureUrl?: string | null;
    /** For state indication, like "Preview", "Active", "InActive", "Released */
    status?: string | null;
    /** Url to site with more info on domain */
    moreInfoUrl?: string | null;
    /**
     * Date of the release of this version
     * @format date-time
     */
    releaseDate?: string | null;
    /**
     * Date and time the data of the domain has been last updated in bSDD
     * @format date-time
     */
    lastUpdatedUtc?: string;
    classifications?: ClassificationListItemContractV3[] | null;
    materials?: ClassificationListItemContractV3[] | null;
}

export interface LanguageContractV1 {
    /** @minLength 1 */
    isoCode: string;
    name?: string | null;
}

export interface MaterialClassificationRelationContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
}

export interface MaterialContractV1 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of synonyms for the material */
    synonyms?: string[] | null;
    parentMaterialReference?: MaterialReferenceContractV1;
    /** List of the properties of this material */
    materialProperties?: MaterialPropertyContractV1[] | null;
    /** List of relations to classifications, can be reference to materials of other domains */
    classificationRelations?: MaterialRelationContractV1[] | null;
    /** List of child materials (only filled if requested) */
    childMaterialReferences?: MaterialReferenceContractV1[] | null;
}

export interface MaterialContractV2 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of synonyms for the material */
    synonyms?: string[] | null;
    parentMaterialReference?: MaterialReferenceContractV2;
    /** List of the properties of this material */
    materialProperties?: MaterialPropertyContractV2[] | null;
    /** List of relations to classifications, can be reference to materials of other domains */
    classificationRelations?: MaterialRelationContractV2[] | null;
    /** List of child materials (only filled if requested) */
    childMaterialReferences?: MaterialReferenceContractV2[] | null;
}

export interface MaterialPropertyContractV1 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the material */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of possible values
     * This list does not need to be the same as the list of PossibleValues in the Property contract
     * because this list can be overruled at Material-Property level to define a more strict list.
     */
    possibleValues?: MaterialPropertyValueContractV1[] | null;
    /** Predefined value: if the material can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the material. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
}

export interface MaterialPropertyContractV2 {
    /**
     * Name of the property
     * @minLength 1
     */
    name: string;
    /**
     * Plain language description of the property.
     * If at Property level no description has been given but a "Definition" is available, then "Definition" is returned as description
     */
    description?: string | null;
    /** Format for expressing the value of the property */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /** Indicates if this property is required for the material */
    isRequired?: boolean | null;
    /** Indicates if the value of the property can be changed by the user */
    isWritable?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * This value does not need to be the same as the MaxExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * This value does not need to be the same as the MaxInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    maxInclusive?: number | null;
    /**
     * Minimum value of the property, exclusive
     * This value does not need to be the same as the MinExclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * This value does not need to be the same as the MinInclusive in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     * This value does not need to be the same as the Pattern in the Property contract
     * because this value can be overruled at Material-Property level to define a more strict value.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /**
     * List of allowed values
     * This list does not need to be the same as the list of AllowedValues in the Property contract
     * because this list can be overruled at Material-Property level to define a more strict list.
     */
    allowedValues?: MaterialPropertyValueContractV2[] | null;
    /** Predefined value: if the material can have only one value for this property, this is it */
    predefinedValue?: string | null;
    /** Code of the property, only applicable if property is of the same domain as the material. */
    propertyCode?: string | null;
    /** Name of the Domain this property belongs to */
    propertyDomainName?: string | null;
    /** Unique identification of the property */
    propertyNamespaceUri?: string | null;
    /** Name of the Property Set */
    propertySet?: string | null;
    /** Status of the property: Preview, Active or Inactive */
    propertyStatus?: string | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** Symbol of the property */
    symbol?: string | null;
    /** List of units to select from */
    units?: string[] | null;
    /** List of QUDT unit codes to select from */
    qudtCodes?: string[] | null;
}

export interface MaterialPropertyValueContractV1 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface MaterialPropertyValueContractV2 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface MaterialReferenceContractV1 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}

export interface MaterialReferenceContractV2 {
    /** @minLength 1 */
    namespaceUri: string;
    name?: string | null;
    code?: string | null;
}

export interface MaterialRelationContractV1 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
}

export interface MaterialRelationContractV2 {
    /**
     * Can be one of: HasReference, IsEqualTo, IsSynonymOf, IsParentOf, IsChildOf, HasPart
     * @minLength 1
     */
    relationType: string;
    /**
     * Namespace URI of the related classification
     * @minLength 1
     */
    relatedClassificationUri: string;
    /** Name of the related classification */
    relatedClassificationName?: string | null;
}

export interface MaterialSearchResultContractV1 {
    name?: string | null;
    namespaceUri?: string | null;
    definition?: string | null;
    synonyms?: string[] | null;
    relatedClassifications?: MaterialClassificationRelationContractV1[] | null;
}

export interface ProblemDetails {
    type?: string | null;
    title?: string | null;
    /** @format int32 */
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
    [key: string]: any;
}

export interface PropertyClassContractV4 {
    /** Globally unique identification of the class */
    uri?: string | null;
    /** Code of the class */
    code?: string | null;
    /**
     * Name of the class
     * @minLength 1
     */
    name: string;
    /** Definition of the class */
    definition?: string | null;
    /** Description of the class */
    description?: string | null;
    propertySet?: string | null;
}

export interface PropertyContractV2 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Plain language description of the property. */
    description?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of possible values */
    possibleValues?: PropertyValueContractV2[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV2[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
}

export interface PropertyContractV3 {
    /** Namespace URI of the domain */
    domainNamespaceUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the domain
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    namespaceUri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** Plain language description of the property. */
    description?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of allowed values */
    allowedValues?: PropertyValueContractV3[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV3[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
}

export interface PropertyContractV4 {
    /** URI of the dictionary */
    dictionaryUri?: string | null;
    /**
     * Date of activation
     * @format date-time
     */
    activationDateUtc: string;
    /**
     * Code used originally by the dictionary
     * @minLength 1
     */
    code: string;
    /** Language code of the creator */
    creatorLanguageCode?: string | null;
    /** List of countries where used */
    countriesOfUse?: string[] | null;
    /** Country of origin */
    countryOfOrigin?: string | null;
    /**
     * Date of deactivation
     * @format date-time
     */
    deActivationDateUtc?: string | null;
    /** Formal definition */
    definition?: string | null;
    /** Explanation of the deprecation */
    deprecationExplanation?: string | null;
    /** Description */
    description?: string | null;
    /** Reference to a(n official) document */
    documentReference?: string | null;
    /**
     * Name
     * @minLength 1
     */
    name: string;
    /**
     * Unique identification
     * @minLength 1
     */
    uri: string;
    /** List of codes of the replaced items */
    replacedObjectCodes?: string[] | null;
    /** List of codes of the replacing items */
    replacingObjectCodes?: string[] | null;
    /**
     * Date of the revision
     * @format date-time
     */
    revisionDateUtc?: string | null;
    /**
     * Revision number
     * @format int32
     */
    revisionNumber?: number | null;
    /**
     * Status, can be: Preview, Active or Inactive
     * @minLength 1
     */
    status: string;
    /** List of subdivisions (e.g. states) where used */
    subdivisionsOfUse?: string[] | null;
    /** Alternative unique global identification */
    uid?: string | null;
    /**
     * Date of the version
     * @format date-time
     */
    versionDateUtc: string;
    /**
     * Version number
     * @format int32
     */
    versionNumber?: number | null;
    /** URI of a visual representation */
    visualRepresentationUri?: string | null;
    /** List of connected property codes */
    connectedPropertyCodes?: string[] | null;
    /** Format for expressing the value of the property: Boolean, Character, Date, Enumeration, Integer, Real, String, Time */
    dataType?: string | null;
    /**
     * Dimension of the physical quantity in format "L M T I Θ N J", for example "-2 1 0 0 0 0 0".
     * With
     *   L   Length
     *   M   Mass
     *   T   Time
     *   I   Electric current
     *   Θ   Thermodynamic Temperature
     *   N   Amount of substance
     *   J   Luminous intensity
     */
    dimension?: string | null;
    /**
     * The Length value of the dimension
     * @format int32
     */
    dimensionLength?: number | null;
    /**
     * The Mass value of the dimension
     * @format int32
     */
    dimensionMass?: number | null;
    /**
     * The Time value of the dimension
     * @format int32
     */
    dimensionTime?: number | null;
    /**
     * The Electric current value of the dimension
     * @format int32
     */
    dimensionElectricCurrent?: number | null;
    /**
     * The Thermodynamic temperature value of the dimension
     * @format int32
     */
    dimensionThermodynamicTemperature?: number | null;
    /**
     * The Amount of substance value of the dimension
     * @format int32
     */
    dimensionAmountOfSubstance?: number | null;
    /**
     * The Luminous intensity value of the dimension
     * @format int32
     */
    dimensionLuminousIntensity?: number | null;
    /**
     * List of codes of the properties which are parameters of the function for a dynamic property.
     * Only applicable for dynamic properties (IsDynamic)
     */
    dynamicParameterPropertyCodes?: string[] | null;
    /** Illustrate possible use or values of the Property */
    example?: string | null;
    /** True if the value of this property is dependent on other properties (as provided in DynamicParameterPropertyCodes) */
    isDynamic?: boolean | null;
    /**
     * Maximum value of the property, exclusive
     * @format double
     */
    maxExclusive?: number | null;
    /**
     * Maximum value of the property, inclusive
     * @format double
     */
    maxInclusive?: number | null;
    /** Description of the method of measurement */
    methodOfMeasurement?: string | null;
    /**
     * Minimum value of the property, exclusive
     * @format double
     */
    minExclusive?: number | null;
    /**
     * Minimum value of the property, inclusive
     * @format double
     */
    minInclusive?: number | null;
    /**
     * An XML Schema Regular expression for the property value.
     * See for explanation: https://www.regular-expressions.info/xml.html.
     */
    pattern?: string | null;
    /** The quantity in plain text */
    physicalQuantity?: string | null;
    /** List of allowed values */
    allowedValues?: PropertyValueContractV4[] | null;
    /** Indicates kind of value: Single, Range (2 values expected), List (multiple values expected), Complex (use in combination with "ConnectedProperties"), ComplexList */
    propertyValueKind?: string | null;
    /** List of relations with other properties */
    propertyRelations?: PropertyRelationContractV4[] | null;
    /** The text type, e.g. UTF-8 */
    textFormat?: string | null;
    /** Multiple references to Unit */
    units?: string[] | null;
    /** List of QUDT unit codes (if QUDT code available) */
    qudtCodes?: string[] | null;
    /** List of the classes this property is used in (only classes of same dictionary as the property are listed) */
    propertyClasses?: PropertyClassContractV4[] | null;
}

export interface PropertyListItemContractV1 {
    uri?: string | null;
    code?: string | null;
    name?: string | null;
}

export interface PropertyRelationContractV2 {
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}

export interface PropertyRelationContractV3 {
    /** Globally unique identification of the value */
    namespaceUri?: string | null;
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}

export interface PropertyRelationContractV4 {
    /** Globally unique identification of the relation */
    uri?: string | null;
    /** The relation with the other property: e.g. HasReference, IsEqualTo */
    relationType?: string | null;
    /** Namespace URI of the related property */
    relatedPropertyUri?: string | null;
    /** Name of the related property */
    relatedPropertyName?: string | null;
}

export interface PropertyValueContractV1 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface PropertyValueContractV2 {
    /** Globally unique identification of the value (if present) */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Possible value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface PropertyValueContractV3 {
    /** Globally unique identification of the value */
    namespaceUri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface PropertyValueContractV4 {
    /** Globally unique identification of the value */
    uri?: string | null;
    /** Identification of the value (unique within the property) */
    code?: string | null;
    /**
     * Allowed value of the property
     * @minLength 1
     */
    value: string;
    /** Description of the value */
    description?: string | null;
    /**
     * (Optional) Sort number of value within the list of values for the Property
     * @format int32
     */
    sortNumber?: number | null;
}

export interface ReferenceDocumentContractV1 {
    title?: string | null;
    name?: string | null;
    /** @format date-time */
    date?: string;
}

export interface SearchInDictionaryResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    dictionary?: DictionarySearchResultContractV1;
}

export interface SearchResultContractV1 {
    /**
     * The total number of Materials matching the search criteria
     * @format int32
     */
    numberOfMaterialsFound?: number;
    /** The list of Domains with found Materials and Material Properties */
    domains?: DomainSearchResultContractV1[] | null;
}

export interface SearchResultContractV2 {
    /**
     * The total number of Classifications matching the search criteria
     * @format int32
     */
    numberOfClassificationsFound?: number;
    /** The list of Domains with found Classification and ClassificationProperties */
    domains?: DomainSearchResultContractV2[] | null;
}

export interface TextSearchResponseClassContractV1 {
    /** Unique identification of the dictionary the class belongs to */
    dictionaryUri?: string | null;
    /** Name of the dictionary the class belongs to */
    dictionaryName?: string | null;
    name?: string | null;
    /** Code that can be used for dictionary specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the class */
    uri?: string | null;
    /** Type of the class */
    classType?: string | null;
    description?: string | null;
    parentClassName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}

export interface TextSearchResponseClassificationContractV5 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}

export interface TextSearchResponseClassificationContractV6 {
    /** Unique identification of the domain the classification belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the classification belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the classification */
    namespaceUri?: string | null;
    /** Type of the classification. */
    classificationType?: string | null;
    description?: string | null;
    parentClassificationName?: string | null;
    relatedIfcEntityNames?: string[] | null;
}

export interface TextSearchResponseContractV1 {
    /** @format int32 */
    totalCount?: number;
    /** @format int32 */
    offset?: number;
    /** @format int32 */
    count?: number;
    /** The list of Classes found */
    classes?: TextSearchResponseClassContractV1[] | null;
    /** The list of Dictionaries with found results */
    dictionaries?: TextSearchResponseDictionaryContractV1[] | null;
    /** List of Properties found */
    properties?: TextSearchResponsePropertyContractV1[] | null;
}

export interface TextSearchResponseContractV5 {
    /** The list of Classifications found */
    classifications?: TextSearchResponseClassificationContractV5[] | null;
    domains?: TextSearchResponseDomainContractV5[] | null;
    properties?: TextSearchResponsePropertyContractV5[] | null;
}

export interface TextSearchResponseContractV6 {
    /** The list of Classifications found */
    classifications?: TextSearchResponseClassificationContractV6[] | null;
    /** The list of Domains with found results */
    domains?: TextSearchResponseDomainContractV6[] | null;
    /** The list of Materials found */
    materials?: TextSearchResponseMaterialContractV6[] | null;
    /** List of Properties found */
    properties?: TextSearchResponsePropertyContractV6[] | null;
}

export interface TextSearchResponseDictionaryContractV1 {
    uri?: string | null;
    name?: string | null;
}

export interface TextSearchResponseDomainContractV5 {
    namespaceUri?: string | null;
    name?: string | null;
}

export interface TextSearchResponseDomainContractV6 {
    namespaceUri?: string | null;
    name?: string | null;
}

export interface TextSearchResponseMaterialContractV6 {
    /** Unique identification of the domain the material belongs to */
    domainNamespaceUri?: string | null;
    /** Name of the domain the material belongs to */
    domainName?: string | null;
    name?: string | null;
    /** Code that can be used for domain specific purposes */
    referenceCode?: string | null;
    /** Unique identification of the material */
    namespaceUri?: string | null;
    description?: string | null;
    parentMaterialName?: string | null;
}

export interface TextSearchResponsePropertyContractV1 {
    dictionaryUri?: string | null;
    dictionaryName?: string | null;
    uri?: string | null;
    name?: string | null;
    description?: string | null;
}

export interface TextSearchResponsePropertyContractV5 {
    domainNamespaceUri?: string | null;
    domainName?: string | null;
    namespaceUri?: string | null;
    name?: string | null;
    description?: string | null;
}

export interface TextSearchResponsePropertyContractV6 {
    domainNamespaceUri?: string | null;
    domainName?: string | null;
    namespaceUri?: string | null;
    name?: string | null;
    description?: string | null;
}

export interface UnitContractV1 {
    code?: string | null;
    name?: string | null;
    symbol?: string | null;
    qudtUri?: string | null;
}

export interface UploadImportFileResultV1 {
    /**
     * Indicates if the file will be imported.
     * Warnings are allowed, import will continue but may lead to undesired values in the database.
     */
    isOk?: boolean;
    /**
     * The list of errors found.
     * It may happen that if you fix one error new errors will be discovered.
     */
    errors?: UploadImportFileResultItemV1[] | null;
    /**
     * List of warnings.
     * It is best to have no warnings at all to avoid inconsistent or incorrect values in the database
     */
    warnings?: UploadImportFileResultItemV1[] | null;
    /** Informational messages */
    informationalMessages?: UploadImportFileResultItemV1[] | null;
}

export interface UploadImportFileResultItemV1 {
    /** The attribute the message applies to */
    attribute?: string | null;
    /** The message */
    message?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}