import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Settings, X, Check, Info, Eye, BarChart, Globe } from 'lucide-react';

interface CookieConsentProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onManagePreferences: (preferences: CookiePreferences) => void;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAcceptAll, onRejectAll, onManagePreferences }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    functional: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    onAcceptAll();
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    onRejectAll();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowPreferences(false);
    onManagePreferences(preferences);
  };

  const handlePreferenceChange = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-6 shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <Cookie className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-2">🍪 Cookie & Privacy Consent</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We use cookies and similar technologies to enhance your experience on Mr. Fixer Music. 
                  This includes necessary cookies for site functionality, analytics cookies to understand usage patterns, 
                  and optional cookies for personalized features. By accepting, you agree to our use of cookies 
                  as described in our <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a>.
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    GDPR Compliant • Your data, your choice • Contact: via SoundCloud
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
              >
                <Settings className="w-4 h-4" />
                Manage Preferences
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 text-sm font-medium transform hover:scale-105"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Settings className="w-6 h-6 text-purple-400" />
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-400 mt-2">
                Choose which cookies you want to allow. You can change these settings at any time.
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-6 bg-purple-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Required</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Essential for website functionality, security, and core features. These cannot be disabled 
                    as they are necessary for the site to function properly, including remembering your 
                    cookie preferences and providing basic functionality.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4">
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 ${
                    preferences.analytics 
                      ? 'bg-purple-600 justify-end' 
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                    <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Help us understand how visitors use our website by collecting anonymous usage statistics. 
                    This includes Google Analytics to track page views, session duration, and user behavior 
                    patterns. No personally identifiable information is collected.
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start gap-4">
                <button
                  onClick={() => handlePreferenceChange('functional')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 ${
                    preferences.functional 
                      ? 'bg-purple-600 justify-end' 
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                    <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enable enhanced features and personalization, such as remembering your music preferences, 
                    volume settings, or previously viewed content. These improve your user experience but 
                    are not essential for basic site functionality.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4">
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 ${
                    preferences.marketing 
                      ? 'bg-purple-600 justify-end' 
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-orange-400" />
                    <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                    <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Used to deliver relevant content and track campaign effectiveness across platforms. 
                    These may be set by social media platforms (YouTube, SoundCloud) and help us understand 
                    which content resonates with our audience. Currently minimal use.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                <span className="flex items-center justify-center gap-1">
                  <Info className="w-3 h-3" />
                  You can change these preferences anytime in our Privacy Center
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;