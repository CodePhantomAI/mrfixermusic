import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface Region {
  code: string;
  name: string;
  flag: string;
  url: string;
  status: 'active' | 'pending';
}

const regions: Region[] = [
  { code: 'en', name: 'Global (English)', flag: '🇺🇸', url: 'https://mrfixerai.com', status: 'active' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', url: 'https://russian.mrfixerai.com', status: 'active' },
  { code: 'ua', name: 'Ukraine', flag: '🇺🇦', url: 'https://ukraine.mrfixerai.com', status: 'active' },
  { code: 'vn', name: 'Vietnam', flag: '🇻🇳', url: 'https://vietnam.mrfixerai.com', status: 'active' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵', url: 'https://jp.mrfixerai.com', status: 'active' },
  { code: 'kr', name: 'Korea', flag: '🇰🇷', url: 'https://korea.mrfixerai.com', status: 'active' },
  { code: 'de', name: 'Germany', flag: '🇩🇪', url: 'https://de.mrfixerai.com', status: 'active' },
  { code: 'fr', name: 'France', flag: '🇫🇷', url: 'https://fr.mrfixerai.com', status: 'active' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩', url: 'https://id.mrfixerai.com', status: 'active' },
  { code: 'pt-br', name: 'Brazil', flag: '🇧🇷', url: 'https://pt-br.mrfixerai.com', status: 'active' },
];

export default function RegionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentRegion = regions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
        aria-label="Select region"
      >
        <Globe className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline text-gray-300">{currentRegion.flag} {currentRegion.name}</span>
        <span className="sm:hidden text-gray-300">{currentRegion.flag}</span>
        <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 z-50 overflow-hidden">
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-gray-700/50 mb-1">
              Select Region
            </div>
            {regions.map((region) => (
              <a
                key={region.code}
                href={region.url}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  region.code === currentRegion.code
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : region.status === 'pending'
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={(e) => {
                  if (region.status === 'pending') {
                    e.preventDefault();
                  }
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{region.flag}</span>
                  <span className="text-sm">{region.name}</span>
                </span>
                {region.code === currentRegion.code && (
                  <Check className="w-4 h-4 text-cyan-400" />
                )}
                {region.status === 'pending' && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-500">Soon</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
