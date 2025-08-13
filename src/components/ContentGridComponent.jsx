import React from "react";
import { navigate } from "gatsby";
import { useContentGrid } from "../hooks/useContentGrid";
import {
  truncateText,
  getStrapiImageUrl,
  getStrapiTitle,
  getStrapiDescription,
  getStrapiCategory,
  getStrapiSlug,
  getRedirectionURL,
  getRouteForSection,
} from "../utils/contentUtils";

const ContentGridComponent = ({
  comInformation = [],
  comCategories = [],
  section,
  isNewsRoom = false,
  loading = false,
  error = null,
  useStrapiData = false,
  showCategories = true,
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cardClassName = "bg-white shadow-md rounded-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm cursor-pointer",
  imageClassName = "w-full h-40 object-cover transition duration-300 transform hover:scale-110",
  titleClassName = "text-base font-semibold mb-1 text-[#1B3363] line-clamp-2",
  descriptionClassName = "text-xs text-gray-600 mb-2 flex-grow",
  categoryClassName = "text-xs font-medium text-[#0070C0]",
  readMoreClassName = "text-xs text-[#0070C0]",
  onItemClick = null,
  customImageUrl = null,
  customTitle = null,
  customDescription = null,
  customCategory = null,
}) => {
  const {
    activeCategory,
    setActiveCategory,
    studyData,
    categories,
    filteredData,
    getBasePath,
  } = useContentGrid({
    comInformation,
    comCategories,
    useStrapiData,
  });

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
      return;
    }

    if (useStrapiData) {
      const slug = getStrapiSlug(item);
      const redirectionURL = getRedirectionURL(item);
      const basePath = getBasePath();

      if (section === "Newsroom" && redirectionURL) {
        window.location.href = redirectionURL;
      } else {
        const route = getRouteForSection(section, slug, basePath);
        navigate(route);
      }
    } else {
      const blogTitle = getStrapiTitle(item);
      const blogInformation = studyData.filter(
        (e) => getStrapiTitle(e) === blogTitle
      );
      const blogInfoString = encodeURIComponent(
        JSON.stringify(blogInformation)
      );
      navigate(`/impact/info-blog?blogInformation=${blogInfoString}`);
    }
  };

  const getImageUrl = (item) => {
    if (customImageUrl) return customImageUrl(item);
    if (useStrapiData) return getStrapiImageUrl(item);
    return item.imageUrl || item.attributes?.imageUrl;
  };

  const getTitle = (item) => {
    if (customTitle) return customTitle(item);
    if (useStrapiData) return getStrapiTitle(item);
    return item.title;
  };

  const getDescription = (item) => {
    if (customDescription) return customDescription(item);
    if (useStrapiData) return getStrapiDescription(item);
    return Array.isArray(item.description)
      ? item.description[0]
      : item.description;
  };

  const getCategory = (item) => {
    if (customCategory) return customCategory(item);
    if (useStrapiData) return getStrapiCategory(item);
    return item.category;
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{section}</h2>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B3366]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{section}</h2>
        <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
          <p>Error loading content: {error}</p>
        </div>
      </div>
    );
  }

  if (!studyData || studyData.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{section}</h2>
        <div className="text-center text-gray-500 min-h-[400px] flex items-center justify-center">
          <div className="space-y-4">
            <div className="text-6xl">📝</div>
            <p className="text-xl">Coming Soon</p>
            <p>Exciting content is being prepared for this section.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{section}</h2>
      {/* {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-2 py-1 text-xs md:text-sm rounded-full border transition-all ${
                activeCategory === category
                  ? "bg-[#1B3366] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )} */}
      <div className={`grid ${gridCols} gap-6 justify-items-center`}>
        {filteredData.map((news, index) => (
          <div
            key={useStrapiData ? news.id : index}
            className={cardClassName}
            onClick={() => {
              if (isNewsRoom && !useStrapiData) {
                window.location.href = news.redirectionURL;
              } else {
                handleItemClick(news);
              }
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={getImageUrl(news)}
                alt={getTitle(news)}
                className={imageClassName}
                onError={(e) => {
                  e.target.src = "/img/placeholder-image.png";
                }}
              />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className={titleClassName}>{getTitle(news)}</h3>
              {!isNewsRoom && (
                <p className={descriptionClassName}>
                  {truncateText(getDescription(news), 15)}
                </p>
              )}
              <div className="flex justify-between items-center mt-auto">
                <span className={categoryClassName}>{getCategory(news)}</span>
                {!isNewsRoom && (
                  <span className={readMoreClassName}>Read More</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentGridComponent;
