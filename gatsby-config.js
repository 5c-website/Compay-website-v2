
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.5cnetwork.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-git-lastmod`,

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }
        `,
        serialize: ({ path, pageContext }) => {
          return {
            url: path,
            changefreq: 'weekly',
            priority: path === '/' ? 1 : 0.7,
            lastmod: pageContext?.lastMod,
          }
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",

      options: {
        apiURL:process.env.GATSBY_API_URL,
        accessToken:process.env.API_KEY,
        collectionTypes: [
          'homepage','solution','technology','about','carrer','blog','newsroom','contact','diagnostic','clinician','healthcare','hospital','radiologist','blog-post','casestudy','casestudypost','footer','privacypolicy','complianceandregulatory','newsroomseo','rxpert','protocall','osteocheck','urgentflow','careerdata'
        ],

        queryLimit: 1000,
      },
    },

  //   {
  //     resolve: `gatsby-plugin-clarity`,
  //     options: {
  //       clarity_project_id: process.env.CLARITY_KEY,
  //       enable_on_dev_env: true
  //     },
  // },
  // {
  //   resolve: `gatsby-plugin-google-gtag`,
  //   options: {
  //     trackingIds: [
  //      process.env.GOOGLE_ANALYTICS_ID,
  //     ],
  //     pluginConfig: {
  //       head: true,
  //       respectDNT: true,
  //       exclude: ["/preview/**", "/do-not-track/me/too/"],
  //     },
  //   },
  // },
  // {
  //   resolve: `gatsby-plugin-google-gtag`,
  //   options: {
  //     trackingIds: [
  //       process.env.GTAG_TOKEN,
  //     ],
  //     pluginConfig: {
  //       head: false,
  //       respectDNT: true,
  //       exclude: ["/preview/**", "/do-not-track/me/too/"],
  //     },
  //   },
  // },
    // 'gatsby-plugin-offline'
  ],

}

