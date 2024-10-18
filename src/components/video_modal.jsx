import React, { useEffect, useRef } from "react";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const modalRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999]">
      <div ref={modalRef} className="bg-white rounded-lg z-[1000]">
        <video width="560" height="315" controls autoPlay playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
