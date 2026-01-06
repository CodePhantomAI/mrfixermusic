import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Music, Menu, X, ChevronUp } from 'lucide-react';
import CookieConsent, { CookiePreferences } from './components/CookieConsent';
import PrivacyPage from './components/PrivacyPage';
import LivePage from './components/LivePage';
import GalleryPage from './components/GalleryPage';
import BmpPage from './components/BmpPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DJCollectivePage from './components/DJCollectivePage';
import PrivateCollectionPage from './components/PrivateCollectionPage';
import DownloadsPage from './components/DownloadsPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import RegionSwitcher from './components/RegionSwitcher';
import MagazinePage from './components/MagazinePage';
import BlogPostPage from './components/BlogPostPage';
import AdminLoginPage from './components/AdminLoginPage';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      try {
        const preferences = JSON.parse(consent);
        setCookiePreferences(preferences);
        setShowCookieConsent(false);
      } catch {
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
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
    if (window.gtag) {
      window.gtag('consent', 'update', {
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
    if (window.gtag) {
      window.gtag('consent', 'update', {
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
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'functionality_storage': preferences.functional ? 'granted' : 'denied',
        'personalization_storage': preferences.functional ? 'granted' : 'denied'
      });
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/live', label: 'Live' },
    { to: '/downloads', label: 'Downloads' },
    { to: '/bmp', label: 'BPM' },
    { to: '/magazine', label: 'Magazine' },
  ];

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-950/95 backdrop-blur-xl border-b border-cyan-500/10' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg hidden sm:inline">Mr. Fixer Music</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <RegionSwitcher />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <Link
                  to="/terms"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Use
                </Link>
                <Link
                  to="/privacy"
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {showCookieConsent && (
        <CookieConsent
          onAcceptAll={handleAcceptAllCookies}
          onRejectAll={handleRejectAllCookies}
          onManagePreferences={handleManageCookiePreferences}
        />
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 p-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/bmp" element={<BmpPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/magazine/:slug" element={<BlogPostPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/dj-collective" element={<DJCollectivePage />} />
          <Route path="/private-collection" element={<PrivateCollectionPage />} />
        </Routes>
      </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
