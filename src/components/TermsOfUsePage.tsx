import React from 'react';
import { Music, Shield, Globe, Users, Download, Check, X, Scale, FileText, AlertCircle, Mail, Headphones, Radio, Video, Building, Gamepad2, Zap } from 'lucide-react';
import SEOHead from './SEOHead';
import { termsPageStructuredData } from '../data/structuredData';

const TermsOfUsePage = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - Mr. Fixer Music | Licensing & Usage Rights"
        description="Terms of Service and End-User License Agreement for Mr. Fixer Music. Learn about the Fixer Creative License (FCL), usage rights, restrictions, and commercial licensing for free electronic music."
        keywords="terms of service, license agreement, mr fixer music terms, creative commons license, music licensing, usage rights, commercial licensing, EULA, terms and conditions"
        canonicalUrl="https://mrfixerai.com/terms"
        structuredData={termsPageStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Terms", url: "https://mrfixerai.com/terms" }
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
                    <Scale className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FileText className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                End-User License Agreement (EULA)
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Understanding your rights and responsibilities when using Mr. Fixer Music's 
                decentralized global music initiative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/Mr_Fixer_Music_License.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Mr. Fixer Music License PDF"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Download className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Download License PDF
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Back to Music
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Core Principles */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
              <p className="text-xl text-gray-400">The foundation of our decentralized music initiative</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <Headphones className="w-12 h-12 text-purple-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">🎧 Free Downloads</h3>
                <p className="text-gray-400">Open access to high-quality music for all creative communities worldwide</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">🌐 Watch Live</h3>
                <p className="text-gray-400">24/7 audio broadcast from the cloud, connecting global audiences</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-8 rounded-2xl backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <Zap className="w-12 h-12 text-indigo-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">💠 Music as Decentralized Value</h3>
                <p className="text-gray-400">Operating like a protocol, where sound is the unit of cultural value</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
                <p className="text-xl text-gray-400">Our commitment to free, open, and accessible music</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-8 rounded-2xl border border-green-500/20 text-center">
                  <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-3 text-center">No Borders</h3>
                  <p className="text-gray-400 text-center">Global distribution with zero geographic or corporate restrictions</p>
                </div>
                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 p-8 rounded-2xl border border-blue-500/20 text-center">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-3 text-center">No DRM</h3>
                  <p className="text-gray-400 text-center">No digital locks. No surveillance-based controls</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-3 text-center">No Paywalls</h3>
                  <p className="text-gray-400 text-center">Free music for free minds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Purpose */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Purpose</h2>
                <p className="text-xl text-gray-400">Empowering creativity while maintaining artist control</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-8 rounded-2xl border border-green-500/20">
                  <Check className="w-12 h-12 text-green-400 mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold mb-4 text-center">Free Access</h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    Empowering non-commercial creativity across platforms. We believe music should be 
                    accessible to all creators, DJs, and cultural communities without financial barriers.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-8 rounded-2xl border border-orange-500/20">
                  <Shield className="w-12 h-12 text-orange-400 mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold mb-4 text-center">Artist Control</h3>
                  <p className="text-gray-300 leading-relaxed text-center">
                    Retaining commercial rights while growing a global creative commons. Artists maintain 
                    control over commercial exploitation while contributing to cultural freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing Terms */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Licensing Terms</h2>
                <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 inline-block">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-2">Fixer Creative License (FCL)</h3>
                  <p className="text-gray-400">A decentralized license based on Creative Commons BY-NC 4.0</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Allowed Uses */}
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-8 rounded-2xl border border-green-500/20">
                  <div className="flex items-center mb-6">
                    <Check className="w-8 h-8 text-green-400 mr-3" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">✅ Allowed Uses</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm">
                    Use the music freely in the following scenarios, with attribution when possible:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Headphones className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">🎛 DJ Sets & Mixes</h4>
                        <p className="text-sm text-gray-400 text-center">Clubs, parties, livestreams</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Video className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">📹 Personal Videos</h4>
                        <p className="text-sm text-gray-400 text-center">YouTube, TikTok, IG Reels (non-commercial)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Radio className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">📻 Internet Radio</h4>
                        <p className="text-sm text-gray-400 text-center">24/7 streams, cultural projects, underground stations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">🎓 Educational Use</h4>
                        <p className="text-sm text-gray-400 text-center">Lectures, workshops, research, nonprofit docs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Restricted Uses */}
                <div className="bg-gradient-to-br from-red-800/20 to-pink-800/20 p-8 rounded-2xl border border-red-500/20">
                  <div className="flex items-center mb-6">
                    <X className="w-8 h-8 text-red-400 mr-3" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">🚫 Restricted Uses</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm">
                    Use of Mr. Fixer Music in the following requires a license or written approval:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Brand Promotions</h4>
                        <p className="text-sm text-gray-400 text-center">Ads, branded content, sponsorships</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Gamepad2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Film / TV / Games</h4>
                        <p className="text-sm text-gray-400 text-center">Sync, trailers, background usage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Resale / NFTs</h4>
                        <p className="text-sm text-gray-400 text-center">No resale or tokenization of tracks</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Music className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-center">Commercial Sampling</h4>
                        <p className="text-sm text-gray-400 text-center">Remixes or derivative releases</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">The Vision</h2>
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Music className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <blockquote className="text-xl leading-relaxed text-gray-300 mb-8 italic">
                  "Mr. Fixer Music reimagines sound as a public, emotional currency — flowing freely, 
                  outside of corporate ownership. Each track is a timestamped block in an ever-growing musical chain."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Licensing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">🎧 Commercial Licensing</h2>
                <p className="text-xl text-gray-400">For brands, filmmakers, game developers, or agencies</p>
              </div>
              <div className="bg-gradient-to-br from-orange-800/20 to-yellow-800/20 p-8 rounded-2xl border border-orange-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-300 text-center">Licensing Process</h3>
                    <p className="text-gray-300 mb-6 text-center">
                      All requests are reviewed personally. Please include the following information:
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        Intended use
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        Duration
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        Territory
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        Distribution platform
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 p-6 rounded-xl border border-orange-500/30 text-center">
                      <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2 text-center">Contact Information</h4>
                      <p className="text-gray-400 mb-4 text-center">For commercial licensing inquiries:</p>
                      <a 
                        href="https://soundcloud.com/mrfixermusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact via SoundCloud
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
                <p className="text-xl text-gray-400">Explore our curated music collections</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <Headphones className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-center">🔊 Free DJ Track Set Series</h3>
                  <p className="text-gray-400 mb-6 text-center">Pre-mixed sets ready for use in clubs, streams, or events</p>
                  <a 
                    href="https://on.soundcloud.com/p3nEzZ9wU5CDM4MN1x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Listen Now
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <Music className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-center">🎶 Complete Track Catalog</h3>
                  <p className="text-gray-400 mb-6 text-center">Browse, listen, and download all available tracks</p>
                  <a 
                    href="https://soundcloud.com/mrfixermusic/tracks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Browse Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Movement Statement */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">This is Not a Brand – It's a Movement</h2>
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <div className="space-y-6 text-lg text-gray-300">
                  <p>
                    Mr. Fixer Music is powered by a human-AI collective.
                  </p>
                  <p>
                    It's made for movement, freedom, and emotional connection — not for corporate exploitation.
                  </p>
                  <p className="text-xl font-semibold text-purple-300 text-center">
                    Mr. Fixer is not a person – it's a sound system for the free world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-yellow-800/20 to-orange-800/20 p-8 rounded-2xl border border-yellow-500/20">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-yellow-300 text-center">Important Legal Notice</h3>
                    <div className="space-y-4 text-gray-300 text-center">
                      <p>
                        By downloading, streaming, or using any music from Mr. Fixer Music, you agree to these Terms of Service 
                        and the Fixer Creative License (FCL). This agreement is effective immediately upon use.
                      </p>
                      <p>
                        These terms may be updated periodically. Continued use of our music constitutes acceptance of any changes. 
                        For questions about licensing or usage rights, please contact us through our official channels.
                      </p>
                      <p>
                        This license does not grant any trademark rights or rights to use the name "Mr. Fixer Music" 
                        for commercial purposes without explicit permission.
                      </p>
                    </div>
                  </div>
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
                  <Scale className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Understanding the legal framework that enables free, decentralized music distribution 
                while protecting both creators and users.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="/Mr_Fixer_Music_License.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Download Mr. Fixer Music License PDF"
                  className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-full border border-purple-500/30 hover:border-purple-400/50 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - Decentralized Music Initiative | 
                  <span className="text-purple-400"> Free Use • Global Culture • Emotional Sound</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TermsOfUsePage;