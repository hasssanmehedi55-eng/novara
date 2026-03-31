/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {
  Heart,
  MessageCircle,
  ChevronLeft,
  Sparkles,
  Star,
  MapPin,
  ShieldCheck,
  Clock,
  X,
  CheckCircle2,
  Flame,
  Users,
  Zap,
  Crown,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   TYPES
   ════════════════════════════════════════ */

interface MatchProfile {
  id: string;
  name: string;
  age: number;
  username: string;
  avatar: string;
  cover: string;
  location: string;
  rating: number;
  pricePerHour: number;
  isOnline: boolean;
  isVerified: boolean;
  matchDate: string;
  matchPercent: number;
  bio: string;
  interests: string[];
  type: 'mutual' | 'liked_you' | 'super_like';
}

/* ════════════════════════════════════════
   DATA
   ════════════════════════════════════════ */

const matchProfiles: MatchProfile[] = [
  {
    id: '1',
    name: 'Aria Chen',
    age: 33,
    username: '@aria_vibes',
    avatar: 'https://i.pravatar.cc/150?img=5',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    location: 'New York, NY',
    rating: 4.8,
    pricePerHour: 21,
    isOnline: true,
    isVerified: true,
    matchDate: '2 hours ago',
    matchPercent: 95,
    bio: '✨ Creative soul | Let\'s explore the city together',
    interests: ['Photography', 'Art', 'Coffee', 'Travel'],
    type: 'mutual',
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    age: 26,
    username: '@marc.creates',
    avatar: 'https://i.pravatar.cc/150?img=12',
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop',
    location: 'Los Angeles, CA',
    rating: 4.9,
    pricePerHour: 35,
    isOnline: true,
    isVerified: true,
    matchDate: '5 hours ago',
    matchPercent: 88,
    bio: '🎮 Gamer & chill companion | Down for gaming sessions',
    interests: ['Gaming', 'Music', 'Food', 'Travel'],
    type: 'super_like',
  },
  {
    id: '3',
    name: 'Luna Kim',
    age: 25,
    username: '@lunarkm',
    avatar: 'https://i.pravatar.cc/150?img=9',
    cover: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop',
    location: 'Tokyo, JP',
    rating: 4.7,
    pricePerHour: 40,
    isOnline: false,
    isVerified: true,
    matchDate: '1 day ago',
    matchPercent: 92,
    bio: '📚 Book lover seeking adventure buddies',
    interests: ['Reading', 'Hiking', 'Art', 'Anime'],
    type: 'mutual',
  },
  {
    id: '4',
    name: 'Jake Thompson',
    age: 29,
    username: '@jake_t',
    avatar: 'https://i.pravatar.cc/150?img=11',
    cover: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    location: 'Denver, CO',
    rating: 4.2,
    pricePerHour: 47,
    isOnline: true,
    isVerified: false,
    matchDate: '2 days ago',
    matchPercent: 78,
    bio: '🏕️ Outdoor enthusiast | Hiking & camping',
    interests: ['Hiking', 'Camping', 'Photography'],
    type: 'liked_you',
  },
  {
    id: '5',
    name: 'Sophia Park',
    age: 24,
    username: '@soph.art',
    avatar: 'https://i.pravatar.cc/150?img=16',
    cover: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop',
    location: 'Seoul, KR',
    rating: 4.6,
    pricePerHour: 31,
    isOnline: false,
    isVerified: true,
    matchDate: '3 days ago',
    matchPercent: 85,
    bio: '🎨 Artist & creative companion',
    interests: ['Art', 'Music', 'Coffee', 'Fashion'],
    type: 'liked_you',
  },
  {
    id: '6',
    name: 'Daniel Brooks',
    age: 31,
    username: '@dan.b',
    avatar: 'https://i.pravatar.cc/150?img=8',
    cover: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
    location: 'London, UK',
    rating: 4.4,
    pricePerHour: 25,
    isOnline: true,
    isVerified: true,
    matchDate: '5 days ago',
    matchPercent: 81,
    bio: '🎸 Musician & foodie | Let\'s jam together',
    interests: ['Music', 'Food', 'Travel', 'Sports'],
    type: 'mutual',
  },
  {
    id: '7',
    name: 'Emily Watson',
    age: 27,
    username: '@em.watson',
    avatar: 'https://i.pravatar.cc/150?img=20',
    cover: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    location: 'Sydney, AU',
    rating: 4.5,
    pricePerHour: 28,
    isOnline: true,
    isVerified: true,
    matchDate: '6 days ago',
    matchPercent: 90,
    bio: '🌊 Beach lover & yoga enthusiast',
    interests: ['Yoga', 'Beach', 'Cooking', 'Travel'],
    type: 'super_like',
  },
  {
    id: '8',
    name: 'Ryan Lee',
    age: 30,
    username: '@ryan.lee',
    avatar: 'https://i.pravatar.cc/150?img=53',
    cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop',
    location: 'Singapore',
    rating: 4.3,
    pricePerHour: 33,
    isOnline: false,
    isVerified: true,
    matchDate: '1 week ago',
    matchPercent: 76,
    bio: '🚀 Tech enthusiast & startup lover',
    interests: ['Coding', 'Coffee', 'Fitness', 'Gaming'],
    type: 'liked_you',
  },
];

/* ════════════════════════════════════════
   FILTER TABS
   ════════════════════════════════════════ */

const tabs = [
  { id: 'all', label: 'All Matches', icon: Heart, count: 8 },
  { id: 'mutual', label: 'Mutual', icon: Sparkles, count: 3 },
  { id: 'liked_you', label: 'Liked You', icon: Flame, count: 3 },
  { id: 'super_like', label: 'Super Likes', icon: Zap, count: 2 },
];

/* ════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════ */

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  const filteredMatches = matchProfiles.filter((p) => {
    if (dismissedIds.includes(p.id)) return false;
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  const handleDismiss = (id: string) => {
    setDismissedIds((prev) => [...prev, id]);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'mutual':
        return { label: 'Mutual Match', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.2)', icon: <Sparkles size={12} /> };
      case 'liked_you':
        return { label: 'Liked You', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.1)', border: 'rgba(244, 114, 182, 0.2)', icon: <Heart size={12} /> };
      case 'super_like':
        return { label: 'Super Like', color: '#facc15', bg: 'rgba(250, 204, 21, 0.1)', border: 'rgba(250, 204, 21, 0.2)', icon: <Zap size={12} /> };
      default:
        return { label: '', color: '#9ca3af', bg: '', border: '', icon: null };
    }
  };

  const getMatchColor = (percent: number) => {
    if (percent >= 90) return '#22c55e';
    if (percent >= 80) return '#3b82f6';
    if (percent >= 70) return '#f59e0b';
    return '#6b7280';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#030507', color: '#fff' }}>

      {/* ═══════════════════════════════════
          TOP BAR
          ═══════════════════════════════════ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(3, 5, 7, 0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/feed" style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', textDecoration: 'none',
            }}>
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 style={{ fontSize: 18, fontWeight: 700 }}>Matches</h1>
              <p style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>
                {matchProfiles.length - dismissedIds.length} people matched with you
              </p>
            </div>
          </div>
          <div style={{
            padding: '6px 14px', borderRadius: 10,
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.05))',
            border: '1px solid rgba(236, 72, 153, 0.2)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Heart size={14} style={{ color: '#ec4899', fill: '#ec4899' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#ec4899' }}>
              {matchProfiles.length - dismissedIds.length}
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px 20px 80px' }}>

        {/* ═══════════════════════════════════
            STATS BAR
            ═══════════════════════════════════ */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 12, marginBottom: 24,
        }}>
          {[
            { icon: Heart, label: 'Total Matches', value: '8', color: '#ec4899' },
            { icon: Sparkles, label: 'Mutual', value: '3', color: '#22c55e' },
            { icon: Zap, label: 'Super Likes', value: '2', color: '#facc15' },
            { icon: Crown, label: 'Match Rate', value: '78%', color: '#a78bfa' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: stat.color, flexShrink: 0,
              }}>
                <stat.icon size={18} />
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 700 }}>{stat.value}</p>
                <p style={{ fontSize: 10, color: '#6b7280', fontWeight: 500 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════
            FILTER TABS
            ═══════════════════════════════════ */}
        <div style={{
          display: 'flex', gap: 8, marginBottom: 24,
          overflowX: 'auto', paddingBottom: 4,
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 20px', borderRadius: 12,
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                  : 'rgba(255,255,255,0.03)',
                border: activeTab === tab.id
                  ? '1px solid rgba(139, 92, 246, 0.4)'
                  : '1px solid rgba(255,255,255,0.06)',
                color: activeTab === tab.id ? '#fff' : '#9ca3af',
                fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 8,
                cursor: 'pointer', transition: 'all 0.2s',
                whiteSpace: 'nowrap', flexShrink: 0,
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(124, 58, 237, 0.25)' : 'none',
              }}
            >
              <tab.icon size={15} />
              {tab.label}
              <span style={{
                padding: '2px 7px', borderRadius: 99,
                background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                fontSize: 11, fontWeight: 700,
              }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ═══════════════════════════════════
            NEW MATCHES (Horizontal Scroll)
            ═══════════════════════════════════ */}
        <div style={{
          background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 20, padding: 24, marginBottom: 24,
        }}>
          <h3 style={{
            fontSize: 16, fontWeight: 700, marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Sparkles size={18} style={{ color: '#a78bfa' }} />
            New Matches
          </h3>
          <div style={{
            display: 'flex', gap: 12, overflowX: 'auto',
            paddingBottom: 8,
          }}>
            {matchProfiles.filter((p) => !dismissedIds.includes(p.id)).slice(0, 6).map((profile) => (
              <Link href="/profile" key={profile.id} style={{
                flexShrink: 0, width: 100, textDecoration: 'none', color: '#fff',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: 20,
                    border: profile.type === 'super_like'
                      ? '2px solid #facc15'
                      : profile.type === 'mutual'
                        ? '2px solid #22c55e'
                        : '2px solid #ec4899',
                    padding: 2, overflow: 'hidden',
                  }}>
                    <div style={{
                      width: '100%', height: '100%', borderRadius: 17,
                      overflow: 'hidden',
                    }}>
                      <img src={profile.avatar} alt={profile.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                  {profile.isOnline && (
                    <div style={{
                      position: 'absolute', bottom: 0, right: 0,
                      width: 16, height: 16, borderRadius: '50%',
                      background: '#22c55e', border: '2.5px solid #0c0c18',
                    }} />
                  )}
                  {profile.type === 'super_like' && (
                    <div style={{
                      position: 'absolute', top: -4, right: -4,
                      width: 20, height: 20, borderRadius: '50%',
                      background: '#facc15', border: '2px solid #0c0c18',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Zap size={10} style={{ color: '#000' }} />
                    </div>
                  )}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 600, textAlign: 'center',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  width: '100%',
                }}>
                  {profile.name.split(' ')[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════
            MATCH CARDS GRID
            ═══════════════════════════════════ */}
        {filteredMatches.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 16,
          }}>
            {filteredMatches.map((profile) => {
              const typeInfo = getTypeLabel(profile.type);
              const matchColor = getMatchColor(profile.matchPercent);

              return (
                <div key={profile.id} style={{
                  background: '#0c0c18',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20, overflow: 'hidden',
                  transition: 'all 0.4s ease',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Cover */}
                  <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
                    <img src={profile.cover} alt="cover"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, #0c0c18, transparent)',
                    }} />

                    {/* Match Type Badge */}
                    <div style={{
                      position: 'absolute', top: 12, left: 12,
                      padding: '5px 12px', borderRadius: 8,
                      background: typeInfo.bg, border: `1px solid ${typeInfo.border}`,
                      display: 'flex', alignItems: 'center', gap: 5,
                      fontSize: 11, fontWeight: 600, color: typeInfo.color,
                    }}>
                      {typeInfo.icon}
                      {typeInfo.label}
                    </div>

                    {/* Match % */}
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      padding: '5px 10px', borderRadius: 8,
                      background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                      border: `1px solid ${matchColor}40`,
                      fontSize: 12, fontWeight: 700, color: matchColor,
                    }}>
                      {profile.matchPercent}%
                    </div>

                    {/* Dismiss Button */}
                    <button
                      onClick={() => handleDismiss(profile.id)}
                      style={{
                        position: 'absolute', bottom: 12, right: 12,
                        width: 30, height: 30, borderRadius: 8,
                        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#6b7280', cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Avatar (overlapping) */}
                  <div style={{ padding: '0 20px', marginTop: -30, position: 'relative', zIndex: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
                      <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div style={{
                          width: 60, height: 60, borderRadius: 18,
                          border: '3px solid #0c0c18', overflow: 'hidden',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        }}>
                          <img src={profile.avatar} alt={profile.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        {profile.isOnline && (
                          <div style={{
                            position: 'absolute', bottom: 0, right: 0,
                            width: 16, height: 16, borderRadius: '50%',
                            background: '#22c55e', border: '2.5px solid #0c0c18',
                          }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: 6, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 16, fontWeight: 700 }}>{profile.name}</span>
                          <span style={{ fontSize: 14, color: '#6b7280' }}>{profile.age}</span>
                          {profile.isVerified && <ShieldCheck size={14} style={{ color: '#3b82f6' }} />}
                        </div>
                        <p style={{ fontSize: 12, color: '#6b7280' }}>{profile.username}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '14px 20px 20px' }}>
                    {/* Bio */}
                    <p style={{
                      fontSize: 13, color: '#9ca3af', lineHeight: 1.5,
                      marginBottom: 12,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      {profile.bio}
                    </p>

                    {/* Location, Rating, Time */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      marginBottom: 12, flexWrap: 'wrap',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                        <MapPin size={11} />
                        {profile.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: '#facc15' }}>
                        <Star size={11} style={{ fill: '#facc15' }} />
                        {profile.rating}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                        <Clock size={11} />
                        {profile.matchDate}
                      </span>
                    </div>

                    {/* Interests */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                      {profile.interests.slice(0, 3).map((i) => (
                        <span key={i} style={{
                          padding: '4px 10px', borderRadius: 8,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          fontSize: 11, color: '#9ca3af', fontWeight: 500,
                        }}>
                          {i}
                        </span>
                      ))}
                      {profile.interests.length > 3 && (
                        <span style={{
                          padding: '4px 8px', borderRadius: 8,
                          background: 'rgba(139, 92, 246, 0.1)',
                          border: '1px solid rgba(139, 92, 246, 0.2)',
                          fontSize: 11, color: '#a78bfa', fontWeight: 600,
                        }}>
                          +{profile.interests.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Match Bar */}
                    <div style={{ marginBottom: 16 }}>
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginBottom: 6,
                      }}>
                        <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Match Score</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: matchColor }}>
                          {profile.matchPercent}%
                        </span>
                      </div>
                      <div style={{
                        height: 4, borderRadius: 99,
                        background: 'rgba(255,255,255,0.06)',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%', borderRadius: 99,
                          width: `${profile.matchPercent}%`,
                          background: `linear-gradient(90deg, ${matchColor}, ${matchColor}cc)`,
                          transition: 'width 0.5s ease',
                        }} />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: 8 }}>
                      <Link href="/messages" style={{
                        flex: 1, padding: '12px 0', borderRadius: 12,
                        background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                        color: '#fff', fontSize: 13, fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.25)',
                        transition: 'all 0.2s',
                      }}>
                        <MessageCircle size={15} />
                        Message
                      </Link>
                      <Link href="/profile" style={{
                        padding: '12px 16px', borderRadius: 12,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#9ca3af', fontSize: 13, fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        textDecoration: 'none', transition: 'all 0.2s',
                      }}>
                        <Users size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            textAlign: 'center', padding: '60px 20px',
            background: '#0c0c18', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: 24,
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Heart size={36} style={{ color: '#ec4899' }} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>No matches yet</h3>
            <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 300, margin: '0 auto 24px', lineHeight: 1.5 }}>
              Keep exploring and liking profiles to get more matches!
            </p>
            <Link href="/feed" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 14,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              color: '#fff', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
            }}>
              <Sparkles size={16} />
              Discover People
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}