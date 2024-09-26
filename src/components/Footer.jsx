import React from "react";
import { Phone } from "lucide-react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="bg-[#162d5b] text-white min-h-[300px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center px-2 md:px-8 pt-4 space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex flex-row justify-between md:justify-start md:items-center md:py-0 py-2 w-[90%]">
          <div className="flex justify-center mb-4 md:mb-0">
            <img
              src="../../static/footer_images/footer_logo.png"
              className="md:h-[100px] md:w-[100px] h-[70px] w-[70px]"
              alt="footer_logo"
            />
          </div>
          <div className="pl-2 md:pl-10 flex flex-col md:justify-start pt-3 md:pt-0 items-start gap-2">
            <p className="font-bold text-[14px] md:text-[24px] md:text-lg">
              Contact 5C
            </p>
            <div className="flex items-center gap-2">
              <span>
                <Phone size={20} />
              </span>
              <a
                href="tel:09587274858"
                className="text-white text-[14px] md:text-[24px] hover:underline"
              >
                095872 74858
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-row flex-wrap justify-center items-center my-4 gap-4">
                <a
                  href="https://www.linkedin.com/company/5c-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="../../static/footer_images/linkedin_img.png"
                    alt="LinkedIn"
                    className="h-[20px] w-[20px]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/5cnetwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="../../static/footer_images/insta_img.png"
                    alt="Instagram"
                    className="h-[20px] w-[20px]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/5cnetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="../../static/footer_images/fb_logo.png"
                    alt="Facebook"
                    className="h-[20px] w-[20px]"
                  />
                </a>
                <a
                  href="mailto:someone@example.com"
                  className="flex items-center"
                >
                  <img
                    src="../../static/footer_images/mail_img.png"
                    alt="Email"
                    className="h-[15px] w-[20px]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex flex-row flex-wrap justify-center items-center my-4 gap-2 mt-8">
              <a
                href="https://www.linkedin.com/company/5c-network/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="../../static/footer_images/linkedin_img.png"
                  alt="LinkedIn"
                  className="h-[20px] w-[20px]"
                />
              </a>
              <a
                href="https://www.instagram.com/5cnetwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="../../static/footer_images/insta_img.png"
                  alt="Instagram"
                  className="h-[20px] w-[20px]"
                />
              </a>
              <a
                href="https://www.facebook.com/5cnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="../../static/footer_images/fb_logo.png"
                  alt="Facebook"
                  className="h-[20px] w-[20px]"
                />
              </a>
              <a
                href="mailto:someone@example.com"
                className="flex items-center"
              >
                <img
                  src="../../static/footer_images/mail_img.png"
                  alt="Email"
                  className="h-[15px] w-[20px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-row md:flex-row justify-center items-start md:items-start p-1 md:p-4">
          <div className="h-full w-full md:w-[40%] lg:w-[30%] p-2 text-center md:text-left">
            <p className="font-bold  text-[14px] md:text-[20px] mb-2">
              Company
            </p>
            <ul className="space-y-1 text-[12px] md:text-[16px]">
              <li>
                <Link
                  to="/company/about-us"
                  className="text-white hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="text-white hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-white hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/company/life-at-5c"
                  className="text-white hover:underline"
                >
                  Life at 5C
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-full w-full md:w-[40%] lg:w-[30%] p-2 text-center md:text-left">
            <p className="font-bold text-[14px] md:text-[20px] mb-2">
              AI Products
            </p>
            <ul className="space-y-1 text-[12px] md:text-[16px]">
              <li>
                <Link
                  to="/ai-products/prodigi"
                  className="text-white hover:underline"
                >
                  Prodigi
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-products/osteocheck"
                  className="text-white hover:underline"
                >
                  OsteoCheck
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-products/kronos"
                  className="text-white hover:underline"
                >
                  Kronos
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-products/protocall"
                  className="text-white hover:underline"
                >
                  Protocall
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-products/bionic-suite"
                  className="text-white hover:underline"
                >
                  Bionic Report
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-full w-full md:w-[40%] lg:w-[30%] p-2 text-center md:text-left">
            <p className="font-bold text-[14px] md:text-[20px] mb-2">
              Presence
            </p>
            <ul className="space-y-1 text-[12px] md:text-[16px]">
              <li>
                <Link to="/impact/blogs" className="text-white hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/impact/case-study"
                  className="text-white hover:underline"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  to="/impact/newsroom"
                  className="text-white hover:underline"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:px-8 md:pt-4 pt-5">
        <p className="text-[14px] w-[250px] md:pl-0 pl-8">
          5C Network (INDIA) Pvt Ltd.
        </p>
        <hr className="w-full border-t border-white my-2 md:my-0" />
      </div>
      <div className="text-[14px] flex flex-row md:gap-[80px] justify-around md:justify-end items-center w-[100%] md:pr-10 py-2">
        <a href="/" className="text-white hover:underline">
          Copyright
        </a>
        <a href="/privacy-policy" className="text-white hover:underline">
          Privacy Policy
        </a>
        <a href="/compliance" className="text-white hover:underline">
          Compliance Regulatory
        </a>
        <a href="/" className="text-white hover:underline">
          Terms and Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
