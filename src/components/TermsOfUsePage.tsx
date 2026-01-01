import { Link } from 'react-router-dom';
import {
  Scale, Shield, Globe, Users, Download, Check, X, FileText, AlertCircle, Mail,
  Headphones, Radio, Video, Building, Gamepad2, Zap, Music, Lock, Eye, Database,
  UserX, RefreshCw, MessageCircle, Copyright, Gavel, Server, Clock
} from 'lucide-react';
import SEOHead from './SEOHead';
import { termsPageStructuredData } from '../data/structuredData';

export default function TermsOfUsePage() {
  return (
    <>
      <SEOHead
        title="Terms of Service - Mr. Fixer Music | Licensing, GDPR, DMCA & Legal"
        description="Complete Terms of Service for Mr. Fixer Music including Fixer Creative License (FCL), GDPR compliance, DMCA policy, CCPA rights, and usage guidelines for free electronic music."
        keywords="terms of service, license agreement, mr fixer music terms, fixer creative license, fcl, gdpr, dmca, ccpa, music licensing, usage rights, commercial licensing, eula"
        canonicalUrl="https://mrfixerai.com/terms"
        structuredData={termsPageStructuredData}
      />

      <div className="min-h-screen bg-gray-950 text-white">
        <div className="scan-line" />

        <header className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium data-text">LEGAL FRAMEWORK</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-cyan">Terms of Service</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              End-User License Agreement (EULA) & Legal Policies
            </p>
            <p className="text-gray-500 text-sm">
              Last Updated: January 2026 | Effective Date: January 1, 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/Mr_Fixer_Music_License.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download License PDF
              </a>
              <Link
                to="/"
                className="px-6 py-3 border border-cyan-500/50 rounded-xl font-medium text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center gap-2"
              >
                <Music className="w-4 h-4" />
                Back to Music
              </Link>
            </div>
          </div>
        </header>

        <nav className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 overflow-x-auto text-sm">
              <a href="#license" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">License</a>
              <a href="#gdpr" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">GDPR</a>
              <a href="#ccpa" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">CCPA</a>
              <a href="#dmca" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">DMCA</a>
              <a href="#cookies" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">Cookies</a>
              <a href="#acceptable-use" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">Usage</a>
              <a href="#commercial" className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 whitespace-nowrap">Commercial</a>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <section id="license" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">1. Fixer Creative License (FCL)</h2>
            </div>
            <div className="glass-card rounded-2xl p-6 mb-6">
              <p className="text-gray-400 mb-6">
                The Fixer Creative License (FCL) is a permissive license based on Creative Commons BY-NC 4.0
                that governs the use of all music distributed by Mr. Fixer Music.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="w-5 h-5 text-green-400" />
                    <h3 className="font-semibold text-green-300">Permitted Uses (Free)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Headphones className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      DJ Sets & Live Performances (non-monetized)
                    </li>
                    <li className="flex items-start gap-2">
                      <Video className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Personal Videos (YouTube, TikTok, Reels)
                    </li>
                    <li className="flex items-start gap-2">
                      <Radio className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Internet Radio & Podcasts
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      Educational & Non-profit Projects
                    </li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <X className="w-5 h-5 text-red-400" />
                    <h3 className="font-semibold text-red-300">Restricted Uses (License Required)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Brand Promotions & Advertising
                    </li>
                    <li className="flex items-start gap-2">
                      <Gamepad2 className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Film, TV & Video Games (Sync)
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      NFTs, Resale & Tokenization
                    </li>
                    <li className="flex items-start gap-2">
                      <Music className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      Commercial Sampling & Remixes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="gdpr" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">2. GDPR Compliance (EU)</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                We comply with the General Data Protection Regulation (GDPR) for users in the European Union
                and European Economic Area.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Eye className="w-4 h-4" />, title: 'Right to Access', desc: 'Request a copy of your personal data' },
                  { icon: <RefreshCw className="w-4 h-4" />, title: 'Right to Rectification', desc: 'Correct inaccurate personal data' },
                  { icon: <UserX className="w-4 h-4" />, title: 'Right to Erasure', desc: 'Request deletion of your data' },
                  { icon: <Lock className="w-4 h-4" />, title: 'Right to Restrict', desc: 'Limit processing of your data' },
                  { icon: <Database className="w-4 h-4" />, title: 'Data Portability', desc: 'Receive data in machine-readable format' },
                  { icon: <X className="w-4 h-4" />, title: 'Right to Object', desc: 'Object to processing activities' },
                ].map((right, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-blue-400 mt-0.5">{right.icon}</div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{right.title}</h4>
                      <p className="text-gray-500 text-xs">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-400">Data Controller:</strong> Mr. Fixer Music operates as the data controller.
                  For GDPR requests, contact us via SoundCloud with subject line "GDPR Request".
                  Response time: 30 days maximum.
                </p>
              </div>
            </div>
          </section>

          <section id="ccpa" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">3. CCPA Rights (California)</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                California residents have additional rights under the California Consumer Privacy Act (CCPA)
                and California Privacy Rights Act (CPRA).
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <strong className="text-white">Right to Know:</strong>
                    <span className="text-gray-400"> What personal information we collect, use, disclose, and sell.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <strong className="text-white">Right to Delete:</strong>
                    <span className="text-gray-400"> Request deletion of personal information collected from you.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <strong className="text-white">Right to Opt-Out:</strong>
                    <span className="text-gray-400"> Opt-out of the sale of personal information (we do not sell data).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <strong className="text-white">Right to Non-Discrimination:</strong>
                    <span className="text-gray-400"> Equal service regardless of exercising privacy rights.</span>
                  </div>
                </li>
              </ul>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-orange-400">Notice:</strong> We do not sell personal information.
                  To exercise CCPA rights, contact us via SoundCloud with "CCPA Request" in the subject.
                </p>
              </div>
            </div>
          </section>

          <section id="dmca" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Copyright className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold">4. DMCA Policy</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA).
                If you believe content infringes your copyright, submit a takedown notice.
              </p>
              <div className="bg-gray-800/50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-white mb-4">DMCA Takedown Notice Requirements:</h3>
                <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
                  <li>Physical or electronic signature of the copyright owner</li>
                  <li>Identification of the copyrighted work claimed to be infringed</li>
                  <li>URL or location of the infringing material</li>
                  <li>Your contact information (address, phone, email)</li>
                  <li>Statement of good faith belief that use is unauthorized</li>
                  <li>Statement under penalty of perjury that information is accurate</li>
                </ol>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-red-400">DMCA Agent:</strong> Submit notices via SoundCloud message
                  with subject "DMCA Takedown Notice". We respond within 48-72 hours.
                </p>
              </div>
            </div>
          </section>

          <section id="cookies" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">5. Cookie Policy & ePrivacy</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                We comply with the EU ePrivacy Directive and use cookies only with your consent
                (except strictly necessary cookies).
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { name: 'Necessary', desc: 'Essential for site functionality, cannot be disabled', required: true },
                  { name: 'Analytics', desc: 'Google Analytics for anonymous usage statistics', required: false },
                  { name: 'Functional', desc: 'Remember preferences, region, and settings', required: false },
                  { name: 'Marketing', desc: 'Social media embeds and campaign tracking', required: false },
                ].map((cookie, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white text-sm">{cookie.name}</h4>
                      <p className="text-gray-500 text-xs">{cookie.desc}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      cookie.required ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {cookie.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Manage your cookie preferences anytime via the cookie consent banner or browser settings.
              </p>
            </div>
          </section>

          <section id="acceptable-use" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Gavel className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">6. Acceptable Use Policy</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                By using Mr. Fixer Music, you agree to the following acceptable use guidelines:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-400 mb-3">You May:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      Download and stream music for personal use
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      Share links to our content
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      Use music in non-commercial projects with attribution
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      Create playlists featuring our tracks
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-400 mb-3">You May Not:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5" />
                      Claim ownership or authorship of our music
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5" />
                      Remove watermarks, credits, or metadata
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5" />
                      Use automated systems to bulk download
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 mt-0.5" />
                      Circumvent technical protection measures
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="commercial" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Building className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">7. Commercial Licensing</h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-gray-400 mb-6">
                For commercial use including advertising, film/TV sync, games, and monetized platforms,
                a commercial license is required.
              </p>
              <div className="bg-gray-800/50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-white mb-4">License Request Process:</h3>
                <ol className="space-y-3 text-sm text-gray-300 list-decimal list-inside">
                  <li>Contact us via SoundCloud with "License Request" subject</li>
                  <li>Include: Track name(s), intended use, duration, territory, platform</li>
                  <li>We respond within 5-7 business days with terms</li>
                  <li>Upon agreement, receive official license documentation</li>
                </ol>
              </div>
              <a
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-medium hover:from-orange-400 hover:to-amber-400 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact for Licensing
              </a>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                <Server className="w-5 h-5 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold">8. Additional Legal Terms</h2>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Disclaimer of Warranties', content: 'Music is provided "as is" without warranties of any kind, express or implied.' },
                { title: 'Limitation of Liability', content: 'Mr. Fixer Music shall not be liable for any indirect, incidental, or consequential damages.' },
                { title: 'Indemnification', content: 'You agree to indemnify and hold harmless Mr. Fixer Music from any claims arising from your use.' },
                { title: 'Governing Law', content: 'These terms are governed by applicable international copyright laws and the laws of the jurisdiction where disputes arise.' },
                { title: 'Severability', content: 'If any provision is found unenforceable, remaining provisions shall continue in effect.' },
                { title: 'Modifications', content: 'We reserve the right to modify these terms. Continued use constitutes acceptance of changes.' },
              ].map((term, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-2">{term.title}</h3>
                  <p className="text-gray-400 text-sm">{term.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
              <AlertCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                By downloading, streaming, or using any music from Mr. Fixer Music, you acknowledge
                that you have read, understood, and agree to be bound by these Terms of Service
                and the Fixer Creative License (FCL).
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>These terms are effective as of January 1, 2026</span>
              </div>
            </div>
          </section>

          <section>
            <div className="glass-card rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
              <p className="text-gray-400 mb-6">
                For any questions about these terms, licensing, or to exercise your privacy rights,
                contact us through our official SoundCloud channel.
              </p>
              <a
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
