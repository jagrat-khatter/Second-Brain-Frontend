import { detectUrlType,type EmbedData } from '../utils/urlDetector';
import { EmbedContainer } from './embeds/EmbedContainer';
import { VideoEmbed } from './embeds/VideoEmbed';
import { ImageEmbed } from './embeds/ImageEmbed';
import { AudioEmbed } from './embeds/AudioEmbed';
import { InstagramEmbed } from './embeds/InstagramEmbed';
import { TwitterEmbed } from './embeds/TwitterEmbed';
import  {PreviewCard}  from './embeds/PreviewCard';

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
    
    if (nonEmbeddablePlatforms.includes(embedData.platform!)) {
      return (
        <PreviewCard 
          url={embedData.url} 
          title={title}
          platform={embedData.platform!}
        />
      );
    }

    // Special case: Twitter (uses script loading, not iframe)
    // In your renderContent function, update the Twitter case:
    // Special case: Twitter (uses script loading, not iframe)
        if (embedData.platform === 'twitter') {
        return (
            <TwitterEmbed 
            url={embedData.url} 
            title={title}
            tweetId={embedData.embedUrl} // Pass the tweet ID
            />
        );
        }
    // Platforms WITH embedUrl - use specific embed components
    if (embedData.embedUrl) {
      switch (embedData.type) {
        case 'video':
          return (
            <VideoEmbed 
              embedUrl={embedData.embedUrl} 
              title={title}
              platform={embedData.platform!}
            />
          );
          
        case 'image':
          if (embedData.platform === 'instagram') {
            return (
              <InstagramEmbed 
                embedUrl={embedData.embedUrl}
                url={embedData.url}
                title={title} 
              />
            );
          }
          return (
            <ImageEmbed 
              url={embedData.embedUrl} 
              title={title}
              platform={embedData.platform!}
            />
          );
          
        case 'audio':
          return (
            <AudioEmbed 
              embedUrl={embedData.embedUrl}
              url={embedData.url}
              title={title}
              platform={embedData.platform!}
            />
          );
      }
    }

    // Fallback for unsupported content
    return (
      <div className="h-32 flex items-center justify-center bg-gray-50 text-gray-500">
        <span>Unsupported content type</span>
      </div>
    );
  };

  return (
    <EmbedContainer 
      title={title} 
      platform={embedData.platform || 'unknown'}
      url={url}
      onShare={handleShare}
      onDelete={onDelete}
    >
      {renderContent()}
    </EmbedContainer>
  );
};