import React from "react";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt, className, initial, animate, transition }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      loading="lazy"
    />
  );
};

export default LazyImage;
