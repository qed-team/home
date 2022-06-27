module.exports = {
  siteMetadata: {
    title: "QED",
    titleTemplate: "%s — We move startups forward",
    url: "https://qed.team",
    twitterUsername: "@qed_team",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["IBM Plex Sans"],
      },
    },
  ],
};
