interface AudioEmbedProps {
  embedUrl?: string;
  url: string;
  title: string;
  platform: string;
}

export const AudioEmbed = ({ embedUrl, url, title, platform }: AudioEmbedProps) => {
  if (embedUrl && platform === 'spotify') {
    return (
      <div className="h-32 bg-gray-50">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    );
  }
// For direct audio files
  return (
    <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
      <audio controls className="w-full max-w-sm">
        <source src={url} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};