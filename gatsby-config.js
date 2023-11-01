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
        apiURL: "https://katturai.cubebase.ai",
        accessToken:'a0b8220d37903f198b25d694a39747afd6d4f46028756ca660dc2be609985788d5cc0cb8b8263dfdc0e482514fa0151e27e67a6807e9bd38cacd0971148fc1ae85a0e75d4b53ed8d4116fae7ab9c70ea095055173a8f286d49c387df337a272b56bb7d8ffe7d888d2f37e89cd28805107ed429caf88707a97712a805ef2432c0',
        collectionTypes: [
          'homepage','solution','technology','about','carrer','blog','newsroom','contact','diagnostic','clinician','healthcare','hospital','radiologist'
        ],
        
        queryLimit: 1000,
      },
    },
    // 'gatsby-plugin-offline'
  ],
}