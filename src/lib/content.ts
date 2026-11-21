import { type CollectionEntry, getCollection } from 'astro:content';
import { defaultLocale, type Locale } from '../i18n/ui';

/** "ja/2026-04-welcome" → { lang: "ja", slug: "2026-04-welcome" } */
export function splitLocaleId(id: string): { lang: string; slug: string } {
  const [lang = '', ...rest] = id.split('/');
  return { lang, slug: rest.join('/') };
}

/**
 * 指定言語のエントリを返す。その言語版が無いものはデフォルト言語版で補う
 * （英語版を書き忘れても英語ページから記事が消えないようにするため）。
 */
function localizeEntries<T extends { id: string }>(entries: T[], lang: Locale): T[] {
  const inLang = entries.filter((e) => splitLocaleId(e.id).lang === lang);
  if (lang === defaultLocale) return inLang;
  const slugs = new Set(inLang.map((e) => splitLocaleId(e.id).slug));
  const fallback = entries.filter((e) => {
    const { lang: l, slug } = splitLocaleId(e.id);
    return l === defaultLocale && !slugs.has(slug);
  });
  return [...inLang, ...fallback];
}

export async function getNews(lang: Locale): Promise<CollectionEntry<'news'>[]> {
  const entries = await getCollection('news', (entry) => !entry.data.draft);
  return localizeEntries(entries, lang).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function getResearch(lang: Locale): Promise<CollectionEntry<'research'>[]> {
  const entries = await getCollection('research');
  return localizeEntries(entries, lang).sort((a, b) => a.data.order - b.data.order);
}

export async function getPublications(): Promise<CollectionEntry<'publications'>[]> {
  const entries = await getCollection('publications');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const roleOrder: CollectionEntry<'members'>['data']['role'][] = [
  'professor',
  'associate-professor',
  'assistant-professor',
  'researcher',
  'staff',
  'doctor',
  'master',
  'bachelor',
];

const facultyRoles = new Set(roleOrder.slice(0, 5));

export async function getMembers() {
  const entries = await getCollection('members');
  const sorted = entries.sort(
    (a, b) =>
      roleOrder.indexOf(a.data.role) - roleOrder.indexOf(b.data.role) ||
      (a.data.enrolledYear ?? 0) - (b.data.enrolledYear ?? 0),
  );
  const current = sorted.filter((m) => m.data.graduatedYear === undefined);
  return {
    faculty: current.filter((m) => facultyRoles.has(m.data.role)),
    students: current.filter((m) => !facultyRoles.has(m.data.role)),
    alumni: sorted
      .filter((m) => m.data.graduatedYear !== undefined)
      .sort((a, b) => (b.data.graduatedYear ?? 0) - (a.data.graduatedYear ?? 0)),
  };
}
