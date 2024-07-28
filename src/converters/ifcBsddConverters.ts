
export function getIfcClassAndPredefinedType(relatedIfcEntityName: string | null | undefined): {
  type: string | undefined;
  predefinedType: string | undefined;
} {
  if (!relatedIfcEntityName) return { type: undefined, predefinedType: undefined };

  const splitIndex =
    relatedIfcEntityName.length - [...relatedIfcEntityName].reverse().findIndex((char) => char === char.toLowerCase());
  const [type, predefinedType] = [
    relatedIfcEntityName.slice(0, splitIndex),
    relatedIfcEntityName.slice(splitIndex),
  ].map((str) => str || undefined);

  return { type, predefinedType };
}