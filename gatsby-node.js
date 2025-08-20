exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/impact\/strapi-detail/)) {
    const oldPage = { ...page };
    page.matchPath = "/impact/strapi-detail/*";
    deletePage(oldPage);
    createPage(page);
  }
};

// Add redirects for dynamic routes
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  // Create redirect for strapi-detail dynamic routes
  createRedirect({
    fromPath: `/impact/strapi-detail/*`,
    toPath: `/impact/strapi-detail/`,
    isPermanent: false,
    statusCode: 200,
  });
};
