import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Music, Globe, Users, Headphones, Download, Shield, Zap, Volume2, Radio, Video, Gamepad2, Building, Check, X, Lock, Play, ExternalLink, BarChart3, Calendar, MapPin, MessageCircle, ChevronDown, ChevronUp, ArrowUp, Menu, Star, Clock, Pause } from 'lucide-react';
import SEOHead from './components/SEOHead';
import BmpPage from './components/BmpPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import GalleryPage from './components/GalleryPage';
import DownloadsPage from './components/DownloadsPage';
import DJCollectivePage from './components/DJCollectivePage';
import PrivateCollectionPage from './components/PrivateCollectionPage';
import { homePageStructuredData, livePageStructuredData } from './data/structuredData';

// Lazy load components for better performance
const LazyImage = React.lazy(() => import('./components/LazyImage'));

// Live redirect component
const LiveRedirect = () => {
  React.useEffect(() => {
    window.location.replace('https://www.youtube.com/@MrFixermusic/streams');
  }, []);
  
  return (
    <>
      <SEOHead
        title="Mr. Fixer Music Live Stream - Electronic Music Experience"
        description="Watch Mr. Fixer Music live stream - Free electronic music experience with house, techno, and ambient sounds. Join the decentralized music revolution."
        keywords="mr fixer music live, electronic music live stream, dj live stream, house music live, techno live stream, free music stream, youtube live music"
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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Music className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Redirecting to Live Stream...</h1>
          <p className="text-gray-400">Taking you to the Mr. Fixer Music live experience</p>
        </div>
      </div>
    </>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// Enhanced Platform Card Component
const PlatformCard = ({ href, icon, name, gradient, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`group relative ${gradient} p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center block overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-white text-sm group-hover:text-yellow-300 transition-colors duration-300">
          {name}
        </h3>
        <div className={`mt-2 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
      </div>
    </a>
  );
};

// Enhanced Stats Component
const StatCard = ({ icon, number, label, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));
          const increment = targetNumber / 50;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div 
      ref={ref}
      className="text-center group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
        {React.cloneElement(icon, { className: "w-10 h-10 text-white" })}
      </div>
      <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2">
        {isVisible ? (number.includes('+') ? `${count}+` : count) : number}
      </div>
      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">{label}</div>
    </div>
  );
};

