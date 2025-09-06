import React, { useState, useEffect } from 'react';
import { Music, Play, Pause, Download, Clock, Calendar, Headphones, Volume2, Heart, Share2, Filter, Grid, List, Search, Tag, User, ExternalLink, Globe, Radio } from 'lucide-react';
import SEOHead from './SEOHead';
import { galleryPageStructuredData } from '../data/structuredData';

interface Collection {
  id: string;
  title: string;
  description: string;
  soundcloudUrl: string;
  type: 'playlist' | 'album' | 'set';
  trackCount?: number;
  duration?: string;
  releaseDate: string;
  genre: string;
  tags: string[];
  coverColor: string;
  featured?: boolean;
}

const GalleryPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'alphabetical'>('newest');

  // Real Mr. Fixer Music collections
  const collections: Collection[] = [
    {
      id: '1',
      title: 'Fixer Daily Drops, Vol. 48 – Global DJ Guests',
      description: 'Latest volume featuring international DJ collaborations and guest mixes from around the world. A celebration of global electronic music culture.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-48-global-dj-guests',
      type: 'set',
      trackCount: 12,
      duration: '72 min',
      releaseDate: '2025-01-25',
      genre: 'Electronic',
      tags: ['daily drops', 'global', 'dj guests', 'collaboration', 'international'],
      coverColor: '#8b5cf6',
      featured: true
    },
    {
      id: '2',
      title: 'Fixer Daily Drops, Vol. 47 – Fixer Transcendence Part 2',
      description: 'The second part of the transcendence series, exploring deeper electronic soundscapes and elevated consciousness through music.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-47-fixer-transcendence-part-2',
      type: 'set',
      trackCount: 10,
      duration: '65 min',
      releaseDate: '2025-01-22',
      genre: 'Transcendental',
      tags: ['daily drops', 'transcendence', 'consciousness', 'deep', 'spiritual'],
      coverColor: '#06b6d4'
    },
    {
      id: '3',
      title: 'Fixer Daily Drops, Vol. 46 – Fixer in Australia',
      description: '🇦🇺 Australian-inspired electronic journey capturing the essence of the continent\'s electronic music scene and natural landscapes.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-46-fixer-in-australia',
      type: 'set',
      trackCount: 14,
      duration: '85 min',
      releaseDate: '2025-01-20',
      genre: 'Australian Electronic',
      tags: ['daily drops', 'australia', 'continental', 'landscape', 'journey'],
      coverColor: '#10b981'
    },
    {
      id: '4',
      title: 'Fixer Daily Drops, Vol. 36 – Fixer in Thailand',
      description: 'Thai-influenced electronic music blending traditional Southeast Asian elements with modern electronic production techniques.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/fixer-daily-drops-vol-36-fixer-in-thailand',
      type: 'set',
      trackCount: 11,
      duration: '68 min',
      releaseDate: '2025-01-18',
      genre: 'Asian Electronic',
      tags: ['daily drops', 'thailand', 'asian', 'traditional', 'fusion'],
      coverColor: '#f59e0b'
    },
    {
      id: '5',
      title: 'Mr. Fixer Music - Free Electronic Music Collection',
      description: 'The complete collection of royalty-free electronic music tracks. Perfect for DJs, content creators, and anyone seeking high-quality electronic sounds.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/mr-fixer-music-free-electronic',
      type: 'playlist',
      trackCount: 25,
      duration: '150 min',
      releaseDate: '2025-01-15',
      genre: 'Electronic',
      tags: ['free music', 'royalty-free', 'electronic', 'complete collection', 'dj'],
      coverColor: '#ec4899',
      featured: true
    },
    {
      id: '6',
      title: 'Free Music Downloads Collection',
      description: 'Curated selection of high-quality tracks available for free download. Stream & download premium electronic music without restrictions.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets/free-music-downloads',
      type: 'playlist',
      trackCount: 20,
      duration: '120 min',
      releaseDate: '2025-01-12',
      genre: 'Various Electronic',
      tags: ['free downloads', 'high quality', 'premium', 'unrestricted', 'curated'],
      coverColor: '#6366f1',
      featured: true
    },
    {
      id: '7',
      title: 'Complete Albums Collection',
      description: 'Browse all Mr. Fixer Music albums featuring cohesive electronic music experiences and thematic journeys.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/albums',
      type: 'album',
      trackCount: 50,
      duration: '300 min',
      releaseDate: '2025-01-10',
      genre: 'Electronic Albums',
      tags: ['albums', 'complete', 'thematic', 'journey', 'cohesive'],
      coverColor: '#8b5cf6'
    },
    {
      id: '8',
      title: 'All Sets & Playlists',
      description: 'Complete collection of all Mr. Fixer Music sets and playlists. Discover curated mixes and thematic collections.',
      soundcloudUrl: 'https://soundcloud.com/mrfixermusic/sets',
      type: 'playlist',
      trackCount: 100,
      duration: '600 min',
      releaseDate: '2025-01-08',
      genre: 'Mixed Collections',
      tags: ['all sets', 'playlists', 'complete', 'curated', 'mixed'],
      coverColor: '#10b981'
    }
  ];

  const types = ['all', 'set', 'playlist', 'album'];

  const filteredCollections = collections
    .filter(collection => selectedType === 'all' || collection.type === selectedType)
    .filter(collection => 
      collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      collection.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.trackCount || 0) - (a.trackCount || 0);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
    });

  const togglePlay = (collectionId: string) => {
    setCurrentlyPlaying(currentlyPlaying === collectionId ? null : collectionId);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'set':
        return <Radio className="w-4 h-4" />;
      case 'album':
        return <Music className="w-4 h-4" />;
      case 'playlist':
      default:
        return <Volume2 className="w-4 h-4" />;
    }
  };

  const galleryStructuredData = {
    ...galleryPageStructuredData,
    "mainEntity": {
      ...galleryPageStructuredData.mainEntity,
      "numberOfItems": collections.length,
      "itemListElement": collections.slice(0, 5).map((collection, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "MusicPlaylist",
          "name": collection.title,
          "description": collection.description,
          "url": collection.soundcloudUrl,
          "numTracks": collection.trackCount,
          "genre": collection.genre,
          "datePublished": collection.releaseDate
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Music Gallery - Mr. Fixer Music | Free Electronic Music Collections"
        description="Explore Mr. Fixer Music gallery featuring Fixer Daily Drops series, free electronic music collections, and curated playlists. Stream and download high-quality electronic music for DJs and creators."
        keywords="mr fixer music gallery, fixer daily drops, free electronic music, music collections, dj sets, electronic playlists, free music downloads, royalty free music, soundcloud music"
        canonicalUrl="https://mrfixerai.com/gallery"
        structuredData={galleryStructuredData}
        publishedTime="2025-01-27T00:00:00Z"
        modifiedTime="2025-01-27T12:00:00Z"
        pageType="music"
        breadcrumbs={[
          { name: "Home", url: "https://mrfixerai.com" },
          { name: "Gallery", url: "https://mrfixerai.com/gallery" }
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
                    <Music className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Volume2 className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Music Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Free Electronic Music Collections
              </p>
              <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Explore our complete catalog of electronic music collections, including the acclaimed 
                Fixer Daily Drops series and curated playlists. All free to stream and download.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://soundcloud.com/mrfixermusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Mr. Fixer Music on SoundCloud"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Visit SoundCloud
                </a>
                <a 
                  href="/"
                  aria-label="Return to Mr. Fixer Music homepage"
                  className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Music className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* About Fixer Daily Drops */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-800/30 to-yellow-800/30 p-12 rounded-3xl backdrop-blur-sm border border-orange-500/20 mb-12">
                <div className="text-center mb-8">
                  <Headphones className="w-16 h-16 text-orange-400 mx-auto mb-6" aria-hidden="true" />
                  <h2 className="text-4xl font-bold mb-4">🎧 About Fixer Daily Drops</h2>
                  <p className="text-xl text-gray-300">Born from a personal struggle to find quality practice music</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-300 text-center">The Origin Story</h3>
                    <p className="mb-4">
                      When I, Mr. Fixer, started learning how to DJ and produce – I couldn't find high-quality music to practice with. 
                      Most of it was either overly commercial, full of ads, or lacked soul.
                    </p>
                    <p className="mb-4">
                      Nothing felt built for learners – just for listeners.
                    </p>
                    <p>
                      So I decided to create the kind of music I wished I had back then.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-300 text-center">What It Is</h3>
                    <p className="mb-4">
                      A daily drop of original music in various styles: Techno, House, Trance, Groove, Jazz, and beyond.
                    </p>
                    <p className="mb-4">
                      <strong>100% royalty-free, no ads, no sign-up</strong> – just pure sound.
                    </p>
                    <p>
                      Designed for DJs, producers, dancers, editors, teachers – or anyone who needs clean, quality sound to grow with.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-8 pt-8 border-t border-orange-500/20">
                  <p className="text-lg italic text-orange-200">
                    "This is more than a project – It's a gift to the next version of you."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search collections, tags, or descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Type Filter */}
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="appearance-none bg-white/10 border border-white/20 rounded-full px-4 py-2 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                    >
                      <option value="all" className="bg-gray-800 text-white">All Types</option>
                      <option value="set" className="bg-gray-800 text-white">DJ Sets</option>
                      <option value="playlist" className="bg-gray-800 text-white">Playlists</option>
                      <option value="album" className="bg-gray-800 text-white">Albums</option>
                    </select>
                    <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'alphabetical')}
                    className="appearance-none bg-white/10 border border-white/20 rounded-full px-4 py-2 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                  >
                    <option value="newest" className="bg-gray-800 text-white">Newest First</option>
                    <option value="popular" className="bg-gray-800 text-white">Most Tracks</option>
                    <option value="alphabetical" className="bg-gray-800 text-white">A-Z</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        viewMode === 'grid' 
                          ? 'bg-purple-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        viewMode === 'list' 
                          ? 'bg-purple-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                      aria-label="List view"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-400">
                  Showing {filteredCollections.length} of {collections.length} collections
                  {selectedType !== 'all' && ` (${selectedType}s)`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        {filteredCollections.some(c => c.featured) && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">⭐ Featured Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredCollections.filter(c => c.featured).map((collection) => (
                    <div
                      key={collection.id}
                      className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border-2 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 overflow-hidden group relative"
                    >
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                      
                      {/* Collection Visualization */}
                      <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-700 relative overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `linear-gradient(45deg, ${collection.coverColor}20, ${collection.coverColor}60)`
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => togglePlay(collection.id)}
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:scale-110"
                            aria-label={currentlyPlaying === collection.id ? 'Pause collection' : 'Play collection'}
                          >
                            {currentlyPlaying === collection.id ? (
                              <Pause className="w-8 h-8 text-white" />
                            ) : (
                              <Play className="w-8 h-8 text-white ml-1" />
                            )}
                          </button>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-2">
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium flex items-center"
                              style={{ backgroundColor: `${collection.coverColor}40`, color: collection.coverColor }}
                            >
                              {getTypeIcon(collection.type)}
                              <span className="ml-1 capitalize">{collection.type}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Collection Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors line-clamp-2 text-center">
                          {collection.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 text-center">
                          {collection.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {collection.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            {collection.trackCount && (
                              <span className="flex items-center">
                                <Music className="w-4 h-4 mr-1" />
                                {collection.trackCount} tracks
                              </span>
                            )}
                            {collection.duration && (
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {collection.duration}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <a
                            href={collection.soundcloudUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 px-4 py-2 rounded-full text-center font-medium transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Listen Now
                          </a>
                          <button
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center justify-center"
                            aria-label="Share collection"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Collections */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">All Collections</h2>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCollections.map((collection) => (
                    <div
                      key={collection.id}
                      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 overflow-hidden group ${collection.featured ? 'opacity-60' : ''}`}
                    >
                      {/* Collection Visualization */}
                      <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-700 relative overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: `linear-gradient(45deg, ${collection.coverColor}20, ${collection.coverColor}40)`
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => togglePlay(collection.id)}
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group-hover:scale-110"
                            aria-label={currentlyPlaying === collection.id ? 'Pause collection' : 'Play collection'}
                          >
                            {currentlyPlaying === collection.id ? (
                              <Pause className="w-8 h-8 text-white" />
                            ) : (
                              <Play className="w-8 h-8 text-white ml-1" />
                            )}
                          </button>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium flex items-center"
                            style={{ backgroundColor: `${collection.coverColor}40`, color: collection.coverColor }}
                          >
                            {getTypeIcon(collection.type)}
                            <span className="ml-1 capitalize">{collection.type}</span>
                          </span>
                        </div>
                      </div>

                      {/* Collection Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors line-clamp-2 text-center">
                          {collection.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 text-center">
                          {collection.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {collection.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            {collection.trackCount && (
                              <span className="flex items-center">
                                <Music className="w-4 h-4 mr-1" />
                                {collection.trackCount} tracks
                              </span>
                            )}
                            {collection.duration && (
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {collection.duration}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <a
                            href={collection.soundcloudUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full text-center font-medium transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Listen Now
                          </a>
                          <button
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center justify-center"
                            aria-label="Share collection"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCollections.map((collection) => (
                    <div
                      key={collection.id}
                      className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 p-6 group ${collection.featured ? 'border-yellow-500/30' : ''}`}
                    >
                      <div className="flex items-center gap-6">
                        {/* Play Button */}
                        <button
                          onClick={() => togglePlay(collection.id)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                          aria-label={currentlyPlaying === collection.id ? 'Pause collection' : 'Play collection'}
                        >
                          {currentlyPlaying === collection.id ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-0.5" />
                          )}
                        </button>

                        {/* Collection Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors text-center">
                                  {collection.title}
                                </h3>
                                {collection.featured && (
                                  <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
                                    FEATURED
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-400 text-sm line-clamp-2 text-center">
                                {collection.description}
                              </p>
                            </div>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium flex items-center flex-shrink-0 ml-4"
                              style={{ backgroundColor: `${collection.coverColor}40`, color: collection.coverColor }}
                            >
                              {getTypeIcon(collection.type)}
                              <span className="ml-1 capitalize">{collection.type}</span>
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {collection.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Stats and Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                              {collection.trackCount && (
                                <span className="flex items-center">
                                  <Music className="w-4 h-4 mr-1" />
                                  {collection.trackCount} tracks
                                </span>
                              )}
                              {collection.duration && (
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {collection.duration}
                                </span>
                              )}
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(collection.releaseDate).toLocaleDateString()}
                              </span>
                            </div>

                            <div className="flex gap-2">
                              <a
                                href={collection.soundcloudUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm flex items-center"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Listen Now
                              </a>
                              <button
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center"
                                aria-label="Share collection"
                              >
                                <Share2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredCollections.length === 0 && (
                <div className="text-center py-20">
                  <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">No collections found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <Globe className="w-16 h-16 text-purple-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8">
                  All collections are free to stream and download. Support the decentralized music movement 
                  by sharing with your community and using in your creative projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://soundcloud.com/mrfixermusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Volume2 className="w-5 h-5 mr-2" />
                    Follow on SoundCloud
                  </a>
                  <a 
                    href="/terms"
                    className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Usage Terms
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Music Gallery</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Discover, stream, and download free electronic music collections from Mr. Fixer Music. 
                All content available under Creative Commons licensing for global creative communities.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  © 2025 Mr. Fixer Music - Gallery Collection | 
                  <span className="text-purple-400"> Free Music • Global Access • Creative Freedom</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GalleryPage;