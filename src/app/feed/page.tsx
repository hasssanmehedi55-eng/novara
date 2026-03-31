/* eslint-disable @next/next/no-img-element */
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

/* ════════════════════════════════════════
   TYPES
   ════════════════════════════════════════ */

interface Badge {
  label: string;
  icon: string;
  type: 'gold' | 'cyan' | 'green' | 'purple';
}

interface Profile {
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
  coverUrl: string;
  avatarUrl: string;
}

/* ════════════════════════════════════════
   PROFILE DATA
   ════════════════════════════════════════ */

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Aria Chen',
    age: 33,
    username: '@aria_vibes',
    pricePerHour: 21,
    isOnline: true,
    isVerified: true,
    badges: [{ label: 'New Member', icon: '🌟', type: 'gold' }],
    bio: '✨ Creative soul | Let\u0027s explore the city together and find hidden gems 🏙️',
    location: 'New York, NY',
    rating: 3.3,
    interests: ['Astronomy', 'Fashion', 'Anime', 'Climbing'],
    coverUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
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
      { label: 'Super Host', icon: '💎', type: 'cyan' },
      { label: 'Verified', icon: '✓', type: 'green' },
    ],
    bio: '🎮 Gamer & chill companion | Down for late night gaming sessions or coffee runs 🍵',
    location: 'Los Angeles, CA',
    rating: 4.0,
    interests: ['Crafts', 'Board Games', 'Travel', 'Photography'],
    coverUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
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
      { label: 'Premium', icon: '⭐', type: 'purple' },
      { label: 'Verified', icon: '✓', type: 'green' },
    ],
    bio: '📚 Book lover seeking adventure buddies | Let\u0027s discuss philosophy over ramen 🍜',
    location: 'Tokyo, JP',
    rating: 4.8,
    interests: ['Hiking', 'Art', 'Climbing', 'Anime'],
    coverUrl:
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: '4',
    name: 'Jake Thompson',
    age: 29,
    username: '@jake_t',
    pricePerHour: 47,
    isOnline: true,
    isVerified: false,
    badges: [{ label: 'New Member', icon: '🌟', type: 'gold' }],
    bio: '🏕️ Outdoor enthusiast | Looking for hiking buddies and camping companions 🌲',
    location: 'Denver, CO',
    rating: 4.2,
    interests: ['Hiking', 'Camping', 'Photography', 'Cooking'],
    coverUrl:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: '5',
    name: 'Sophia Park',
    age: 24,
    username: '@soph.art',
    pricePerHour: 31,
    isOnline: false,
    isVerified: true,
    badges: [{ label: 'Super Host', icon: '💎', type: 'cyan' }],
    bio: '🎨 Artist & creative companion | Museums, galleries, and café hopping 🖼️',
    location: 'Seoul, KR',
    rating: 4.6,
    interests: ['Art', 'Music', 'Coffee', 'Fashion'],
    coverUrl:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
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
      { label: 'Premium', icon: '⭐', type: 'purple' },
      { label: 'Verified', icon: '✓', type: 'green' },
    ],
    bio: '🎸 Musician & foodie | Let\u0027s jam and try new restaurants together 🍕',
    location: 'London, UK',
    rating: 4.4,
    interests: ['Music', 'Food', 'Travel', 'Sports'],
    coverUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
];

/* ════════════════════════════════════════
   NAVIGATION & FILTERS
   ════════════════════════════════════════ */

const navItems = [
  { icon: Home, label: 'Discover', href: '/feed', active: true },
  { icon: Heart, label: 'Matches', href: '/matches', active: false },
  { icon: MessageCircle, label: 'Messages', href: '/messages', active: false },
  { icon: Bell, label: 'Notifications', href: '/notifications', active: false },
  { icon: User, label: 'Profile', href: '/profile', active: false },
   { icon: Settings, label: 'Settings', href: '/settings', active: false },
];

const filterTabs = [
  { label: 'All', emoji: '✨' },
  { label: 'Online', dot: true },
  { label: 'Nearby', emoji: '📍' },
  { label: 'Top Rated', emoji: '⭐' },
  { label: 'New', emoji: '🆕' },
  { label: 'Filters', isFilter: true },
];

