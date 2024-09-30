import React, { useState } from "react";
import { navigate } from "gatsby";

const GridComponent = ({
  comInformation,
  comCategories,
  section,
  isNewsRoom,
}) => {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [studyData] = useState(comInformation);
  const [categories] = useState(comCategories);

  const truncateText = (text, wordLimit) => {
    const wordsArray = text?.split(" ");
    return wordsArray.length > wordLimit
      ? wordsArray.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const filteredNews =
    activeCategory === "Latest"
      ? studyData
      : studyData.filter((news) => news.category === activeCategory);

  const getBlog = (blogTitle) => {
    const blogInformation = studyData.filter((e) => e.title === blogTitle);
    const blogInfoString = encodeURIComponent(JSON.stringify(blogInformation));
    navigate(`/impact/info-blog?blogInformation=${blogInfoString}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{section}</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm cursor-pointer"
            onClick={() => {
              if (isNewsRoom) {
                window.location.href = news.redirectionURL;
              } else {
                getBlog(news.title);
              }
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-40 object-cover transition duration-300 transform hover:scale-110"
              />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-base font-semibold mb-1 text-[#1B3363] line-clamp-2">
                {news.title}
              </h3>
              {!isNewsRoom && (
                <p className="text-xs text-gray-600 mb-2 flex-grow">
                  {truncateText(news.description[0], 15)}
                </p>
              )}
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs font-medium text-[#0070C0]">
                  {news.category}
                </span>
                {!isNewsRoom && (
                  <span className="text-xs text-[#0070C0]">Read More</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
