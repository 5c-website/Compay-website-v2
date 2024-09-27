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
    <div className="w-full px-4 md:px-10 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{section}</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 text-sm md:text-base rounded-full border transition-all ${
              activeCategory === category
                ? "bg-[#1B3366] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#1B3363] line-clamp-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {truncateText(news.description[0], 20)}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#0070C0]">
                  {news.category}
                </span>
                <button
                  className="px-4 py-2 bg-[#0070C0] text-white rounded-md hover:bg-[#1B3366] transition duration-300 text-sm"
                  onClick={() => {
                    if (isNewsRoom) {
                      window.location.href = news.redirectionURL;
                    } else {
                      getBlog(news.title);
                    }
                  }}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
