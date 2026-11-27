/**
 * Conservatively mark clearly Japanese-script text on English publication pages.
 * Latin transliterations and mixed-script strings remain under the page language.
 */
export function publicationTextLanguage(text: string, pageLocale: 'ja' | 'en'): 'ja' | undefined {
  if (pageLocale !== 'en') return undefined;

  const containsKana = /[\u3041-\u309f\u30a1-\u30ff]/u.test(text);
  const containsLatin = /\p{Script=Latin}/u.test(text);

  return containsKana && !containsLatin ? 'ja' : undefined;
}
