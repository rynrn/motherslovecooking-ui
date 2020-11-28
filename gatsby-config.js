module.exports = {
  siteMetadata: {
    siteUrl: `https://motherslovecooking.co.il`,
    title: `מאמא באהבה`,
    description: `בישול ביתי הכי טעים שיש, מכל הסוגים. בשרים בבישול ארוך, סלטים, צמחוני, תוספות ואפילו קינוחים`,
    author: `ריקי אביסרור`,
    keywords: `בישול ביתי, משלוחים של אוכל עד הבית, ריקי אביסרור, מאמא באהבה, מבשלת אוכל טוב משלוחים`,
    authorRef: `@riki_avisror`,
    currency: `₪`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-124323639-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "motherslovecooking.co.il",
      },
    },
  ],
}
