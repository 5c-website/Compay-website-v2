import qs from "qs";
import { STRAPI_URL } from "../utils/constants";

class StrapiService {
  constructor(baseUrl = STRAPI_URL) {
    this.baseUrl = baseUrl;
  }
  buildUrl(path, query) {
    const queryString = query
      ? `?${qs.stringify(query, {
          encodeValuesOnly: true,
          arrayFormat: "brackets",
        })}`
      : "";

    console.log("queryString-===", queryString);
    console.log("baseUrl-===", this.baseUrl);
    console.log("path-===", path);

    return `${this.baseUrl}/api/${path}${queryString}`;
  }

  async get(path, query) {
    try {
      const url = this.buildUrl(path, query);
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        console.error("Strapi error response:", error);
        throw new Error(error.message || "Failed to fetch data from Strapi");
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${path}:`, error);
      throw error;
    }
  }

  async getOne(path, slug, populate = ["*"]) {
    const query = {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: populate?.[0] ?? "*",
    };

    console.log("query-===", query);

    const response = await this.get(path, query);
    return response.data[0] || null;
  }

  async getCollection(path, options = {}) {
    const query = {
      ...options,
      populate: options.populate || "*",
    };

    return await this.get(path, query);
  }
}

export const strapiService = new StrapiService();

export const COLLECTION_TYPES = {
  CATEGORIES: "categories",
  ARTICLES: "articles",
  BLOGS: "blogs",
  CASE_STUDIES: "case-studies",
  NEWSROOM: "newsroom",
  RESEARCH: "research",
};
