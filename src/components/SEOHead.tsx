import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  alternateUrls?: { [key: string]: string };
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  pageType?: 'website' | 'article' | 'music' | 'video';
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Mr. Fixer Music - Free Decentralized Electronic Music for DJs & Creators",
  description = "Mr. Fixer Music - Free electronic music for DJs, radio curators, and content creators. Decentralized music initiative with no paywalls, no DRM, and global distribution. Download house, techno, ambient music for free.",
  keywords = "mr fixer music, free music, dj music, electronic music, decentralized music, creative commons, radio music, content creator music, free dj music, electronic dance music, house music, techno music, ambient music, free download music, royalty free music, dj sets, livestream music, youtube music, soundcloud music, free beats, producer music, remix music, club music, party music, festival music, mr fixer ai, free electronic music download, copyright free music, creative commons music, dj tools, music for content creators, background music, non commercial music",
  ogTitle,
  ogDescription,
  ogImage = "https://mrfixerai.com/og-image.jpg",
  canonicalUrl = "https://mrfixerai.com",
  structuredData,
  alternateUrls,
  publishedTime,
  modifiedTime,
  articleSection = "Music",
  articleTags = ["Electronic Music", "DJ Music", "Free Music", "Decentralized Music"],
  breadcrumbs,
  pageType = 'website'
}) => {
  React.useEffect(() => {
    // Update document title with proper formatting
    document.title = title;
    
    // Update meta tags with enhanced SEO
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Enhanced basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Mr. Fixer Music');
    updateMetaTag('creator', 'Mr. Fixer Music Collective');
    updateMetaTag('publisher', 'Mr. Fixer Music');
    updateMetaTag('copyright', '© 2025 Mr. Fixer Music - Creative Commons BY-NC 4.0');
    updateMetaTag('rights', 'Creative Commons BY-NC 4.0');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, max-video-preview:standard');
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-image-preview:large');
    updateMetaTag('slurp', 'index, follow');
    updateMetaTag('duckduckbot', 'index, follow');
    updateMetaTag('baiduspider', 'index, follow');
    updateMetaTag('yandexbot', 'index, follow');
    updateMetaTag('facebookbot', 'index, follow');
    updateMetaTag('twitterbot', 'index, follow');
    updateMetaTag('linkedinbot', 'index, follow');
    updateMetaTag('whatsapp', 'index, follow');
    updateMetaTag('telegrambot', 'index, follow');
    updateMetaTag('applebot', 'index, follow');
    
    // Language and geographic targeting
    updateMetaTag('language', 'en-US');
    updateMetaTag('content-language', 'en-US');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.placename', 'Global');
    updateMetaTag('geo.position', '40.7128;-74.0060'); // NYC coordinates as symbolic center
    updateMetaTag('ICBM', '40.7128, -74.0060');
    updateMetaTag('distribution', 'global');
    updateMetaTag('audience', 'all');
    updateMetaTag('rating', 'general');
    updateMetaTag('revisit-after', '3 days');
    updateMetaTag('expires', 'never');
    updateMetaTag('cache-control', 'public, max-age=31536000');
    
    // Content classification
    updateMetaTag('classification', 'Music, Entertainment, Creative Commons');
    updateMetaTag('category', 'Music');
    updateMetaTag('coverage', 'Worldwide');
    updateMetaTag('subject', 'Electronic Music, DJ Music, Free Music Distribution');
    updateMetaTag('abstract', 'Free decentralized electronic music platform for global creative communities');
    updateMetaTag('topic', 'Electronic Music Production and Distribution');
    updateMetaTag('summary', description);
    updateMetaTag('url', canonicalUrl);
    updateMetaTag('identifier-URL', canonicalUrl);
    updateMetaTag('pagename', title);
    updateMetaTag('page-topic', 'Electronic Music');
    updateMetaTag('page-type', pageType);
    
    // Enhanced Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:type', pageType === 'music' ? 'music.playlist' : pageType === 'video' ? 'video.other' : 'website', true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:secure_url', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:type', 'image/jpeg', true);
    updateMetaTag('og:image:alt', 'Mr. Fixer Music - Free Decentralized Electronic Music', true);
    updateMetaTag('og:site_name', 'Mr. Fixer Music', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:locale:alternate', 'en_GB', true);
    updateMetaTag('og:locale:alternate', 'en_CA', true);
    updateMetaTag('og:locale:alternate', 'en_AU', true);
    updateMetaTag('og:updated_time', modifiedTime || new Date().toISOString(), true);
    updateMetaTag('og:see_also', 'https://soundcloud.com/mrfixermusic', true);
    updateMetaTag('og:see_also', 'https://mrfixerai.com/gallery', true);
    updateMetaTag('og:see_also', 'https://mrfixerai.com/live', true);
    
    // Article specific Open Graph tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    updateMetaTag('article:author', 'Mr. Fixer Music', true);
    updateMetaTag('article:publisher', 'https://mrfixerai.com', true);
    updateMetaTag('article:section', articleSection, true);
    if (articleTags.length > 0) {
      // Clear existing article tags first
      const existingTags = document.querySelectorAll('meta[property="article:tag"]');
      existingTags.forEach(tag => tag.remove());
      
      articleTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }
    
    // Music specific Open Graph tags
    if (pageType === 'music') {
      updateMetaTag('music:creator', 'Mr. Fixer Music', true);
      updateMetaTag('music:album', 'Free Electronic Music Collection', true);
      updateMetaTag('music:song', 'Various Electronic Tracks', true);
      updateMetaTag('music:duration', '3600', true);
      updateMetaTag('music:musician', 'Mr. Fixer Music Collective', true);
      updateMetaTag('music:release_date', '2025-01-01', true);
    }
    
    // Enhanced Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', 'Mr. Fixer Music - Free Electronic Music');
    updateMetaTag('twitter:site', '@mrfixermusic');
    updateMetaTag('twitter:creator', '@mrfixermusic');
    updateMetaTag('twitter:domain', 'mrfixerai.com');
    updateMetaTag('twitter:url', canonicalUrl);
    updateMetaTag('twitter:label1', 'Genre');
    updateMetaTag('twitter:data1', 'Electronic Music');
    updateMetaTag('twitter:label2', 'License');
    updateMetaTag('twitter:data2', 'Creative Commons BY-NC 4.0');
    updateMetaTag('twitter:app:name:iphone', 'Mr. Fixer Music');
    updateMetaTag('twitter:app:name:ipad', 'Mr. Fixer Music');
    updateMetaTag('twitter:app:name:googleplay', 'Mr. Fixer Music');
    
    // Mobile and app meta tags
    updateMetaTag('theme-color', '#7c3aed');
    updateMetaTag('msapplication-TileColor', '#7c3aed');
    updateMetaTag('msapplication-TileImage', '/ms-icon-144x144.png');
    updateMetaTag('msapplication-config', '/browserconfig.xml');
    updateMetaTag('application-name', 'Mr. Fixer Music');
    updateMetaTag('apple-mobile-web-app-title', 'Mr. Fixer Music');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('HandheldFriendly', 'true');
    updateMetaTag('MobileOptimized', '320');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    
    // Additional SEO enhancements
    updateMetaTag('referrer', 'origin-when-cross-origin');
    updateMetaTag('format-detection', 'telephone=no, date=no, email=no, address=no');
    updateMetaTag('skype_toolbar', 'skype_toolbar_parser_compatible');
    updateMetaTag('IE', 'edge');
    updateMetaTag('google', 'notranslate');
    updateMetaTag('google-site-verification', 'your-google-verification-code'); // Replace with actual code
    updateMetaTag('msvalidate.01', 'your-bing-verification-code'); // Replace with actual code
    updateMetaTag('yandex-verification', 'your-yandex-verification-code'); // Replace with actual code
    updateMetaTag('p:domain_verify', 'your-pinterest-verification-code'); // Replace with actual code
    
    // Performance and caching hints
    updateMetaTag('Cache-Control', 'public, max-age=31536000');
    updateMetaTag('Pragma', 'cache');
    updateMetaTag('Expires', new Date(Date.now() + 31536000000).toUTCString());
    
    // Canonical URL with enhanced attributes
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    // Alternate URLs for different languages/regions
    if (alternateUrls) {
      Object.entries(alternateUrls).forEach(([hreflang, url]) => {
        let alternate = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;
        if (!alternate) {
          alternate = document.createElement('link');
          alternate.setAttribute('rel', 'alternate');
          alternate.setAttribute('hreflang', hreflang);
          document.head.appendChild(alternate);
        }
        alternate.setAttribute('href', url);
      });
    }
    
    // Enhanced preconnect and DNS prefetch
    const preconnectDomains = [
      'https://soundcloud.com',
      'https://www.youtube.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://connect.facebook.net',
      'https://platform.twitter.com',
      'https://www.linkedin.com',
      'https://api.pinterest.com'
    ];
    
    preconnectDomains.forEach(domain => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`) as HTMLLinkElement;
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.setAttribute('rel', 'preconnect');
        preconnect.setAttribute('href', domain);
        if (domain.includes('fonts') || domain.includes('gstatic')) {
          preconnect.setAttribute('crossorigin', '');
        }
        document.head.appendChild(preconnect);
      }
    });
    
    // Enhanced DNS prefetch for performance
    const dnsPrefetchDomains = [
      'https://i1.sndcdn.com',
      'https://api.soundcloud.com',
      'https://img.youtube.com',
      'https://i.ytimg.com',
      'https://www.gstatic.com',
      'https://ssl.gstatic.com',
      'https://ajax.googleapis.com',
      'https://apis.google.com',
      'https://graph.facebook.com',
      'https://syndication.twitter.com'
    ];
    
    dnsPrefetchDomains.forEach(domain => {
      let dnsPrefetch = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`) as HTMLLinkElement;
      if (!dnsPrefetch) {
        dnsPrefetch = document.createElement('link');
        dnsPrefetch.setAttribute('rel', 'dns-prefetch');
        dnsPrefetch.setAttribute('href', domain);
        document.head.appendChild(dnsPrefetch);
      }
    });
    
    // Preload critical resources
    const preloadResources = [
      { href: '/og-image.jpg', as: 'image', type: 'image/jpeg' },
      { href: '/logo.png', as: 'image', type: 'image/png' },
      { href: '/favicon.ico', as: 'image', type: 'image/x-icon' }
    ];
    
    preloadResources.forEach(resource => {
      let preload = document.querySelector(`link[rel="preload"][href="${resource.href}"]`) as HTMLLinkElement;
      if (!preload) {
        preload = document.createElement('link');
        preload.setAttribute('rel', 'preload');
        preload.setAttribute('href', resource.href);
        preload.setAttribute('as', resource.as);
        if (resource.type) {
          preload.setAttribute('type', resource.type);
        }
        document.head.appendChild(preload);
      }
    });
    
    // Enhanced Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-type="main"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-type', 'main');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
    // Breadcrumb structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
      
      let breadcrumbScript = document.querySelector('script[data-type="breadcrumb"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-type', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
    
    // Website structured data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Mr. Fixer Music",
      "alternateName": ["Mr. Fixer AI Music", "Fixer Music"],
      "url": "https://mrfixerai.com",
      "description": description,
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "copyrightYear": 2025,
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Mr. Fixer Music"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mr. Fixer Music",
        "url": "https://mrfixerai.com"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://mrfixerai.com/gallery?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "ListenAction",
          "target": "https://soundcloud.com/mrfixermusic"
        },
        {
          "@type": "WatchAction",
          "target": "https://mrfixerai.com/live"
        }
      ],
      "mainEntity": {
        "@type": "MusicGroup",
        "name": "Mr. Fixer Music"
      }
    };
    
    let websiteScript = document.querySelector('script[data-type="website"]');
    if (!websiteScript) {
      websiteScript = document.createElement('script');
      websiteScript.setAttribute('type', 'application/ld+json');
      websiteScript.setAttribute('data-type', 'website');
      document.head.appendChild(websiteScript);
    }
    websiteScript.textContent = JSON.stringify(websiteData);
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, structuredData, alternateUrls, publishedTime, modifiedTime, articleSection, articleTags, breadcrumbs, pageType]);

  return null;
};

export default SEOHead;