import { useState, useEffect } from 'react';
import { Cookie, Shield, Settings, X, Check, Info, BarChart, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  });

  useEffect(() => {
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
    if (category === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-xl border-t border-cyan-500/20 p-4 sm:p-6 shadow-2xl shadow-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookie & Privacy Consent</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  We use cookies to enhance your experience. This includes essential cookies for site functionality
                  and optional cookies for analytics and personalization. By accepting, you agree to our{' '}
                  <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link>{' '}
                  and <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">Terms of Service</Link>.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-cyan-500" />
                    GDPR Compliant
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-cyan-500" />
                    CCPA Ready
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3 text-cyan-500" />
                    ePrivacy Directive
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Settings className="w-4 h-4" />
                Manage
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-lg shadow-cyan-500/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-cyan-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Customize your cookie settings. Your choices are stored locally and you can change them anytime.
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-12 h-6 bg-cyan-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <h3 className="font-semibold text-white">Necessary Cookies</h3>
                    <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Required</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Essential for website functionality, security, and remembering your cookie preferences.
                    These cannot be disabled as they are necessary for basic site operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 flex-shrink-0 ${
                    preferences.analytics
                      ? 'bg-cyan-500 justify-end'
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart className="w-4 h-4 text-blue-400" />
                    <h3 className="font-semibold text-white">Analytics Cookies</h3>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Help us understand how visitors use our website by collecting anonymous usage statistics.
                    Includes Google Analytics for page views, session duration, and user behavior. No PII collected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <button
                  onClick={() => handlePreferenceChange('functional')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 flex-shrink-0 ${
                    preferences.functional
                      ? 'bg-cyan-500 justify-end'
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4 text-green-400" />
                    <h3 className="font-semibold text-white">Functional Cookies</h3>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enable enhanced features like remembering your preferences, volume settings,
                    region selection, and previously viewed content for improved user experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 flex-shrink-0 ${
                    preferences.marketing
                      ? 'bg-cyan-500 justify-end'
                      : 'bg-gray-600 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-orange-400" />
                    <h3 className="font-semibold text-white">Marketing Cookies</h3>
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Used by social media platforms (YouTube, SoundCloud) to deliver relevant content
                    and track campaign effectiveness. Helps us understand which content resonates with our audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Check className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                <Info className="w-3 h-3" />
                You can change these preferences anytime via the Privacy section
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
