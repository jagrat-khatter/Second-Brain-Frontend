interface ImageEmbedProps {
  url: string;
  title: string;
  platform: string;
}

export const ImageEmbed = ({ url, title, platform }: ImageEmbedProps) => {
  return (
    <div className="aspect-video bg-gray-100 flex items-center justify-center">
      <img
        src={url}
        alt={title}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};