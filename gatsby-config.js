const config = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kubelt',
        short_name: 'kubelt',
        description: 'The next advancement indata-driven work',
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
    titleTemplate: "%s - Take control of your data.",
    description:
      "The next advancement in data-driven work. Harness your data and let it fuel your work so you can focus on reaching new heights.",
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