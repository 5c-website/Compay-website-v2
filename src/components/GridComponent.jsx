import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GridComponent = ({
  comInformation,
  comCategories,
  section,
  isNewsRoom,
}) => {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [studyData, setStudyData] = useState(comInformation);
  const [categories, setCategories] = useState(comCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const totalPages = Math.ceil(studyData.length / blogsPerPage);

  const truncateText = (text, wordLimit) => {
    const wordsArray = text?.split(" ");
    return wordsArray.length > wordLimit
      ? wordsArray.slice(0, wordLimit).join(" ") + "....."
      : text;
  };

  const filteredNews =
    activeCategory === "Latest"
      ? studyData
      : studyData.filter((news) => news.category === activeCategory);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const getBlog = (blogTitle) => {
    const blogInformation = studyData.filter((e) => e.title === blogTitle);
    const blogInfoString = encodeURIComponent(JSON.stringify(blogInformation));
    navigate(`/impact/info-blog?blogInformation=${blogInfoString}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getRandomTime = () => Math.floor(Math.random() * (14 - 6 + 1)) + 6;


  return (
    <div className="w-full px-4 md:px-10 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest {section}</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {paginatedNews.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden h-full flex flex-col"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-base md:text-lg font-semibold text-[#0070C0]">
                {news.title}
              </h3>
              <p className="text-sm md:text-base text-[#1B3363] mt-2 flex-grow">
                {!isNewsRoom && truncateText(news.description[0], 20)}
              </p>

              <div className="my-2 flex flex-row justify-between items-center w-[100%]">
                <button
                  className="px-3 py-1.5 bg-gray-200 text-black rounded-full text-sm hover:bg-[#1B3366] hover:text-white transition-all"
                  onClick={() => {
                    if (isNewsRoom) {
                      window.location.href = news.redirectionURL;
                    } else {
                      getBlog(news.title);
                    }
                  }}
                >
                  Read more
                </button>
                <p className="px-3 py-1.5 transition-all text-sm mr-2 bg-[#fff] shadow rounded-full text-[#0070C0] opacity-80">
                {getRandomTime()} Mins...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length > blogsPerPage && (
        <div className="flex flex-row justify-center items-center md:justify-end md:items-end mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`p-1 text-sm rounded-lg border transition-all ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-black hover:bg-[#1B3366] hover:text-white"
            }`}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          <nav className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                  currentPage === index + 1
                    ? "bg-[#1B3366] text-white"
                    : "bg-gray-200 text-black hover:bg-[#1B3366] hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`p-1 text-sm rounded-lg border transition-all ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-black hover:bg-[#1B3366] hover:text-white"
            }`}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default GridComponent;
