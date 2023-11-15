module.exports = {
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
        accessToken:'33241cea5438a5aad8c85f14ccc8a65c07589ed76c449e33220d12cc3310c75918ce4a371ecde65a9d0d62385dd58d217167b40e8451b67d1dc6f686b810eb27a53293b4efbbf93c02ac9e18604d69faf7b147a5316b546deb162e0184ee99c01799612125c31351093abf91f3bbfcaa3bf64544314e2de326efada68d459ca8',
        collectionTypes: [
          'homepage','solution','technology','about','carrer','blog','newsroom','contact','diagnostic','clinician','healthcare','hospital','radiologist'
        ],
        
        queryLimit: 1000,
      },
    },
    // 'gatsby-plugin-offline'
  ],
}

// 