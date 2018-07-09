module.exports = {
  siteMetadata: {
    title: `Senpai Pathway`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mdpages`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ],
}
