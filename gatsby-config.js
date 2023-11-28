const siteMetadata = {
  title: `5CNetwork`,
  description: `5CNetwork`,
  
  favicon: `./src/Assets/Homepage/logo.png`,
  // backgroundColor: `#f7f0eb`,
  // themeColor: `#a2466c`,
}
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // ...
    {
      resolve: "gatsby-source-strapi",
      
      options: {
        apiURL: process.env.GATSBY_API_URL ,
        accessToken:process.env.API_KEY,
        collectionTypes: [
          'homepage','solution','technology','about','carrer','blog','newsroom','contact','diagnostic','clinician','healthcare','hospital','radiologist'
        ],
        
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `5C`,
        short_name: `5C`,
        start_url: `/`,
        display: `standalone`,
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project ID
        clarity_project_id: process.env.CLARITY_KEY,
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true
      },
  }
    // 'gatsby-plugin-offline'
  ],
  
}

// 