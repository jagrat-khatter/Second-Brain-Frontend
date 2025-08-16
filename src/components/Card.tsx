import axios from "axios";
import { ShareIcon } from "../icons/shareIcon"
import { TrashIcon } from "../icons/TrashIcon"
import  UniversalEmbed  from './UniversalEmbed';
import { BACKEND_URL } from "../config";

interface CardProps {
  url: string;
  title?: string;
  onShare?: () => void;
  onDelete?: string ;
  id?: number;
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
  
const handleDelete = async () => {
    if (onDelete) {
      const token: string = 'Bearer ' + localStorage.getItem('brainly_token');
      const del = await axios.delete(BACKEND_URL + 'delete', {
            headers: {
                Authorization: token,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
            data : {
              contentId : onDelete
            } ,
            params: {
                _t: Date.now() // Cache buster
            }
        } )
         window.location.reload();
        console.log(del.data)
        
      console.log("Content Deleted");
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
          </button>
          <div className='pl-2'>{title}</div>
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
      
      <div className='w-fit mt-2'>
        <UniversalEmbed 
        
          url={url}
          title={title}
          onShare={handleShare}
        />
      </div>
    </div>
  )
}