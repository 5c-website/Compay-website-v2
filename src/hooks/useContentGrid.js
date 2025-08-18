import { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { filterByCategory, extractCategories } from "../utils/contentUtils";

export const useContentGrid = ({
  comInformation = [],
  comCategories = [],
  defaultCategory = "All",
  useStrapiData = false,
}) => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [studyData, setStudyData] = useState(comInformation);
  const [categories, setCategories] = useState(comCategories);

  useEffect(() => {
    setStudyData(comInformation);
  }, [comInformation]);

  useEffect(() => {
    setCategories(comCategories);
  }, [comCategories]);

  const filteredData = filterByCategory(
    studyData,
    activeCategory,
    defaultCategory,
    useStrapiData
  );

  const getBasePath = () => {
    const pathSegments = location.pathname.split("/");
    if (pathSegments.includes("impact")) return "/impact";
    if (pathSegments.includes("products")) return "/products";
    if (pathSegments.includes("services")) return "/services";
    return "/impact";
  };

  return {
    activeCategory,
    setActiveCategory,
    studyData,
    categories,
    filteredData,
    pathname: location.pathname,
    getBasePath,
  };
};
