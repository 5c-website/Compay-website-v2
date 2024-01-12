
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  // siteMetadata: siteMetadata,
  siteMetadata: {
    siteUrl: `https://www.5cnetwork.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-git-lastmod`,

    // ...
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
        apiURL:"https://katturai.cubebase.ai/",
        accessToken:"e56c2503ae0b35a6a98be8fad95ba56e82116b9f1f27b233579f7616a6d5f562e930c8ca887e27b062165692f353ba69275f4fe041a39f826b3dac0250fadf6a7fd271c65aff8aeab05af2dbe38a3b8e724993ac131f1e49b3076e0c9285270d550382069060aa2eca49f818fbbfa10c2ef0a485d0930d6d70e661728736f6d4",
        collectionTypes: [
          'homepage','solution','technology','about','carrer','blog','newsroom','contact','diagnostic','clinician','healthcare','hospital','radiologist','blog-post','casestudy','casestudypost','footer','privacypolicy','complianceandregulatory','newsroomseo','rxpert','protocall','osteocheck'
        ],

        queryLimit: 1000,
      },
    },

  //   {
  //     resolve: `gatsby-plugin-clarity`,
  //     options: {
  //       // String value for your clarity project ID
  //       clarity_project_id: process.env.CLARITY_KEY,
  //       // Boolean value for enabling clarity while developing
  //       // true will enable clarity tracking code on both development and production environments
  //       // false will enable clarity tracking code on production environment only
  //       enable_on_dev_env: true
  //     },
  // }
    // 'gatsby-plugin-offline'
  ],

}

//
