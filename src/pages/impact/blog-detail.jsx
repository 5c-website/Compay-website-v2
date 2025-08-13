import React from "react";
import { useLocation, navigate } from "@reach/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useStrapiItem } from "../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../services/strapi";
import { STRAPI_URL } from "../../utils/constants";

const CONTENT_BLOCK_TYPES = {
  RICH_TEXT: "shared.rich-text",
  QUOTE: "shared.quote",
  MEDIA: "shared.media",
  SLIDER: "shared.slider",
};

function BlogDetail() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const slug = pathSegments[pathSegments.length - 1];

  console.log("slug-===", slug);
  const {
    data: content,
    loading,
    error,
  } = useStrapiItem(COLLECTION_TYPES.BLOGS, slug);

  const renderContentBlock = (block) => {
    switch (block.__component) {
      case CONTENT_BLOCK_TYPES.RICH_TEXT:
        return (
          <div key={block.id} className="prose prose-lg max-w-none mb-6">
            <div
              className="text-gray-700 leading-relaxed"
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
            <p className="text-xl mb-4 leading-relaxed text-gray-800">
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
                    className="w-full h-48 object-cover rounded-lg shadow-md"
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

  const attributes = content.attributes || content;

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-[90px] pb-[20px]">
        {/* Header Section */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          <button
            className="mb-6 px-4 py-2 text-[#1B3366] border border-[#1B3366] rounded hover:bg-[#1B3366] hover:text-white transition-colors"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          {/* Article Header */}
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {attributes.title}
            </h1>

            {attributes.description && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {attributes.description}
              </p>
            )}
          </div>

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
                  attributes.title
                }
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Content Blocks */}
          <div className="prose prose-lg max-w-none">
            {attributes.blocks?.map((block) => renderContentBlock(block))}
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
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
}

export default BlogDetail;
