interface VideoEmbedProps {
  embedUrl: string;
  title: string;
  platform: string;
}

export const VideoEmbed = ({ embedUrl, title, platform }: VideoEmbedProps) => {
  return (
    <div className="aspect-video bg-black">
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};