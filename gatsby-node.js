exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/impact\/blog-detail\//)) {
    const oldPage = { ...page };
    page.matchPath = "/impact/blog-detail/*";
    deletePage(oldPage);
    createPage(page);
  }
};
