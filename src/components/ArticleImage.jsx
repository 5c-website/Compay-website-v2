import React, { useState, useEffect } from 'react';

const ArticleImage = ({ url, fallbackSrc, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchOGImage = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        // Use a CORS proxy to fetch the article content
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data.contents) {
          const html = data.contents;
          
          // Try to find Open Graph image
          const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
          if (ogImageMatch) {
            setImageSrc(ogImageMatch[1]);
            return;
          }
          
          // Try to find Twitter image
          const twitterImageMatch = html.match(/<meta name="twitter:image" content="([^"]+)"/);
          if (twitterImageMatch) {
            setImageSrc(twitterImageMatch[1]);
            return;
          }
          
          // Try to find the first large image in the article
          const imgMatch = html.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
          if (imgMatch) {
            // Look for images that might be article covers (usually larger images)
            const potentialImages = imgMatch
              .map(img => {
                const srcMatch = img.match(/src="([^"]+)"/);
                return srcMatch ? srcMatch[1] : null;
              })
              .filter(src => src && !src.includes('logo') && !src.includes('icon'));
            
            if (potentialImages.length > 0) {
              setImageSrc(potentialImages[0]);
              return;
            }
          }
        }
        
        // If no image found, use fallback
        setImageSrc(fallbackSrc);
      } catch (error) {
        console.error('Error fetching article image:', error);
        setHasError(true);
        setImageSrc(fallbackSrc);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOGImage();
  }, [url, fallbackSrc]);

  const handleImageError = () => {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
  };

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
};

export default ArticleImage;
