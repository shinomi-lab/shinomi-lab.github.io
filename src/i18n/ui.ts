export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

export const localeLabels: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
};

/** 画面に表示する固定文言。キーを追加したら ja / en の両方に書く。 */
export const ui = {
  ja: {
    'nav.home': 'ホーム',
    'nav.research': '研究',
    'nav.members': 'メンバー',
    'nav.publications': '業績',
    'nav.news': 'お知らせ',
    'nav.access': 'アクセス',
    'home.news': '最新のお知らせ',
    'home.research': '研究テーマ',
    'common.more': 'もっと見る',
    'common.backToList': '一覧に戻る',
    'members.faculty': '教員',
    'members.students': '学生',
    'members.alumni': '卒業生',
    'publications.empty': '業績はまだ登録されていません。',
    'news.empty': 'お知らせはまだありません。',
    'access.title': 'アクセス・お問い合わせ',
    'access.address': '所在地',
    'access.email': 'メール',
    'footer.copyright': 'All rights reserved.',
    'lang.switch': 'Language',
  },
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.members': 'Members',
    'nav.publications': 'Publications',
    'nav.news': 'News',
    'nav.access': 'Access',
    'home.news': 'Latest News',
    'home.research': 'Research Topics',
    'common.more': 'See all',
    'common.backToList': 'Back to list',
    'members.faculty': 'Faculty',
    'members.students': 'Students',
    'members.alumni': 'Alumni',
    'publications.empty': 'No publications yet.',
    'news.empty': 'No news yet.',
    'access.title': 'Access & Contact',
    'access.address': 'Address',
    'access.email': 'Email',
    'footer.copyright': 'All rights reserved.',
    'lang.switch': '言語',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['ja'];
