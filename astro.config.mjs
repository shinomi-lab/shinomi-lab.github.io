// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// 公開先の URL とサブパスは環境変数で切り替える。
// GitHub Actions では actions/configure-pages の出力が渡される（.github/workflows/deploy.yml）。
// 独自ドメインを設定したら、SITE_URL がそのドメインになり BASE_PATH は空になる。
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      // 日本語は /、英語は /en/ で配信する
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: { ja: 'ja-JP', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
