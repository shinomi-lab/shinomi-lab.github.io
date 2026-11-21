import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** 日本語は必須、英語は任意（未記入なら日本語を表示） */
const localizedText = z.object({
  ja: z.string(),
  en: z.string().optional(),
});

/** メンバー: src/content/members/<id>.yaml に 1 人 1 ファイル */
const members = defineCollection({
  loader: glob({ base: './src/content/members', pattern: '**/[^_]*.{yaml,yml}' }),
  schema: ({ image }) =>
    z.object({
      name: localizedText,
      role: z.enum([
        'professor',
        'associate-professor',
        'assistant-professor',
        'researcher',
        'staff',
        'doctor',
        'master',
        'bachelor',
      ]),
      /** 入学（着任）年度。教員など不明な場合は省略可 */
      enrolledYear: z.number().int().optional(),
      /** 卒業（離任）年度。在籍中は書かない */
      graduatedYear: z.number().int().optional(),
      photo: image().optional(),
      research: localizedText.optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }),
});

/** 業績: src/content/publications/<年>/<id>.md。本文（任意）は補足として表示する */
const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()).min(1),
      /** 掲載誌・会議名 */
      venue: z.string(),
      date: z.coerce.date(),
      type: z.enum([
        'journal',
        'international-conference',
        'domestic-conference',
        'thesis',
        'award',
        'other',
      ]),
      doi: z.string().optional(),
      url: z.url().optional(),
      /** 研究室メンバーとの紐付け（任意）。members のファイル名を書く */
      members: z.array(reference('members')).default([]),
      /** サムネイル画像（任意）。トップページのカードに表示する */
      image: image().optional(),
    }),
});

/** お知らせ: src/content/news/<ja|en>/<id>.md。同じ id で日英をそろえる */
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

/** 研究テーマ: src/content/research/<ja|en>/<id>.md */
const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      /** 表示順（小さいほど先） */
      order: z.number().default(100),
      image: image().optional(),
    }),
});

export const collections = { members, publications, news, research };
