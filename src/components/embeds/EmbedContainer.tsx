// filepath: c:\Users\jagua\Desktop\Projects\brainly-frontend\src\components\embeds\EmbedContainer.tsx
import {type ReactNode } from 'react';
import { ShareIcon } from '../../icons/shareIcon';
import { TrashIcon } from '../../icons/TrashIcon';
import { getPlatformInfo } from '../../utils/urlDetector';

interface EmbedContainerProps {
  children: ReactNode;
  title: string;
  platform: string;
  url?: string;
  onShare?: () => void;
  onDelete?: () => void;
}

export const EmbedContainer = ({ 
  children, 
  title, 
  platform, 
  url,
  onShare,
  onDelete 
}: EmbedContainerProps) => {
  const platformInfo = getPlatformInfo(platform);

  return (
    <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center space-x-2">
          <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${platformInfo.color}`}>
            {platformInfo.icon} {platformInfo.name}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <button 
            onClick={onShare}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            title="Share"
          >
            <ShareIcon size="sm" />
          </button>
          <button 
            onClick={onDelete}
            className="p-1 hover:bg-red-100 rounded-full transition-colors text-red-500"
            title="Delete"
          >
            <TrashIcon size="sm" />
          </button> */}
        </div>
      </div>
      
      {/* Title */}
      {title && (
        <div className="px-3 py-2 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-800 truncate">{title}</h3>
        </div>
      )}
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
      
      {/* Footer with URL */}
      {url && (
        <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 truncate block"
          >
            {url}
          </a>
        </div>
      )}
    </div>
  );
};