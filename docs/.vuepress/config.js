module.exports = {
  title: "Hello World Collection",
  description: "Collection of Hello World in Any Language",
  base: "/hello-world/",
  dest: "public",
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/berviantoleo/hello-world"
      }
    ],
    sidebar: ["/"]
  }
}
