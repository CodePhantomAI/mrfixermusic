import { useState, useEffect, useRef } from 'react';
import {
  Play, Music, Headphones, Globe, Zap, Database,
  Shield, Target, Brain, Hash, Radio, Check, X,
  TrendingUp, Users, Volume2, Clock, Cpu, Activity
} from 'lucide-react';
import SEOHead from './SEOHead';
import { homePageStructuredData } from '../data/structuredData';

export default function HomePage() {
  const [animationStep, setAnimationStep] = useState(0);
  const [stats, setStats] = useState({ tracks: 0, streams: 0, shazams: 0, countries: 0 });
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 200);
    const timer2 = setTimeout(() => setAnimationStep(2), 600);
    const timer3 = setTimeout(() => setAnimationStep(3), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setStats({
              tracks: Math.floor(2100 * easeOut),
              streams: Math.floor(2 * easeOut * 10) / 10,
              shazams: Math.floor(16 * easeOut),
              countries: Math.floor(160 * easeOut),
            });
            if (step >= steps) clearInterval(timer);
          }, stepTime);
          observer.disconnect();
        }
      });
    });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const genres = [
    { name: 'Melodic House', bpm: '122-126 BPM', description: 'Emotional arcs for peak-time moments', icon: <Headphones className="w-5 h-5" />, color: 'cyan' },
    { name: 'Deep Techno', bpm: '128-132 BPM', description: 'Industrial pulses for underground spaces', icon: <Zap className="w-5 h-5" />, color: 'magenta' },
    { name: 'Afrobeat', bpm: '105-118 BPM', description: 'Modern fusion with traditional rhythms', icon: <Globe className="w-5 h-5" />, color: 'orange' },
    { name: 'Lo-Fi Grooves', bpm: '85-100 BPM', description: 'Nostalgic textures for focus and study', icon: <Volume2 className="w-5 h-5" />, color: 'green' },
  ];

  return (
    <>
      <SEOHead
        title="Mr. Fixer Music | Global Collective - Industrial Electronic Music"
        description="Shadow producer-led collective offering industrial-grade electronic music. Free for non-commercial use (FCL). 2,100+ tracks, 2M+ streams, 160+ countries. Perfect for creators, DJs & sync."
        keywords="mr fixer music, global collective, shadow producer, free electronic music, industrial techno, melodic house, deep techno, afrobeat, lo-fi, dj music, sync licensing"
        structuredData={homePageStructuredData}
      />

      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
        <div className="scan-line" />
        <div className="noise-overlay" />

        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        <section className="relative pt-6 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden border-cyan-500/20">
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Music className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Featured Playlist</h3>
                    <p className="text-xs text-cyan-400">No Copyright Music 2025</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-900/50">
                  <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2161703111&color=%2390c0ea&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    className="w-full"
                  />
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <a
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    mr fixer music
                  </a>
                  {' · '}
                  <a
                    href="https://soundcloud.com/mrfixermusic/sets/no-copyright-music-2025-best"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    No Copyright Music 2025 | Best for Vlogs, Gaming & Streaming (Royalty Free)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <header className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto z-10 py-20">
            <div className={`transition-all duration-700 ${animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium data-text">SYSTEM ONLINE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Global Collective.</span>
                <br />
                <span className="gradient-text-cyan">No faces. No names. No ego.</span>
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-200 ${animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Shadow producer-led collective offering <span className="text-cyan-400">industrial-grade electronic music</span>.
                Free for non-commercial use (FCL). Perfect for creators, DJs & sync.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Listen to Catalog
                </a>
                <a
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border border-cyan-500/50 rounded-xl font-semibold text-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Join the Collective
                </a>
              </div>
            </div>
          </div>
        </header>

        <section ref={statsRef} className="relative py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2 data-text">By the Numbers</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: `${stats.tracks.toLocaleString()}+`, label: 'Original Tracks', sub: '209+ themed volumes. Daily drops.' },
                { value: `${stats.streams}M+`, label: 'Total Streams', sub: 'YouTube, Spotify & SoundCloud' },
                { value: `${stats.shazams}K+`, label: 'Shazams', sub: 'Real-world validation globally' },
                { value: `${stats.countries}+`, label: 'Countries', sub: 'Breaking geographic barriers' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 text-center group hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-cyan mb-2 data-text">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">The System</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Methodology</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How we build industrial-grade electronic music at scale while maintaining artistic integrity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-8 group hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Hash className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">FDD Numbering</h3>
                    <p className="text-gray-500 text-sm">Precision Tracking System</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Always starts at 1 — No Zero in Front. Each track has a unique ID (e.g., <span className="text-cyan-400 data-text">FDD1141</span>) for precision tracking, attribution, and catalog navigation.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 group hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hybrid Production</h3>
                    <p className="text-gray-500 text-sm">Human-AI Collaboration</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  <span className="text-cyan-400">50% Human, 50% AI.</span> The machine sparks the motif; the human structures the soul. AI amplifies intent without replacing taste.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Database className="w-5 h-5" />, title: 'Volume Structure', desc: 'Themed collections of 10 tracks' },
                { icon: <Target className="w-5 h-5" />, title: 'Quality Gates', desc: 'Two-human ear-panel minimum' },
                { icon: <Activity className="w-5 h-5" />, title: 'Distribution-Aware', desc: 'TikTok, Shorts, DJ-ready' },
                { icon: <Shield className="w-5 h-5" />, title: 'Permission Clarity', desc: 'FCL removes ambiguity' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-cyan-400 mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
                <Music className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Sonic Territories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Genre Architecture</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Four core electronic styles form our sonic foundation, each serving specific contexts and communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {genres.map((genre, idx) => (
                <div key={idx} className="glass-card rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${
                    genre.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                    genre.color === 'magenta' ? 'from-pink-500 to-purple-500' :
                    genre.color === 'orange' ? 'from-orange-500 to-red-500' :
                    'from-green-500 to-emerald-500'
                  }`} />
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      genre.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      genre.color === 'magenta' ? 'bg-pink-500/20 text-pink-400' :
                      genre.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {genre.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{genre.name}</h3>
                    <p className="text-cyan-400 text-sm data-text mb-3">{genre.bpm}</p>
                    <p className="text-gray-400 text-sm">{genre.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Fixer Creative License</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Licensing</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Clear permissions. No ambiguity. Free non-commercial use with straightforward commercial path.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Free (FCL)</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'DJ Sets & Live (Non-monetized)',
                      'Personal Social Media (TikTok/Reels)',
                      'Student/Non-profit Projects',
                      'Internet Radio & Podcasts',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-500">Requirement: Attribution when possible</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Commercial License</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Brand & Advertising',
                      'Film, TV & Games (Sync)',
                      'Monetized Platforms',
                      'Commercial Productions',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-orange-400 text-xs font-bold">$</span>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <a
                      href="https://soundcloud.com/mrfixermusic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Get License
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-3xl p-10 sm:p-16 border-cyan-500/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <Music className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Join the Global Collective
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Mr. Fixer Music reimagines sound as a public, emotional currency — flowing freely outside of corporate ownership.
                Each track is a timestamped block in an ever-growing musical chain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  Start Listening
                </a>
                <a
                  href="/downloads"
                  className="px-8 py-4 border border-cyan-500/50 rounded-xl font-semibold text-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Radio className="w-5 h-5" />
                  Free Downloads
                </a>
              </div>

              <p className="mt-10 text-gray-500 italic">
                "Mr. Fixer is not a person – it's a sound system for the free world."
              </p>
            </div>
          </div>
        </section>

        <a
          href="https://soundcloud.com/mrfixermusic"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Visit Mr. Fixer Music on SoundCloud"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
            <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Music className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" />
        </a>
      </div>
    </>
  );
}
