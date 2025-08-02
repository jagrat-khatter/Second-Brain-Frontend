import { ShareIcon } from "../icons/shareIcon"
import { TrashIcon } from "../icons/TrashIcon"
import { UniversalEmbed } from './UniversalEmbed';

interface CardProps {
  url: string;
  title?: string;
  onShare?: () => void;
  onDelete?: () => void;
}

export const Card = ({ 
  url, 
  title = "Shared Content", 
  onShare, 
  onDelete 
}: CardProps) => {
  
  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      navigator.clipboard.writeText(url);
      alert('URL copied to clipboard!');
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    } else {
      console.log('Delete clicked for:', url);
    }
  };

  return (
    <div className='p-4 bg-white rounded-md outline outline-gray-100 w-fit h-fit max-w-md'> 
      <div className='flex justify-between'>
        <div className='flex items-center text-gray-700'>
          <button onClick={handleShare} className="flex items-center hover:bg-gray-100 p-1 rounded">
            <ShareIcon size={'md'} strokeWidth={2.0}/>
            <div className='pl-2'>{title}</div>
          </button>
        </div>
        <div className='flex items-center text-grayicon-500'>
          <button 
            onClick={handleDelete}
            className="hover:bg-red-100 p-1 rounded transition-colors"
            title="Delete"
          >
            <TrashIcon size={'md'} strokeWidth={2.0}/>
          </button>
        </div>
      </div>
      
      <div className='w-full mt-2'>
        <UniversalEmbed 
          url={url}
          title={title}
          onShare={handleShare}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}