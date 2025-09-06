import React, { useState, useRef, useEffect } from 'react';
import { Music, ExternalLink, Globe, Headphones, Volume2, Radio, Users, Play, Pause, Clock, Calendar, Zap, Heart, Share2, ChevronRight, Eye, TrendingUp } from 'lucide-react';
import SEOHead from './SEOHead';
import { livePageStructuredData } from '../data/structuredData';

const LivePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentListeners, setCurrentListeners] = useState(0);

  // Simulate live listener count
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentListeners(prev => {
        const change = Math.random() > 0.5 ? Math.floor(Math.random() * 5) + 1 : -(Math.floor(Math.random() * 3) + 1);
        return Math.max(0, prev + change);
      });
    }, 5000);

    // Initial listener count
    setCurrentListeners(Math.floor(Math.random() * 50) + 10);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <SEOHead
        title="Live Stream - Mr. Fixer Music | 24/7 Electronic Music Experience"
        description="Experience Mr. Fixer Music's 24/7 live electronic music stream. Continuous mix of house, techno, ambient, and experimental sounds. Perfect for background music, studying, working, or pure musical enjoyment."
        keywords="live stream, electronic music, 24/7 music, mr fixer music, dj set, house music, techno music, ambient music, continuous stream, background music, study music, work music"
        canonicalUrl="https://mrfixerai.com/live"
        structuredData={livePageStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="video"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Live", url: "https://mrfixerai.com/live" }
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
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Radio className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">
                🔴 LIVE
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                24/7 Electronic Music Experience
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Continuous live electronic music stream featuring house, techno, ambient, and experimental sounds. 
                Perfect for background music, studying, working, or pure musical enjoyment.
              </p>
              
              {/* Live Stats */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center bg-red-600/20 px-6 py-3 rounded-full border border-red-500/30">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-semibold">LIVE NOW</span>
                </div>
                <div className="flex items-center bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/30">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>{currentListeners} listeners</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@MrFixermusic/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch live stream on YouTube"
                  className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Watch on YouTube
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-red-500 hover:bg-red-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Live Stream Player */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">🎵 Live Stream Player</h2>
                <p className="text-xl text-gray-400">Experience continuous electronic music from around the globe</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-8 rounded-2xl border border-purple-500/20">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl mb-6">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/live_stream?channel=UCNGHGvFSZXM-JW7sQ_RuB_g"
                    title="Mr. Fixer Music Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                {/* Stream Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label={isPlaying ? 'Pause stream' : 'Play stream'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>
                    
                    <div>
                      <p className="font-semibold">Mr. Fixer Music Radio</p>
                      <p className="text-sm text-gray-400">24/7 Electronic Stream</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">High Quality</span>
                    </div>
                    <button
                      className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                      aria-label="Share stream"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                      aria-label="Add to favorites"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stream Features */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🎧 Stream Features</h2>
              <p className="text-xl text-gray-400">What makes Fixer Radio special</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300 text-center">
                <Radio className="w-12 h-12 text-red-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">24/7 Continuous</h3>
                <p className="text-gray-400">Non-stop electronic music broadcasting around the clock from our global collective</p>
              </div>
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Global Collective</h3>
                <p className="text-gray-400">Featuring artists from around the world in our decentralized music movement</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 text-center">
                <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">High Quality</h3>
                <p className="text-gray-400">Premium audio quality for the best listening experience across all devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Now Playing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">🎵 Currently Playing</h2>
                <p className="text-xl text-gray-400">Live from the Fixer Radio stream</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Music className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Fixer Daily Drops Mix</h3>
                    <p className="text-gray-300 mb-2">Mixed by Mr. Fixer Music Collective</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Live Stream
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Electronic Mix
                      </span>
                      <span className="flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        High Energy
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300 mb-1">{currentListeners}</div>
                    <div className="text-sm text-gray-400">Listeners</div>
                  </div>
                </div>
                
                {/* Waveform visualization placeholder */}
                <div className="mt-6 h-16 bg-black/20 rounded-lg flex items-center justify-center">
                  <div className="flex items-end space-x-1 h-8">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-purple-500 to-pink-500 w-1 animate-pulse"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stream Schedule */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">📅 Stream Schedule</h2>
                <p className="text-xl text-gray-400">What's coming up on Fixer Radio</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { time: "Now Playing", title: "Continuous Mix - Fixer Daily Drops", status: "live" },
                  { time: "Every Hour", title: "Genre Rotation - House → Techno → Ambient", status: "scheduled" },
                  { time: "Daily", title: "New Volume Premieres", status: "upcoming" },
                  { time: "Weekly", title: "Global DJ Guest Sets", status: "upcoming" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-lg border border-purple-500/20">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'live' ? 'bg-red-500 animate-pulse' : 
                      item.status === 'scheduled' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-gray-400">{item.time}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 ${
                          item.status === 'live' ? 'bg-red-600/20 text-red-300 border border-red-500/30' :
                          item.status === 'scheduled' ? 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30' :
                          'bg-gray-600/20 text-gray-300 border border-gray-500/30'
                        }`}>
                          {item.status === 'live' ? 'LIVE NOW' : 
                           item.status === 'scheduled' ? 'SCHEDULED' : 'UPCOMING'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-red-800/30 to-purple-800/30 p-12 rounded-3xl backdrop-blur-sm border border-red-500/20">
                <Radio className="w-16 h-16 text-red-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6">Join the Live Experience</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8">
                  Tune into Fixer Radio for the ultimate electronic music experience. 
                  No ads, no interruptions, just pure sound from our global collective.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.youtube.com/@MrFixermusic/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Radio className="w-5 h-5 mr-2" />
                    Listen Live Now
                  </a>
                  <a 
                    href="/gallery"
                    className="border-2 border-red-500 hover:bg-red-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Browse Catalog
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">🔴 Fixer Radio Live</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                24/7 electronic music experience powered by Mr. Fixer Music's global collective. 
                Continuous streaming of the finest house, techno, and ambient sounds.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://www.youtube.com/@MrFixermusic/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Watch Mr. Fixer Music live stream on YouTube"
                  className="bg-gradient-to-r from-red-600/20 to-purple-600/20 p-3 rounded-full border border-red-500/30 hover:border-red-400/50 text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - Live Stream | 
                  <span className="text-red-400"> 24/7 Electronic Music • Global Collective • Free Access</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LivePage;