import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { ChevronDown } from "lucide-react";
import SignInModal from "./SignInModal";
import Helmet from "react-helmet";

const Navbar = ({ topClassName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);

  const menuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleDropdownClick = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    // setTimeout(() => {
    console.log("leave function--->");
    if (
      !menuRef.current?.matches(":hover") &&
      !submenuRef.current?.matches(":hover")
    ) {
      setDropdownOpen(null);
    }
    // }, 100);
  };

  const navItems = [
    {
      label: "Company",
      subItems: ["About Us", "Careers", "Life at-5C"],
      route: "/company/about-us/",
    },
    {
      label: "AI Products",
      subItems: [
        "Bionic Suite",
        "Prodigi",
        "Osteocheck",
        "Kronos",
        "Protocall",
      ],
      route: "/ai-products",
    },
    { label: "Borderless Radiology", route: "/borderless-radiology" },
    {
      label: "Impact",
      subItems: ["Blogs", "Case Study", "Newsroom"],
      route: "/impact/blogs",
    },
    { label: "Explore 5C", route: "/explore-5C" },
    { label: "Research", route: "/research" },
    { label: "Contact Us", route: "/contact-us" },
  ];

  const location = useLocation();

  const isActiveRoute = (item) => {
    if (item.route && location.pathname.includes(item.route)) {
      return true;
    }
    if (item.subItems) {
      return item.subItems.some((subItem) =>
        location.pathname.includes(
          `/${item.label.toLowerCase().replace(" ", "-")}/${subItem
            .toLowerCase()
            .replace(" ", "-")}`
        )
      );
    }
    return false;
  };

  return (
    <>
      <header
        className={`bg-white shadow-sm fixed top-0 z-40 w-[100%] ${topClassName}`}
      >
        <Helmet>
          <title>5C - Network</title>
        </Helmet>
        <div className="lg:mx-auto px-4 py-3 flex items-center justify-between w-[100%] lg:w-[90%]">
          <Link to="/">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src="/static/logo.png"
              alt="5C Logo"
              className="h-12 md:h-[60px]"
            />
          </Link>
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex md:space-x-2 lg:space-x-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`cursor-pointer px-3 py-2 rounded ${
                      isActiveRoute(item)
                        ? "bg-red-600 text-white"
                        : "text-[#0D50B6]"
                    }`}
                  >
                    <Link
                      to={item.route}
                      className="text-[12px] md:text-[14px] lg:text-[16px]"
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <ChevronDown className="inline h-4 w-4" />
                    )}
                  </motion.div>
                  {item.subItems && dropdownOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute border-2 bg-white min-w-[150px] text-center shadow-lg p-4 left-[-25px] top-[40px] 2xl:top-[40px] rounded-lg z-50"
                      ref={submenuRef}
                    >
                      <ul className="space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`/${item.label
                                .toLowerCase()
                                .replace(" ", "-")}/${subItem
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="block transition-colors duration-300 text-[#0D50B6] text-[12px] md:text-[14px] lg:text-[16px]"
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-4 md:block hidden">
            <motion.button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg p-4"
          >
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() => handleDropdownClick(index)}
                    className="flex justify-between items-center"
                  >
                    <Link
                      to={item.route}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                    {item.subItems && <ChevronDown className="h-4 w-4" />}
                  </div>

                  {item.subItems && dropdownOpen === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={`/${item.label
                              .toLowerCase()
                              .replace(" ", "-")}/${subItem
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="block text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>

            {/* <div className="mt-4 flex flex-col space-y-2">
              <motion.button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </motion.button>
            </div> */}
          </motion.div>
        )}
      </header>

      <AnimatePresence>
        {showSignIn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setShowSignIn(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <SignInModal />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
