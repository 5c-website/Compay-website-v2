exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/impact\/strapi-detail/)) {
    const oldPage = { ...page };
    page.matchPath = "/impact/strapi-detail/*";
    deletePage(oldPage);
    createPage(page);
  }
};
