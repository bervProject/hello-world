module.exports = {
  title: "Hello World Collection",
  description: "Collection of Hello World in Any Language",
  base: process.env.BASE_URL || "/",
  dest: "public",
  plugins: ["@vuepress/back-to-top"],
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Home", link: "/" },
          {
            text: "Github",
            link: "https://github.com/berviantoleo/hello-world",
          },
        ],
        sidebar: ["/"],
      },
      "/id/": {
        selectText: "Bahasa",
        lastUpdated: "Terakhir update",
        editLinkText: "Edit halaman ini di GitHub",
        nav: [
          { text: "Beranda", link: "/id/" },
          {
            text: "Github",
            link: "https://github.com/berviantoleo/hello-world",
          },
        ],
        sidebar: ["/id/"],
      },
    },
  },
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
};
