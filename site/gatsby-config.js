const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Frontend Mentor | Fylo landing page with dark theme and features grid`,
    description: `Responsive page design challenge - landing page built with Gatsby.js and styled components`,
    author: `@ann-dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fylo-landing-page`,
        short_name: `fylo`,
        start_url: `/`,
        background_color: `	#181f2a`,
        theme_color: `	#181f2a`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
