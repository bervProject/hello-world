import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';

export default defineUserConfig({
  title: "Hello World Collection",
  description: "Collection of Hello World in Any Language",
  base: process.env.BASE_URL ? `/${process.env.BASE_URL}/` : "/",
  dest: "public",
  plugins: [backToTopPlugin],
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      "/": {
        editLinkText: "Edit this page on GitHub",
        lastUpdated: true,
        sidebar: ["/"],
      },
      "/id/": {
        lastUpdated: true,
        editLinkText: "Edit halaman ini di GitHub",
        sidebar: ["/id/"],
      },
    },
  }),
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Hello World",
      description: "Hello World Collections",
    },
    "/id/": {
      lang: "id",
      title: "Hello World",
      description: 'Koleksi "Hello World"',
    },
  },
});
