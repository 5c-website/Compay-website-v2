import React from "react";
import { navigate, useLocation } from "@reach/router";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { useStrapiItem } from "../../../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../../../services/strapi";
import { STRAPI_URL } from "../../../../utils/constants";

const CONTENT_BLOCK_TYPES = {
  RICH_TEXT: "shared.rich-text",
  QUOTE: "shared.quote",
  MEDIA: "shared.media",
  SLIDER: "shared.slider",
};

const BlogContentPage = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slug = pathSegments[pathSegments.length - 1];
  const collection = COLLECTION_TYPES.BLOGS; // Default to blogs for this route

  console.log("Blog Content Page Debug:", {
    pathname: location.pathname,
    pathSegments,
    slug,
    collection,
    slugExists: !!slug,
    slugLength: slug?.length || 0,
  });

  // Early return if no slug
  if (!slug) {
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
              <p>No slug found in URL: {location.pathname}</p>
              <p className="text-sm mt-2">
                Path segments: {JSON.stringify(pathSegments)}
              </p>
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

  const { data: content, loading, error } = useStrapiItem(collection, slug);

  const renderContentBlock = (block) => {
    switch (block.__component) {
      case CONTENT_BLOCK_TYPES.RICH_TEXT:
        return (
          <div key={block.id} className="prose prose-lg max-w-none mb-6">
            <div
              className="text-gray-700 leading-relaxed prose-headings:font-bold prose-p:leading-relaxed prose-ul:my-4 prose-ol:my-4"
              dangerouslySetInnerHTML={{ __html: block.body || "" }}
            />
          </div>
        );

      case CONTENT_BLOCK_TYPES.QUOTE:
        return (
          <blockquote
            key={block.id}
            className="border-l-4 border-[#1B3366] pl-6 my-8 italic bg-gray-50 p-6 rounded-r-lg"
          >
            <p className="text-2xl mb-4 leading-relaxed text-gray-800">
              {block.body}
            </p>
            {block.title && (
              <footer className="text-lg font-medium text-gray-600">
                — {block.title}
              </footer>
            )}
          </blockquote>
        );

      case CONTENT_BLOCK_TYPES.MEDIA:
        return (
          block.media?.data && (
            <figure key={block.id} className="my-8">
              <img
                src={`${STRAPI_URL}${block.media.data.attributes.url}`}
                alt={block.media.data.attributes.alternativeText || ""}
                className="w-full rounded-lg shadow-lg"
              />
              {block.media.data.attributes.caption && (
                <figcaption className="text-center text-gray-600 mt-3 text-sm">
                  {block.media.data.attributes.caption}
                </figcaption>
              )}
            </figure>
          )
        );

      case CONTENT_BLOCK_TYPES.SLIDER:
        return (
          block.files?.data &&
          block.files.data.length > 0 && (
            <div key={block.id} className="my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.files.data.map((file) => (
                  <img
                    key={file.id}
                    src={`${STRAPI_URL}${file.attributes.url}`}
                    alt={file.attributes.alternativeText || ""}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </div>
          )
        );

      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isArticle = (content) => {
    return content && "title" in content;
  };

  const getContentTitle = (content) => {
    return isArticle(content) ? content.title : content.name;
  };

  const renderArticleSidebar = (article) => {
    if (!article.category?.articles || article.category.articles.length <= 1) {
      return null;
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#1B3366]">
          Related Articles
        </h3>
        {article.category.articles
          .filter((relatedArticle) => relatedArticle.id !== article.id)
          .slice(0, 3)
          .map((relatedArticle) => (
            <div
              key={relatedArticle.id}
              className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-[#1B3366] transition-all"
              onClick={() =>
                navigate(`/impact/blog-content/blogs/${relatedArticle.slug}`)
              }
            >
              <h4 className="font-medium text-[#1B3366] mb-2">
                {relatedArticle.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2">
                {relatedArticle.description}
              </p>
            </div>
          ))}
      </div>
    );
  };

  const renderHeader = (content) => {
    const attributes = content.attributes || content;

    return (
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {attributes.category?.data && (
            <span className="px-3 py-1 bg-[#1B3366] text-white text-sm rounded-full">
              {attributes.category.data.attributes.name}
            </span>
          )}
          <span className="text-gray-600 text-sm">
            {formatDate(attributes.publishedAt)}
          </span>
          {attributes.author && (
            <span className="text-gray-600 text-sm">
              By {attributes.author.name}
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {getContentTitle(content)}
        </h1>
      </div>
    );
  };

  const renderDescription = (content) => {
    const attributes = content.attributes || content;

    return (
      <div className="mb-8">
        {attributes.description && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {attributes.description}
          </p>
        )}
        {attributes.blocks?.[1]?.title && (
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mt-6">
            {attributes.blocks[1].title}
          </h2>
        )}
      </div>
    );
  };

  const renderDefaultContent = (content) => {
    const attributes = content.attributes || content;

    return (
      <>
        {/* Cover Image */}
        {attributes.cover?.data && (
          <div className="mb-8">
            <img
              src={`${STRAPI_URL}${
                attributes.cover.data.attributes.formats?.large?.url ||
                attributes.cover.data.attributes.url
              }`}
              alt={
                attributes.cover.data.attributes.alternativeText ||
                getContentTitle(content) ||
                ""
              }
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Content Blocks */}
        <div className="prose prose-lg max-w-none">
          {attributes.blocks?.map((block) => renderContentBlock(block))}
        </div>
      </>
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
              <p className="mb-2">{error || "Content not found"}</p>
              <div className="text-sm text-gray-600 mb-4">
                <p>Slug: "{slug}"</p>
                <p>Collection: {collection}</p>
                <p>URL: {location.pathname}</p>
              </div>
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

  const attributes = content.attributes || content;
  const renderSidebar = () => {
    if (collection === COLLECTION_TYPES.BLOGS) {
      return renderArticleSidebar(content);
    }
    return null;
  };

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
              {renderDescription(content)}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {renderDefaultContent(content)}
                </div>
                {renderSidebar() && (
                  <div className="lg:col-span-1">{renderSidebar()}</div>
                )}
              </div>
            </div>
          </div>

          {/* Back to Blogs Button */}
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-[#1B3366] text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => navigate("/impact/blogs")}
            >
              Back to Blogs
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

export default BlogContentPage;
