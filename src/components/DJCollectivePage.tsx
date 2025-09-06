import React, { useState } from 'react';
import { Music, ExternalLink, Globe, Headphones, Volume2, Radio, Users, Play, Pause, MapPin, Heart, Star, Zap } from 'lucide-react';
import SEOHead from './SEOHead';

interface DJ {
  id: string;
  name: string;
  country: string;
  flag: string;
  location: string;
  soundcloudUrl: string;
  description: string;
  style: string;
  featuredTrack: string;
  bio: string;
  gradient: string;
  featured?: boolean;
}

const DJCollectivePage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const djs: DJ[] = [
    {
      id: 'soufi-beat',
      name: 'DJ Soufi Beat',
      country: 'Morocco',
      flag: '🇲🇦',
      location: 'Global Tribe · Mr Fixer Music Collective',
      soundcloudUrl: 'https://soundcloud.com/soufibeat',
      description: 'From the medina to the mainstage, DJ Soufi Beat brings the hypnotic pulse of Morocco into the global mix.',
      style: 'Deep Trance, Tribal House, Spiritual Techno',
      featuredTrack: 'Soufi Mirage',
      bio: 'Spinning between deep trance, tribal house, and spiritual techno, her sound blends ancient rhythms with futuristic flow. Member of the Mr Fixer Music global collective – a decentralized music movement led by artists and AI. Soufi\'s sets are pure energy: no borders, no boundaries – just heartbeat and frequency.',
      gradient: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      id: 'sakura-drop',
      name: 'DJ Sakura Drop',
      country: 'Japan',
      flag: '🇯🇵',
      location: 'Tokyo Frequency · Mr Fixer Music Collective',
      soundcloudUrl: 'https://soundcloud.com/sakuradj',
      description: 'Rooted in the delicate balance of silence and sound, DJ Sakura Drop channels the emotional core of Japan\'s sonic tradition into modern electronic form.',
      style: 'Ambient Textures, Minimalist Techno, Melodic Trance',
      featuredTrack: 'Sakura Drop',
      bio: 'Her sets mix ambient textures, minimalist techno, and melodic trance – blooming like cherry blossoms in the night. Proud member of the Mr Fixer Music global collective – where AI and human creativity unite across continents. Sakura\'s vibe is subtle, deep, and transcendent – crafted for listeners who feel more than they hear.',
      gradient: 'from-pink-500 to-purple-500',
      featured: true
    },
    {
      id: 'vibe-flow',
      name: 'DJ Vibe Flow',
      country: 'USA',
      flag: '🇺🇸',
      location: 'West Coast Waves · Mr Fixer Music Collective',
      soundcloudUrl: 'https://soundcloud.com/djvibeflow',
      description: 'Born from the pulse of underground clubs and sunrise sessions, DJ Vibe Flow delivers high-energy sets that ride the line between house, electro, and vocal trance.',
      style: 'House, Electro, Vocal Trance',
      featuredTrack: 'Vibe Flow Anthem',
      bio: 'His style is bold, euphoric, and unapologetically American – fast drops, fat basslines, and a whole lot of soul. Official member of the Mr Fixer Music global collective, representing the U.S. sound in a decentralized audio movement. With every drop, Vibe Flow brings emotional heat and sonic precision.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'rio-pulse',
      name: 'DJ Rio Pulse',
      country: 'Brazil',
      flag: '🇧🇷',
      location: 'Amazon Beats · Mr Fixer Music Collective',
      soundcloudUrl: 'http://soundcloud.com/jflllzz2kzma',
      description: 'Straight from the heart of Brazil, DJ Rio Pulse mixes tribal percussion, future bass, and soulful tech to create an electrifying jungle of sound.',
      style: 'Tribal Percussion, Future Bass, Soulful Tech',
      featuredTrack: 'Rio Pulse',
      bio: 'His sets move like the Rio tide – groovy, raw, and impossible to ignore. Part of the Mr Fixer Music collective, Rio represents the South American spirit of freedom, rhythm, and pure sonic expression. From favela roots to global streams – his vibe is the sound of movement.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const togglePlay = (djId: string) => {
    setCurrentlyPlaying(currentlyPlaying === djId ? null : djId);
  };

  const djCollectiveStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DJ Collective - Mr. Fixer Music | Global Electronic Music Artists",
    "description": "Meet the international DJ collective from Mr. Fixer Music featuring artists from Morocco, Japan, USA, and Brazil. Global electronic music movement with no borders.",
    "url": "https://mrfixerai.com/dj-collective",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Global DJ Collective",
      "numberOfItems": djs.length,
      "itemListElement": djs.map((dj, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "MusicGroup",
          "name": dj.name,
          "description": dj.description,
          "url": dj.soundcloudUrl,
          "genre": dj.style,
          "location": dj.country
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
          "name": "DJ Collective",
          "item": "https://mrfixerai.com/dj-collective"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="DJ Collective - Mr. Fixer Music | Global Electronic Music Artists"
        description="Meet the international DJ collective from Mr. Fixer Music featuring artists from Morocco, Japan, USA, and Brazil. Global electronic music movement with decentralized artists and AI collaboration."
        keywords="dj collective, mr fixer music, international djs, global electronic music, dj soufi beat morocco, dj sakura drop japan, dj vibe flow usa, dj rio pulse brazil, electronic music collective, global music movement"
        canonicalUrl="https://mrfixerai.com/dj-collective"
        structuredData={djCollectiveStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="music"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "DJ Collective", url: "https://mrfixerai.com/dj-collective" }
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
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Users className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Globe className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent text-center">
                DJ Collective
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center">
                Global Electronic Music Artists
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                Meet the international DJ collective from Mr. Fixer Music. Artists from around the world 
                united by a decentralized music movement where AI and human creativity collaborate across continents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen to Global DJ Guests collection on SoundCloud"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Volume2 className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Global DJ Guests Vol. 48
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

        {/* Collective Mission */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-12 rounded-3xl backdrop-blur-sm border border-orange-500/20 text-center">
                <Globe className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">🌍 Global Music Movement</h2>
                <div className="space-y-6 text-lg text-gray-300">
                  <p className="text-center">
                    The Mr. Fixer Music collective represents a new era of decentralized music creation, 
                    where artists and AI collaborate across continents to break down borders through sound.
                  </p>
                  <p className="text-center">
                    <strong>No borders. No boundaries. Just heartbeat and frequency.</strong>
                  </p>
                  <p className="text-center">
                    Each DJ brings their unique cultural perspective while contributing to a unified global sound 
                    that transcends geographical limitations.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇲🇦</div>
                    <p className="text-sm text-gray-400">Morocco</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇯🇵</div>
                    <p className="text-sm text-gray-400">Japan</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇺🇸</div>
                    <p className="text-sm text-gray-400">USA</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇧🇷</div>
                    <p className="text-sm text-gray-400">Brazil</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-orange-500/20">
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 p-6 rounded-xl border border-red-500/30">
                    <div className="flex items-center justify-center mb-4">
                      <Headphones className="w-8 h-8 text-red-400 mr-3" />
                      <h3 className="text-xl font-semibold text-red-300">🎧 Complete DJ Mix Available</h3>
                    </div>
                    <p className="text-gray-300 text-center mb-4">
                      Experience all global DJ guests in one seamless mix - the complete Vol. 48 journey from Morocco to Brazil.
                    </p>
                    <div className="text-center">
                      <a 
                        href="https://soundcloud.com/mrfixermusic/fixer-daily-drops-vol-48-mix-global-dj-guests?in=mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Play Complete Mix
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DJ Profiles */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-center">Meet the Artists</h2>
              <p className="text-xl text-gray-400 text-center">International DJs united by the Fixer Radio signal</p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {djs.map((dj) => (
                  <div
                    key={dj.id}
                    className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 overflow-hidden group relative ${
                      dj.featured 
                        ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    {dj.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          FEATURED
                        </span>
                      </div>
                    )}
                    
                    {/* DJ Header */}
                    <div className={`h-32 bg-gradient-to-r ${dj.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => togglePlay(dj.id)}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:scale-110"
                          aria-label={currentlyPlaying === dj.id ? 'Pause DJ profile' : 'Play DJ profile'}
                        >
                          {currentlyPlaying === dj.id ? (
                            <Pause className="w-8 h-8 text-white" />
                          ) : (
                            <Play className="w-8 h-8 text-white ml-1" />
                          )}
                        </button>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-4xl">{dj.flag}</span>
                      </div>
                    </div>

                    {/* DJ Info */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors text-center">
                            {dj.name}
                          </h3>
                          <div className="flex items-center text-gray-400 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{dj.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-center">
                        {dj.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 text-center">STYLE</h4>
                        <p className="text-sm text-gray-300 text-center">{dj.style}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 text-center">BIO</h4>
                        <p className="text-sm text-gray-300 leading-relaxed text-center">{dj.bio}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 rounded-lg mb-6">
                        <div className="flex items-center mb-2">
                          <Radio className="w-4 h-4 text-purple-400 mr-2" />
                          <span className="text-sm font-semibold text-purple-300">Featured in Vol. 48</span>
                        </div>
                        <p className="text-sm text-gray-300 text-center">Track: "{dj.featuredTrack}"</p>
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={dj.soundcloudUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-3 rounded-full text-center font-semibold transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Listen on SoundCloud
                        </a>
                        <button
                          className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center justify-center"
                          aria-label="Like DJ"
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fixer Radio */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Radio className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">📡 Powered by Fixer Radio</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8 text-center">
                  All collective members stream worldwide via the Fixer Radio signal. 
                  A decentralized broadcast network connecting global audiences through electronic music.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-yellow-300 mb-2 text-center">No Borders</h3>
                    <p className="text-sm text-gray-400 text-center">Global reach</p>
                  </div>
                  <div>
                    <Volume2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-300 mb-2 text-center">No Filters</h3>
                    <p className="text-sm text-gray-400 text-center">Pure sound</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-300 mb-2 text-center">No Limits</h3>
                    <p className="text-sm text-gray-400 text-center">Infinite creativity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-12 rounded-3xl backdrop-blur-sm border border-orange-500/20">
                <Headphones className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6 text-center">Join the Movement</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8 text-center">
                  Experience the global sound of the Mr. Fixer Music collective. 
                  Listen to Vol. 48 featuring all these incredible international artists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Volume2 className="w-5 h-5 mr-2" />
                    Listen to Vol. 48
                  </a>
                  <a 
                    href="https://soundcloud.com/mrfixermusic/fixer-daily-drops-vol-48-mix-global-dj-guests?in=mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Headphones className="w-5 h-5 mr-2" />
                    Complete DJ Mix
                  </a>
                  <a 
                    href="https://soundcloud.com/mrfixermusic/fixer-daily-drops-vol-48-mix-global-dj-guests?in=mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Listen to Vol. 48 Complete Mix on SoundCloud"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                    Complete Mix
                  </a>
                  <a
                    href="/live"
                    className="border-2 border-orange-500 hover:bg-orange-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Radio className="w-5 h-5 mr-2" />
                    Fixer Radio Live
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Global DJ Collective</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-center">
                International artists united by the Mr. Fixer Music movement. 
                Decentralized creativity powered by human-AI collaboration across continents.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 Mr. Fixer Music - DJ Collective | 
                  <span className="text-purple-400"> Global Artists • Decentralized Music • No Borders</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DJCollectivePage;