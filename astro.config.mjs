// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// 公開先の URL とサブパスは環境変数で切り替える。
// GitHub Actions では actions/configure-pages の出力が渡される（.github/workflows/deploy.yml）。
// 独自ドメインを設定したら、SITE_URL がそのドメインになり BASE_PATH は空になる。
const siteUrl = new URL(process.env.SITE_URL ?? 'http://localhost:4321');
const localHosts = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);
if (siteUrl.protocol === 'http:' && !localHosts.has(siteUrl.hostname)) {
  siteUrl.protocol = 'https:';
}
const site = siteUrl.toString();
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
