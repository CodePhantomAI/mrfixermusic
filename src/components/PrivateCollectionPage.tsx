import React from 'react';
import { Music, Lock, Key, Headphones, Volume2, Download, ExternalLink, Zap, Globe, Users, Play, Heart, Star } from 'lucide-react';
import SEOHead from './SEOHead';

const PrivateCollectionPage = () => {
  const privateCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    "name": "🧬 Fixer Private Vault - Mr. Fixer Music",
    "description": "Behind every clean drop, there's a messy drawer. Welcome to mine. Unreleased tracks from Mr. Fixer Music's private archive - raw sketches, dusty WAVs, and experimental sounds.",
    "url": "https://mrfixerai.com/private-collection",
    "creator": {
      "@type": "MusicGroup",
      "name": "Mr. Fixer Music",
      "url": "https://mrfixerai.com"
    },
    "genre": ["Experimental Electronic", "Unreleased Music", "Raw Demos", "Ambient Techno", "Vault Tracks"],
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by-nc/4.0/",
    "audience": [
      {
        "@type": "Audience",
        "audienceType": "Music Producers",
        "name": "Electronic Music Producers and Experimenters"
      },
      {
        "@type": "Audience",
        "audienceType": "Music Collectors",
        "name": "Collectors of Rare and Unreleased Music"
      }
    ],
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
          "name": "Private Collection",
          "item": "https://mrfixerai.com/private-collection"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="🧬 Fixer Private Vault - Mr. Fixer Music | Unreleased Archive"
        description="Behind every clean drop, there's a messy drawer. Welcome to the Fixer Private Vault - unreleased tracks from Mr. Fixer Music's private archive. Raw sketches, experimental sounds, and honest music."
        keywords="fixer private vault, unreleased music, mr fixer music archive, experimental electronic, raw demos, vault tracks, private collection, unreleased beats, demo drops, analog synth, ambient techno"
        canonicalUrl="https://mrfixerai.com/private-collection"
        structuredData={privateCollectionStructuredData}
        publishedTime="2025-01-26T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="music"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Private Collection", url: "https://mrfixerai.com/private-collection" }
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
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Lock className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Key className="w-3 h-3 text-black" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent text-center">
                🧬 Fixer Private Vault
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center">
                Unreleased Archive Collection
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                Behind every clean drop, there's a messy drawer. Welcome to mine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic/sets/fixer-private-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Fixer Private Vault on SoundCloud"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Key className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Open Vault
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Vault Story */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Lock className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <div className="space-y-6 text-lg text-gray-300 text-center">
                  <p>
                    After 500+ original tracks released into the world,<br />
                    I figured… maybe it's time to open the vault.
                  </p>
                  <p>
                    Not the polished, club-ready, perfectly-EQ'd stuff –<br />
                    but the raw sketches, the dusty WAVs,<br />
                    the synth lines I looped at 3am and thought:<br />
                    <em>"nah… too weird."</em>
                  </p>
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-6 rounded-xl border border-yellow-500/30">
                    <p className="text-yellow-300 font-semibold text-center">
                      🎹 These are the unreleased tracks from my private archive.<br />
                      🧠 Written by me. Touched by AI.<br />
                      🎛️ Full of mistakes, feelings, late-night plugins and brave tempos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SoundCloud Player */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-center">🎧 Listen to the Vault</h2>
                <p className="text-xl text-gray-400 text-center">Stream the complete unreleased collection</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                  <iframe 
                    width="100%" 
                    height="450" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2049339174&color=%23fd722b&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    className="w-full h-full"
                    title="Fixer Private Vault - SoundCloud Player"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 text-center">
                    Powered by SoundCloud • Free to stream and download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Hear */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-center">🗝️ What You'll Hear</h2>
                <p className="text-xl text-gray-400 text-center">Unfinished but honest tracks</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/20">
                  <Headphones className="w-12 h-12 text-purple-400 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4 text-center">Raw Experiments</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center text-center">
                      <Zap className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      Genre-fluid experiments
                    </li>
                    <li className="flex items-center text-center">
                      <Volume2 className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      Emotional synths, lo-fi kicks
                    </li>
                    <li className="flex items-center text-center">
                      <Music className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      One-take vocals
                    </li>
                    <li className="flex items-center text-center">
                      <Star className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      Ideas that never fit the mold
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-800/30 to-orange-800/30 p-8 rounded-2xl border border-pink-500/20">
                  <Key className="w-12 h-12 text-pink-400 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-4 text-center">Producer Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'vault track', 'unreleased beat', 'demo drop', 'analog synth',
                      'experimental trance', 'ambient techno', 'private project',
                      'raw stem energy', 'pre-master gems'
                    ].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-pink-600/30 rounded-full text-xs text-pink-300 border border-pink-500/30"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vault Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Heart className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">The Vault Philosophy</h2>
                <div className="space-y-6 text-lg text-gray-300">
                  <p className="text-center">
                    One track a day. No perfection. No shame.
                  </p>
                  <p className="text-center">
                    Just what I used to hide – now out in the open.
                  </p>
                  <p className="text-xl font-semibold text-purple-300 text-center">
                    Fixer Private Vault – welcome to the mess beneath the magic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-12 rounded-3xl backdrop-blur-sm border border-orange-500/20">
                <Globe className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">Explore More</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8 text-center">
                  The vault is just one part of the Mr. Fixer Music universe. 
                  Discover more collections, DJ collaborations, and the complete catalog.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/downloads"
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    All Downloads
                  </a>
                  <a 
                    href="/gallery"
                    className="border-2 border-orange-500 hover:bg-orange-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Music Gallery
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">🧬 Fixer Private Vault</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-center">
                The unreleased archive of Mr. Fixer Music. Raw, honest, and experimental tracks 
                from the private collection – now open to the world.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://soundcloud.com/mrfixermusic/sets/fixer-private-vault" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Fixer Private Vault on SoundCloud"
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-3 rounded-full border border-purple-500/30 hover:border-purple-400/50 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 Mr. Fixer Music - Private Vault Collection | 
                  <span className="text-purple-400"> Unreleased Archive • Raw Experiments • Honest Music</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivateCollectionPage;