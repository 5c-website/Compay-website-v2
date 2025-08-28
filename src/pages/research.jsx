import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Research articles data from arXiv
  const researchArticles = [
    {
      id: 1,
      title: "Autonomous AI for Multi-Pathology Detection in Chest X-Rays: A Multi-Site Study in the Indian Healthcare System",
      date: "2025-04-02",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "The study outlines the development of an autonomous AI system for chest X-ray (CXR) interpretation, trained on a vast dataset of over 5 million X-rays sourced from healthcare systems across India. This AI system integrates advanced architectures, including Vision Transformers, Faster R-CNN, and various U-Net models (such as Attention U-Net, U-Net++, and Dense U-Net), to enable comprehensive classification, detection, and segmentation of 75 distinct pathologies.",
      url: "https://arxiv.org/abs/2504.00022"
    },
    {
      id: 2,
      title: "Vision-Language Models for Acute Tuberculosis Diagnosis: A Multimodal Approach Combining Imaging and Clinical Data",
      date: "2025-04-01",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "This study introduces a Vision-Language Model (VLM) leveraging SIGLIP and Gemma-3b architectures for automated acute tuberculosis (TB) screening. By integrating chest X-ray images and clinical notes, the model aims to enhance diagnostic accuracy and efficiency, particularly in resource-limited settings.",
      url: "https://arxiv.org/abs/2503.14538"
    },
    {
      id: 3,
      title: "AI-Driven MRI Spine Pathology Detection: A Comprehensive Deep Learning Approach for Automated Diagnosis in Diverse Clinical Settings",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "A comprehensive deep learning approach for automated MRI spine pathology detection, designed to work effectively across diverse clinical settings and patient populations.",
      url: "https://arxiv.org/abs/2503.20316"
    },
    {
      id: 4,
      title: "Advanced Deep Learning Techniques for Medical Image Analysis and Diagnosis",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Exploration of cutting-edge deep learning methodologies for enhanced medical image analysis, focusing on improved diagnostic accuracy and clinical workflow optimization.",
      url: "https://arxiv.org/abs/2503.14536"
    },
    {
      id: 5,
      title: "Multimodal AI Systems for Comprehensive Medical Imaging Analysis",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Development of multimodal AI systems that integrate multiple imaging modalities and clinical data for comprehensive medical analysis and improved diagnostic outcomes.",
      url: "https://arxiv.org/abs/2503.22176"
    },
    {
      id: 6,
      title: "Machine Learning Approaches for Automated Radiology Workflow Optimization",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Novel machine learning approaches designed to optimize radiology workflows, reduce reporting times, and enhance overall efficiency in clinical practice.",
      url: "https://arxiv.org/abs/2503.20306"
    },
    {
      id: 7,
      title: "Deep Learning Models for Early Disease Detection in Medical Imaging",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Advanced deep learning models specifically designed for early disease detection in medical imaging, enabling proactive healthcare interventions and improved patient outcomes.",
      url: "https://arxiv.org/abs/2503.11281"
    },
    {
      id: 8,
      title: "AI-Powered Clinical Decision Support Systems for Radiology",
      date: "2025-03-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Development of AI-powered clinical decision support systems that assist radiologists in making more accurate diagnoses and treatment recommendations.",
      url: "https://arxiv.org/abs/2503.10717"
    },
    {
      id: 9,
      title: "Next-Generation AI Technologies for Medical Imaging and Healthcare",
      date: "2025-07-28",
      category: "Artificial Intelligence",
      tags: ["Artificial Intelligence", "Clinical", "Publications"],
      description: "Cutting-edge AI technologies and methodologies for the next generation of medical imaging systems, focusing on scalability, accuracy, and clinical integration.",
      url: "https://arxiv.org/abs/2507.13408"
    }
  ];

  // Available tags for filtering
  const availableTags = [
    "Artificial Intelligence",
    "Clinical",
    "Publications",
    "Deep Learning",
    "Medical Imaging",
    "AI Research",
    "Computer Vision",
    "Machine Learning"
  ];

  // Filter articles based on search query and selected tags
  const filteredArticles = useMemo(() => {
    return researchArticles.filter(article => {
      const matchesSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => article.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  // Handle tag selection/deselection
  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      
      <div className="min-h-screen bg-white pt-[90px]">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B3363] mb-4 md:mb-0">
              Research Publications
            </h1>
            <div className="text-gray-600">
              Showing <span className="text-[#1B3363] font-semibold">{filteredArticles.length}</span> out of <span className="text-[#1B3363] font-semibold">{researchArticles.length}</span> results
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Search and Filters */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                {/* Search Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Search</h2>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#1B3363] focus:border-transparent"
                    />
                    <button className="bg-[#1B3363] hover:bg-[#1B3363]/90 text-white px-4 py-3 rounded-r-lg transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Filter by Category Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Category</h2>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                          selectedTags.includes(tag)
                            ? "bg-[#1B3363] text-white border-[#1B3363]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#1B3363] hover:text-[#1B3363]"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  {selectedTags.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="mt-4 text-[#1B3363] hover:text-[#1B3363]/80 text-sm font-medium underline"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content Area - Articles Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(article.url, '_blank')}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-[#1B3363] transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Tag className="w-4 h-4 mr-2" />
                      {article.category}
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                      {article.description}
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <span className="text-xs text-[#1B3363] font-semibold group-hover:underline">
                        Read Full Article →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-[#1B3363] hover:text-[#1B3363]/80 font-medium underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResearchPage;
