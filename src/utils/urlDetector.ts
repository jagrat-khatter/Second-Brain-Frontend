export type EmbedType = 'image' | 'video' | 'article' | 'audio';

export interface EmbedData {
  type: EmbedType;
  url: string;
  embedUrl?: string;
  platform?: string;
}

export const detectUrlType = (url : string): EmbedData =>{
    const urlLower = url.toLowerCase();

    // Youtube
    if(urlLower.includes('youtube.com') || urlLower.includes('youtu.be')){
        const videoId = extractYoutubeId(url);
        return {
            type : 'video' , 
            url  ,
            embedUrl : `https://www.youtube.com/embed/${videoId}` ,
            platform : 'youtube'
        }
    }
    // Twitter 
    if(urlLower.includes('twitter.com') || urlLower.includes('x.com')){
    const tweetId = extractTwitterId(url);
    return {
        type : 'article' ,
        url ,
        embedUrl: tweetId, // Store tweet ID in embedUrl for TwitterEmbed
        platform : 'twitter'
    }
}

        // Instagram
    if(urlLower.includes('instagram.com')){
        const postId = extractInstagramId(url);
        return {
            type: 'image',
            url,
            embedUrl: `https://www.instagram.com/p/${postId}/embed/`,
            platform: 'instagram'
        }
    }
    
    // Spotify
    if(urlLower.includes('spotify.com')){
        const spotifyData = extractSpotifyData(url);
        return {
            type: 'audio',
            url,
            embedUrl: `https://open.spotify.com/embed/${spotifyData.type}/${spotifyData.id}`,
            platform: 'spotify'
        }
    }
    // Netflix - NO embedding allowed
    if(urlLower.includes('netflix.com')){
        return {
            type: 'video',
            url,
            platform: 'netflix'
        }
    }
    // Amazon Prime - NO embedding allowed
    if(urlLower.includes('primevideo.com') || urlLower.includes('amazon.com/gp/video')){
        return {
            type: 'video',
            url,
            platform: 'prime'
        }
    }
    
    // CodeForces - NO embedding
    if(urlLower.includes('codeforces.com')){
        return {
            type: 'article',
            url,
            platform: 'codeforces'
        }
    }
    // CodeChef - NO embedding
    if(urlLower.includes('codechef.com')){
        return {
            type: 'article',
            url,
            platform: 'codechef'
        }
    }
     // LeetCode - NO embedding  
    if(urlLower.includes('leetcode.com')){
        return {
            type: 'article',
            url,
            platform: 'leetcode'
        }
    }
    
    // Medium - NO embedding
    if(urlLower.includes('medium.com')){
        return {
            type: 'article',
            url,
            platform: 'medium'
        }
    }
    // Stack Overflow - NO embedding
    if(urlLower.includes('stackoverflow.com')){
        return {
            type: 'article',
            url,
            platform: 'stackoverflow'
        }
    }
        // Image extensions
    if(/\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i.test(urlLower)){
        return {
            type: 'image',
            url,
            embedUrl: url,
            platform: 'image'
        }
    }
    
    // Audio extensions
    if(/\.(mp3|wav|ogg|m4a|aac)$/i.test(urlLower)){
        return {
            type: 'audio',
            url,
            embedUrl: url,
            platform: 'audio'
        }
    }
    
     // Video extensions
    if(/\.(mp4|webm|ogg|avi|mov)$/i.test(urlLower)){
        return {
            type: 'video',
            url,
            embedUrl: url,
            platform: 'video'
        }
    }
    // Default
    return {
        type: 'article',
        url,
        platform: 'generic'
    };
}
// Helper functions 
const extractYoutubeId = (url: string): string => {
    // Handle different YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
        /(?:youtu\.be\/)([^&\n?#]+)/,
        /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
        /(?:youtube\.com\/v\/)([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    
    console.error('Could not extract YouTube video ID from:', url);
    return '';
};

const extractInstagramId = (url: string): string => {
    const regex = /instagram\.com\/p\/([A-Za-z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
};

const extractSpotifyData = (url: string): { type: string; id: string } => {
    const regex = /spotify\.com\/(track|album|playlist|artist)\/([a-zA-Z0-9]+)/;
    const match = url.match(regex);
    return match ? { type: match[1], id: match[2] } : { type: 'track', id: '' };
};
const extractTwitterId = (url: string): string => {
    const patterns = [
        /(?:twitter\.com|x\.com)\/[^\/]+\/status\/(\d+)/,
        /(?:mobile\.twitter\.com)\/[^\/]+\/status\/(\d+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    
    console.error('Could not extract Twitter ID from:', url);
    return '';
};

// Platform information for preview cards
export const getPlatformInfo = (platform: string) => {
    const info = {
        youtube: { icon: '📺', color: 'bg-red-500', name: 'YouTube', description: 'Video on YouTube' },
        twitter: { icon: '🐦', color: 'bg-blue-500', name: 'Twitter', description: 'Tweet on Twitter/X' }, // Add this line
        instagram: { icon: '📷', color: 'bg-pink-500', name: 'Instagram', description: 'Post on Instagram' }, // Add this too
        spotify: { icon: '🎵', color: 'bg-green-500', name: 'Spotify', description: 'Music on Spotify' }, // Add this too
        netflix: { icon: '🎬', color: 'bg-red-500', name: 'Netflix', description: 'Stream on Netflix' },
        prime: { icon: '📺', color: 'bg-blue-700', name: 'Prime Video', description: 'Watch on Prime Video' },
        codeforces: { icon: '💻', color: 'bg-blue-600', name: 'CodeForces', description: 'Competitive Programming Problem' },
        codechef: { icon: '👨‍💻', color: 'bg-orange-500', name: 'CodeChef', description: 'Programming Contest Platform' },
        leetcode: { icon: '🧩', color: 'bg-yellow-500', name: 'LeetCode', description: 'Algorithm Practice Problem' },
        medium: { icon: '📝', color: 'bg-green-600', name: 'Medium', description: 'Article on Medium' },
        stackoverflow: { icon: '❓', color: 'bg-orange-600', name: 'Stack Overflow', description: 'Developer Q&A' },
        generic: { icon: '🌐', color: 'bg-gray-500', name: 'Web Content', description: 'External Content' }
    };
    return info[platform as keyof typeof info] || info.generic;
};