const config = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kubelt - web3 CMS',
        short_name: 'kubelt',
        description: 'A multiverse of possibilities',
        lang: 'eng',
        display: 'standalone',
        start_url: '/',
        background_color: '#280257',
        theme_color: '#280257',
        icon: `static/images/Comet.png`
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    title: "kubelt",
    titleTemplate: "",
    description:
      "",
    url: "https://kubelt.com", // No trailing slash allowed!
    image: "/images/LogoShare.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@kubeltdata",
  }

}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingId: "272671092"
    }
  };
  config.plugins.push(googleAnalyticsCfg);
}


module.exports = config
