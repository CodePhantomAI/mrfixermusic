import React, { useState } from 'react';
import { Music, Download, ExternalLink, Globe, Headphones, Volume2, Calendar, Users, Play, Pause, Clock, Tag, Star, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';

interface Collection {
  id: string;
  title: string;
  description: string;
  soundcloudUrl: string;
  featured?: boolean;
  volume?: number;
  releaseDate?: string;
  tags?: string[];
  specialNote?: string;
}

const DownloadsPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const collections: Collection[] = [
    {
      id: 'vol-50',
      title: 'Fixer Daily Drops, Vol. 50 – Milestone Frequencies',
      description: 'A milestone celebration reaching Volume 50! Special frequencies marking this incredible journey of free electronic music distribution.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-50-milestone-frequencies',
      featured: true,
      volume: 50,
      releaseDate: '2025-01-27',
      tags: ['milestone', 'celebration', 'special edition', 'frequencies'],
      specialNote: '🎉 Milestone Edition - Volume 50!'
    },
    {
      id: 'private-vault',
      title: '🧬 Fixer Private Vault',
      description: 'Behind every clean drop, there\'s a messy drawer. Welcome to mine. After 500+ original tracks released into the world, I figured… maybe it\'s time to open the vault. Not the polished, club-ready, perfectly-EQ\'d stuff – but the raw sketches, the dusty WAVs, the synth lines I looped at 3am and thought: "nah… too weird." These are the unreleased tracks from my private archive. Written by me. Touched by AI. Full of mistakes, feelings, late-night plugins and brave tempos.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-private-vault',
      featured: true,
      releaseDate: '2025-01-26',
      tags: ['vault', 'unreleased', 'experimental', 'raw', 'private archive'],
      specialNote: '🗝️ Private Vault - Raw & Unreleased'
    },
    {
      id: 'vol-49',
      title: 'Fixer Daily Drops, Vol. 49 – Wildlife Trippy',
      description: 'An exploration into the wild side of electronic music. Trippy soundscapes inspired by nature and wildlife, creating an immersive audio journey.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-49-wildlife-trippy',
      volume: 49,
      releaseDate: '2025-01-26',
      tags: ['wildlife', 'trippy', 'nature', 'immersive', 'soundscape']
    },
    {
      id: 'vol-48',
      title: 'Fixer Daily Drops, Vol. 48 – Global DJ Guests',
      description: 'Welcome to Fixer Daily Drops, Vol. 48 – a rooftop takeover by international DJs. Each track is a tribute to global rhythm, from Tokyo to Rio, from Cairo to London. Mr. Fixer Music becomes a host – blending borders through frequencies, not flags.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests',
      volume: 48,
      releaseDate: '2025-01-25',
      tags: ['global', 'dj guests', 'international', 'collaboration', 'rooftop'],
      specialNote: '🎧 No borders. Just sound. 🌍 10 countries, 10 guests, 1 Fixer vision.'
    },
    {
      id: 'vol-47',
      title: 'Fixer Daily Drops, Vol. 47 – Fixer Transcendence Part 2',
      description: 'The second part of the transcendence series, exploring deeper electronic soundscapes and elevated consciousness through music.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-47-fixer-transcendence-part-2',
      volume: 47,
      releaseDate: '2025-01-22',
      tags: ['transcendence', 'consciousness', 'deep', 'spiritual', 'part 2']
    },
    {
      id: 'vol-46',
      title: 'Fixer Daily Drops, Vol. 46 – Fixer in Australia',
      description: '🇦🇺 Australian-inspired electronic journey capturing the essence of the continent\'s electronic music scene and natural landscapes.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-46-fixer-in-australia',
      volume: 46,
      releaseDate: '2025-01-20',
      tags: ['australia', 'continental', 'landscape', 'journey', 'down under']
    },
    {
      id: 'vol-45',
      title: 'Fixer Daily Drops, Vol. 45 – Alien Signals',
      description: 'Extraterrestrial electronic communications from beyond. Mysterious signals and otherworldly frequencies that transport listeners to distant galaxies.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-45-alien-signals',
      volume: 45,
      releaseDate: '2025-01-18',
      tags: ['alien', 'signals', 'extraterrestrial', 'space', 'mysterious']
    },
    {
      id: 'vol-44',
      title: 'Fixer Daily Drops, Vol. 44 – Fixer Transcendence',
      description: 'The original transcendence journey. Electronic music designed to elevate consciousness and transport listeners to higher states of being.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-44-fixer-transcendence',
      volume: 44,
      releaseDate: '2025-01-15',
      tags: ['transcendence', 'consciousness', 'elevation', 'spiritual', 'original']
    },
    {
      id: 'vol-43',
      title: 'Fixer Daily Drops, Vol. 43 – NoFilter',
      description: 'Raw, unfiltered electronic music without compromise. Pure sound in its most authentic form, no processing, no restrictions.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-43-nofilter',
      volume: 43,
      releaseDate: '2025-01-12',
      tags: ['nofilter', 'raw', 'unfiltered', 'authentic', 'pure']
    },
    {
      id: 'vol-42',
      title: 'Fixer Daily Drops, Vol. 42 – Independence Day',
      description: 'A celebration of musical independence and creative freedom. Electronic anthems for liberation from corporate control and artistic constraints.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-42-independence-day',
      volume: 42,
      releaseDate: '2025-01-10',
      tags: ['independence', 'freedom', 'liberation', 'celebration', 'anthems']
    },
    {
      id: 'vol-41',
      title: 'Fixer Daily Drops, Vol. 41 – Fixers Dreams',
      description: 'Dream-like electronic soundscapes that blur the line between reality and imagination. Ambient journeys through the subconscious mind.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-41-fixers-dreams',
      volume: 41,
      releaseDate: '2025-01-08',
      tags: ['dreams', 'ambient', 'subconscious', 'imagination', 'soundscapes']
    }
  ];

  const togglePlay = (collectionId: string) => {
    setCurrentlyPlaying(currentlyPlaying === collectionId ? null : collectionId);
  };

  const downloadsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Downloads - Mr. Fixer Music | Free Electronic Music Downloads",
    "description": "Direct download links to all Mr. Fixer Music collections on SoundCloud. Free electronic music including Fixer Daily Drops series and complete albums.",
    "url": "https://mrfixerai.com/downloads",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Music Download Collections",
      "numberOfItems": collections.length,
      "itemListElement": collections.map((collection, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "MusicPlaylist",
          "name": collection.title,
          "description": collection.description,
          "url": collection.soundcloudUrl,
          "genre": "Electronic Music"
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mrfixerai.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Downloads",
          "item": "https://mrfixerai.com/downloads"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Downloads - Mr. Fixer Music | Free Electronic Music Downloads"
        description="Direct download links to all Mr. Fixer Music collections on SoundCloud. Free electronic music including Fixer Daily Drops series, Private Vault unreleased tracks, and complete albums. No paywalls, no DRM."
        keywords="mr fixer music downloads, free music downloads, fixer daily drops, fixer private vault, unreleased tracks, electronic music download, soundcloud downloads, free dj music, royalty free music, experimental music"
        canonicalUrl="https://mrfixerai.com/downloads"
        structuredData={downloadsStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="music"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Downloads", url: "https://mrfixerai.com/downloads" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-6 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Download className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Music className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent text-center">
                Downloads
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center">
                Direct Links to Free Music Collections
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                Access all Mr. Fixer Music collections with direct download links. 
                No paywalls, no sign-ups, just pure electronic music for your creative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Browse all Mr. Fixer Music albums on SoundCloud"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  All Albums
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-green-500 hover:bg-green-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Access */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-center">Quick Access</h2>
              <p className="text-xl text-gray-400 text-center">Jump directly to your favorite collections</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-8 rounded-2xl border border-orange-500/20 text-center">
                <Globe className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4 text-center">Complete Collection</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Access the entire Mr. Fixer Music catalog with all albums, sets, and individual tracks.
                </p>
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Browse All Albums
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Collections */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-center">Latest Collections</h2>
              <p className="text-xl text-gray-400 text-center">Fresh releases from the Fixer Daily Drops series</p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 overflow-hidden group relative ${
                      collection.featured 
                        ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    {collection.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          FEATURED
                        </span>
                      </div>
                    )}
                    
                    {/* Collection Visualization */}
                    <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => togglePlay(collection.id)}
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:scale-110"
                          aria-label={currentlyPlaying === collection.id ? 'Pause collection' : 'Play collection'}
                        >
                          {currentlyPlaying === collection.id ? (
                            <Pause className="w-10 h-10 text-white" />
                          ) : (
                            <Play className="w-10 h-10 text-white ml-1" />
                          )}
                        </button>
                      </div>
                      {collection.volume && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Vol. {collection.volume}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Collection Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors line-clamp-2 text-center">
                        {collection.title}
                      </h3>
                      
                      {collection.specialNote && (
                        <div className="mb-4 p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30">
                          <p className="text-yellow-300 text-sm font-medium text-center">
                            {collection.specialNote}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-4 text-center">
                        {collection.description}
                      </p>

                      {/* Tags */}
                      {collection.tags && (
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                          {collection.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Release Date */}
                      {collection.releaseDate && (
                        <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(collection.releaseDate).toLocaleDateString()}
                        </div>
                      )}

                      {/* Download Button */}
                      <div className="space-y-3">
                        <a
                          href={collection.soundcloudUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center group"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        
                        <div className="text-center">
                          <span className="text-xs text-gray-500">
                            Free • No Sign-up Required • High Quality
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Instructions */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-center">How to Download</h2>
                <p className="text-xl text-gray-400 text-center">Simple steps to get your free music</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl border border-blue-500/20 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Click Download Link</h3>
                  <p className="text-gray-400 text-center">
                    Click any download button to go directly to the SoundCloud collection page.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/20 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Stream or Download</h3>
                  <p className="text-gray-400 text-center">
                    Listen online instantly or look for download options on individual tracks.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-8 rounded-2xl border border-green-500/20 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Use Freely</h3>
                  <p className="text-gray-400 text-center">
                    Use in your DJ sets, videos, or creative projects under our free license.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-yellow-800/20 to-orange-800/20 p-6 rounded-2xl border border-yellow-500/20">
                  <Headphones className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center">💡 Pro Tip</h3>
                  <p className="text-gray-300 text-center">
                    Follow Mr. Fixer Music on SoundCloud to get notified of new releases and exclusive content!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Volume2 className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">Start Downloading Today</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8 text-center">
                  Join thousands of DJs, content creators, and music lovers who trust Mr. Fixer Music 
                  for their creative projects. All downloads are completely free and ready to use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://soundcloud.com/mrfixermusic/albums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Browse All Collections
                  </a>
                  <a 
                    href="/terms"
                    className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Usage Rights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Free Music Downloads</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-center">
                Direct access to all Mr. Fixer Music collections. No paywalls, no DRM, no gatekeeping. 
                Just pure electronic music for the global creative community.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 Mr. Fixer Music - Downloads Page | 
                  <span className="text-green-400"> Free Downloads • Direct Links • Global Access</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DownloadsPage;