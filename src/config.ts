/** サイト全体の基本情報。研究室の情報が変わったらここを直す。 */
export const siteConfig = {
  name: {
    ja: '篠宮研究室',
    en: 'Shinomiya Laboratory',
  },
  affiliation: {
    ja: '創価大学 理工学部 情報システム工学科',
    en: 'Department of Information Systems Engineering, Faculty of Science and Engineering, Soka University',
  },
  description: {
    ja: '創価大学 理工学部 情報システム工学科 篠宮研究室のウェブサイトです。',
    en: 'Website of the Shinomiya Laboratory, Department of Information Systems Engineering, Soka University.',
  },
  address: {
    ja: '〒192-8577 東京都八王子市丹木町1-236',
    en: '1-236 Tangi-machi, Hachioji, Tokyo 192-8577, Japan',
  },
  email: 'shinomi@soka.ac.jp',
  githubUrl: 'https://github.com/shinomi-lab',
} as const;
