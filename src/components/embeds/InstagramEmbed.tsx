interface InstagramEmbedProps {
  embedUrl: string;
  url: string;
  title: string;
}

export const InstagramEmbed = ({ embedUrl, url, title }: InstagramEmbedProps) => {
  return (
    <div className="aspect-square">
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
      />
    </div>
  );
};