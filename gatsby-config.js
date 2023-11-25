const siteMetadata = {
  title: `5C`,
  description: `Five Connects`,
  // image: `/default-site-image.jpg`,
  // twitterUsername: `@spences10`,
  // authorName: `Scott Spence`,
  favicon: `./src/Assets/Homepage/logo.png`,
  // backgroundColor: `#f7f0eb`,
  // themeColor: `#a2466c`,
}
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: siteMetadata,
  siteMetadata: {
    title: '5C',
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // ...
    {
      resolve: "gatsby-source-strapi",
      
      options: {
        apiURL: "https://katturai.cubebase.ai/" ,
        accessToken:'755059fadde9ed3393c96b1c071ad3244b80096a1e9be5faa40e34d9aae472298f64545714c2ad34510a1071bebce10dd98daa758e2d14d33e1182f6c4e7420bfd2d48df783e8fe379911816d83681bcace30e41b2e462b6cd16b9cf2361509a2c6f42642a5f0010ab8079d4f07eb2a3bce233268c4c89ae2a0763aa7430e6aa',
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
        // background_color: siteMetadata.backgroundColor,
        // theme_color: siteMetadata.themeColor,
        display: `standalone`,
        icon: siteMetadata.favicon,
      },
    },
    // 'gatsby-plugin-offline'
  ],
}

// 