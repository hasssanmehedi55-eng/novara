/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {
  MapPin,
  Star,
  Shield,
  ShieldCheck,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Users,
  Calendar,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  Globe,
  Camera,
  Music,
  Coffee,
  Palette,
  Dumbbell,
  BookOpen,
  Gamepad2,
  UtensilsCrossed,
  Plane,
  MoreHorizontal,
  Flag,
  UserPlus,
  Edit3,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   PROFILE DATA
   ════════════════════════════════════════ */

const profileData = {
  name: 'Aria Chen',
  age: 33,
  username: '@aria_vibes',
  bio: '✨ Creative soul exploring the world one city at a time. Love finding hidden gems, trying new cuisines, and having deep conversations over coffee. Always up for an adventure — whether it\'s hiking a mountain trail or discovering a cozy bookstore.',
  location: 'New York, NY',
  rating: 4.8,
  reviewCount: 127,
  friendCount: 89,
  responseRate: 98,
  responseTime: '< 1 hour',
  pricePerHour: 21,
  memberSince: 'Jan 2024',
  isOnline: true,
  isVerified: true,
  isPremium: false,
  languages: ['English', 'Mandarin', 'Korean'],
  coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop',
  avatarUrl: 'https://i.pravatar.cc/300?img=5',
  interests: [
    { label: 'Photography', icon: 'camera' },
    { label: 'Music', icon: 'music' },
    { label: 'Coffee', icon: 'coffee' },
    { label: 'Art', icon: 'art' },
    { label: 'Fitness', icon: 'fitness' },
    { label: 'Reading', icon: 'book' },
    { label: 'Gaming', icon: 'gaming' },
    { label: 'Cooking', icon: 'cooking' },
    { label: 'Travel', icon: 'travel' },
  ],
  availability: [
    { day: 'Mon', available: true },
    { day: 'Tue', available: true },
    { day: 'Wed', available: false },
    { day: 'Thu', available: true },
    { day: 'Fri', available: true },
    { day: 'Sat', available: true },
    { day: 'Sun', available: false },
  ],
  reviews: [
    {
      name: 'Jake Thompson',
      avatar: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      date: '2 weeks ago',
      text: 'Aria was an amazing companion! We explored Central Park together and she knew all the best spots. Would definitely hire again!',
    },
    {
      name: 'Sophia Park',
      avatar: 'https://i.pravatar.cc/150?img=16',
      rating: 5,
      date: '1 month ago',
      text: 'Such a genuine and fun person. We went to an art gallery and had the best conversations. Highly recommend!',
    },
    {
      name: 'Daniel Brooks',
      avatar: 'https://i.pravatar.cc/150?img=8',
      rating: 4,
      date: '2 months ago',
      text: 'Great experience overall. Aria is very easy-going and made the whole hangout feel natural and comfortable.',
    },
  ],
  photos: [
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop',
  ],
};

/* ════════════════════════════════════════
   ICON MAP
   ════════════════════════════════════════ */

function getInterestIcon(icon: string) {
  const iconMap: Record<string, React.ReactNode> = {
    camera: <Camera size={14} />,
    music: <Music size={14} />,
    coffee: <Coffee size={14} />,
    art: <Palette size={14} />,
    fitness: <Dumbbell size={14} />,
    book: <BookOpen size={14} />,
    gaming: <Gamepad2 size={14} />,
    cooking: <UtensilsCrossed size={14} />,
    travel: <Plane size={14} />,
  };
  return iconMap[icon] || <Star size={14} />;
}

/* ════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════ */

export default function ProfilePage() {
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'photos' | 'reviews'>('about');
  const p = profileData;

  return (
    <div style={{ minHeight: '100vh', background: '#030507', color: '#fff' }}>

      {/* ═══════════════════════════════════
          TOP BAR (Fixed)
          ═══════════════════════════════════ */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        padding: '16px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(3,5,7,0.9) 0%, transparent 100%)',
      }}>
        <Link href="/feed" style={{
          width: 40, height: 40, borderRadius: 12,
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', textDecoration: 'none',
          transition: 'all 0.2s',
        }}>
          <ChevronLeft size={20} />
        </Link>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', cursor: 'pointer',
          }}>
            <Share2 size={18} />
          </button>
          <button style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', cursor: 'pointer',
          }}>
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════
          COVER PHOTO
          ═══════════════════════════════════ */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img
          src={p.coverUrl}
          alt="Cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #030507 0%, rgba(3,5,7,0.4) 40%, transparent 100%)',
        }} />
      </div>

      {/* ═══════════════════════════════════
          PROFILE INFO SECTION
          ═══════════════════════════════════ */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>

        {/* ── Avatar & Basic Info ── */}
        <div style={{ marginTop: -60, position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                width: 120, height: 120, borderRadius: 24,
                border: '4px solid #030507',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              }}>
                <img src={p.avatarUrl} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Online Dot */}
              {p.isOnline && (
                <div style={{
                  position: 'absolute', bottom: 4, right: 4,
                  width: 20, height: 20, borderRadius: '50%',
                  background: '#22c55e', border: '3px solid #030507',
                }} />
              )}
              {/* Verified Badge */}
              {p.isVerified && (
                <div style={{
                  position: 'absolute', top: -2, right: -2,
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#3b82f6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '3px solid #030507',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                }}>
                  <ShieldCheck size={12} style={{ color: '#fff' }} />
                </div>
              )}
            </div>

            {/* Name & Info */}
            <div style={{ flex: 1, minWidth: 200, paddingBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                <h1 style={{ fontSize: 28, fontWeight: 800 }}>{p.name}</h1>
                <span style={{ fontSize: 20, color: '#6b7280', fontWeight: 500 }}>{p.age}</span>
              </div>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 8 }}>{p.username}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#9ca3af' }}>
                  <MapPin size={14} style={{ color: '#6b7280' }} />
                  {p.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#facc15' }}>
                  <Star size={14} style={{ fill: '#facc15', color: '#facc15' }} />
                  <span style={{ fontWeight: 700 }}>{p.rating}</span>
                  <span style={{ color: '#6b7280' }}>({p.reviewCount})</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#9ca3af' }}>
                  <Calendar size={14} style={{ color: '#6b7280' }} />
                  Joined {p.memberSince}
                </span>
              </div>
            </div>
          </div>

          {/* ── Badges ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {p.isVerified && (
              <span style={{
                padding: '6px 14px', borderRadius: 10,
                background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)',
                fontSize: 12, fontWeight: 600, color: '#60a5fa',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <ShieldCheck size={13} /> Verified
              </span>
            )}
            <span style={{
              padding: '6px 14px', borderRadius: 10,
              background: 'rgba(250, 204, 21, 0.1)', border: '1px solid rgba(250, 204, 21, 0.2)',
              fontSize: 12, fontWeight: 600, color: '#facc15',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              🌟 New Member
            </span>
            <span style={{
              padding: '6px 14px', borderRadius: 10,
              background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)',
              fontSize: 12, fontWeight: 600, color: '#22c55e',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <CheckCircle2 size={13} /> {p.responseRate}% Response
            </span>
          </div>

          {/* ── Action Buttons ── */}
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <Link href="/profile/edit" style={{
              flex: 1, minWidth: 140, padding: '14px 0', borderRadius: 14,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              color: '#fff', fontSize: 14, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(124, 58, 237, 0.25)',
              transition: 'all 0.3s',
            }}>
              <Edit3 size={16} />
              Edit Profile
            </Link>
            <button
              onClick={() => setLiked(!liked)}
              style={{
                width: 52, height: 52, borderRadius: 14, border: 'none',
                background: liked
                  ? 'linear-gradient(135deg, #ec4899, #f43f5e)'
                  : 'rgba(255,255,255,0.04)',
                borderWidth: 1, borderStyle: 'solid',
                borderColor: liked ? 'rgba(236, 72, 153, 0.3)' : 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: liked ? '#fff' : '#9ca3af', cursor: 'pointer',
                boxShadow: liked ? '0 8px 25px rgba(236, 72, 153, 0.3)' : 'none',
                transition: 'all 0.3s',
              }}
            >
              <Heart size={20} style={{ fill: liked ? '#fff' : 'none' }} />
            </button>
            <button style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#9ca3af', cursor: 'pointer',
              transition: 'all 0.3s',
            }}>
              <MessageCircle size={20} />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════
            STATS CARDS
            ═══════════════════════════════════ */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: 12, marginTop: 32,
        }}>
          {[
            { icon: Star, label: 'Rating', value: `${p.rating}/5`, color: '#facc15' },
            { icon: Users, label: 'Friends', value: `${p.friendCount}`, color: '#a78bfa' },
            { icon: MessageCircle, label: 'Reviews', value: `${p.reviewCount}`, color: '#60a5fa' },
            { icon: Clock, label: 'Response', value: p.responseTime, color: '#34d399' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#0c0c18',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: 20, textAlign: 'center',
            }}>
              <stat.icon size={20} style={{ color: stat.color, margin: '0 auto 10px' }} />
              <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{stat.value}</p>
              <p style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════
            PRICE CARD
            ═══════════════════════════════════ */}
        <div style={{
          marginTop: 24, padding: 24, borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 4 }}>Hiring Rate</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>${p.pricePerHour}</span>
              <span style={{ fontSize: 16, color: '#6b7280', fontWeight: 500 }}>/hour</span>
            </div>
          </div>
          <button style={{
            padding: '14px 32px', borderRadius: 14, border: 'none',
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            color: '#fff', fontSize: 15, fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
            transition: 'all 0.3s',
          }}>
          <UserPlus size={18} />
            Hire Now
          </button>
        </div>

        {/* ═══════════════════════════════════
            TABS
            ═══════════════════════════════════ */}
        <div style={{
          display: 'flex', gap: 4, marginTop: 32, padding: 4,
          background: 'rgba(255,255,255,0.03)', borderRadius: 14,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {(['about', 'photos', 'reviews'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1, padding: '12px 0', borderRadius: 10,
                background: activeTab === tab ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                border: activeTab === tab ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid transparent',
                color: activeTab === tab ? '#a78bfa' : '#6b7280',
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.2s',
                textTransform: 'capitalize',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ═══════════════════════════════════
            TAB: ABOUT
            ═══════════════════════════════════ */}
        {activeTab === 'about' && (
          <div style={{ marginTop: 24 }}>
            {/* Bio */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={18} style={{ color: '#a78bfa' }} />
                About Me
              </h3>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7 }}>{p.bio}</p>
            </div>

            {/* Interests */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Heart size={18} style={{ color: '#f472b6' }} />
                Interests
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.interests.map((interest) => (
                  <span key={interest.label} style={{
                    padding: '8px 16px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    fontSize: 13, fontWeight: 500, color: '#d1d5db',
                    display: 'flex', alignItems: 'center', gap: 6,
                    transition: 'all 0.2s',
                  }}>
                    <span style={{ color: '#a78bfa' }}>{getInterestIcon(interest.icon)}</span>
                    {interest.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Globe size={18} style={{ color: '#34d399' }} />
                Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.languages.map((lang) => (
                  <span key={lang} style={{
                    padding: '8px 16px', borderRadius: 12,
                    background: 'rgba(52, 211, 153, 0.08)',
                    border: '1px solid rgba(52, 211, 153, 0.15)',
                    fontSize: 13, fontWeight: 500, color: '#34d399',
                  }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Calendar size={18} style={{ color: '#60a5fa' }} />
                Availability
              </h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.availability.map((day) => (
                  <div key={day.day} style={{
                    width: 48, height: 56, borderRadius: 12,
                    background: day.available ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255,255,255,0.03)',
                    border: day.available ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: 4,
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: day.available ? '#22c55e' : '#4b5563' }}>
                      {day.day}
                    </span>
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: day.available ? '#22c55e' : '#374151',
                    }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Safety */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Shield size={18} style={{ color: '#22d3ee' }} />
                Safety & Trust
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'ID Verified', done: true },
                  { label: 'Phone Verified', done: true },
                  { label: 'Background Check', done: true },
                  { label: 'Email Verified', done: true },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle2 size={16} style={{ color: '#22c55e' }} />
                    <span style={{ fontSize: 13, color: '#d1d5db', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════
            TAB: PHOTOS
            ═══════════════════════════════════ */}
        {activeTab === 'photos' && (
          <div style={{
            marginTop: 24,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 8,
          }}>
            {p.photos.map((url, i) => (
              <div key={i} style={{
                position: 'relative', paddingBottom: '100%', borderRadius: 16,
                overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <img
                  src={url}
                  alt={`Photo ${i + 1}`}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        )}

        {/* ═══════════════════════════════════
            TAB: REVIEWS
            ═══════════════════════════════════ */}
        {activeTab === 'reviews' && (
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Rating Summary */}
            <div style={{
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20, padding: 24,
              display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{p.rating}</p>
                <div style={{ display: 'flex', gap: 3, justifyContent: 'center', margin: '8px 0' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} style={{
                      color: s <= Math.round(p.rating) ? '#facc15' : '#374151',
                      fill: s <= Math.round(p.rating) ? '#facc15' : 'none',
                    }} />
                  ))}
                </div>
                <p style={{ fontSize: 12, color: '#6b7280' }}>{p.reviewCount} reviews</p>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                {[5, 4, 3, 2, 1].map((num) => (
                  <div key={num} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: '#6b7280', width: 12 }}>{num}</span>
                    <Star size={10} style={{ color: '#facc15', fill: '#facc15' }} />
                    <div style={{
                      flex: 1, height: 6, borderRadius: 99,
                      background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%', borderRadius: 99,
                        background: '#facc15',
                        width: num === 5 ? '72%' : num === 4 ? '20%' : num === 3 ? '5%' : '2%',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Cards */}
            {p.reviews.map((review, i) => (
              <div key={i} style={{
                background: '#0c0c18', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20, padding: 24,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <img src={review.avatar} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600 }}>{review.name}</p>
                      <p style={{ fontSize: 11, color: '#6b7280' }}>{review.date}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} style={{
                        color: s <= review.rating ? '#facc15' : '#374151',
                        fill: s <= review.rating ? '#facc15' : 'none',
                      }} />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.6 }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ═══════════════════════════════════
            REPORT BUTTON
            ═══════════════════════════════════ */}
        <div style={{ textAlign: 'center', padding: '40px 0 60px' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '10px 20px', borderRadius: 12,
            background: 'none', border: '1px solid rgba(255,255,255,0.06)',
            color: '#4b5563', fontSize: 12, fontWeight: 500, cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            <Flag size={13} />
            Report Profile
          </button>
        </div>
      </div>
    </div>
  );
}