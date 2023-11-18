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
        apiURL: "https://katturai.cubebase.ai/",
        accessToken:'1a562b99cb71137a236d99de1777a858e77137a5126b344de1ebee7a870c037ea3bb659a80699b51eca7a1e3cbbd3d6e1125ee5e62fc865461ea3f9510dc0c9c5712e5068e068a713eb4b997aa07163f3c3d2eb657f05b2a9fcf22e22250a94a840d57188d2a8346dc4e3a546621dbbc04ec5bbe37ce5e456330b3bad24959e3',
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