/* ════════════════════════════════════════
   BADGE STYLES
   ════════════════════════════════════════ */

function getBadgeStyle(type: string) {
  switch (type) {
    case 'gold':
      return 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10';
    case 'cyan':
      return 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10';
    case 'green':
      return 'border-green-500/30 text-green-400 bg-green-500/10';
    case 'purple':
      return 'border-violet-500/30 text-violet-400 bg-violet-500/10';
    default:
      return 'border-white/10 text-gray-400 bg-white/5';
  }
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */

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
      {/* ═══════ MOBILE MENU BUTTON ═══════ */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2.5 rounded-xl bg-[#0c0c18]/90 backdrop-blur-xl border border-white/10 text-white shadow-xl"
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* ═══════ MOBILE OVERLAY ═══════ */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ═══════════════════════════════════
          SIDEBAR
          ═══════════════════════════════════ */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-40
          w-[280px] shrink-0
          bg-[#060610]/95 backdrop-blur-2xl
          border-r border-white/[0.06]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="px-6 py-6 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-violet-500/30">
            N
          </div>
          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Novara
          </span>
        </div>

        {/* User Card */}
        <div className="mx-4 mb-8 p-4 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] flex items-center gap-3.5">
          <div className="relative shrink-0">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-md">
              YOU
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-[2.5px] border-[#060610]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">You</p>
            <p className="text-xs text-gray-500 truncate">@your_profile</p>
          </div>
          <Sparkles size={16} className="text-violet-400 shrink-0" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`
                flex items-center gap-3.5 px-4 py-3 rounded-xl
                text-[13.5px] font-medium transition-all duration-200
                ${
                  item.active
                    ? 'bg-gradient-to-r from-violet-500/15 to-violet-500/5 text-violet-400 border border-violet-500/20 shadow-sm shadow-violet-500/10'
                    : 'text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 border border-transparent'
                }
              `}
            >
              <item.icon size={19} strokeWidth={item.active ? 2.2 : 1.8} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="px-3 pb-6 pt-4 border-t border-white/[0.04] mx-3">
          <Link
            href="/"
            className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13.5px] font-medium text-red-400/80 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          >
            <LogOut size={19} strokeWidth={1.8} />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* ═══════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════ */}
      <main className="flex-1 min-h-screen min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-[#030507]/80 backdrop-blur-2xl border-b border-white/[0.04]">
          <div className="px-5 sm:px-8 py-4 flex items-center justify-between max-w-[1400px] mx-auto">
            <h1 className="text-lg font-bold text-white lg:ml-0 ml-14">
              Discover
            </h1>
            <div className="flex items-center gap-2.5">
              <button className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all duration-200">
                <Search size={17} className="text-gray-400" />
              </button>
              <button className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all duration-200 relative">
                <Bell size={17} className="text-gray-400" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#030507]" />
              </button>
            </div>
          </div>
        </header>

        <div className="px-5 sm:px-8 py-6 max-w-[1400px] mx-auto">
          {/* Discover Banner */}
          <div className="relative overflow-hidden rounded-2xl mb-8 p-6 sm:p-8 bg-gradient-to-r from-violet-600/[0.12] via-purple-600/[0.06] to-transparent border border-white/[0.06]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-2">
                <Sparkles size={24} className="text-violet-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Discover People
                </h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-[15px] max-w-lg">
                Find amazing friends to hang out with. Like profiles
                you&apos;re interested in!
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.label)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl
                  text-[13px] font-semibold transition-all duration-200 cursor-pointer
                  ${
                    activeFilter === tab.label
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 border border-violet-500/50'
                      : 'bg-white/[0.03] text-gray-400 border border-white/[0.08] hover:bg-white/[0.06] hover:text-white hover:border-white/[0.12]'
                  }
                `}
              >
                {tab.dot && (
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeFilter === tab.label ? 'bg-white' : 'bg-emerald-500'
                    }`}
                  />
                )}
                {tab.isFilter && <SlidersHorizontal size={13} />}
                {tab.emoji && <span>{tab.emoji}</span>}
                {tab.label}
              </button>
            ))}
          </div>

          {/* ══════════════════════════════
             PROFILE CARDS GRID
             ══════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                className="group bg-[#0c0c18] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-violet-500/25 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/[0.07] hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* ── Cover Image ── */}
                <div className="relative h-48">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={profile.coverUrl}
                      alt={`${profile.name} cover`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c18] via-[#0c0c18]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                  {/* Price */}
                  <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-xl border border-white/[0.12] rounded-lg px-3 py-1.5 flex items-center gap-1.5 z-10">
                    <span className="text-emerald-400 text-xs font-bold">$</span>
                    <span className="text-white text-[13px] font-bold">
                      {profile.pricePerHour}/hr
                    </span>
                  </div>

                  {/* Online Status */}
                  <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-xl border border-white/[0.12] rounded-lg px-3 py-1.5 flex items-center gap-1.5 z-10">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        profile.isOnline
                          ? 'bg-emerald-500 animate-pulse'
                          : 'bg-gray-500'
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        profile.isOnline ? 'text-emerald-400' : 'text-gray-400'
                      }`}
                    >
                      {profile.isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>

                {/* ── Avatar (OUTSIDE cover) ── */}
                <div className="relative px-5 -mt-8 z-10">
                  <div className="relative w-fit">
                    <div className="w-16 h-16 rounded-full border-[3px] border-[#0c0c18] overflow-hidden shadow-xl shadow-black/50">
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {profile.isVerified && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-[22px] h-[22px] bg-blue-500 rounded-full flex items-center justify-center border-[2.5px] border-[#0c0c18] shadow-md">
                        <ShieldCheck size={10} className="text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-5 pt-3">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-[15px] text-white">
                      {profile.name}
                    </h3>
                    <span className="text-gray-500 text-sm">{profile.age}</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-3.5">
                    {profile.username}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {profile.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-[3px] rounded-md text-[11px] font-semibold border ${getBadgeStyle(badge.type)}`}
                      >
                        {badge.icon} {badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {profile.bio}
                  </p>

                  {/* Location & Rating */}
                  <div className="flex items-center gap-5 mb-4 text-xs">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <MapPin size={12} />
                      {profile.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="font-semibold">{profile.rating}</span>
                    </span>
                  </div>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {profile.interests.slice(0, 3).map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] text-gray-400 text-[11px] font-medium border border-white/[0.06]"
                      >
                        {interest}
                      </span>
                    ))}
                    {profile.interests.length > 3 && (
                      <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-400 text-[11px] font-semibold border border-violet-500/20">
                        +{profile.interests.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => handleLike(profile.id)}
                      className={`
                        flex-1 flex items-center justify-center gap-2
                        py-2.5 rounded-xl text-[13px] font-semibold
                        transition-all duration-200 cursor-pointer
                        ${
                          likedProfiles.includes(profile.id)
                            ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30 border border-pink-500/30'
                            : 'bg-white/[0.04] text-gray-300 border border-white/[0.08] hover:bg-pink-500/15 hover:text-pink-400 hover:border-pink-500/25'
                        }
                      `}
                    >
                      <Heart
                        size={15}
                        className={
                          likedProfiles.includes(profile.id)
                            ? 'fill-white'
                            : ''
                        }
                      />
                      {likedProfiles.includes(profile.id) ? 'Liked' : 'Like'}
                    </button>
                    <button
                      onClick={() => handleSuperLike(profile.id)}
                      className={`
                        px-3.5 py-2.5 rounded-xl
                        transition-all duration-200 cursor-pointer
                        ${
                          superLikedProfiles.includes(profile.id)
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/30 border border-violet-500/30'
                            : 'bg-white/[0.04] text-gray-400 border border-white/[0.08] hover:bg-violet-500/15 hover:text-violet-400 hover:border-violet-500/25'
                        }
                      `}
                    >
                      <Sparkles size={15} />
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