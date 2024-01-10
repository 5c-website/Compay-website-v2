const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      blogs:  allStrapiBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const casestudypost = await graphql(`
    query {
      casestudy: allStrapiCasestudy {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.blogs.edges.forEach((blog) => {
    createPage({
      path: `/blog/${blog.node.slug}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        slug: blog.node.slug,
      },
    });
  });
  casestudypost.data.casestudy.edges.forEach((blog) => {
    createPage({
      path: `/casestudy/${blog.node.slug}`,
      component: path.resolve('./src/pages/casestudy.js'),
      context: {
        slug: blog.node.slug,
      },
    });
  });
};