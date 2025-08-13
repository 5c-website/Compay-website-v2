import { STRAPI_URL } from "./constants";

export const truncateText = (text, wordLimit = 15) => {
  if (!text) return "";
  const wordsArray = Array.isArray(text)
    ? text.join(" ").split(" ")
    : text.split(" ");
  return wordsArray.length > wordLimit
    ? wordsArray.slice(0, wordLimit).join(" ") + "..."
    : Array.isArray(text)
    ? text.join(" ")
    : text;
};

export const getStrapiImageUrl = (item) => {
  const cover = item.cover || item.attributes?.cover?.data?.attributes;
  if (cover?.formats?.medium?.url)
    return `${STRAPI_URL}${cover.formats.medium.url}`;
  if (cover?.url) return `${STRAPI_URL}${cover.url}`;
  return "/img/placeholder-image.png";
};

export const getStrapiTitle = (item) => {
  return (
    item.title ||
    item["5cNetwork"] ||
    item.attributes?.title ||
    item.attributes?.["5cNetwork"] ||
    "Untitled"
  );
};

export const getStrapiDescription = (item) => {
  return (
    item.description ||
    item["5cNetworkDescription"] ||
    item.attributes?.description ||
    item.attributes?.["5cNetworkDescription"] ||
    ""
  );
};

export const getStrapiCategory = (item) => {
  return (
    item.category?.name ||
    item.attributes?.category?.data?.attributes?.name ||
    "Uncategorized"
  );
};

export const getStrapiSlug = (item) => {
  return item.slug || item.attributes?.slug;
};

export const getRedirectionURL = (item) => {
  return item.redirectionURL || item.attributes?.redirectionURL;
};

export const createRouteMap = (basePath = "/impact") => ({
  Blogs: (slug) => `${basePath}/strapi-detail/${slug}?type=blogs`,
  Studies: (slug) => `${basePath}/strapi-detail/${slug}?type=case-studies`,
  Newsroom: (slug) => `${basePath}/strapi-detail/${slug}?type=newsroom`,
  Products: (slug) => `/products/${slug}`,
  Services: (slug) => `/services/${slug}`,
  default: (slug) => `${basePath}/strapi-detail/${slug}?type=blogs`,
});

export const getRouteForSection = (section, slug, basePath = "/impact") => {
  const routes = createRouteMap(basePath);
  const routeFunction = routes[section] || routes.default;
  return routeFunction(slug);
};

export const filterByCategory = (
  data,
  activeCategory,
  defaultCategory,
  useStrapiData = false
) => {
  if (activeCategory === defaultCategory) return data;

  return data.filter((item) => {
    if (useStrapiData) {
      const categoryName = getStrapiCategory(item);
      return categoryName === activeCategory;
    }
    return item.category === activeCategory;
  });
};

export const extractCategories = (
  data,
  useStrapiData = false,
  defaultCategory = "All"
) => {
  if (!data || data.length === 0) return [defaultCategory];

  const categories = [defaultCategory];
  data.forEach((item) => {
    const categoryName = useStrapiData
      ? getStrapiCategory(item)
      : item.category;
    if (categoryName && !categories.includes(categoryName)) {
      categories.push(categoryName);
    }
  });
  return categories;
};
