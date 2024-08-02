import { BsddApiClient } from "./bsddApiClient";
import {
  ClassContractV1,
  DictionaryContractV1,
  DictionaryResponseContractV1,
  DictionaryClassesResponseContractV1,
  HttpResponse,
  ClassListItemContractV1,
} from "./bsddApi";

const apiClient = new BsddApiClient("https://api.bsdd.buildingsmart.org");
const limit = 1000;

let dictionaryPromiseCache: Promise<DictionaryContractV1[]> | null = null;
const classPromiseCache = new Map<string, Promise<any>>();
const dictionaryClassesPromiseCache = new Map<string, Promise<ClassListItemContractV1[]>>();

interface PagedResponse {
  totalCount?: number | null | undefined;
  classesTotalCount?: number | null | undefined;
  [key: string]: any;
}

async function fetchAllPages<T extends PagedResponse>(
  apiCall: (params: any) => Promise<HttpResponse<T>>,
  params: any,
  limit: number,
  totalCountKey = "totalCount"
): Promise<T[]> {
  const initialResponse = await apiCall({ ...params, Offset: 0, Limit: 1 });
  const totalCount = initialResponse.data[totalCountKey] || 0;
  const totalPages = Math.ceil(totalCount / limit);

  const fetchPromises: Promise<HttpResponse<T>>[] = [];
  for (let i = 0; i < totalPages; i++) {
    fetchPromises.push(apiCall({ ...params, Offset: i * limit, Limit: limit }));
  }

  const responses = await Promise.all(fetchPromises);

  let allResults: T[] = [];
  for (const response of responses) {
    allResults = allResults.concat(response.data);
  }

  return allResults;
}

export async function fetchBsddDictionaries(): Promise<DictionaryContractV1[]> {
  if (dictionaryPromiseCache) {
    return dictionaryPromiseCache;
  }

  dictionaryPromiseCache = (async () => {
    const allPages = await fetchAllPages<DictionaryResponseContractV1>(
      apiClient.api.dictionaryV1List,
      { IncludeTestDictionaries: true },
      limit,
      "totalCount"
    );

    let allDictionaries: DictionaryContractV1[] = [];
    for (const page of allPages) {
      const dictionaries = page.dictionaries || [];
      allDictionaries = allDictionaries.concat(dictionaries);
    }

    return allDictionaries;
  })();

  return dictionaryPromiseCache;
}

export async function fetchBsddDictionaryClasses(
  uri: string,
  classType?: string,
  languageCode?: string
): Promise<ClassListItemContractV1[]> {
  const cacheKey = `${uri}_${languageCode}`;

  if (dictionaryClassesPromiseCache.has(cacheKey)) {
    return dictionaryClassesPromiseCache.get(cacheKey) as Promise<ClassListItemContractV1[]>;
  }

  const dictionaryClassesPromise = (async () => {
    const allPages = await fetchAllPages<DictionaryClassesResponseContractV1>(
      apiClient.api.dictionaryV1ClassesList,
      {
        Uri: uri,
        ClassType: classType,
        languageCode,
      },
      limit,
      "classesTotalCount"
    );

    let allDictionaryClasses: ClassListItemContractV1[] = [];
    for (const page of allPages) {
      if (page.classes) {
        allDictionaryClasses = allDictionaryClasses.concat(page.classes);
      }
    }

    return allDictionaryClasses;
  })();

  dictionaryClassesPromiseCache.set(cacheKey, dictionaryClassesPromise);
  return dictionaryClassesPromise;
}

export async function fetchBsddClass(
  uri: string,
  languageCode: string
): Promise<any> {
  const cacheKey = `${uri}_${languageCode}`;

  if (classPromiseCache.has(cacheKey)) {
    return classPromiseCache.get(cacheKey);
  }

  const classPromise = (async () => {
    const response: HttpResponse<ClassContractV1, any> =
      await apiClient.api.classV1List({
        Uri: uri,
        IncludeClassProperties: true,
        IncludeChildClassReferences: false,
        IncludeClassRelations: true,
        languageCode,
      });

    if (!response.ok) {
      throw new Error(`Failed to fetch class from ${uri}`);
    }

    return response.data;
  })();

  classPromiseCache.set(cacheKey, classPromise);

  return classPromise;
}
