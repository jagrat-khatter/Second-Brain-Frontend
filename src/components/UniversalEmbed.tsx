import React, { useEffect } from "react";

interface UniversalEmbedProps {
  url: string;
  title?: string;
  onShare?: () => void;
  onDelete?: () => void;
}

function loadScript(src: string, id: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById(id)) return resolve();
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

export default function UniversalEmbed({
  url,
  title = "Embedded Content",
}: UniversalEmbedProps) {
  // Detect platform
  const platform = (() => {
    if (/tiktok\.com/.test(url)) return "tiktok";
    if (/youtu\.be|youtube\.com/.test(url)) return "youtube";
    if (/instagram\.com/.test(url)) return "instagram";
    if (/linkedin\.com/.test(url)) return "linkedin";
    if (/reddit\.com/.test(url)) return "reddit";
    if (/pinterest\.com/.test(url)) return "pinterest";
    if (/twitter\.com|x\.com/.test(url)) return "twitter";
    if (/facebook\.com/.test(url)) return "facebook";
    if (/spotify\.com/.test(url)) return "spotify";
    return "generic";
  })();

  // Load scripts for specific platforms
  useEffect(() => {
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 

    if (platform === "instagram") {
      loadScript("https://www.instagram.com/embed.js", "instagram-embed-script")
        .then(() => {
          setTimeout(() => {
            try {
              // @ts-ignore
              window.instgrm?.Embeds?.process();
            } catch {}
          }, 100);
        })
        .catch(() => {});
    }
    if (platform === "reddit") {
      loadScript("//embed.redditmedia.com/widgets/platform.js", "reddit-embed-script").catch(() => {});
    }
    if (platform === "pinterest") {
      loadScript("https://assets.pinterest.com/js/pinit.js", "pinterest-embed-script").catch(() => {});
    }
    if (platform === "twitter") {
      loadScript("https://platform.twitter.com/widgets.js", "twitter-embed-script")
        .then(() => {
          setTimeout(() => {
            try {
              // @ts-ignore
              window.twttr?.widgets?.load();
            } catch {}
          }, 0);
        })
        .catch(() => {});
    }
    if (platform === "facebook") {
      loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0", "facebook-jssdk")
        .then(() => {
          setTimeout(() => {
            try {
              // @ts-ignore
              window.FB?.XFBML?.parse();
            } catch {}
          }, 0);
        })
        .catch(() => {});
    }
  }, [platform, url]);

  // Wrapper style
  const box = (children: React.ReactNode) => (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "8px",
        marginTop: "8px",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );

  // --- Cleaned Instagram embed ---
  if (platform === "instagram") {
    const cleanUrl = url.endsWith("/") ? url : url + "/";
    
    return box(
      <iframe width="320" height="440" src="https://www.instagram.com/p/C8P4EM2Snzh/embed/" ></iframe>
    );
  }

  // --- Fixed LinkedIn embed ---
  if (platform === "linkedin") {
    return <iframe src={url} height="570" width="325" title="Embedded post"></iframe>;
  }

  // --- New! Spotify embed ---
  if (platform === "spotify") {
    let embedUrl = url;
    // If not already an embed URL, convert it
    if (!/embed/.test(url)) {
      // Convert open.spotify.com/track/xxxx -> open.spotify.com/embed/track/xxxx
      embedUrl = url.replace(
        /open\.spotify\.com\/(track|album|playlist|show|episode)\/([a-zA-Z0-9]+)/,
        "open.spotify.com/embed/$1/$2"
      );
    }
    return box(
      <iframe
        src={embedUrl}
        width="100%"
        height="152"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title={title}
      />
    );
  }

  // --- untouched: other platform renders ---
  if (platform === "tiktok") {
    const videoId = url.split("/video/")[1]?.split("?")[0];
    return box(
      <blockquote className="tiktok-embed" cite={url} data-video-id={videoId}>
        <section>
          <a href={url}>{title || "View on TikTok"}</a>
        </section>
      </blockquote>
    );
  }

  if (platform === "youtube") {
    const src = url.includes("embed/") ? url : url.replace("watch?v=", "embed/");
    return box(
      <iframe
        title={title}
        src={src}
        width="100%"
        height="315"
        frameBorder={0}
        allowFullScreen
      />
    );
  }

  if (platform === "reddit") {
    return box(
      <blockquote className="reddit-card">
        <a href={url}>{title || "View on Reddit"}</a>
      </blockquote>
    );
  }

  if (platform === "pinterest") {
    return box(
      <a data-pin-do="embedPin" href={url}>
        {title || "View on Pinterest"}
      </a>
    );
  }

  if (platform === "twitter") {
    return box(
      <blockquote className="twitter-tweet">
      <a href="https://twitter.com/username/status/807811447862468608"></a> 
    </blockquote>
    );
  }

  if (platform === "facebook") {
    return box(
      <div className="fb-post" data-href={url} data-width="500"></div>
    );
  }

  // Generic iframe fallback
  return box(
    <iframe
      title={title}
      src={url}
      width="100%"
      height="400"
      frameBorder={0}
      allowFullScreen
    />
  );
}