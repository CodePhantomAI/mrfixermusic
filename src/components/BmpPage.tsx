import React from 'react';
import { Music, Download, Headphones, Clock, Calendar, Users, Volume2, Radio, Zap, Globe } from 'lucide-react';
import SEOHead from './SEOHead';
import { bmpPageStructuredData } from '../data/structuredData';

const BmpPage = () => {
  return (
    <>
      <SEOHead
        title="BMP - Beat Music Project | Mr. Fixer Music"
        description="BMP (Beat Music Project) by Mr. Fixer Music - Curated collection of electronic beats and rhythms. Free downloads for DJs, producers, and content creators worldwide."
        keywords="bmp, beat music project, mr fixer music, electronic beats, dj beats, free beats, music project, electronic music, dance beats, producer beats, free music downloads"
        canonicalUrl="https://mrfixerai.com/bmp"
        structuredData={bmpPageStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="music"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "BMP", url: "https://mrfixerai.com/bmp" }
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
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Headphones className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                BMP
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Beat Music Project
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A curated collection of electronic beats and rhythms designed for DJs, producers, 
                and content creators who demand premium sound quality without the premium price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download BMP beats from Mr. Fixer Music on SoundCloud"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Download className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Download BMP Collection
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-orange-500 hover:bg-orange-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Main Collection
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Project Overview */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About BMP</h2>
              <p className="text-xl text-gray-400">Beat Music Project - Where rhythm meets innovation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <Clock className="w-12 h-12 text-orange-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3 text-center">90 Minutes</h3>
                <p className="text-gray-400 text-center">Carefully curated collection spanning 90 minutes of premium electronic beats</p>
              </div>
              <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <Volume2 className="w-12 h-12 text-red-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3 text-center">25 Tracks</h3>
                <p className="text-gray-400 text-center">Diverse selection of beats covering multiple electronic sub-genres</p>
              </div>
              <div className="bg-gradient-to-br from-pink-800/30 to-purple-800/30 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <Globe className="w-12 h-12 text-pink-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3 text-center">Global Access</h3>
                <p className="text-gray-400 text-center">Free worldwide distribution under Creative Commons licensing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Genres */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Featured Genres</h2>
                <p className="text-xl text-gray-400">Explore the diverse soundscape of BMP</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">House Beats</h3>
                  <p className="text-sm text-gray-400 text-center">Deep, progressive, and tech house rhythms</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">Techno Pulses</h3>
                  <p className="text-sm text-gray-400 text-center">Industrial, minimal, and driving techno beats</p>
                </div>
                <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Radio className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">Ambient Flows</h3>
                  <p className="text-sm text-gray-400 text-center">Atmospheric and cinematic soundscapes</p>
                </div>
                <div className="bg-gradient-to-br from-orange-800/30 to-yellow-800/30 p-6 rounded-2xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">Breakbeats</h3>
                  <p className="text-sm text-gray-400 text-center">Drum & bass, jungle, and breakbeat rhythms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Usage Guidelines</h2>
                <p className="text-xl text-gray-400">How to use BMP in your projects</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-8 rounded-2xl border border-green-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold">Perfect For</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Headphones className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">DJ Sets & Live Performances</h4>
                        <p className="text-sm text-gray-400 text-center">Club nights, festivals, and livestream performances</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Radio className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Radio & Podcast Production</h4>
                        <p className="text-sm text-gray-400 text-center">Background music and transitions for audio content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Volume2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Content Creation</h4>
                        <p className="text-sm text-gray-400 text-center">YouTube videos, TikTok content, and social media</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Music className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Music Production</h4>
                        <p className="text-sm text-gray-400 text-center">Sampling, remixing, and creative inspiration</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-8 rounded-2xl border border-orange-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <Download className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold">Download & Use</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Release Schedule</h4>
                        <p className="text-sm text-gray-400 text-center">New BMP collections released monthly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Global Distribution</h4>
                        <p className="text-sm text-gray-400 text-center">Available worldwide under CC BY-NC 4.0</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">High Quality</h4>
                        <p className="text-sm text-gray-400 text-center">320kbps MP3 and lossless FLAC formats</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Community Driven</h4>
                        <p className="text-sm text-gray-400 text-center">Feedback and requests welcome</p>
                      </div>
                    </div>
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
              <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 p-12 rounded-3xl backdrop-blur-sm border border-orange-500/20">
                <Headphones className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6">Ready to Experience BMP?</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8">
                  Join thousands of DJs, producers, and creators who trust BMP for their musical needs. 
                  Download the complete collection and elevate your sound today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download complete BMP collection from SoundCloud"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                    Download Complete Collection
                  </a>
                  <a 
                    href="/"
                    aria-label="Explore more from Mr. Fixer Music"
                    className="border-2 border-orange-500 hover:bg-orange-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Music className="w-5 h-5 mr-2" aria-hidden="true" />
                    Explore More Music
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">BMP - Beat Music Project</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Part of the Mr. Fixer Music decentralized initiative. 
                Free beats for a free world.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://soundcloud.com/mrfixermusic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit BMP collection on SoundCloud"
                  className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-3 rounded-full border border-orange-500/30 hover:border-orange-400/50 text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Volume2 className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - BMP Collection | 
                  <span className="text-orange-400"> Beat Music Project • Free Electronic Beats</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BmpPage;