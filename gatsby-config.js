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
        apiURL: "http://127.0.0.1:1337",
        accessToken:'4c443c86a738f173655ec5c6bd7ba1abbd882c2a44dc623a3542ba8e21a4974f19221323d5f4977533f52c28eeec3a1a7081fdcffe76432326491d0bad439b5c9f36db7acf2db0f03f212ff23457923228e6996ab0ca03c22c6e2efc9e4626d394ee58ced7e637b1203b77bdefaade8663509e18972e13c344c91ec3918c837b',
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