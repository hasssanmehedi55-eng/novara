'use client';

import { useState } from 'react';
import {
  Home,
  Heart,
  MessageCircle,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  Star,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';

// ==================== DATA ====================

interface Badge {
  label: string;
  icon: string;
  className: string;
}

interface ProfileData {
  id: string;
  name: string;
  age: number;
  username: string;
  pricePerHour: number;
  isOnline: boolean;
  isVerified: boolean;
  badges: Badge[];
  bio: string;
  location: string;
  rating: number;
  interests: string[];
  coverGradient: string;
  avatarColor: string;
  initials: string;
}

const profiles: ProfileData[] = [
  {
    id: '1',
    name: 'Aria Chen',
    age: 33,
    username: '@aria_vibes',
    pricePerHour: 21,
    isOnline: true,
    isVerified: true,
    badges: [
      {
        label: 'New Member',
        icon: '🌟',
        className: 'border-yellow-500/30 text-yellow-400',
      },
    ],
    bio: '✨ Creative soul | Let\u0027s explore the city together and find hidden gems 🏙️',
    location: 'New York, NY',
    rating: 3.3,
    interests: ['Astronomy', 'Fashion', 'Anime', 'Climbing'],
    coverGradient: 'bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-800',
    avatarColor: 'bg-gradient-to-br from-rose-500 to-pink-600',
    initials: 'AC',
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    age: 26,
    username: '@marc.creates',
    pricePerHour: 11,
    isOnline: true,
    isVerified: true,
    badges: [
      {
        label: 'Super Host',
        icon: '💎',
        className: 'border-cyan-500/30 text-cyan-400',
      },
      {
        label: 'Verified',
        icon: '✓',
        className: 'border-green-500/30 text-green-400',
      },
    ],
    bio: '🎮 Gamer & chill companion | Down for late night gaming sessions or coffee runs 🍵',
    location: 'Los Angeles, CA',
    rating: 4.0,
    interests: ['Crafts', 'Board Games', 'Travel', 'Photography'],
    coverGradient: 'bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900',
    avatarColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
    initials: 'MR',
  },
  {
    id: '3',
    name: 'Luna Kim',
    age: 25,
    username: '@lunarkm',
    pricePerHour: 40,
    isOnline: true,
    isVerified: true,
    badges: [
      {
        label: 'Premium',
        icon: '⭐',
        className: 'border-yellow-500/30 text-yellow-400',
      },
      {
        label: 'Verified',
        icon: '✓',
        className: 'border-green-500/30 text-green-400',
      },
    ],
    bio: '📚 Book lover seeking adventure buddies | Let\u0027s discuss philosophy over ramen 🍜',
    location: 'Tokyo, JP',
    rating: 4.8,
    interests: ['Hiking', 'Art', 'Climbing', 'Anime'],
    coverGradient: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900',
    avatarColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    initials: 'LK',
  },
  {
    id: '4',
    name: 'Jake Thompson',
    age: 29,
    username: '@jake_t',
    pricePerHour: 47,
    isOnline: true,
    isVerified: false,
    badges: [
      {
        label: 'New Member',
        icon: '🌟',
        className: 'border-yellow-500/30 text-yellow-400',
      },
    ],
    bio: '🏕️ Outdoor enthusiast | Looking for hiking buddies and camping companions 🌲',
    location: 'Denver, CO',
    rating: 4.2,
    interests: ['Hiking', 'Camping', 'Photography', 'Cooking'],
    coverGradient: 'bg-gradient-to-br from-orange-950 via-amber-900 to-slate-900',
    avatarColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
    initials: 'JT',
  },
  {
    id: '5',
    name: 'Sophia Park',
    age: 24,
    username: '@soph.art',
    pricePerHour: 31,
    isOnline: false,
    isVerified: true,
    badges: [
      {
        label: 'Super Host',
        icon: '💎',
        className: 'border-cyan-500/30 text-cyan-400',
      },
    ],
    bio: '🎨 Artist & creative companion | Museums, galleries, and café hopping 🖼️',
    location: 'Seoul, KR',
    rating: 4.6,
    interests: ['Art', 'Music', 'Coffee', 'Fashion'],
    coverGradient: 'bg-gradient-to-br from-pink-950 via-rose-900 to-slate-900',
    avatarColor: 'bg-gradient-to-br from-sky-500 to-blue-600',
    initials: 'SP',
  },
  {
    id: '6',
    name: 'Daniel Brooks',
    age: 31,
    username: '@dan.b',
    pricePerHour: 25,
    isOnline: true,
    isVerified: true,
    badges: [
      {
        label: 'Premium',
        icon: '⭐',
        className: 'border-yellow-500/30 text-yellow-400',
      },
      {
        label: 'Verified',
        icon: '✓',
        className: 'border-green-500/30 text-green-400',
      },
    ],
    bio: '🎸 Musician & foodie | Let\u0027s jam and try new restaurants together 🍕',
    location: 'London, UK',
    rating: 4.4,
    interests: ['Music', 'Food', 'Travel', 'Sports'],
    coverGradient: 'bg-gradient-to-br from-cyan-950 via-blue-900 to-slate-900',
    avatarColor: 'bg-gradient-to-br from-red-500 to-rose-600',
    initials: 'DB',
  },
];

const navItems = [
  { icon: Home, label: 'Discover', href: '/feed', active: true },
  { icon: Heart, label: 'Matches', href: '/feed', active: false },
  { icon: MessageCircle, label: 'Messages', href: '/feed', active: false },
  { icon: Bell, label: 'Notifications', href: '/feed', active: false },
  { icon: User, label: 'Profile', href: '/profile', active: false },
  { icon: Settings, label: 'Settings', href: '/feed', active: false },
];

const filterTabs = [
  { label: 'All', emoji: '✨' },
  { label: 'Online', dot: true },
  { label: 'Nearby', emoji: '📍' },
  { label: 'Top Rated', emoji: '⭐' },
  { label: 'New', emoji: '🆕' },
  { label: 'Filters', isFilter: true },
];

// ==================== COMPONENT ====================

export default function FeedPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);
  const [superLikedProfiles, setSuperLikedProfiles] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLike = (id: string) => {
    setLikedProfiles((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSuperLike = (id: string) => {
    setSuperLikedProfiles((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#030507] text-white flex">
      {/* ====== MOBILE MENU BUTTON ====== */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#0d0d1a] border border-white/10 text-white"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* ====== MOBILE OVERLAY ====== */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ====== SIDEBAR ====== */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#0a0a14] border-r border-white/5 flex flex-col z-40 transition-transform duration-300 shrink-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-violet-600/30">
            N
          </div>
          <span className="text-lg font-bold tracking-wide">Novara</span>
        </div>

        {/* User Profile */}
        <div className="px-4 py-3 mx-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold">
              YOU
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0a0a14]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">You</p>
            <p className="text-xs text-gray-500">@your_profile</p>
          </div>
          <Sparkles size={16} className="text-violet-400" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                item.active
                  ? 'bg-violet-600/15 text-violet-400 border border-violet-500/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="px-3 pb-6">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 w-full transition-all duration-200">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ====== MAIN CONTENT ====== */}
      <main className="flex-1 min-h-screen min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-[#030507]/80 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-xl font-bold lg:ml-0 ml-12">Discover</h1>
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200">
                <Search size={18} className="text-gray-400" />
              </button>
              <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 relative">
                <Bell size={18} className="text-gray-400" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* ====== DISCOVER HEADER ====== */}
          <div className="bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-transparent border border-white/5 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={22} className="text-violet-400" />
              <h2 className="text-xl font-bold">Discover People</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Find amazing friends to hang out with. Like profiles you&apos;re
              interested in!
            </p>
          </div>

          {/* ====== FILTER TABS ====== */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.label)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.label
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.dot && (
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeFilter === tab.label
                        ? 'bg-white'
                        : 'bg-green-500'
                    }`}
                  />
                )}
                {tab.isFilter && (
                  <SlidersHorizontal
                    size={14}
                    className={
                      activeFilter === tab.label
                        ? 'text-white'
                        : 'text-gray-400'
                    }
                  />
                )}
                {tab.emoji && <span className="text-sm">{tab.emoji}</span>}
                {tab.label}
              </button>
            ))}
          </div>

          {/* ====== PROFILE CARDS GRID ====== */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-[#0d0d1a] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5"
              >
                {/* Cover Area */}
                <div
                  className={`relative h-44 ${profile.coverGradient} overflow-hidden`}
                >
                  {/* Mountain Silhouette */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg
                      viewBox="0 0 400 60"
                      className="w-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,60 L30,35 L60,45 L100,20 L140,40 L180,15 L220,38 L260,22 L300,42 L340,18 L380,35 L400,25 L400,60 Z"
                        fill="rgba(0,0,0,0.3)"
                      />
                    </svg>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1">
                    <span className="text-green-400 text-xs font-bold">$</span>
                    <span className="text-white text-sm font-bold">
                      {profile.pricePerHour}/hr
                    </span>
                  </div>

                  {/* Online Badge */}
                  {profile.isOnline && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">
                        Online
                      </span>
                    </div>
                  )}

                  {/* Offline Badge */}
                  {!profile.isOnline && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full" />
                      <span className="text-gray-400 text-xs font-medium">
                        Offline
                      </span>
                    </div>
                  )}

                  {/* Avatar */}
                  <div className="absolute -bottom-7 left-4">
                    <div
                      className={`w-14 h-14 rounded-full ${profile.avatarColor} flex items-center justify-center text-white font-bold text-base border-[3px] border-[#0d0d1a] shadow-lg`}
                    >
                      {profile.initials}
                    </div>
                    {profile.isVerified && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0d0d1a]">
                        <ShieldCheck size={10} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 pt-10">
                  {/* Name & Age */}
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-[15px]">{profile.name}</h3>
                    <span className="text-gray-400 text-sm">{profile.age}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-3">
                    {profile.username}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {profile.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-medium border bg-white/[0.03] ${badge.className}`}
                      >
                        {badge.icon} {badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                    {profile.bio}
                  </p>

                  {/* Location & Rating */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-gray-500" />
                      {profile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      {profile.rating}
                    </span>
                  </div>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {profile.interests.slice(0, 3).map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 text-xs border border-white/5"
                      >
                        {interest}
                      </span>
                    ))}
                    {profile.interests.length > 3 && (
                      <span className="px-2 py-1 rounded-lg bg-violet-500/10 text-violet-400 text-xs border border-violet-500/20">
                        +{profile.interests.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLike(profile.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                        likedProfiles.includes(profile.id)
                          ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-pink-600/20 hover:text-pink-400 hover:border-pink-500/30'
                      }`}
                    >
                      <Heart
                        size={16}
                        className={
                          likedProfiles.includes(profile.id) ? 'fill-white' : ''
                        }
                      />
                      Like
                    </button>
                    <button
                      onClick={() => handleSuperLike(profile.id)}
                      className={`px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                        superLikedProfiles.includes(profile.id)
                          ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                          : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-violet-600/20 hover:text-violet-400 hover:border-violet-500/30'
                      }`}
                    >
                      <Sparkles size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}