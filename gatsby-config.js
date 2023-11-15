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
        apiURL: "http://164.52.200.137:1337/",
        accessToken:'5b5c6f863539cbb3f55f89d7428a7279659ef62242e2752e75b1464b36bd758600bc227e197ed781693f46abe443962ba5d82034f385f52cdaff5c4f809c3af456b37f7761aebff4050cd98dd739a9be2da587b6cb76bb65fa4e61aa33be35cfc8aeafd01b4756fcfdea5ab9befe0d52fe9cc246333c93b6b8724b659ab67413',
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