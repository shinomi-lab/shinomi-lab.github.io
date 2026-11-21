import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

type Role = CollectionEntry<'members'>['data']['role'];
type PublicationType = CollectionEntry<'publications'>['data']['type'];

export const roleLabels: Record<Role, Record<Locale, string>> = {
  professor: { ja: '教授', en: 'Professor' },
  'associate-professor': { ja: '准教授', en: 'Associate Professor' },
  'assistant-professor': { ja: '助教', en: 'Assistant Professor' },
  researcher: { ja: '研究員', en: 'Researcher' },
  staff: { ja: '職員', en: 'Staff' },
  doctor: { ja: '博士課程', en: 'Ph.D. Student' },
  master: { ja: '修士課程', en: 'Master Student' },
  bachelor: { ja: '学部生', en: 'Undergraduate' },
};

export const publicationTypeLabels: Record<PublicationType, Record<Locale, string>> = {
  journal: { ja: '論文誌', en: 'Journal Papers' },
  'international-conference': { ja: '国際会議', en: 'International Conferences' },
  'domestic-conference': { ja: '国内会議・研究会', en: 'Domestic Conferences' },
  thesis: { ja: '学位論文', en: 'Theses' },
  award: { ja: '受賞', en: 'Awards' },
  other: { ja: 'その他', en: 'Others' },
};
