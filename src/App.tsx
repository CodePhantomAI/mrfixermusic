import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Music, 
  Play, 
  Download, 
  ExternalLink, 
  Globe, 
  Headphones, 
  Volume2, 
  Menu, 
  X, 
  ArrowUp,
  Users,
  Radio,
  Zap,
  Heart,
  Star,
  Calendar,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  Mic,
  Speaker,
  Disc3,
  Waves,
  Activity,
  Target,
  Shield,
  Sparkles,
  BookOpen,
  MessageSquare,
  HelpCircle,
  ChevronRight,
  Quote,
  Lightbulb,
  Cpu,
  Network
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import LazyImage from './components/LazyImage';
import GalleryPage from './components/GalleryPage';
import BmpPage from './components/BmpPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DJCollectivePage from './components/DJCollectivePage';
import PrivateCollectionPage from './components/PrivateCollectionPage';
import DownloadsPage from './components/DownloadsPage';
import { homePageStructuredData } from './data/structuredData';

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/bmp" element={<BmpPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/dj-collective" element={<DJCollectivePage />} />
        <Route path="/private-collection" element={<PrivateCollectionPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
    </div>
  );
};

// Live Page Component
const LivePage = () => {
  return (
    <>
      <SEOHead
        title="Live Stream - Mr. Fixer Music | 24/7 Electronic Music Radio"
        description="24/7 live electronic music stream featuring house, techno, ambient sounds from Mr. Fixer Music collective. Free decentralized music experience perfect for background listening, studying, or discovering new electronic sounds."
        keywords="live stream, electronic music radio, 24/7 music, mr fixer music live, house music stream, techno radio, ambient music, free music stream, electronic radio, dj sets, continuous music"
        canonicalUrl="https://mrfixerai.com/live"
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
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Radio className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <Volume2 className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
                🔴 Live Stream
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                24/7 Electronic Music Experience
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Tune into our continuous live electronic music stream featuring house, techno, ambient, 
                and experimental sounds from the Mr. Fixer Music collective. Perfect for background music, 
                studying, working, or discovering new electronic sounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@MrFixermusic/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch live stream on YouTube"
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Play className="w-5 h-5 inline mr-2" aria-hidden="true" />
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

        {/* Live Stream Embed */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-800/20 to-pink-800/20 p-8 rounded-2xl border border-red-500/20">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/live_stream?channel=UCNGHGvFSZXM-JW7sQ_RuB_g"
                    title="Mr. Fixer Music Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Live stream powered by YouTube • Free to watch • No subscription required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stream Info */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Stream Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-8 rounded-2xl border border-red-500/20">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Live</h3>
                  <p className="text-gray-400">Continuous electronic music streaming around the clock</p>
                </div>
                <div className="bg-gradient-to-br from-pink-800/30 to-purple-800/30 p-8 rounded-2xl border border-pink-500/20">
                  <Headphones className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">High Quality</h3>
                  <p className="text-gray-400">Crystal clear audio quality for the best listening experience</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl border border-purple-500/20">
                  <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Global Access</h3>
                  <p className="text-gray-400">Available worldwide with no geographic restrictions</p>
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Live Stream</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Experience continuous electronic music from Mr. Fixer Music collective. 
                Always live, always free, always evolving.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - Live Stream | 
                  <span className="text-red-400"> 24/7 Radio • Global Access • Free Streaming</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

// Main Homepage Component
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [playCount, setPlayCount] = useState(1000);
  const [trackCount, setTrackCount] = useState(1000);
  const [platformCount, setPlatformCount] = useState(15);
  const [hasAnimated, setHasAnimated] = useState(false);
  const location = useLocation();

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Animate counters when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counters
          animateCounter(setPlayCount, 1000, 2000);
          animateCounter(setTrackCount, 1000, 2000);
          animateCounter(setPlatformCount, 15, 1000);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePlay = (platform) => {
    setCurrentlyPlaying(currentlyPlaying === platform ? null : platform);
  };

  const platforms = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8',
      gradient: 'from-green-500 to-green-600',
      description: 'Stream our complete catalog on Spotify with curated playlists and algorithm-driven discovery.',
      monthly: '500K+ monthly listeners'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/us/artist/mr-fixer-music/1815615410',
      gradient: 'from-gray-600 to-black',
      description: 'High-quality lossless audio streaming with spatial audio support for immersive electronic music experience.',
      monthly: '200K+ monthly plays'
    },
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/mrfixermusic',
      gradient: 'from-orange-500 to-orange-600',
      description: 'Free streaming and downloads under Fixer Creative License. Connect with our global community of creators.',
      monthly: '1M+ total plays'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@MrFixermusic',
      gradient: 'from-red-500 to-red-600',
      description: '24/7 live streams, music videos, and behind-the-scenes content from our shadow producer collective.',
      monthly: '150K+ video views'
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/artists/B0F9F7WMQB/mr-fixer-music',
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Unlimited streaming with Alexa integration and high-definition audio quality for Amazon Prime members.',
      monthly: '100K+ streams'
    },
    {
      name: 'Deezer',
      url: 'https://www.deezer.com/us/artist/324433381',
      gradient: 'from-purple-500 to-pink-500',
      description: 'FLAC quality streaming with personalized flow recommendations and global music discovery features.',
      monthly: '80K+ listeners'
    },
    {
      name: 'Tidal',
      url: 'https://tidal.com/browse/artist/60412462',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Master quality audio streaming with exclusive content and artist-owned platform supporting creators directly.',
      monthly: '50K+ HiFi streams'
    },
    {
      name: 'Audiomack',
      url: 'https://audiomack.com/mrfixermusic',
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Free music discovery platform popular with independent artists and creators seeking underground electronic sounds.',
      monthly: '75K+ plays'
    },
    {
      name: 'Pandora',
      url: 'https://www.pandora.com/artist/mr-fixer-music/ARcdhmP7t3n25Jc',
      gradient: 'from-blue-600 to-purple-600',
      description: 'Internet radio with Music Genome Project technology for personalized electronic music station creation.',
      monthly: '40K+ radio plays'
    },
    {
      name: 'iHeartRadio',
      url: 'https://www.iheart.com/artist/mr-fixer-music-46884356/',
      gradient: 'from-red-600 to-pink-600',
      description: 'Digital radio platform with custom stations, podcasts, and live radio integration across multiple devices.',
      monthly: '60K+ radio streams'
    },
    {
      name: 'TikTok Music',
      url: 'https://www.tiktok.com/@mrfixermusics',
      gradient: 'from-pink-500 to-purple-500',
      description: 'Short-form video music integration with viral sound discovery and creator collaboration opportunities.',
      monthly: '25K+ video uses'
    },
    {
      name: 'Beatport',
      url: 'https://www.beatport.com/artist/mr-fixer-music/1316362',
      gradient: 'from-green-600 to-teal-600',
      description: 'Electronic music specialist platform for DJs with BPM matching, key detection, and professional DJ tools.',
      monthly: '15K+ DJ downloads'
    }
  ];

  return (
    <>
      <SEOHead
        title="Mr. Fixer Music — Free Non-Commercial AI Electronic Music | 1,000+ Tracks"
        description="Mr. Fixer Music - Global collective offering free non-commercial electronic music under Fixer Creative License (FCL). 1,000+ tracks: Melodic House, Deep Techno, Afrobeat, Organic Electronica. Perfect for DJs, curators & sync licensing. Shadow producer-led, 50% human, 50% AI."
        keywords="mr fixer music, free non commercial music, fixer creative license, fixer daily drops, ai electronic music, shadow producer, global music collective, melodic house, deep techno, afrobeat, organic electronica, minimal electronica, experimental club, lo-fi grooves, ambient layers, dj music, club ready music, borderless music, sync licensing, playlist ready music, underground artists, beatmakers, vocalists, sound designers, free dj music, free music downloads, creative commons alternative, royalty free alternative, electronic music catalog, spotify, apple music, soundcloud, audiomack, amazon music, deezer, tidal, pandora, qobuz, anghami, boomplay, iheart, youtube music, tiktok music, beatport"
        canonicalUrl="https://mrfixerai.com"
        structuredData={homePageStructuredData}
        pageType="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Fixed Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg hidden sm:block">Mr. Fixer Music</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/gallery" className="hover:text-purple-300 transition-colors">Gallery</Link>
                <Link to="/live" className="hover:text-purple-300 transition-colors">Live</Link>
                <Link to="/downloads" className="hover:text-purple-300 transition-colors">Downloads</Link>
                <Link to="/dj-collective" className="hover:text-purple-300 transition-colors">DJ Collective</Link>
                <Link to="/terms" className="hover:text-purple-300 transition-colors">Terms</Link>
                <a 
                  href="https://soundcloud.com/mrfixermusic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
                >
                  Listen Now
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
                <div className="px-6 py-4 space-y-4">
                  <Link to="/gallery" className="block hover:text-purple-300 transition-colors">Gallery</Link>
                  <Link to="/live" className="block hover:text-purple-300 transition-colors">Live</Link>
                  <Link to="/downloads" className="block hover:text-purple-300 transition-colors">Downloads</Link>
                  <Link to="/dj-collective" className="block hover:text-purple-300 transition-colors">DJ Collective</Link>
                  <Link to="/terms" className="block hover:text-purple-300 transition-colors">Terms</Link>
                  <a 
                    href="https://soundcloud.com/mrfixermusic" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full text-center"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-24 pb-16 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-8 relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl mb-6 animate-pulse">
                <Music className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent animate-fade-in">
              Mr. Fixer Music
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-300 animate-fade-in-delay">
              Global Collective
            </div>
            
            <p className="text-lg md:text-xl mb-6 text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
              <strong>No faces. No names. No ego.</strong> We are a shadow producer-led global music collective 
              offering free non-commercial electronic music under the Fixer Creative License (FCL). Our 
              decentralized approach combines underground artists, DJs, beatmakers, vocalists, and sound designers 
              from around the world, creating emotionally charged, club-ready, borderless music.
            </p>

            <div className="text-base md:text-lg mb-8 text-gray-500 max-w-2xl mx-auto">
              <strong>50% human. 50% AI. 100% Fixer.</strong> Perfect for DJs, curators, sync licensing, 
              and anyone seeking undiscovered global electronic sound that transcends traditional boundaries.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
              <a 
                href="https://soundcloud.com/mrfixermusic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                aria-label="Listen to Mr. Fixer Music on SoundCloud"
              >
                <Play className="w-5 h-5 mr-2" />
                Stream Free Music
              </a>
              <Link 
                to="/downloads"
                className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Under FCL
              </Link>
            </div>
          </div>
        </header>

        {/* Video Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Sound</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Immerse yourself in the visual and auditory experience of Mr. Fixer Music. 
                This promotional video showcases the aesthetic and philosophy behind our global collective.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 group hover:border-purple-400/40 transition-all duration-300">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-black relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster="/video-poster.jpg"
                  >
                    <source src="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4" type="video/mp4" />
                    Your browser does not support the video tag. 
                    <a href="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4" target="_blank" rel="noopener noreferrer">
                      Download the video instead
                    </a>
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Mr. Fixer Music Visual Experience • Global Collective Identity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Mr. Fixer Music reimagines sound as a public, emotional currency – flowing freely, 
                outside of corporate ownership. Each track is a timestamped block in an ever-growing musical chain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <Zap className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Decentralized Creation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our shadow producer-led collective operates without traditional industry gatekeepers. 
                  Underground artists, DJs, beatmakers, vocalists, and sound designers collaborate 
                  anonymously across continents, creating authentic electronic music that transcends 
                  geographic and cultural boundaries.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <Cpu className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Human-AI Synthesis</h3>
                <p className="text-gray-400 leading-relaxed">
                  We embrace the future of music creation with a 50% human, 50% AI approach. 
                  Artificial intelligence enhances human creativity without replacing it, helping us 
                  discover new sonic territories while maintaining the emotional depth and artistic 
                  vision that only human experience can provide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-8 rounded-2xl backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                <Network className="w-12 h-12 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Global Distribution</h3>
                <p className="text-gray-400 leading-relaxed">
                  Available on 15+ streaming platforms worldwide, our music reaches listeners 
                  across every continent. From Spotify and Apple Music to specialized platforms 
                  like Beatport and Audiomack, we ensure our sounds are accessible to diverse 
                  communities and cultural contexts globally.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-800/20 to-yellow-800/20 p-8 rounded-2xl border border-orange-500/20 text-center">
              <Quote className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 text-orange-200">
                "Mr. Fixer is not a person – it's a sound system for the free world."
              </blockquote>
              <p className="text-gray-400 text-lg">
                Our mission extends beyond music creation. We're building a decentralized ecosystem 
                where creativity flows freely, artists maintain control over their work, and listeners 
                discover authentic electronic sounds without corporate interference or algorithmic manipulation.
              </p>
            </div>
          </div>
        </section>

        {/* Genre Exploration Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Genre-Fluid Electronic Music</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our catalog spans multiple electronic music genres, each crafted with meticulous attention 
                to emotional depth and club-ready energy. From underground rave culture to ambient meditation, 
                we create sounds for every context and mood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                <Waves className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Melodic House</h3>
                <p className="text-sm text-gray-400">
                  Euphoric progressions and emotional builds perfect for peak-time club moments and festival main stages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-6 rounded-xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group">
                <Activity className="w-10 h-10 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Deep Techno</h3>
                <p className="text-sm text-gray-400">
                  Hypnotic rhythms and industrial textures for underground clubs and late-night warehouse parties.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
                <Disc3 className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Afrobeat</h3>
                <p className="text-sm text-gray-400">
                  Rhythmic percussion and organic grooves blending traditional African elements with modern electronic production.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-800/30 to-cyan-800/30 p-6 rounded-xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 group">
                <Speaker className="w-10 h-10 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Organic Electronica</h3>
                <p className="text-sm text-gray-400">
                  Natural soundscapes merged with electronic synthesis, creating immersive sonic environments.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <Target className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Minimal Electronica</h3>
                <p className="text-sm text-gray-400">
                  Stripped-down compositions focusing on subtle details and space between sounds.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-800/30 to-rose-800/30 p-6 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
                <Sparkles className="w-10 h-10 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Experimental Club</h3>
                <p className="text-sm text-gray-400">
                  Avant-garde approaches to dance music, pushing boundaries of conventional club sounds.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <Volume2 className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Lo-Fi Grooves</h3>
                <p className="text-sm text-gray-400">
                  Vintage-inspired textures with contemporary rhythm programming for relaxed listening experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/30 to-gray-800/30 p-6 rounded-xl border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300 group">
                <Mic className="w-10 h-10 text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Ambient Layers</h3>
                <p className="text-sm text-gray-400">
                  Atmospheric soundscapes designed for meditation, focus work, and introspective listening.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-400 mb-6">
                Each genre represents a different facet of electronic music culture, from underground club scenes 
                to festival main stages, from intimate listening rooms to global radio airwaves. Our genre-fluid 
                approach allows artists to explore creative territories without being confined to single categories.
              </p>
              <Link 
                to="/gallery"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Full Catalog
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats-section" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Impact</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our decentralized approach to electronic music distribution has reached millions of listeners 
                worldwide, creating a truly global community of electronic music enthusiasts, DJs, and creators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-purple-300">
                  {playCount > 1000 ? '1M+' : `${Math.floor(playCount/1000)}K+`}
                </div>
                <div className="text-gray-400 mb-2">Monthly Plays</div>
                <p className="text-sm text-gray-500">
                  Across all streaming platforms, our music reaches over one million plays per month, 
                  demonstrating the global appetite for authentic, free non-commercial electronic music.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-blue-800/30 to-indigo-800/30 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <Music className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-300">
                  {trackCount}+
                </div>
                <div className="text-gray-400 mb-2">Original Tracks</div>
                <p className="text-sm text-gray-500">
                  Our catalog includes over 1,000 original electronic music tracks, with new releases 
                  added daily through our Fixer Daily Drops series and special collaborative projects.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-indigo-800/30 to-purple-800/30 rounded-2xl backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-indigo-300">
                  {platformCount}+
                </div>
                <div className="text-gray-400 mb-2">Streaming Platforms</div>
                <p className="text-sm text-gray-500">
                  Our music is distributed across 15+ major streaming platforms, ensuring accessibility 
                  for listeners regardless of their preferred music discovery and listening service.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Why These Numbers Matter</h3>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-6 rounded-xl border border-green-500/20">
                  <CheckCircle className="w-10 h-10 text-green-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-3">Artist Empowerment</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Every play represents an independent artist reaching listeners without traditional 
                    industry gatekeepers. Our shadow producer model ensures creative freedom while 
                    maintaining professional quality standards and global distribution reach.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 p-6 rounded-xl border border-blue-500/20">
                  <Heart className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-3">Community Building</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our global reach connects electronic music enthusiasts across cultural and 
                    geographic boundaries. DJs, content creators, and listeners worldwide discover 
                    and share authentic electronic sounds through our decentralized platform approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixer Creative License Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fixer Creative License (FCL)</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                All our music is available under the Fixer Creative License, a decentralized licensing model 
                that enables free non-commercial use while supporting artists through optional commercial licensing opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-8 rounded-2xl border border-green-500/20">
                <CheckCircle className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Free Non-Commercial Use</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Headphones className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">DJ Sets & Live Performances</h4>
                      <p className="text-gray-400 text-sm">Perfect for club nights, festival sets, radio shows, and live streaming performances on platforms like Twitch, YouTube, and Instagram Live.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Play className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Personal Video Content</h4>
                      <p className="text-gray-400 text-sm">Use in YouTube videos, TikTok content, Instagram Reels, and social media posts for personal, educational, or non-profit purposes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Radio className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Internet Radio & Podcasts</h4>
                      <p className="text-gray-400 text-sm">24/7 radio streams, cultural projects, underground stations, and podcast background music for independent creators and community broadcasters.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Educational & Research Use</h4>
                      <p className="text-gray-400 text-sm">Academic lectures, music production workshops, cultural research projects, and non-profit educational content creation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-2xl border border-orange-500/20">
                <Award className="w-12 h-12 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Commercial Licensing Available</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Brand Campaigns & Advertising</h4>
                      <p className="text-gray-400 text-sm">Television commercials, online advertising campaigns, branded content, product launches, and corporate promotional materials.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Play className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Film, TV & Gaming Sync</h4>
                      <p className="text-gray-400 text-sm">Movie soundtracks, television shows, video game soundtracks, streaming series, and interactive media experiences requiring sync licensing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Corporate Events & Hospitality</h4>
                      <p className="text-gray-400 text-sm">Business conferences, retail environments, restaurant/bar playlists, hotel lobbies, and corporate event entertainment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Custom Licensing Requests</h4>
                      <p className="text-gray-400 text-sm">We work with agencies, production companies, and brands to create custom licensing agreements that fit specific project needs and budgets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 p-8 rounded-2xl border border-purple-500/20 text-center">
              <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Why FCL Works Better</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Traditional music licensing often creates barriers between artists and listeners. 
                FCL removes these obstacles while still protecting artist rights and enabling sustainable 
                creative careers. This approach fosters genuine community building around electronic music culture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-300">Community First</h4>
                  <p className="text-sm text-gray-400">Artists and listeners build direct relationships without corporate intermediaries</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-300">Artist Protection</h4>
                  <p className="text-sm text-gray-400">Clear usage rights prevent exploitation while enabling creative freedom</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-purple-300">Global Access</h4>
                  <p className="text-sm text-gray-400">No geographic restrictions or platform exclusivity limitations</p>
                </div>
              </div>
              <Link 
                to="/terms"
                className="inline-flex items-center mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Full FCL Terms
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Distribution Network</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our music is available across 15+ major streaming platforms, ensuring accessibility 
                for electronic music enthusiasts worldwide. Each platform serves different communities 
                and listening preferences, from algorithm-driven discovery to curator-selected playlists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 overflow-hidden group animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-20 bg-gradient-to-r ${platform.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => togglePlay(platform.name)}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:scale-110"
                        aria-label={`Preview ${platform.name}`}
                      >
                        {currentlyPlaying === platform.name ? (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        ) : (
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        )}
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-4">
                      <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-white">{platform.monthly}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      aria-label={`Listen to Mr. Fixer Music on ${platform.name}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Listen Now
                    </a>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6">Platform-Specific Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-6 rounded-xl border border-green-500/20">
                  <Star className="w-10 h-10 text-green-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-2">Algorithm Discovery</h4>
                  <p className="text-gray-400 text-sm">Platforms like Spotify and Apple Music use advanced algorithms to recommend our tracks to listeners who enjoy similar electronic music genres.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 p-6 rounded-xl border border-blue-500/20">
                  <Users className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-2">Community Playlists</h4>
                  <p className="text-gray-400 text-sm">SoundCloud and YouTube enable direct community interaction, allowing fans to create and share playlists featuring our releases.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-500/20">
                  <Headphones className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-2">High-Quality Audio</h4>
                  <p className="text-gray-400 text-sm">Tidal, Qobuz, and Apple Music provide lossless and high-resolution audio options for audiophiles seeking premium sound quality.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-6 rounded-xl border border-orange-500/20">
                  <Radio className="w-10 h-10 text-orange-400 mb-4 mx-auto" />
                  <h4 className="font-bold mb-2">DJ Integration</h4>
                  <p className="text-gray-400 text-sm">Beatport offers specialized tools for DJs including BPM matching, key detection, and loop points for seamless mixing in professional sets.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-800/20 to-indigo-800/20 p-8 rounded-2xl border border-blue-500/20 text-center">
              <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Why Multi-Platform Distribution Matters</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Different communities discover music through different platforms. Electronic music DJs might prefer Beatport, 
                while casual listeners use Spotify. Content creators often source music from YouTube and SoundCloud. 
                Our comprehensive distribution ensures no community is excluded from accessing our sounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/downloads"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Direct Downloads
                </Link>
                <a 
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Listening
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about Mr. Fixer Music, our licensing, and how to use our tracks.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-purple-300">Can I use this music for free?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! All tracks are free for non-commercial use under our Fixer Creative License (FCL). 
                  Perfect for DJs, personal videos, livestreams, and educational content. Commercial use requires licensing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-blue-300">What is the Fixer Creative License (FCL)?</h3>
                <p className="text-gray-400 leading-relaxed">
                  FCL allows free non-commercial use with attribution when possible. It covers DJ sets, personal videos, 
                  internet radio, and educational purposes. Commercial projects like ads, films, or games require separate licensing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-indigo-300">How is this music created?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our shadow producer-led collective combines 50% human creativity with 50% AI assistance. Underground artists, 
                  DJs, beatmakers, and sound designers collaborate anonymously to create emotionally charged, club-ready music.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-purple-300">Who are the artists behind Mr. Fixer Music?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We maintain artist anonymity by design. Our collective includes underground producers, vocalists, and sound designers 
                  from multiple continents who choose to focus on music rather than personal branding. This approach eliminates ego and industry politics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-800/20 to-red-800/20 p-6 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-pink-300">How do I get commercial licensing?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Contact us through SoundCloud for commercial licensing inquiries. We work with brands, filmmakers, game developers, 
                  and agencies to create custom licensing agreements. Rates depend on usage scope, territory, and duration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-800/20 to-orange-800/20 p-6 rounded-xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-red-300">What genres do you produce?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're genre-fluid: Melodic House, Deep Techno, Afrobeat, Organic Electronica, Minimal Electronica, 
                  Experimental Club, Lo-Fi Grooves, and Ambient Layers. Each track is designed for specific moods and contexts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/20 to-yellow-800/20 p-6 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-orange-300">How often do you release new music?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We release new music daily through our Fixer Daily Drops series. Each volume contains multiple tracks exploring 
                  different themes, moods, and electronic music territories. Follow us on any platform to get notified of new releases.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/20 to-green-800/20 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold mb-3 text-yellow-300">Can I remix or sample your tracks?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Remixing and sampling for non-commercial use is allowed under FCL with proper attribution. For commercial remixes 
                  or releases containing our samples, you'll need commercial licensing. We encourage creative collaboration within our community.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Have more questions? We're here to help electronic music creators and enthusiasts understand how to best use our catalog.
              </p>
              <a 
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
              <Music className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Global Collective</h2>
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                Experience the future of electronic music. Free for creators, powerful for artists, 
                and accessible to everyone. Start exploring our catalog of 1,000+ original tracks today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Start Listening Free
                </a>
                <Link 
                  to="/gallery"
                  className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-6 h-6 mr-3" />
                  Explore Full Catalog
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No sign-up required • Free non-commercial use • Commercial licensing available
              </p>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </>
  );
};

export default App;