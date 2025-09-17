import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Music, Play, Download, ExternalLink, Globe, Headphones, Volume2, Users, ChevronUp, Menu, X, Radio, Zap, Target, Brain, Settings, BarChart3, Shield, Calendar, Hash, Layers, BookOpen, Mic2, AudioWaveform as Waveform, Database, MapPin, Search, Filter, Tag, Clock, TrendingUp, Workflow, GitBranch, Code, FileText, Star, Award, Lightbulb, RefreshCw, Activity } from 'lucide-react';
import SEOHead from './components/SEOHead';
import LazyImage from './components/LazyImage';
import CookieConsent, { CookiePreferences } from './components/CookieConsent';
import PrivacyPage from './components/PrivacyPage';
import LivePage from './components/LivePage';
import GalleryPage from './components/GalleryPage';
import BmpPage from './components/BmpPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DJCollectivePage from './components/DJCollectivePage';
import PrivateCollectionPage from './components/PrivateCollectionPage';
import DownloadsPage from './components/DownloadsPage';
import { homePageStructuredData } from './data/structuredData';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences | null>(null);
  const location = useLocation();
  const heroRef = useRef<HTMLElement>(null);

  // Animation sequence
  useEffect(() => {
    if (location.pathname === '/') {
      const timer1 = setTimeout(() => setAnimationStep(1), 300);
      const timer2 = setTimeout(() => setAnimationStep(2), 800);
      const timer3 = setTimeout(() => setAnimationStep(3), 1300);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [location.pathname]);

  // Check cookie consent and scroll to top visibility
  useEffect(() => {
    // Check cookie consent
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      try {
        const preferences = JSON.parse(consent);
        setCookiePreferences(preferences);
        setShowCookieConsent(false);
      } catch (error) {
        // Handle corrupted localStorage data by clearing it and showing consent banner
        localStorage.removeItem('cookieConsent');
        localStorage.removeItem('cookieConsentDate');
        setShowCookieConsent(true);
        setCookiePreferences({
          necessary: true,
          analytics: false,
          functional: false,
          marketing: false
        });
      }
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptAllCookies = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    setShowCookieConsent(false);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    // Enable Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted'
      });
    }
  };

  const handleRejectAllCookies = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    setCookiePreferences(onlyNecessary);
    setShowCookieConsent(false);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    // Disable Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied'
      });
    }
  };

  const handleManageCookiePreferences = (preferences: CookiePreferences) => {
    setCookiePreferences(preferences);
    setShowCookieConsent(false);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    // Update Google Analytics based on preferences
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'functionality_storage': preferences.functional ? 'granted' : 'denied',
        'personalization_storage': preferences.functional ? 'granted' : 'denied'
      });
    }
  };

  // Home page component
  const HomePage = () => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
    const [stats, setStats] = useState({
      tracks: 0,
      plays: 0,
      countries: 0,
      platforms: 0
    });

    // Animated counters
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            
            let step = 0;
            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              const easeOut = 1 - Math.pow(1 - progress, 3);
              
              setStats({
                tracks: Math.floor(1000 * easeOut),
                plays: Math.floor(1000000 * easeOut),
                countries: Math.floor(50 * easeOut),
                platforms: Math.floor(15 * easeOut)
              });
              
              if (step >= steps) clearInterval(timer);
            }, stepTime);
            
            observer.disconnect();
          }
        });
      });
      
      const statsElement = document.getElementById('stats-section');
      if (statsElement) observer.observe(statsElement);
      
      return () => observer.disconnect();
    }, []);

    return (
      <>
        <SEOHead
          title="Mr. Fixer Music — Global Collective | Free Non-Commercial Electronic Music | 1,000+ Tracks"
          description="Shadow producer-led global collective offering free non-commercial electronic music under Fixer Creative License (FCL). 1,000+ tracks across Melodic House, Deep Techno, Afrobeat, Organic Electronica genres. Perfect for DJs, curators, sync licensing. No faces. No names. No ego. 50% human, 50% AI, 100% Fixer."
          keywords="mr fixer music, global collective, shadow producer, free non commercial music, fixer creative license fcl, fixer daily drops, ai electronic music, melodic house, deep techno, afrobeat, organic electronica, minimal electronica, experimental club, lo-fi grooves, ambient layers, dj music, club ready music, borderless music, sync licensing, playlist ready music, underground artists, beatmakers, vocalists, sound designers, free dj music, free music downloads, creative commons alternative, royalty free alternative, electronic music catalog, decentralized music, no faces no names no ego, human ai collaboration, global music distribution"
          structuredData={homePageStructuredData}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* Hero Section */}
          <header ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-20" itemScope itemType="https://schema.org/MusicGroup">
            <div className="text-center max-w-6xl mx-auto z-10">
              <div className={`mb-8 transition-all duration-1000 ${animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl mx-auto relative">
                    <Music className="w-12 h-12 text-white animate-pulse" aria-hidden="true" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                      <Zap className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight" itemProp="name">
                  Mr. Fixer Music
                </h1>
              </div>
              
              <div className={`mb-8 transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light" itemProp="description">
                  Global Collective
                </p>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Shadow producer-led global collective offering <strong>free non-commercial electronic music</strong> under Fixer Creative License (FCL). 
                  <span className="text-purple-300"> 50% human, 50% AI, 100% Fixer.</span> Perfect for DJs, curators & sync licensing.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-purple-300 mb-8">
                  <span className="flex items-center"><Hash className="w-5 h-5 mr-2" />No faces</span>
                  <span className="flex items-center"><Hash className="w-5 h-5 mr-2" />No names</span>
                  <span className="flex items-center"><Hash className="w-5 h-5 mr-2" />No ego</span>
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <a 
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen to Mr. Fixer Music on SoundCloud"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" aria-hidden="true" />
                  Listen Now
                </a>
                <a 
                  href="/downloads"
                  className="group border-2 border-purple-500 hover:bg-purple-500 hover:border-purple-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" aria-hidden="true" />
                  Free Downloads
                </a>
              </div>
            </div>
          </header>

          {/* Fixer Daily Drops Architecture */}
          <section className="py-20 bg-black/20" itemScope itemType="https://schema.org/CreativeWorkSeries">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                      <Database className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent" itemProp="name">
                    Fixer Daily Drops (FDD)
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                    The mainline catalog architecture built around numbered tracks grouped into themed volumes. 
                    Each track carries an FDD ID and belongs to exactly one volume, creating a continuously expanding musical universe.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-6 rounded-2xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                    <Hash className="w-12 h-12 text-orange-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-center">FDD Numbering</h3>
                    <p className="text-gray-300 text-sm text-center">Always starts at 1 — No Zero in Front. Each track gets a unique FDD ID (e.g., FDD1141) for precision tracking and attribution.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-6 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group">
                    <Layers className="w-12 h-12 text-red-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-center">Volume Structure</h3>
                    <p className="text-gray-300 text-sm text-center">Themed collections of 10 tracks with coherent narrative arcs. Each volume explores geography, emotions, or sonic territories.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-800/30 to-purple-800/30 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
                    <Filter className="w-12 h-12 text-pink-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-center">Cross-Collections</h3>
                    <p className="text-gray-300 text-sm text-center">Playlists cut by BPM, mood, country, energy, and use case, enabling lateral navigation without volume knowledge.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                    <Radio className="w-12 h-12 text-purple-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-center">Fixer Radio</h3>
                    <p className="text-gray-300 text-sm text-center">Curated live and archival sets showcasing catalog depth, DJ-friendliness, and thematic coherence across volumes.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-800/20 to-red-800/20 p-8 rounded-2xl border border-orange-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-orange-300 text-center">Entity-First Architecture</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <BookOpen className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Albums, Tracks & Collective</h4>
                            <p className="text-sm text-gray-300 text-center">First-class entities with structured metadata for search engines and streaming platforms</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Search className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Frictionless Discovery</h4>
                            <p className="text-sm text-gray-300 text-center">Fast discovery by BPM, mood, genre, country, and use case (livestreams, radio, events)</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Radical Transparency</h4>
                            <p className="text-sm text-gray-300 text-center">Clear process and rights so users know exactly what they can do and how to attribute</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-orange-300 text-center">Industrial-Grade Output</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Quality with Consistency</h4>
                            <p className="text-sm text-gray-300 text-center">Standardized workflows and quality gates make daily scale feasible without losing human taste</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Workflow className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Distribution-Aware Craft</h4>
                            <p className="text-sm text-gray-300 text-center">Composed, mixed, and packaged for modern discovery realities (TikTok, Shorts, playlists, DJ sets)</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <RefreshCw className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-center">Repeatable Excellence</h4>
                            <p className="text-sm text-gray-300 text-center">Human-AI symbiosis amplifies intent without replacing taste, enabling sustainable daily output</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 bg-black/10">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-center">🎬 Visual Experience</h2>
                  <p className="text-xl text-gray-400 text-center">Immerse yourself in the Mr. Fixer Music universe</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-8 rounded-2xl border border-purple-500/20" itemScope itemType="https://schema.org/VideoObject">
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      itemProp="contentUrl"
                    >
                      <source src="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                      <a href="https://res.cloudinary.com/dzm47vpw8/video/upload/v1757174346/Untitled_design_uxzba1.mp4">Download the video</a>
                    </video>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400 text-center" itemProp="description">
                      Mr. Fixer Music Visual Experience - Global Collective Showcase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Production Methodology */}
          <section className="py-20 bg-black/20" itemScope itemType="https://schema.org/AboutPage">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <Brain className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent" itemProp="name">
                    🧠 The Method
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                    End-to-End Production Workflow: From concept to catalog, our methodology combines human creativity with AI assistance 
                    to deliver industrial-grade output quality while maintaining emotional depth and artistic integrity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                    <Lightbulb className="w-12 h-12 text-purple-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">A. Concept & Planning</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• Define volume theme (narrative, geography, instrument palette)</p>
                      <p className="text-center">• Draft 10-track storyboard with BPM/mood windows</p>
                      <p className="text-center">• Curate reference textures without derivative risk</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                    <Waveform className="w-12 h-12 text-blue-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">B. Sound Design & Composition</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• AI synth engines spark motifs and rhythmic combinations</p>
                      <p className="text-center">• Human arrangement structures tension and negative space</p>
                      <p className="text-center">• Performance feel adds micro-timing and velocity curves</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                    <Settings className="w-12 h-12 text-indigo-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">C. Mixing & Mastering</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• Gain staging with healthy headroom maintenance</p>
                      <p className="text-center">• Spectral clarity and smart sidechain compression</p>
                      <p className="text-center">• Platform-aware loudness (-9 to -7 LUFS integrated)</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                    <Code className="w-12 h-12 text-green-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">D. Metadata & Packaging</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• Complete track metadata: FDD ID, ISRC, BPM, key, mood</p>
                      <p className="text-center">• Predictable file naming for automation</p>
                      <p className="text-center">• Structured album data with theme overviews</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
                    <Award className="w-12 h-12 text-yellow-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">E. Quality Gates</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• Two-human ear-panel check minimum</p>
                      <p className="text-center">• Duplication scan ensures uniqueness</p>
                      <p className="text-center">• Multi-device test: phone, car, headphones, monitors</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                    <TrendingUp className="w-12 h-12 text-orange-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">F. Release & Distribution</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p className="text-center">• Synchronized metadata across streaming platforms</p>
                      <p className="text-center">• Discovery assets: hooks, loops, stems</p>
                      <p className="text-center">• Catalog site with structured data</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-purple-300 text-center">🎯 Core Production Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <GitBranch className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-center">Human-AI Symbiosis</h4>
                          <p className="text-sm text-gray-300 text-center">AI amplifies human intent — not replace it. Human taste governs theme, curation, and final acceptance.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RefreshCw className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-center">Repeatable Excellence</h4>
                          <p className="text-sm text-gray-300 text-center">Standardized workflows and quality gates make daily scale feasible without compromising artistry.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-center">Permission Clarity</h4>
                          <p className="text-sm text-gray-300 text-center">The FCL removes ambiguity: free non-commercial use with clean commercial licensing path.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-center">Entity Building</h4>
                          <p className="text-sm text-gray-300 text-center">Albums, tracks, and collective as first-class entities with structured metadata for discovery.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Genre Exploration */}
          <section className="py-20" itemScope itemType="https://schema.org/MusicAlbum">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent" itemProp="name">
                    🎵 Genre Architecture
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                    Eight core electronic music styles form our sonic foundation. Each genre serves specific contexts and communities, 
                    from underground club spaces to ambient listening environments, ensuring comprehensive coverage for all creative needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    {
                      name: "Melodic House",
                      icon: <Headphones className="w-8 h-8" />,
                      gradient: "from-blue-500 to-cyan-500",
                      description: "Deep, progressive house rhythms with emotional melodic arcs. Perfect for club peak-time moments, rooftop sessions, and festival mainstages. Builds community through shared euphoric experiences.",
                      bpm: "122-126 BPM",
                      context: "Club peak-time, festivals, rooftop sessions"
                    },
                    {
                      name: "Deep Techno",
                      icon: <Zap className="w-8 h-8" />,
                      gradient: "from-purple-500 to-pink-500",
                      description: "Industrial, minimal, and driving techno pulses. Hypnotic patterns that command underground spaces, late-night warehouses, and immersive dance floor journeys.",
                      bpm: "128-132 BPM",
                      context: "Underground clubs, warehouse parties, late-night sets"
                    },
                    {
                      name: "Afrobeat",
                      icon: <Globe className="w-8 h-8" />,
                      gradient: "from-orange-500 to-red-500",
                      description: "Modern electronic fusion with traditional African rhythmic patterns. Celebrates global musical heritage while pushing boundary innovation in contemporary electronic production.",
                      bpm: "105-118 BPM",
                      context: "Cultural celebrations, world music festivals, fusion sets"
                    },
                    {
                      name: "Organic Electronica",
                      icon: <Volume2 className="w-8 h-8" />,
                      gradient: "from-green-500 to-emerald-500",
                      description: "Natural textures meet electronic precision. Live instrumentation, field recordings, and analog warmth create intimate listening experiences and sophisticated background ambience.",
                      bpm: "100-115 BPM", 
                      context: "Cafes, galleries, organic events, yoga sessions"
                    },
                    {
                      name: "Minimal Electronica",
                      icon: <Music className="w-8 h-8" />,
                      gradient: "from-gray-500 to-slate-500",
                      description: "Less-is-more philosophy with precise sound placement. Negative space becomes musical element. Appeals to intellectual listeners and minimalist aesthetic environments.",
                      bpm: "90-110 BPM",
                      context: "Art installations, focused work, contemplative spaces"
                    },
                    {
                      name: "Experimental Club",
                      icon: <Radio className="w-8 h-8" />,
                      gradient: "from-yellow-500 to-orange-500",
                      description: "Boundary-pushing dance floor innovations. Unusual time signatures, unconventional structures, and genre-blending approaches for adventurous DJs and forward-thinking crowds.",
                      bpm: "Variable BPM",
                      context: "Experimental venues, artist showcases, avant-garde events"
                    },
                    {
                      name: "Lo-Fi Grooves",
                      icon: <Users className="w-8 h-8" />,
                      gradient: "from-pink-500 to-rose-500",
                      description: "Nostalgic warmth meets modern groove. Vintage-inspired textures with contemporary rhythm structures. Perfect for casual listening, study sessions, and intimate gatherings.",
                      bpm: "85-100 BPM",
                      context: "Study sessions, casual listening, intimate gatherings"
                    },
                    {
                      name: "Ambient Layers",
                      icon: <Activity className="w-8 h-8" />,
                      gradient: "from-indigo-500 to-purple-500",
                      description: "Atmospheric soundscapes for immersive experiences. Cinematic scope with subtle rhythmic elements. Supports meditation, creative work, and transcendent listening journeys.",
                      bpm: "60-80 BPM",
                      context: "Meditation, creative work, cinematic applications"
                    }
                  ].map((genre, index) => (
                    <div 
                      key={genre.name}
                      className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 overflow-hidden`}
                      itemProp="genre"
                    >
                      <div className={`h-20 bg-gradient-to-r ${genre.gradient} flex items-center justify-center`}>
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                          {genre.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors text-center">
                          {genre.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed text-center">
                          {genre.description}
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-center text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {genre.bpm}
                          </div>
                          <div className="text-gray-500 text-center">
                            <strong>Context:</strong> {genre.context}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-800/20 to-green-800/20 p-8 rounded-2xl border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">🎚️ Distribution-Aware Craft</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Modern Discovery</h4>
                      <p className="text-sm text-gray-300 text-center">Tracks crafted for TikTok, YouTube Shorts, and algorithm-driven playlists with attention-grabbing intros and memorable hooks.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">DJ-Ready Structure</h4>
                      <p className="text-sm text-gray-300 text-center">Clear intro/break/build/drop/outro sections with beatmatching-friendly transitions and energy curve management.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Multi-Context Usage</h4>
                      <p className="text-sm text-gray-300 text-center">Optimized for both focused listening and background ambience, club systems and phone speakers, live performance and sync licensing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section id="stats-section" className="py-20 bg-black/20" itemScope itemType="https://schema.org/Dataset">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent" itemProp="name">
                  📊 By the Numbers
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                  Our metrics reflect commitment to consistent output, global reach, and community building. Each number represents 
                  artists empowered, creators supported, and communities connected through borderless electronic music distribution.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  {[
                    { 
                      number: stats.tracks, 
                      suffix: '+', 
                      label: 'Original Tracks',
                      description: 'Daily drops creating an ever-expanding catalog of genre-fluid electronic music for global creative communities',
                      icon: <Music className="w-8 h-8" />,
                      gradient: 'from-purple-500 to-blue-500'
                    },
                    { 
                      number: stats.plays, 
                      suffix: 'M+', 
                      label: 'Monthly Plays',
                      description: 'Consistent streaming growth across 15+ platforms, proving demand for quality free non-commercial music',
                      icon: <Play className="w-8 h-8" />,
                      gradient: 'from-blue-500 to-green-500'
                    },
                    { 
                      number: stats.countries, 
                      suffix: '+', 
                      label: 'Countries Reached',
                      description: 'Global distribution breaking down geographic and cultural barriers through universal language of electronic music',
                      icon: <Globe className="w-8 h-8" />,
                      gradient: 'from-green-500 to-yellow-500'
                    },
                    { 
                      number: stats.platforms, 
                      suffix: '+', 
                      label: 'Streaming Platforms',
                      description: 'Multi-platform presence ensuring accessibility for listeners regardless of their preferred streaming service',
                      icon: <TrendingUp className="w-8 h-8" />,
                      gradient: 'from-yellow-500 to-red-500'
                    }
                  ].map((stat, index) => (
                    <div key={index} className="group" itemProp="measurementTechnique">
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.number.toLocaleString()}{stat.suffix}
                      </div>
                      <div className="text-lg font-semibold text-gray-300 mb-3">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-400 leading-relaxed text-center">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-6 rounded-2xl border border-purple-500/20">
                    <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-purple-300 text-center">Artist Empowerment</h3>
                    <p className="text-gray-300 text-sm text-center">Our shadow producer model enables underground artists to contribute anonymously while retaining creative control and benefiting from collective distribution power.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-800/20 to-green-800/20 p-6 rounded-2xl border border-blue-500/20">
                    <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-blue-300 text-center">Community Building</h3>
                    <p className="text-gray-300 text-sm text-center">Free non-commercial licensing builds trust and goodwill, creating network effects where satisfied users become advocates and repeat collaborators.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-800/20 to-yellow-800/20 p-6 rounded-2xl border border-green-500/20">
                    <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-green-300 text-center">Platform Growth</h3>
                    <p className="text-gray-300 text-sm text-center">Multi-platform strategy ensures discoverability across listener preferences while maintaining consistent brand identity and licensing clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fixer Creative License (FCL) */}
          <section className="py-20" itemScope itemType="https://schema.org/CreativeWork">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                      <Shield className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent" itemProp="name">
                    🛡️ Fixer Creative License (FCL)
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                    Permission clarity that removes ambiguity: free non-commercial use with straightforward commercial licensing path. 
                    The FCL builds trust and goodwill while protecting commercial value for partners who need exclusivity and indemnity.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Free Non-Commercial Uses */}
                  <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-8 rounded-2xl border border-green-500/20" itemProp="usageInfo">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-green-300">Free Non-Commercial Uses</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-200 mb-3 text-center">🎧 DJ Sets & Live Performances</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">Complete freedom for club nights, festival sets, livestreams without monetization, and public playing at non-profit events. Perfect for building DJ reputation and community engagement.</p>
                        <div className="bg-green-600/20 p-3 rounded-lg">
                          <p className="text-xs text-green-200 text-center">
                            <strong>Examples:</strong> Underground club nights, charity fundraisers, community festivals, Twitch DJ streams, SoundCloud mixes, practice sessions, house parties
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-200 mb-3 text-center">📹 Personal Video Content</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">YouTube videos, TikTok content, Instagram Reels, and personal projects without commercial intent. Ideal for content creators building audience and personal brand.</p>
                        <div className="bg-green-600/20 p-3 rounded-lg">
                          <p className="text-xs text-green-200 text-center">
                            <strong>Examples:</strong> Vlogs, art videos, personal documentaries, social media posts, creative projects, dance videos, travel content
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-200 mb-3 text-center">📻 Internet Radio & Educational</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">24/7 streams, cultural projects, underground stations, educational workshops, and academic presentations. Supports community media and knowledge sharing.</p>
                        <div className="bg-green-600/20 p-3 rounded-lg">
                          <p className="text-xs text-green-200 text-center">
                            <strong>Examples:</strong> College radio, community stations, educational podcasts, cultural programming, workshop backgrounds, academic presentations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Licensing */}
                  <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-8 rounded-2xl border border-orange-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">$</span>
                      </div>
                      <h3 className="text-2xl font-bold text-orange-300">Commercial Licensing Available</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-orange-200 mb-3 text-center">🏢 Brand & Advertising</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">Advertisements, branded content, sponsorships, and corporate events require commercial licensing. We provide exclusivity, indemnity, and cue-sheet compliance for professional use.</p>
                        <div className="bg-orange-600/20 p-3 rounded-lg">
                          <p className="text-xs text-orange-200 text-center">
                            <strong>Process:</strong> Contact via SoundCloud with project details, usage scope, territory, and timeline for custom licensing terms
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-200 mb-3 text-center">🎬 Film, TV & Games</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">Sync licensing for movies, television, video games, and commercial productions. Professional-grade clearance with publisher protections and broadcast compliance.</p>
                        <div className="bg-orange-600/20 p-3 rounded-lg">
                          <p className="text-xs text-orange-200 text-center">
                            <strong>Benefits:</strong> Fast clearance, competitive rates, stems availability, custom edits, and professional music supervision support
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-200 mb-3 text-center">💰 Monetized Platforms</h4>
                        <p className="text-sm text-gray-300 mb-3 text-center">YouTube monetization, Spotify playlists with revenue sharing, and commercial streaming platforms require proper licensing to ensure creator and platform compliance.</p>
                        <div className="bg-orange-600/20 p-3 rounded-lg">
                          <p className="text-xs text-orange-200 text-center">
                            <strong>Coverage:</strong> Content ID protection, revenue sharing agreements, platform policy compliance, and creator support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-800/20 to-purple-800/20 p-8 rounded-2xl border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">🤝 Why This Licensing Model Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Trust & Goodwill</h4>
                      <p className="text-sm text-gray-300 text-center">Free non-commercial access builds community loyalty and word-of-mouth growth, creating network effects that benefit all participants.</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Clear Boundaries</h4>
                      <p className="text-sm text-gray-300 text-center">Explicit commercial licensing removes confusion and provides proper compensation for professional usage while protecting creator rights.</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Sustainable Growth</h4>
                      <p className="text-sm text-gray-300 text-center">Freemium model expands audience reach while capturing commercial value where it actually exists, enabling long-term creative sustainability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Distribution */}
          <section className="py-20 bg-black/20" itemScope itemType="https://schema.org/WebSite">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent" itemProp="name">
                    🌐 Global Distribution Network
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
                    Strategic multi-platform presence ensures accessibility for listeners regardless of preferred streaming service. 
                    Synchronized metadata and consistent brand identity across 15+ platforms maximizes discoverability and community reach.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                  {[
                    { 
                      name: 'Spotify', 
                      plays: '400K+',
                      description: 'Algorithmic playlist placement and Daily Mix integration',
                      url: 'https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8',
                      gradient: 'from-green-500 to-green-600',
                      delay: '0s'
                    },
                    { 
                      name: 'Apple Music', 
                      plays: '250K+',
                      description: 'Premium sound quality and editorial playlist consideration',
                      url: 'https://music.apple.com/us/artist/mr-fixer-music/1815615410',
                      gradient: 'from-gray-600 to-gray-700',
                      delay: '0.1s'
                    },
                    { 
                      name: 'SoundCloud', 
                      plays: '200K+',
                      description: 'Direct fan engagement and underground community building',
                      url: 'https://soundcloud.com/mrfixermusic',
                      gradient: 'from-orange-500 to-orange-600',
                      delay: '0.2s'
                    },
                    { 
                      name: 'YouTube Music', 
                      plays: '150K+',
                      description: 'Video content integration and algorithm-driven discovery',
                      url: 'https://www.youtube.com/@MrFixermusic',
                      gradient: 'from-red-500 to-red-600',
                      delay: '0.3s'
                    },
                    { 
                      name: 'Amazon Music', 
                      plays: '100K+',
                      description: 'Voice-activated smart device integration and Prime inclusion',
                      url: 'https://www.amazon.com/music/player/artists/B0F9F7WMQB/mr-fixer-music',
                      gradient: 'from-blue-500 to-blue-600',
                      delay: '0.4s'
                    },
                    { 
                      name: 'Deezer', 
                      plays: '80K+',
                      description: 'European market focus with Flow algorithm optimization',
                      url: 'https://www.deezer.com/us/artist/324433381',
                      gradient: 'from-purple-500 to-purple-600',
                      delay: '0.5s'
                    },
                    { 
                      name: 'Tidal', 
                      plays: '60K+',
                      description: 'Hi-fi audio quality and artist-focused platform positioning',
                      url: 'https://tidal.com/browse/artist/60412462',
                      gradient: 'from-indigo-500 to-indigo-600',
                      delay: '0.6s'
                    },
                    { 
                      name: 'Audiomack', 
                      plays: '50K+',
                      description: 'Hip-hop and electronic crossover community engagement',
                      url: 'https://audiomack.com/mrfixermusic',
                      gradient: 'from-yellow-500 to-yellow-600',
                      delay: '0.7s'
                    },
                    { 
                      name: 'Pandora', 
                      plays: '40K+',
                      description: 'Radio-style discovery through Music Genome Project',
                      url: 'https://www.pandora.com/artist/mr-fixer-music/ARcdhmP7t3n25Jc',
                      gradient: 'from-pink-500 to-pink-600',
                      delay: '0.8s'
                    },
                    { 
                      name: 'Beatport', 
                      plays: '30K+',
                      description: 'DJ-focused distribution and electronic music specialist platform',
                      url: 'https://www.beatport.com/artist/mr-fixer-music/1316362',
                      gradient: 'from-cyan-500 to-cyan-600',
                      delay: '0.9s'
                    }
                  ].map((platform, index) => (
                    <div
                      key={platform.name}
                      className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-fade-in`}
                      style={{ animationDelay: platform.delay }}
                      itemProp="url"
                    >
                      <div className={`h-16 bg-gradient-to-r ${platform.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="text-white font-bold text-sm relative z-10">{platform.name}</span>
                      </div>
                      <div className="p-4">
                        <div className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors text-center">
                          {platform.plays}
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed mb-3 text-center">
                          {platform.description}
                        </p>
                        <div className="w-full bg-gray-700 rounded-full h-1 mb-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${platform.gradient} transform transition-all duration-1000 group-hover:translate-x-0`}
                            style={{ 
                              width: '70%',
                              transform: 'translateX(-100%)',
                            }}
                          ></div>
                        </div>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center group-hover:underline"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Listen
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-800/20 to-purple-800/20 p-8 rounded-2xl border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">🎯 Multi-Platform Strategy Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Maximum Discoverability</h4>
                      <p className="text-sm text-gray-300 text-center">Each platform's unique algorithm and audience increases chances of organic discovery by different listener communities and music tastemakers.</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Audience Diversification</h4>
                      <p className="text-sm text-gray-300 text-center">Different platforms serve different demographics, genres, and geographic regions, ensuring comprehensive global reach and community building.</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-blue-300 mb-2 text-center">Platform Independence</h4>
                      <p className="text-sm text-gray-300 text-center">Multi-platform presence protects against algorithm changes, policy shifts, and platform risks while maintaining consistent brand identity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    🗺️ Roadmap Highlights
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Strategic initiatives expanding the Mr. Fixer Music ecosystem. Each milestone enhances creator experience, 
                    community engagement, and global accessibility while maintaining core principles of quality and transparency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                    <Waveform className="w-12 h-12 text-purple-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">🎛️ Stems & Sample Packs</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      Non-commercial packs with commercial upgrade path. Individual track stems for remixing, 
                      plus curated sample collections organized by BPM and key for producers and DJs.
                    </p>
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <p className="text-xs text-purple-200 text-center">
                        <strong>Impact:</strong> Drives shares, remixes, and deeper engagement with source material
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
                    <Headphones className="w-12 h-12 text-pink-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">🎧 DJ Tooling Suite</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      Pre-cut loops, extended mixes, and Rekordbox/Serato cue files for top tracks. 
                      Professional DJ preparation tools that integrate seamlessly with existing workflows.
                    </p>
                    <div className="bg-pink-600/20 p-3 rounded-lg">
                      <p className="text-xs text-pink-200 text-center">
                        <strong>Features:</strong> Beatgrid alignment, hot cues, loop points, and energy markers
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-800/30 to-orange-800/30 p-8 rounded-2xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group">
                    <MapPin className="w-12 h-12 text-red-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">🌍 Fixerland Music Map</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      Browsable atlas of country and city-themed collections layered by BPM and energy. 
                      Interactive geographic discovery tool connecting music with cultural contexts.
                    </p>
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <p className="text-xs text-red-200 text-center">
                        <strong>Experience:</strong> Visual exploration with sonic storytelling and cultural connections
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-800/30 to-yellow-800/30 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                    <Users className="w-12 h-12 text-orange-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">👥 Creator Portal</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      One-click attribution copy, license wizards, playlist requests, and usage spotlights. 
                      Streamlined interface for content creators to properly credit and utilize catalog.
                    </p>
                    <div className="bg-orange-600/20 p-3 rounded-lg">
                      <p className="text-xs text-orange-200 text-center">
                        <strong>Tools:</strong> Attribution generators, usage tracking, and community showcases
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-800/30 to-green-800/30 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
                    <Radio className="w-12 h-12 text-yellow-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">📻 Live Layer Expansion</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      Periodic radio shows and mix series that canonize catalog moments and amplify discovery spikes. 
                      Curated broadcasting that contextualizes releases within larger musical narratives.
                    </p>
                    <div className="bg-yellow-600/20 p-3 rounded-lg">
                      <p className="text-xs text-yellow-200 text-center">
                        <strong>Content:</strong> Artist spotlights, volume deep-dives, and community mix features
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                    <Brain className="w-12 h-12 text-green-400 mb-4 group-hover:animate-pulse" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-4 text-center">🤖 AI Production Tools</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      Advanced human-AI collaboration interfaces for community producers. 
                      Democratizing access to professional-grade composition and arrangement tools.
                    </p>
                    <div className="bg-green-600/20 p-3 rounded-lg">
                      <p className="text-xs text-green-200 text-center">
                        <strong>Vision:</strong> Creative amplification while maintaining human artistic control
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-purple-800/20 to-blue-800/20 p-8 rounded-2xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-purple-300 text-center">🎯 Strategic Development Phases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-purple-300 mb-2 text-center">Phase 1: Creator Tools</h4>
                      <p className="text-sm text-gray-300 text-center">Stems, samples, and DJ preparation tools that enhance existing catalog utility and deepen community engagement.</p>
                    </div>
                    <div>
                      <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-purple-300 mb-2 text-center">Phase 2: Discovery Innovation</h4>
                      <p className="text-sm text-gray-300 text-center">Geographic mapping, creator portals, and enhanced search that make catalog navigation intuitive and inspiring.</p>
                    </div>
                    <div>
                      <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-purple-300 mb-2 text-center">Phase 3: Community Platform</h4>
                      <p className="text-sm text-gray-300 text-center">Live programming, AI tools, and collaborative features that transform passive consumption into active participation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-black/20" itemScope itemType="https://schema.org/FAQPage">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    ❓ Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Common questions about our licensing, creation process, and community approach. 
                    Clear answers that help creators, DJs, and collaborators understand how to engage with the Mr. Fixer Music ecosystem.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "Can I use this music for free in my DJ sets and personal videos?",
                      answer: "Yes! All tracks are completely free for non-commercial use under our Fixer Creative License (FCL). This includes DJ sets, personal YouTube videos, TikTok content, livestreams without monetization, internet radio shows, educational workshops, and community events. No permission needed—just proper attribution when possible. The free license covers personal creative expression, community building, and cultural sharing."
                    },
                    {
                      question: "How does the 50% human, 50% AI production process actually work?",
                      answer: "Our shadow producer-led collective combines human creativity with AI assistance at every stage. AI helps generate initial motifs, rhythmic patterns, and sonic textures, but human taste governs theme selection, arrangement decisions, emotional arc development, and final quality acceptance. Underground artists, DJs, beatmakers, and sound designers contribute anonymously while maintaining creative control. The result is industrial-grade output quality that retains human soul and musical intelligence."
                    },
                    {
                      question: "What makes the Fixer Creative License (FCL) different from Creative Commons?",
                      answer: "FCL is specifically designed for the modern music distribution landscape. While inspired by Creative Commons BY-NC, FCL provides clearer guidelines for contemporary use cases like social media content, DJ performances, and streaming platform policies. It removes ambiguity around monetization, attribution, and commercial boundaries while offering a straightforward path to commercial licensing for brands, films, and agencies who need exclusivity and indemnity."
                    },
                    {
                      question: "Why do you maintain anonymity and the 'shadow producer' approach?",
                      answer: "Anonymity enables pure focus on the music without ego, personality cults, or social media marketing distractions. The shadow producer model allows underground artists to contribute without career risk, industry politics, or geographic limitations. It also creates a truly collective identity where individual tracks matter more than individual personalities. This approach produces more honest, boundary-pushing music while building a sustainable community of creators who prioritize artistic output over personal branding."
                    },
                    {
                      question: "How do I get commercial licensing for my brand, film, or game project?",
                      answer: "Contact us via SoundCloud with detailed project information: intended use, duration, territory, distribution platform, and timeline. We provide fast turnaround for commercial licensing with competitive rates, stems availability, custom edits, and professional music supervision support. Our commercial licensing includes exclusivity options, indemnity coverage, cue-sheet compliance, and Content ID protection for platforms that require proper clearance."
                    },
                    {
                      question: "What's the difference between Melodic House and Deep Techno in your catalog?",
                      answer: "Melodic House (122-126 BPM) focuses on emotional melodic arcs and progressive structures perfect for club peak-time moments and festival mainstages. Deep Techno (128-132 BPM) emphasizes hypnotic patterns, industrial textures, and driving pulses designed for underground spaces and immersive dance floor journeys. Both serve different energy contexts and mixing opportunities, allowing DJs to craft complete emotional narratives across BPM ranges and crowd dynamics."
                    },
                    {
                      question: "How does the Fixer Daily Drops (FDD) numbering system work?",
                      answer: "Every track gets a unique FDD ID starting from 1 (no zero prefix). Each track belongs to exactly one themed volume of approximately 10 tracks. For example, FDD1141 might be from Volume 116 exploring 'Echoes of the Infinite.' This system enables precision tracking, attribution, and cross-referencing while maintaining thematic coherence within volumes. The numbering creates a continuous timeline of releases that fans and DJs can follow and reference easily."
                    },
                    {
                      question: "Can I remix, edit, or create derivative works from your tracks?",
                      answer: "Non-commercial remixes and edits are encouraged under FCL—perfect for DJ tools, personal creative projects, and community sharing. However, commercial release of derivative works requires separate licensing. We love seeing creative interpretations and can often provide stems or isolated elements for serious remix projects. For commercial remix releases or sample clearance, contact us with your project details and intended distribution plans."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300" itemScope itemType="https://schema.org/Question">
                      <h3 className="text-xl font-bold text-yellow-300 mb-4 leading-tight" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-gray-300 leading-relaxed" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20" itemScope itemType="https://schema.org/Action">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-16 rounded-3xl backdrop-blur-sm border border-purple-500/20 shadow-2xl">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Music className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent" itemProp="name">
                    Join the Global Collective
                  </h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12" itemProp="description">
                    Mr. Fixer Music reimagines sound as a public, emotional currency — flowing freely, 
                    outside of corporate ownership. Each track is a timestamped block in an ever-growing musical chain.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="https://soundcloud.com/mrfixermusic"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="target"
                      className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center"
                    >
                      <Play className="w-6 h-6 mr-3 group-hover:animate-spin" aria-hidden="true" />
                      Start Listening
                    </a>
                    <a 
                      href="/downloads"
                      className="group border-3 border-purple-500 hover:bg-purple-500 hover:border-purple-400 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center"
                    >
                      <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" aria-hidden="true" />
                      Free Downloads
                    </a>
                  </div>
                  <div className="mt-12 pt-8 border-t border-purple-500/20">
                    <p className="text-lg text-purple-300 italic">
                      "Mr. Fixer is not a person – it's a sound system for the free world."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-white hover:text-purple-300 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg">Mr. Fixer Music</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-purple-300 transition-colors">Home</Link>
              <Link to="/gallery" className="hover:text-purple-300 transition-colors">Gallery</Link>
              <Link to="/live" className="hover:text-purple-300 transition-colors">Live</Link>
              <Link to="/downloads" className="hover:text-purple-300 transition-colors">Downloads</Link>
              <Link to="/bmp" className="hover:text-purple-300 transition-colors">BMP</Link>
              <Link to="/terms" className="hover:text-purple-300 transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-purple-300 transition-colors">Privacy</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/live" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live
              </Link>
              <Link 
                to="/downloads" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link 
                to="/bmp" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BMP
              </Link>
              <Link 
                to="/terms" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link 
                to="/privacy" 
                className="block py-2 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <CookieConsent 
          onAcceptAll={handleAcceptAllCookies}
          onRejectAll={handleRejectAllCookies}
          onManagePreferences={handleManageCookiePreferences}
        />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/bmp" element={<BmpPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/dj-collective" element={<DJCollectivePage />} />
          <Route path="/private-collection" element={<PrivateCollectionPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;