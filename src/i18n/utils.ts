import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLocale, type Locale, locales, type UiKey, ui } from './ui';

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Astro.currentLocale から型付きの Locale を取り出す。 */
export function getLocale(current: string | undefined): Locale {
  return isLocale(current) ? current : defaultLocale;
}

export function useTranslations(lang: Locale) {
  return (key: UiKey): string => ui[lang][key];
}

/** base パスと言語プレフィックスを付けたサイト内 URL を返す。例: localizePath('en', 'members') → /en/members/ */
export function localizePath(lang: Locale, path = ''): string {
  return getRelativeLocaleUrl(lang, path);
}

/** 現在のページと同じページの別言語版の URL を返す。 */
export function switchLocalePath(pathname: string, to: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (rest === `/${locale}` || rest.startsWith(`/${locale}/`)) {
      rest = rest.slice(locale.length + 1);
      break;
    }
  }
  return localizePath(to, rest.replace(/^\//, ''));
}

/** { ja, en } 形式のテキストから指定言語を取り出す。英語が無ければ日本語にフォールバック。 */
export function pick(text: { ja: string; en?: string | undefined }, lang: Locale): string {
  return lang === 'en' ? (text.en ?? text.ja) : text.ja;
}

export function formatDate(date: Date, lang: Locale): string {
  return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: lang === 'ja' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  });
}
