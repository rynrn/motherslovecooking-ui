module.exports = {
  siteMetadata: {
    title: `מאמא באהבה`,
    description: `בישול ביתי הכי טעים שיש, מכל הסוגים. בשרים בבישול ארוך, סלטים, צמחוני, תוספות ואפילו קינוחים`,
    author: `@riki_avisror`,
    currency: `₪`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `מאמא באהבה`,
        short_name: `מאמא באהבה`,
        start_url: `/`,
        background_color: `#fb98cf`,
        theme_color: `#fb98cf`,
        display: `minimal-ui`,
        icon: `src/images/96icon_1512486555.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-woocommerce',
      options: {
        api: 'ordering.motherslovecooking.co.il',
        verbose: true,
        https: true,
        api_keys: {
          consumer_key: 'ck_59ccf55a701e9614ba5030230ee305ff161c284e',
          consumer_secret: 'cs_f52a284556944d70704647403bd1e230f3e546ba',
        },
        fields: ['products', 'products/categories', 'products/attributes'],
        query_string_auth: true,
        api_version: 'wc/v3',
        per_page: 100,
        wpAPIPrefix: 'wp-json',
        encoding: 'utf8',
      }
    }
  ],
}
