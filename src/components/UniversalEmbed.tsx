import React, { useEffect } from "react";
import { detectUrlType, type EmbedData } from "../utils/urlDetector";

interface UniversalEmbedProps {
  url: string;
  title?: string;
  onShare?: () => void;
  onDelete?: () => void;
}

const loadScript = (src: string, id?: string) => {
  return new Promise<void>((resolve, reject) => {
    if (id && document.getElementById(id)) {
      // already loaded
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    if (id) s.id = id;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.head.appendChild(s);
  });
};

export const UniversalEmbed: React.FC<UniversalEmbedProps> = ({
  url,
  title = "Shared Content",
}) => {
  const embedData: EmbedData = detectUrlType(url);

  useEffect(() => {
    // Load platform scripts only when needed
    if (embedData.platform === "reddit") {
      loadScript("//embed.redditmedia.com/widgets/platform.js", "reddit-embed-script").catch(() => {});
    }
    if (embedData.platform === "instagram") {
      // instagram embed script
      loadScript("https://www.instagram.com/embed.js", "instagram-embed-script")
        .then(() => {
          // Instagram provides global instgrm object
          try {
            // @ts-ignore
            if (window.instgrm && typeof window.instgrm.Embeds?.process === "function") {
              // @ts-ignore
              window.instgrm.Embeds.process();
            }
          } catch {}
        })
        .catch(() => {});
    }
    if (embedData.platform === "pinterest") {
      loadScript("https://assets.pinterest.com/js/pinit.js", "pinterest-embed-script").catch(() => {});
    }
    // We intentionally do not load Twitter widgets here because we use twitframe (iframe),
    // which avoids extra scripts and possible conflicts.
  }, [embedData.platform]);

  // Simple layout wrapper
  const box = (children: React.ReactNode) => (
    <div className="flex justify-center">
      <div className="max-h-96 overflow-y-auto w-80 border border-gray-200 rounded-lg bg-white custom-scrollbar p-2">
        {children}
      </div>
    </div>
  );

  // Platform-specific rendering
  if (embedData.platform === "twitter") {
    // twitframe is a robust iframe wrapper for Tweets
    const twitframe = `https://twitframe.com/show?url=${encodeURIComponent(url)}`;
    return box(
      <iframe
        title={title}
        src={twitframe}
        width={325}
        height={250}
        frameBorder={0}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    );
  }

  if (embedData.platform === "instagram") {
    // Instagram expects a blockquote + embed script
    return box(
      <>
        <blockquote className="instagram-media" data-instgrm-permalink={embedData.url} style={{ margin: 0 }}>
          <a href={embedData.url}>{embedData.url}</a>
        </blockquote>
      </>
    );
  }

  if (embedData.platform === "linkedin") {
    // LinkedIn embeds usually provide an embeddable URL already (your example was an embed link).
    // Use an iframe — LinkedIn allows embedding via that embed URL.
    const src = embedData.url;
    return box(
      <iframe
        title={title}
        src={src}
        width={325}
        height={570}
        frameBorder={0}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    );
  }

  if (embedData.platform === "youtube") {
    // build the youtube embed src
    // try to extract video id from the URL (detectUrlType already logs if extraction fails)
    const videoIdMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/)([^&\n?#]+)/);
    const id = (videoIdMatch && videoIdMatch[1]) || "";
    const src = id ? `https://www.youtube.com/embed/${id}` : embedData.url;
    return box(
      <iframe
        title={title}
        src={src}
        width={320}
        height={220}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (embedData.platform === "facebook") {
    // Facebook embedding often requires their SDK; fallback to iframe if possible
    // If user passes a post embed URL, we can use iframe. Otherwise, fallback to link.
    return box(
      <iframe
        title={title}
        src={embedData.url}
        width={325}
        height={400}
        frameBorder={0}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    );
  }

  if (embedData.platform === "pinterest") {
    // Pinterest requires pinit script which we load in useEffect
    // Render the standard pin anchor
    return box(
      <a data-pin-do="embedPin" href={embedData.url} >
        <img src={embedData.url} alt={title} />
      </a>
    );
  }

  if (embedData.platform === "tiktok") {
    // TikTok embedding is fragile across providers; fallback to a direct link or simple iframe
    // Fallback to link preview (user can open the TikTok page)
    return box(
      <div className="p-2">
        <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Open TikTok ▶
        </a>
      </div>
    );
  }

  if (embedData.platform === "spotify") {
    // spotify embedUrl is provided by your detector
    return box(
      <iframe
        src={embedData.embedUrl}
        title={title}
        width={325}
        height={380}
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    );
  }

  if (embedData.platform === "reddit") {
    // reddit works with a blockquote + reddit script (we loaded it above)
    return box(
      <div>
        <blockquote className="reddit-card">
          <a href={embedData.url}>Reddit post</a>
        </blockquote>
      </div>
    );
  }

  // generic fallback (image / audio / video urls will be handled by detectUrlType earlier)
  if (embedData.type === "image" && embedData.embedUrl) {
    return box(<img src={embedData.embedUrl} alt={title} className="max-w-full rounded" />);
  }
  if (embedData.type === "video" && embedData.embedUrl) {
    return box(
      <video controls width={320} src={embedData.embedUrl}>
        Your browser does not support the video tag.
      </video>
    );
  }
  if (embedData.type === "audio" && embedData.embedUrl) {
    return box(<audio controls src={embedData.embedUrl} />);
  }

  // final fallback: simple clickable preview
  return box(
    <div className="p-2">
      <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline break-all">
        {url}
      </a>
    </div>
  );
};

export default UniversalEmbed;
