import React from 'react';
import { Shield, Eye, Database, Users, Globe, Lock, Mail, FileText, AlertCircle, Download, Cookie, Settings, BarChart, Zap } from 'lucide-react';
import SEOHead from './SEOHead';

const PrivacyPage = () => {
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Mr. Fixer Music | GDPR Compliant Data Protection",
    "description": "Comprehensive privacy policy for Mr. Fixer Music detailing data collection, processing, storage, and user rights under GDPR. Cookie policy and data protection information.",
    "url": "https://mrfixerai.com/privacy",
    "publisher": {
      "@type": "Organization",
      "name": "Mr. Fixer Music",
      "url": "https://mrfixerai.com"
    },
    "datePublished": "2025-01-27",
    "dateModified": "2025-01-27",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Mr. Fixer Music",
      "url": "https://mrfixerai.com"
    },
    "mainEntity": {
      "@type": "PrivacyPolicy",
      "name": "Mr. Fixer Music Privacy Policy",
      "description": "GDPR compliant privacy policy covering data collection, processing, and user rights"
    }
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy - Mr. Fixer Music | GDPR Compliant Data Protection"
        description="Comprehensive privacy policy for Mr. Fixer Music. Learn about our data collection practices, cookie usage, GDPR compliance, and your privacy rights as a user of our global electronic music platform."
        keywords="privacy policy, gdpr compliance, data protection, cookie policy, user rights, mr fixer music privacy, data collection, personal data processing, privacy rights"
        canonicalUrl="https://mrfixerai.com/privacy"
        structuredData={privacyStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Privacy Policy", url: "https://mrfixerai.com/privacy" }
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
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Shield className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Lock className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                GDPR Compliant Data Protection
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Your privacy is fundamental to our mission. This policy details how we collect, 
                process, and protect your data while providing free electronic music globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#user-rights"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Your Rights
                </a>
                <a 
                  href="#contact-us"
                  className="border-2 border-green-500 hover:bg-green-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Policy Summary */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Privacy at a Glance</h2>
              <p className="text-xl text-gray-400">Key principles of our data protection approach</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <Eye className="w-12 h-12 text-green-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Minimal Data Collection</h3>
                <p className="text-gray-400">We collect only essential data needed for site functionality and analytics. No unnecessary tracking or profiling.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <Lock className="w-12 h-12 text-blue-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Secure Processing</h3>
                <p className="text-gray-400">All data is processed securely with industry-standard encryption and protection measures.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <Users className="w-12 h-12 text-purple-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Full User Control</h3>
                <p className="text-gray-400">You have complete control over your data with rights to access, modify, or delete information at any time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">🔍 Data We Collect</h2>
                <p className="text-xl text-gray-400">Transparent overview of information collection</p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 p-8 rounded-2xl border border-blue-500/20">
                  <div className="flex items-center mb-6">
                    <Database className="w-8 h-8 text-blue-400 mr-3" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">Automatically Collected Data</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-3">Technical Information:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          IP address (anonymized for analytics)
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Browser type and version
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Device information and screen resolution
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Operating system details
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-3">Usage Analytics:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Pages visited and time spent
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Music streaming interactions
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Download activity and preferences
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Referral sources and navigation patterns
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-800/20 to-teal-800/20 p-8 rounded-2xl border border-green-500/20">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-green-400 mr-3" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">Voluntarily Provided Data</h3>
                  </div>
                  <div className="text-gray-300 leading-relaxed">
                    <p className="mb-4">
                      <strong>Currently, we do not collect personal information directly.</strong> Mr. Fixer Music operates without user accounts, 
                      email subscriptions, or mandatory registration. Any future data collection will be clearly disclosed and opt-in based.
                    </p>
                    <p>
                      If you contact us through third-party platforms (SoundCloud, YouTube), those interactions are governed 
                      by the respective platform's privacy policies, not ours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">🍪 Cookie Policy</h2>
                <p className="text-xl text-gray-400">How we use cookies to enhance your experience</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 p-6 rounded-2xl border border-purple-500/20">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold">Necessary Cookies</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Essential for website functionality and security. Cannot be disabled.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Cookie consent preferences</li>
                    <li>• Session management</li>
                    <li>• Security tokens</li>
                    <li>• Basic functionality</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 p-6 rounded-2xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <BarChart className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Help us understand site usage through anonymous statistics.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Google Analytics (anonymized)</li>
                    <li>• Page view tracking</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-800/20 to-teal-800/20 p-6 rounded-2xl border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold">Functional Cookies</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Enable enhanced features and personalized experience.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Music preferences</li>
                    <li>• Volume settings</li>
                    <li>• Language selection</li>
                    <li>• Display customization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-6 rounded-2xl border border-orange-500/20">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-orange-400 mr-2" />
                    <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Track campaign effectiveness and deliver relevant content.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Social media integration</li>
                    <li>• Campaign tracking</li>
                    <li>• Content personalization</li>
                    <li>• Cross-platform analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights Under GDPR */}
        <section id="user-rights" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">⚖️ Your Rights Under GDPR</h2>
                <p className="text-xl text-gray-400">Complete control over your personal data</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-800/20 to-emerald-800/20 p-6 rounded-2xl border border-green-500/20">
                  <Eye className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Access</h3>
                  <p className="text-gray-400 text-sm">
                    Request information about what personal data we hold about you and how it's processed.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 p-6 rounded-2xl border border-blue-500/20">
                  <Settings className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Rectification</h3>
                  <p className="text-gray-400 text-sm">
                    Correct inaccurate personal data and complete incomplete information we may have.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-800/20 to-pink-800/20 p-6 rounded-2xl border border-red-500/20">
                  <Zap className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Erasure</h3>
                  <p className="text-gray-400 text-sm">
                    Request deletion of your personal data under certain circumstances ("right to be forgotten").
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-800/20 to-violet-800/20 p-6 rounded-2xl border border-purple-500/20">
                  <Lock className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Restrict Processing</h3>
                  <p className="text-gray-400 text-sm">
                    Limit how we process your personal data while maintaining the data itself.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-800/20 to-yellow-800/20 p-6 rounded-2xl border border-orange-500/20">
                  <Download className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Data Portability</h3>
                  <p className="text-gray-400 text-sm">
                    Receive your personal data in a structured, machine-readable format for transfer.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-800/20 to-cyan-800/20 p-6 rounded-2xl border border-teal-500/20">
                  <AlertCircle className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Right to Object</h3>
                  <p className="text-gray-400 text-sm">
                    Object to processing of your personal data for marketing or other specific purposes.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Exercising Your Rights</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    To exercise any of these rights, contact us through our SoundCloud profile. We will respond to your 
                    request within 30 days as required by GDPR. You may also file a complaint with your local data 
                    protection authority if you believe your rights have been violated.
                  </p>
                  <a 
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact for Data Rights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Processing & Security */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">🔒 Data Processing & Security</h2>
                <p className="text-xl text-gray-400">How we protect and process your information</p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-800/20 to-teal-800/20 p-8 rounded-2xl border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Lock className="w-8 h-8 text-green-400 mr-3" />
                    Security Measures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-300 mb-3">Technical Safeguards:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• HTTPS encryption for all data transmission</li>
                        <li>• Secure hosting with regular security updates</li>
                        <li>• Data minimization - collect only necessary information</li>
                        <li>• Regular security audits and monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-300 mb-3">Organizational Controls:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Limited access to personal data</li>
                        <li>• Staff training on data protection</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular privacy impact assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 p-8 rounded-2xl border border-blue-500/20">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Database className="w-8 h-8 text-blue-400 mr-3" />
                    Data Retention & Deletion
                  </h3>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      <strong>Analytics Data:</strong> Retained for 26 months maximum, then automatically deleted. 
                      Google Analytics data is anonymized and aggregated for usage statistics.
                    </p>
                    <p>
                      <strong>Cookie Data:</strong> Varies by type - necessary cookies expire after session, 
                      analytics cookies after 2 years, functional cookies after 1 year.
                    </p>
                    <p>
                      <strong>Legal Compliance:</strong> Some data may be retained longer if required by law, 
                      but we will inform you of any such requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Parties & Transfers */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">🌐 Third Parties & Data Transfers</h2>
                <p className="text-xl text-gray-400">External services and data sharing policies</p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20">
                  <h3 className="text-2xl font-semibold mb-6">Third-Party Services We Use</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">Analytics & Performance:</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Google Analytics:</strong> Anonymized usage statistics and site performance data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Netlify:</strong> Website hosting and content delivery network
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">Music Distribution:</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SoundCloud:</strong> Music streaming and download services (external platform)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>YouTube:</strong> Video content and live streaming (external platform)
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 p-8 rounded-2xl border border-orange-500/20">
                  <h3 className="text-2xl font-semibold mb-6">International Data Transfers</h3>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      As a global music collective, some of our service providers may process data outside the European Economic Area (EEA). 
                      We ensure adequate protection through:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• EU-approved standard contractual clauses</li>
                      <li>• Adequacy decisions by the European Commission</li>
                      <li>• Privacy Shield certification (where applicable)</li>
                      <li>• Binding corporate rules and privacy policies</li>
                    </ul>
                    <p>
                      <strong>Google Analytics:</strong> Uses Google's global infrastructure with appropriate safeguards under EU data protection law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section id="contact-us" className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6">📧 Contact & Privacy Updates</h2>
                <div className="text-lg text-gray-300 space-y-6">
                  <p>
                    For privacy-related questions, data protection requests, or GDPR inquiries, 
                    please contact us through our SoundCloud profile. We respond to all privacy 
                    requests within 30 days as required by law.
                  </p>
                  <p>
                    <strong>Policy Updates:</strong> This privacy policy was last updated on January 27, 2025. 
                    We will notify you of any material changes by posting the updated policy on this page 
                    and updating the "last modified" date.
                  </p>
                  <p>
                    <strong>Data Protection Officer:</strong> For complex privacy matters, our DPO can be 
                    reached through the same contact method with subject line "DPO - Privacy Inquiry."
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a 
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact for Privacy Matters
                  </a>
                  <a 
                    href="/terms"
                    className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Terms of Service
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy & Data Protection</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Your privacy is fundamental to our mission of providing free electronic music globally. 
                We are committed to transparent data practices and full GDPR compliance.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - Privacy Policy | 
                  <span className="text-green-400"> GDPR Compliant • Your Data, Your Rights • Global Privacy</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPage;