const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      blogs: allStrapiBlog {
        nodes {
          slug
        }
      }
    }
  `);

  const casestudypost = await graphql(`
    query {
      casestudy: allStrapiCasestudy {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.blogs.nodes.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        slug: blog.slug,
      },
    });
  });
  casestudypost.data.casestudy.nodes.forEach((blog) => {
    createPage({
      path: `/casestudy/${blog.slug}`,
      component: path.resolve('./src/pages/casestudy.js'),
      context: {
        slug: blog.slug,
      },
    });
  });
};