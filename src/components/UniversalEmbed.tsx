import { useEffect } from 'react';
import { detectUrlType, type EmbedData } from '../utils/urlDetector';
import { XEmbed , InstagramEmbed , PinterestEmbed , YouTubeEmbed, FacebookEmbed, TikTokEmbed, LinkedInEmbed } from 'react-social-media-embed';


interface UniversalEmbedProps {
  url: string;
  title?: string;
  onShare?: () => void;
  onDelete?: () => void;
}

export const UniversalEmbed = ({ 
  url, 
  title = "Shared Content",
  onShare,
  onDelete 
}: UniversalEmbedProps) => {
  const embedData: EmbedData = detectUrlType(url);

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      navigator.clipboard.writeText(url);
      alert('URL copied to clipboard!');
    }
  };

  const renderContent = () => {
    // Platforms that DON'T support embedding - use PreviewCard
    const nonEmbeddablePlatforms = ['netflix', 'prime', 'codeforces', 'codechef', 'leetcode', 'medium', 'stackoverflow', 'generic'];
    useEffect(() => {
      // Load Reddit script dynamically
      const script = document.createElement('script');
      script.src = '//embed.redditmedia.com/widgets/platform.js';
      script.async = true;
      script.charset = 'UTF-8'; // Use regular HTML attribute here
      
      // Remove existing script if present
      const existingScript = document.querySelector('script[src*="redditmedia.com"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);

      return () => {
        // Cleanup on unmount
        const scriptToRemove = document.querySelector('script[src*="redditmedia.com"]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }, []);
    
    // if (nonEmbeddablePlatforms.includes(embedData.platform!)) {
    //   return (
    //     <PreviewCard 
    //       url={embedData.url} 
    //       title={title}
    //       platform={embedData.platform!}
    //     />
    //   );
    // }
    console.log(embedData.platform);
    
    if (embedData.platform === 'twitter') {
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
          
            <XEmbed url={`${embedData.url}`} width={325}/>
          </div>
        </div>
      );
    }
    
    if (embedData.platform === 'instagram') {
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <InstagramEmbed url={`${embedData.url}`} width={325}  captioned/>
          </div>
        </div>
      );
    }
    if(embedData.platform === 'linkedin'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <LinkedInEmbed url={`${embedData.url}`} width={325} height={570} />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'youtube'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <YouTubeEmbed url={`${embedData.url}`} width={320} height={220} />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'facebook'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <FacebookEmbed url={`${embedData.url}`} width={325} />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'pinterest'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <PinterestEmbed url={`${embedData.url}`} width={325} />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'tiktok'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <TikTokEmbed url={`${embedData.url}`} width={325} />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'spotify'){
      return (
        <div className='flex justify-center' >
          <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar' >
            <iframe
              src={embedData.embedUrl}
              title={title}
              width={325}
              height={380}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      )
    }
    if(embedData.platform === 'reddit'){
      return (
      <div className='flex justify-center'>
        <div className='max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar'>
          <div>
            <blockquote className="reddit-card" data-card-created="1490648549">
              <a href={embedData.url}>Reddit Post Content</a> from <a href="http://www.reddit.com/r/worldnews">worldnews</a>
            </blockquote>
          </div>
        </div>
      </div>
    );
    }
    // // Platforms WITH embedUrl - use specific embed components
    // if (embedData.embedUrl) {
    //   switch (embedData.type) {
    //     case 'video':
    //       return (
    //         <VideoEmbed 
    //           embedUrl={embedData.embedUrl} 
    //           title={title}
    //           platform={embedData.platform!}
    //         />
    //       );
          
    //     case 'image':
    //       return (
    //         <ImageEmbed 
    //           url={embedData.embedUrl} 
    //           title={title}
    //           platform={embedData.platform!}
    //         />
    //       );
          
    //     case 'audio':
    //       return (
    //         <AudioEmbed 
    //           embedUrl={embedData.embedUrl}
    //           url={embedData.url}
    //           title={title}
    //           platform={embedData.platform!}
    //         />
    //       );
    //   }
    // }

    // // Fallback for unsupported content
    // return (
    //   <div className="h-32 flex items-center justify-center bg-gray-50 text-gray-500">
    //     <span>Unsupported content type</span>
    //   </div>
    // );
  };
  
  // return (
  //   <EmbedContainer 
  //     title={title} 
  //     platform={embedData.platform || 'unknown'}
  //     url={url}
  //     onShare={handleShare}
  //     onDelete={onDelete}
  //   >
  //     {renderContent()}
  //   </EmbedContainer>
  // );

  return renderContent();

};