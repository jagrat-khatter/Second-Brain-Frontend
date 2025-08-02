import { useEffect, useRef } from 'react';

interface TwitterEmbedProps {
  url: string;
  title: string;
  tweetId?: string; // Add this prop
}

export const TwitterEmbed = ({ url, title, tweetId }: TwitterEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter script if not already loaded
    if (!(window as any).twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        if (containerRef.current) {
          (window as any).twttr?.widgets?.load(containerRef.current);
        }
      };
      document.head.appendChild(script);
    } else {
      // If Twitter script is already loaded, reload widgets
      if (containerRef.current) {
        (window as any).twttr?.widgets?.load(containerRef.current);
      }
    }
  }, [url]); // Re-run when URL changes

  return (
    <div className="min-h-[200px] max-h-96 overflow-auto p-2" ref={containerRef}>
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
        {/* <a href={url}>{title}</a> */}
      </blockquote>
    </div>
  );
};