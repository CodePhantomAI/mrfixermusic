import { ExternalLink, Music, Radio, Headphones, Globe, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const bigStreamers = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/5LrAekDseSQj5BaCiN1NN8?si=rgqX6HaaSAOEOH34H1wP3Q' },
  { name: 'Apple Music', url: 'https://music.apple.com/il/artist/mr-fixer-music/1815615410' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCNGHGvFSZXM-JW7sQ_RuB_g' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/artists/B0F9F7WMQB/mr-fixer-music' },
];

const djPlatforms = [
  { name: 'SoundCloud', url: 'https://soundcloud.com/mrfixermusic' },
  { name: 'Beatport', url: 'https://www.beatport.com/artist/mr-fixer-music/1316362' },
  { name: 'Tidal', url: 'https://tidal.com/browse/artist/60412462' },
  { name: 'Deezer', url: 'https://www.deezer.com/us/artist/324433381' },
  { name: 'Qobuz', url: 'https://www.qobuz.com/us-en/interpreter/mr-fixer-music/27034184' },
];

const socialPlatforms = [
  { name: 'YouTube', url: 'https://www.youtube.com/@MrFixermusic' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mrfixermusics' },
  { name: 'Facebook', url: 'https://www.facebook.com/mrfixermusic' },
];

const globalPlatforms = [
  { name: 'FLO (Korea)', url: 'https://www.music-flo.com/detail/artist/411876525/track?sortType=POPULARITY&roleType=ALL' },
  { name: 'Anghami (Middle East)', url: 'https://play.anghami.com/artist/24614298' },
  { name: 'Boomplay (Africa)', url: 'https://www.boomplay.com/artists/110993509' },
  { name: 'Pandora (USA)', url: 'https://www.pandora.com/artist/mr-fixer-music/ARcdhmP7t3n25Jc' },
  { name: 'iHeart (USA)', url: 'https://www.iheart.com/artist/mr-fixer-music-46884356/' },
  { name: 'Musixmatch', url: 'https://www.musixmatch.com/artist/mr-fixer-music' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mr. Fixer Music</h3>
                <p className="text-sm text-cyan-400">Global Collective</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Shadow producer-led collective offering industrial-grade electronic music.
              Free for non-commercial use. Perfect for creators, DJs & sync.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Listen Now
              </a>
              <a
                href="https://soundcloud.com/mrfixermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Get License
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Big Streamers
            </h4>
            <ul className="space-y-2.5">
              {bigStreamers.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              DJ & Pro
            </h4>
            <ul className="space-y-2.5">
              {djPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-6 mb-4 flex items-center gap-2">
              <Radio className="w-4 h-4" />
              Social
            </h4>
            <ul className="space-y-2.5">
              {socialPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global Reach
            </h4>
            <ul className="space-y-2.5">
              {globalPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-4">
              Site
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Mr. Fixer Music. No faces. No names. No ego.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a
                href="https://mrfixermusic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1 group"
              >
                mrfixermusic.com
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-gray-700">|</span>
              <span className="data-text text-cyan-500/50">mrfixerai.com</span>
              <span className="text-gray-700">|</span>
              <span className="text-gray-400">Free for non-commercial use (FCL)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
