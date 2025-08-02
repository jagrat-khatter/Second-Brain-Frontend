import { getPlatformInfo } from '../../utils/urlDetector';

interface PreviewCardProps {
  url: string;
  title: string;
  platform: string;
  description?: string;
}

export const PreviewCard = ({url , title , platform  ,description} : PreviewCardProps)=>{
    const platformInfo = getPlatformInfo(platform);
    const displayDescription = description || platformInfo.description;

    return (
        <div className="h-48 bg-white border-2 border-dashed border-gray-300 rounded-lg 
        p-6 flex flex-col justify-center items-center text-center hover-border-grqy-400 hover:shadow-md
        transition-all duration-200">
                <div className={`${platformInfo.color} text-white px-3 py-1 rounded-full text-xs font-medium mb-3 flex items-center gap-1`}>
                    <span>{platformInfo.icon}</span>
                    <span>{platformInfo.name}</span>
              </div>
        
            {/* Content */}
            <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 max-w-full">
                {title}
            </h4>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {displayDescription}
            </p>
            {/* Call to Action */}
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
                    <span>Open in {platformInfo.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
            </a>
            {/* URL Preview */}
            <div className="mt-3 text-xs text-gray-500 truncate max-w-full">
                {new URL(url).hostname}
            </div>
            
      
        </div>
    )
}