// Main homepage component
const HomePage = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const togglePlayPause = () => {
    setCurrentlyPlaying(!currentlyPlaying);
  };

  return (
    <>
      <SEOHead
        title="Mr. Fixer Music — Free Non-Commercial AI Electronic Music | 1,000+ Tracks"
        description="Mr. Fixer Music - Global collective offering free non-commercial electronic music under Fixer Creative License (FCL). 1,000+ tracks: Melodic House, Deep Techno, Afrobeat, Organic Electronica. Perfect for DJs, curators & sync licensing. Shadow producer-led, 50% human, 50% AI, 100% Fixer."
        keywords="mr fixer music, free non commercial music, fixer creative license, fixer daily drops, ai electronic music, shadow producer, global music collective, melodic house, deep techno, afrobeat, organic electronica, minimal electronica, experimental club, lo-fi grooves, ambient layers, dj music, club ready music, borderless music, sync licensing, playlist ready music, underground artists, beatmakers, vocalists, sound designers, free dj music, free music downloads, creative commons alternative, royalty free alternative, electronic music catalog, spotify, apple music, soundcloud, audiomack, amazon music, deezer, tidal, pandora, qobuz, anghami, boomplay, iheart, youtube music, tiktok music, beatport"
        canonicalUrl="https://mrfixerai.com"
        structuredData={homePageStructuredData}
        publishedTime="2025-01-01T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        alternateUrls={{
          "en": "https://mrfixerai.com",
          "x-default": "https://mrfixerai.com"
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-x-hidden">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Mr. Fixer Music</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <a href="/gallery" className="hover:text-purple-300 transition-colors">Gallery</a>
                <a href="/downloads" className="hover:text-purple-300 transition-colors">Downloads</a>
                <a href="/terms" className="hover:text-purple-300 transition-colors">License</a>
                <a href="/live" className="hover:text-purple-300 transition-colors">Live</a>
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-4 h-4 inline mr-2" />
                  Listen Now
                </a>
              </div>

              <button 
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
              <div className="container mx-auto px-6 py-4 space-y-4">
                <a href="/gallery" className="block py-2 hover:text-purple-300 transition-colors">Gallery</a>
                <a href="/downloads" className="block py-2 hover:text-purple-300 transition-colors">Downloads</a>
                <a href="/terms" className="block py-2 hover:text-purple-300 transition-colors">License</a>
                <a href="/live" className="block py-2 hover:text-purple-300 transition-colors">Live</a>
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-purple-600 to-blue-600 text-center py-3 rounded-full font-semibold"
                >
                  Listen Now
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="relative overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-6 py-20">
            <div className="text-center max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Music className="w-12 h-12 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <Zap className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              
              <div className="mb-8 space-y-6">
                <span className="text-3xl animate-pulse">✨</span>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight animate-fade-in">
                  Mr. Fixer Music
                </h1>
                <div className="space-y-4">
                  <p className="text-3xl md:text-4xl font-semibold text-gray-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Global Collective
                  </p>
                  <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    Free Non-Commercial Electronic Music
                  </p>
                  <p className="text-lg mb-6 text-gray-400 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    Under Fixer Creative License (FCL)
                  </p>
                  <div className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/30 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-2xl font-semibold text-purple-300 mb-4">
                      50% human. 50% AI. 100% Fixer.
                    </p>
                    <p className="text-lg text-gray-400 mb-4">
                      🎭 <strong>No faces. No names. No ego.</strong>
                    </p>
                    <p className="text-3xl font-bold text-yellow-300 mb-6 animate-pulse">
                      🎯 1,000+ original tracks and counting.
                    </p>
                    <p className="text-xl text-green-300">
                      Perfect for DJs, Curators & Sync Licensing
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '1s' }}>
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Browse Mr Fixer Music albums on SoundCloud"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl inline-flex items-center justify-center"
                >
                  <Play className="w-6 h-6 inline mr-3 group-hover:animate-pulse" aria-hidden="true" />
                  🎵 Listen Free on All Platforms
                  <ExternalLink className="w-5 h-5 ml-3 opacity-70" />
                </a>
                <a 
                  href="/gallery"
                  aria-label="Browse Mr. Fixer Music catalog"
                  className="group border-2 border-purple-500 hover:bg-purple-500 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  <Music className="w-6 h-6 inline mr-3 group-hover:animate-spin" aria-hidden="true" />
                  📀 Explore Catalog
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Video Showcase */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-4xl mb-6 block">🎬</span>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Experience the Sound
                </h2>
                <p className="text-xl text-gray-400">
                  Visual journey through the Mr. Fixer Music universe
                </p>
              </div>
              
              <div className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 group hover:border-purple-400/40 transition-all duration-500">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative group">
                  <video 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    controls 
                    preload="metadata"
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxMjgwIDcyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI3MjAiIGZpbGw9InVybCgjYSkiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjEyODAiIHkyPSI3MjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNTgxYzg3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWUzYThhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"
                  >
                    <source 
                      src="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag. 
                    <a 
                      href="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Download the video
                    </a>
                  </video>
                  
                  {/* Play overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-300 mb-4">
                    Experience the visual identity of Mr. Fixer Music - Global Collective
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      HD Quality
                    </span>
                    <span className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Enhanced Audio
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Visual Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Who Are We */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-8">
                <span className="text-5xl mb-6 block animate-bounce">🧠</span>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  🌍 Global Music Collective
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20 mb-12">
                <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                  <p className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    <strong>Shadow Producer-Led</strong> – The founder stays invisible. The music speaks loud.
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                    <strong>Anonymous Collaborations</strong> – Tracks built across borders, with no names attached.
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
                    Genre-fluid, borderless music – every single day.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-800/40 to-indigo-800/40 p-8 rounded-3xl border border-blue-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4 group-hover:text-blue-200 transition-colors">🔊 For DJs & Selectors</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Mixable, punchy tracks made for sets</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-800/40 to-emerald-800/40 p-8 rounded-3xl border border-green-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-300 mb-4 group-hover:text-green-200 transition-colors">📝 For Curators</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Raw emotion, clear storytelling</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 p-8 rounded-3xl border border-purple-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">🛰️ For Sync Licensing</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Undiscovered global sound</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Music Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-5xl mb-6 block animate-pulse">🎵</span>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  🎚️ Genres & Sound
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Music className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    🎧 Fixer Daily Drops
                  </h3>
                  <div className="space-y-4">
                    <p className="text-3xl font-semibold text-purple-300 animate-pulse">
                      Over 1,000 original tracks since May 15, 2025
                    </p>
                    <p className="text-xl text-gray-300">
                      Emotionally charged, club-ready, borderless music
                    </p>
                    <p className="text-lg text-green-300">
                      📀 Available on Spotify, Apple Music, SoundCloud, Audiomack, Amazon Music, Deezer, Tidal, Pandora & more
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-purple-700/30 to-indigo-700/30 p-6 rounded-2xl border border-purple-400/20">
                    <h4 className="text-xl font-semibold mb-6 text-purple-300 text-center">🎼 Core Genres:</h4>
                    <div className="space-y-3 text-gray-300">
                      {['Melodic House', 'Deep Techno', 'Afrobeat', 'Organic Electronica'].map((genre, index) => (
                        <div key={genre} className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                          <Star className="w-5 h-5 text-purple-400 mr-3" />
                          <span className="font-medium">{genre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-700/30 to-cyan-700/30 p-6 rounded-2xl border border-blue-400/20">
                    <h4 className="text-xl font-semibold mb-6 text-blue-300 text-center">🌊 Extended Palette:</h4>
                    <div className="space-y-3 text-gray-300">
                      {['Minimal', 'Experimental Club', 'Lo-Fi Grooves', 'Ambient Layers'].map((genre, index) => (
                        <div key={genre} className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                          <Star className="w-5 h-5 text-blue-400 mr-3" />
                          <span className="font-medium">{genre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-8 rounded-2xl border border-green-500/30">
                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-semibold text-green-300 mb-4">📜 Fixer Creative License (FCL)</h4>
                    <p className="text-lg text-gray-300 mb-6">Free for non-commercial use • Attribution when possible • Commercial licensing available</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="/terms" 
                        className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <Shield className="w-5 h-5 mr-2" />
                        View License
                      </a>
                      <a 
                        href="/downloads" 
                        className="inline-flex items-center border-2 border-green-500 hover:bg-green-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get Music
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Streaming Platforms */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-5xl mb-6 block animate-bounce">🧬</span>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  📀 Available Everywhere
                </h2>
                <p className="text-2xl text-gray-400 italic mb-8">
                  "Stream on all major platforms – Free non-commercial use"
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
                <PlatformCard 
                  href="https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8" 
                  icon="🎵" 
                  name="Spotify" 
                  gradient="bg-gradient-to-br from-green-800/30 to-emerald-800/30" 
                  delay={100}
                />
                <PlatformCard 
                  href="https://music.apple.com/us/artist/mr-fixer-music/1815615410" 
                  icon="🍎" 
                  name="Apple Music" 
                  gradient="bg-gradient-to-br from-gray-800/30 to-slate-800/30" 
                  delay={200}
                />
                <PlatformCard 
                  href="https://soundcloud.com/mrfixermusic" 
                  icon="☁️" 
                  name="SoundCloud" 
                  gradient="bg-gradient-to-br from-orange-800/30 to-red-800/30" 
                  delay={300}
                />
                <PlatformCard 
                  href="https://www.youtube.com/@MrFixermusic" 
                  icon="📺" 
                  name="YouTube" 
                  gradient="bg-gradient-to-br from-red-800/30 to-pink-800/30" 
                  delay={400}
                />
                <PlatformCard 
                  href="https://www.amazon.com/music/player/artists/B0F9F7WMQB/mr-fixer-music" 
                  icon="📦" 
                  name="Amazon Music" 
                  gradient="bg-gradient-to-br from-yellow-800/30 to-orange-800/30" 
                  delay={500}
                />
                <PlatformCard 
                  href="https://www.deezer.com/us/artist/324433381" 
                  icon="🎶" 
                  name="Deezer" 
                  gradient="bg-gradient-to-br from-purple-800/30 to-indigo-800/30" 
                  delay={600}
                />
                <PlatformCard 
                  href="https://tidal.com/browse/artist/60412462" 
                  icon="🌊" 
                  name="Tidal" 
                  gradient="bg-gradient-to-br from-blue-800/30 to-cyan-800/30" 
                  delay={700}
                />
                <PlatformCard 
                  href="https://audiomack.com/mrfixermusic" 
                  icon="🎤" 
                  name="Audiomack" 
                  gradient="bg-gradient-to-br from-pink-800/30 to-purple-800/30" 
                  delay={800}
                />
                <PlatformCard 
                  href="https://www.pandora.com/artist/mr-fixer-music/ARcdhmP7t3n25Jc" 
                  icon="📻" 
                  name="Pandora" 
                  gradient="bg-gradient-to-br from-indigo-800/30 to-purple-800/30" 
                  delay={900}
                />
                <PlatformCard 
                  href="https://www.qobuz.com/us-en/interpreter/mr-fixer-music/27034184" 
                  icon="🎵" 
                  name="Qobuz" 
                  gradient="bg-gradient-to-br from-emerald-800/30 to-green-800/30" 
                  delay={1000}
                />
                <PlatformCard 
                  href="https://www.beatport.com/artist/mr-fixer-music/1316362" 
                  icon="🎛️" 
                  name="Beatport" 
                  gradient="bg-gradient-to-br from-cyan-800/30 to-blue-800/30" 
                  delay={1100}
                />
                <PlatformCard 
                  href="https://www.tiktok.com/@mrfixermusics" 
                  icon="🎬" 
                  name="TikTok" 
                  gradient="bg-gradient-to-br from-slate-800/30 to-gray-800/30" 
                  delay={1200}
                />
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-800/30 to-blue-800/30 p-12 rounded-3xl border border-green-500/20">
                  <BarChart3 className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-green-300 mb-8">📈 Growing Global Reach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group">
                      <div className="text-5xl font-bold text-blue-300 mb-2 group-hover:animate-pulse">1M+</div>
                      <div className="text-gray-400 group-hover:text-white transition-colors">Monthly Plays</div>
                    </div>
                    <div className="group">
                      <div className="text-5xl font-bold text-green-300 mb-2 group-hover:animate-pulse">50+</div>
                      <div className="text-gray-400 group-hover:text-white transition-colors">Countries</div>
                    </div>
                    <div className="group">
                      <div className="text-5xl font-bold text-purple-300 mb-2 group-hover:animate-pulse">15+</div>
                      <div className="text-gray-400 group-hover:text-white transition-colors">Platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Business Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-5xl mb-6 block">💼</span>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  For Creators & Businesses
                </h2>
                <p className="text-2xl text-gray-400 mb-6">
                  We offer a parallel service via our business arm:
                </p>
                <a 
                  href="https://eranfixer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent hover:from-orange-200 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  eranfixer.com
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-green-800/40 to-emerald-800/40 p-8 rounded-3xl border border-green-500/30 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-4xl mb-6 group-hover:animate-bounce">🔹</div>
                  <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-200 transition-colors">Smart website development</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 p-8 rounded-3xl border border-blue-500/30 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-4xl mb-6 group-hover:animate-bounce">🔹</div>
                  <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">SEO with brain</h3>
                </div>
                <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 p-8 rounded-3xl border border-purple-500/30 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-4xl mb-6 group-hover:animate-bounce">🔹</div>
                  <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">AI automation for businesses</h3>
                </div>
              </div>
              
              {/* Enhanced Pricing Table */}
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-12 rounded-3xl border border-orange-500/20">
                <div className="text-center mb-12">
                  <span className="text-4xl mb-6 block animate-pulse">🚀</span>
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">Want Your Own Site in Minutes?</h3>
                </div>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b border-orange-500/30">
                        <th className="py-4 px-6 text-xl text-orange-300">Package</th>
                        <th className="py-4 px-6 text-xl text-orange-300">What You Get</th>
                        <th className="py-4 px-6 text-xl text-orange-300">Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-orange-500/20 hover:bg-orange-500/5 transition-colors">
                        <td className="py-6 px-6 text-lg">💻 Basic</td>
                        <td className="py-6 px-6 text-lg">Domain + Design + SEO</td>
                        <td className="py-6 px-6 text-xl font-bold text-orange-300">₪9.90/mo</td>
                      </tr>
                      <tr className="hover:bg-orange-500/5 transition-colors">
                        <td className="py-6 px-6 text-lg">🚀 Pro</td>
                        <td className="py-6 px-6 text-lg">Editor + AI + Templates</td>
                        <td className="py-6 px-6 text-xl font-bold text-orange-300">₪19.90/mo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-gray-300 mb-8">No contracts. No coding. No humans.</p>
                  <a 
                    href="https://eranfixer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl group"
                  >
                    <ExternalLink className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    → Launch Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Identity Statement */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-16 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <span className="text-6xl mb-8 block animate-pulse">🌀</span>
                <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Identity Over Output
                </h2>
                <div className="space-y-8 text-2xl text-gray-300">
                  <p className="group hover:text-white transition-colors duration-300 cursor-default">
                    <span className="group-hover:animate-pulse">We don't make music.</span><br />
                    <span className="group-hover:text-purple-300 transition-colors">We create systems of flow.</span>
                  </p>
                  <p className="group hover:text-white transition-colors duration-300 cursor-default">
                    <span className="group-hover:animate-pulse">We don't release albums.</span><br />
                    <span className="group-hover:text-blue-300 transition-colors">We release identity.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                📋 Licensing & Usage
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: 'Can I use this music for free?',
                    answer: 'Yes! All tracks are free for non-commercial use under our Fixer Creative License (FCL). Perfect for DJs, personal videos, livestreams, and educational content. Commercial use requires licensing.'
                  },
                  {
                    question: 'What is the Fixer Creative License (FCL)?',
                    answer: 'FCL allows free non-commercial use with attribution when possible. It covers DJ sets, personal videos, internet radio, and educational purposes. Commercial projects like ads, films, or games require separate licensing.'
                  },
                  {
                    question: 'How is this music created?',
                    answer: 'Our shadow producer-led collective combines 50% human creativity with 50% AI assistance. Underground artists, DJs, beatmakers, and sound designers collaborate anonymously to create emotionally charged, club-ready music.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transform hover:scale-102 transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
                    >
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''} group-hover:scale-110`}>
                        {openFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 animate-slide-down">
                        <p className="text-lg text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Commercial Licensing */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-16 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Building className="w-20 h-20 text-purple-400 mx-auto mb-8 animate-bounce" />
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  🛰️ Commercial Licensing
                </h2>
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                  Need music for ads, films, games, or commercial projects? We offer flexible licensing for brands, agencies, and content creators.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="/terms"
                    className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl"
                  >
                    <Shield className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    📜 View FCL License
                  </a>
                  <a 
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-purple-500 hover:bg-purple-500 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-flex items-center justify-center"
                  >
                    <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    💼 Contact for Licensing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  📊 Global Impact
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard 
                  icon={<Music />} 
                  number="1000" 
                  label="Original Tracks" 
                  delay={0}
                />
                <StatCard 
                  icon={<Globe />} 
                  number="15" 
                  label="Streaming Platforms" 
                  delay={200}
                />
                <StatCard 
                  icon={<Calendar />} 
                  number="May 15" 
                  label="Launch Date 2025" 
                  delay={400}
                />
                <StatCard 
                  icon={<Users />} 
                  number="1000000" 
                  label="Monthly Plays" 
                  delay={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-16 bg-black/60">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Music className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Mr. Fixer Music
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Global collective offering free non-commercial electronic music. Shadow producer-led, 50% human, 50% AI, 100% Fixer.
              </p>
              <div className="flex justify-center space-x-8 mb-12">
                <a 
                  href="https://soundcloud.com/mrfixermusic/albums" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Listen to Mr. Fixer Music albums on SoundCloud"
                  className="group bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 rounded-full border border-purple-500/30 hover:border-purple-400/50 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
                >
                  <Volume2 className="w-8 h-8 group-hover:animate-pulse" aria-hidden="true" />
                </a>
                <a 
                  href="https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Stream Mr. Fixer Music on Spotify"
                  className="group bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-full border border-green-500/30 hover:border-green-400/50 text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-125"
                >
                  <Music className="w-8 h-8 group-hover:animate-spin" aria-hidden="true" />
                </a>
                <a 
                  href="https://music.apple.com/us/artist/mr-fixer-music/1815615410" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Stream Mr. Fixer Music on Apple Music"
                  className="group bg-gradient-to-r from-gray-600/20 to-slate-600/20 p-4 rounded-full border border-gray-500/30 hover:border-gray-400/50 text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-125"
                >
                  <Headphones className="w-8 h-8 group-hover:animate-bounce" aria-hidden="true" />
                </a>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                  <a href="/gallery" className="hover:text-purple-300 transition-colors">Gallery</a>
                  <a href="/downloads" className="hover:text-purple-300 transition-colors">Downloads</a>
                  <a href="/terms" className="hover:text-purple-300 transition-colors">License</a>
                  <a href="/live" className="hover:text-purple-300 transition-colors">Live Stream</a>
                  <a href="/dj-collective" className="hover:text-purple-300 transition-colors">DJ Collective</a>
                </div>
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music — Global Collective • 
                  <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">
                    Fixer Creative License (FCL)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </>
  );
};

function App() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/live" element={<LiveRedirect />} />
        <Route path="/bmp" element={<BmpPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/dj-collective" element={<DJCollectivePage />} />
        <Route path="/private-collection" element={<PrivateCollectionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;