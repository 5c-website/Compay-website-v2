import React from "react";
import { navigate, useLocation } from "@reach/router";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { useStrapiItem } from "../../../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../../../services/strapi";
import { STRAPI_URL } from "../../../../utils/constants";

const CategoryContentPage = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slug = pathSegments[pathSegments.length - 1];
  const collection = COLLECTION_TYPES.CATEGORIES; // Specifically for categories

  console.log("Category Content Page Debug:", {
    pathname: location.pathname,
    pathSegments,
    slug,
    collection,
  });

  const { data: content, loading, error } = useStrapiItem(collection, slug);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getContentTitle = (content) => {
    return content?.name || content?.title || "Untitled";
  };

  const renderCategoryContent = (category) => {
    const attributes = category.attributes || category;

    return (
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            {attributes.description}
          </p>
        </div>

        {attributes.articles && attributes.articles.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-[#1B3366] mb-6">
              Articles in this Category
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attributes.articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() =>
                    navigate(`/impact/blog-content/articles/${article.slug}`)
                  }
                >
                  {article.cover && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${STRAPI_URL}${
                          article.cover.formats?.medium?.url ||
                          article.cover.url
                        }`}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/img/placeholder-image.png";
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#1B3366] mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="text-[#0070C0] font-medium">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderHeader = (content) => {
    const attributes = content.attributes || content;

    return (
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-[#1B3366] text-white text-sm rounded-full">
            Category
          </span>
          <span className="text-gray-600 text-sm">
            {formatDate(attributes.publishedAt)}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {getContentTitle(content)}
        </h1>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-[90px] min-h-screen">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B3366]"></div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  if (error || !content) {
    return (
      <>
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-[90px] min-h-screen">
          <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Error</h2>
              <p>{error || "Content not found"}</p>
              <button
                className="mt-4 px-4 py-2 bg-[#1B3366] text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-[90px] pb-[20px]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <button
            className="mb-6 px-4 py-2 text-[#1B3366] border border-[#1B3366] rounded hover:bg-[#1B3366] hover:text-white transition-colors"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 md:p-8">
              {renderHeader(content)}
              {renderCategoryContent(content)}
            </div>
          </div>

          {/* Back to Categories Button */}
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-[#1B3366] text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => navigate("/impact/blogs")}
            >
              Back to Categories
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CategoryContentPage;
