/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import {
  Sparkles,
  Users,
  Shield,
  Zap,
  Star,
  MapPin,
  Heart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  TrendingUp,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ═══════ DATA ═══════ */

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users', color: '#a78bfa' },
    { icon: Globe, value: '120+', label: 'Cities', color: '#34d399' },
    { icon: Star, value: '4.9', label: 'Avg Rating', color: '#facc15' },
    { icon: Shield, value: '100%', label: 'Verified', color: '#22d3ee' },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Profiles',
      desc: 'Every friend goes through ID verification and background checks. Your safety is our top priority.',
      color: '#60a5fa',
    },
    {
      icon: MapPin,
      title: 'Location Based',
      desc: 'Find friends near you or in any city worldwide. Perfect for travelers and locals alike.',
      color: '#34d399',
    },
    {
      icon: Star,
      title: 'Rated & Reviewed',
      desc: 'Real reviews from real people. Choose friends with confidence based on authentic ratings.',
      color: '#facc15',
    },
    {
      icon: Clock,
      title: 'Flexible Booking',
      desc: 'Book by the hour or for the whole day. Cancel anytime with our flexible scheduling system.',
      color: '#a78bfa',
    },
    {
      icon: MessageCircle,
      title: 'In-App Chat',
      desc: 'Message your friend before meeting. Plan activities and set expectations in advance.',
      color: '#f472b6',
    },
    {
      icon: TrendingUp,
      title: 'Smart Matching',
      desc: 'Our AI matches you with friends based on interests, personality, and activity preferences.',
      color: '#fb923c',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Profile',
      desc: 'Sign up in seconds. Add your interests, bio, and what kind of companion you are looking for.',
      color: '#a78bfa',
      bg: 'rgba(167, 139, 250, 0.1)',
      border: 'rgba(167, 139, 250, 0.2)',
    },
    {
      step: '02',
      title: 'Browse & Match',
      desc: 'Explore profiles, filter by location and interests. Like profiles and get matched instantly.',
      color: '#f472b6',
      bg: 'rgba(244, 114, 182, 0.1)',
      border: 'rgba(244, 114, 182, 0.2)',
    },
    {
      step: '03',
      title: 'Meet & Enjoy',
      desc: 'Chat, plan your meetup, and enjoy quality time together. Rate and review after your experience.',
      color: '#34d399',
      bg: 'rgba(52, 211, 153, 0.1)',
      border: 'rgba(52, 211, 153, 0.2)',
    },
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      username: '@sarah_j',
      avatar: 'https://i.pravatar.cc/150?img=23',
      text: 'Novara changed how I experience new cities. Found an amazing local friend in Tokyo who showed me all the hidden spots!',
    },
    {
      name: 'Alex Kim',
      username: '@alex.k',
      avatar: 'https://i.pravatar.cc/150?img=33',
      text: 'As an introvert, making friends is hard. Novara made it so easy and comfortable. The verification system gave me confidence.',
    },
    {
      name: 'Maria Garcia',
      username: '@maria.g',
      avatar: 'https://i.pravatar.cc/150?img=29',
      text: 'Used Novara for a wedding plus-one. My hired friend was amazing — everyone thought we were old friends! 10/10 experience.',
    },
  ];

  const heroCards = [
    {
      name: 'Aria Chen',
      location: 'New York',
      price: '$21/hr',
      rating: '4.8',
      avatar: 'https://i.pravatar.cc/150?img=5',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    },
    {
      name: 'Marcus R.',
      location: 'Los Angeles',
      price: '$35/hr',
      rating: '4.9',
      avatar: 'https://i.pravatar.cc/150?img=12',
      cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop',
      featured: true,
    },
    {
      name: 'Luna Kim',
      location: 'Tokyo',
      price: '$40/hr',
      rating: '4.7',
      avatar: 'https://i.pravatar.cc/150?img=9',
      cover: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=300&fit=crop',
    },
  ];

  /* ═══════ RENDER ═══════ */

  return (
    <div style={{ minHeight: '100vh', background: '#030507', color: '#fff', overflowX: 'hidden' }}>

      {/* ══════════════════════════
          NAVBAR
          ══════════════════════════ */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(3, 5, 7, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 14,
              boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)',
            }}>
              N
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 0.5 }}>Novara</span>
          </div>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {['Features', 'How it Works', 'Pricing', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ fontSize: 13.5, fontWeight: 500, color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
            <Link href="/auth" style={{ fontSize: 13.5, fontWeight: 500, color: '#d1d5db', textDecoration: 'none', padding: '10px 20px' }}>
              Sign In
            </Link>
            <Link href="/auth" style={{
              fontSize: 13.5, fontWeight: 600, color: '#fff', textDecoration: 'none',
              padding: '10px 20px', borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
            }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden"
            style={{ padding: 8, background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div style={{ background: 'rgba(10, 10, 20, 0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px' }}
            className="md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Features', 'How it Works', 'Pricing', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileMenu(false)}
                  style={{ fontSize: 14, fontWeight: 500, color: '#9ca3af', textDecoration: 'none' }}>
                  {item}
                </a>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link href="/auth" className="btn-secondary" style={{ justifyContent: 'center' }}>Sign In</Link>
                <Link href="/auth" className="btn-primary" style={{ justifyContent: 'center' }}>Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════
          HERO SECTION
          ══════════════════════════ */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100 }}>
        {/* Background Glows */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 600,
          background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 200, left: 0, width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 300, right: 0, width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)',
              marginBottom: 32,
            }}>
              <Sparkles size={14} style={{ color: '#a78bfa' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#c4b5fd' }}>The #1 Friend Hiring Platform</span>
              <ChevronRight size={14} style={{ color: '#a78bfa' }} />
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: 'clamp(40px, 7vw, 76px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>
              Find Your <span className="gradient-text-violet">Perfect</span>
              <br />
              Companion
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#9ca3af', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Hire verified friends for events, adventures, or just hanging out. Safe, fun, and always on your terms.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 64 }}>
              <Link href="/auth" className="btn-primary">
                Start For Free
                <ArrowRight size={18} />
              </Link>
              <Link href="/feed" className="btn-secondary">
                Browse People
                <Users size={18} style={{ color: '#9ca3af' }} />
              </Link>
            </div>

            {/* Hero Preview Cards */}
            <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: -20,
                background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                borderRadius: 24, filter: 'blur(40px)', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {heroCards.map((card) => (
                  <div key={card.name} className="glass-card" style={{
                    overflow: 'hidden',
                    marginTop: card.featured ? -20 : 0,
                    borderColor: card.featured ? 'rgba(139, 92, 246, 0.2)' : undefined,
                    boxShadow: card.featured ? '0 20px 40px rgba(139, 92, 246, 0.1)' : undefined,
                  }}>
                    {/* Cover */}
                    <div style={{ position: 'relative', height: card.featured ? 160 : 130, overflow: 'hidden' }}>
                      <img src={card.cover} alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0c0c18, transparent)' }} />
                      {/* Price */}
                      <div style={{
                        position: 'absolute', top: 8, left: 8,
                        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                        borderRadius: 6, padding: '3px 8px',
                        fontSize: 11, fontWeight: 700, color: '#34d399',
                      }}>
                        {card.price}
                      </div>
                      {/* Online */}
                      {card.featured && (
                        <div style={{
                          position: 'absolute', top: 8, right: 8,
                          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                          borderRadius: 6, padding: '3px 8px',
                          display: 'flex', alignItems: 'center', gap: 4,
                        }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
                          <span style={{ fontSize: 10, color: '#34d399', fontWeight: 500 }}>Online</span>
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div style={{ padding: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <div style={{
                          width: 26, height: 26, borderRadius: '50%', overflow: 'hidden',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}>
                          <img src={card.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 600 }}>{card.name}</p>
                          <p style={{ fontSize: 10, color: '#6b7280' }}>{card.location}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                        <Star size={10} style={{ color: '#facc15', fill: '#facc15' }} />
                        <span style={{ fontSize: 10, color: '#9ca3af' }}>{card.rating}</span>
                        {card.featured && (
                          <span style={{ fontSize: 10, color: '#a78bfa', marginLeft: 'auto', fontWeight: 500 }}>⭐ Premium</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STATS SECTION
          ══════════════════════════ */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 32 }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', color: stat.color,
                }}>
                  <stat.icon size={22} />
                </div>
                <p style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, marginBottom: 4 }}>{stat.value}</p>
                <p style={{ fontSize: 13, color: '#6b7280' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FEATURES SECTION
          ══════════════════════════ */}
      <section id="features" style={{ padding: '100px 0' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)',
              marginBottom: 24,
            }}>
              <Zap size={14} style={{ color: '#a78bfa' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#c4b5fd' }}>Features</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, marginBottom: 16 }}>
              Why Choose <span className="gradient-text-violet">Novara?</span>
            </h2>
            <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 500, margin: '0 auto' }}>
              Everything you need to find the perfect companion for any occasion.
            </p>
          </div>

          {/* Feature Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {features.map((f) => (
              <div key={f.title} className="glass-card" style={{ padding: 32 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20, color: f.color,
                }}>
                  <f.icon size={22} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: '#9ca3af', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HOW IT WORKS
          ══════════════════════════ */}
      <section id="how-it-works" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.2)',
              marginBottom: 24,
            }}>
              <CheckCircle2 size={14} style={{ color: '#34d399' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#6ee7b7' }}>Simple Process</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, marginBottom: 16 }}>
              How <span className="gradient-text-emerald">It Works</span>
            </h2>
            <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 500, margin: '0 auto' }}>
              Three simple steps to find your perfect companion.
            </p>
          </div>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {steps.map((s) => (
              <div key={s.step} className="glass-card" style={{ padding: 32 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: s.bg, border: `1px solid ${s.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, fontSize: 18, fontWeight: 700, color: s.color,
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: '#9ca3af', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TESTIMONIALS
          ══════════════════════════ */}
      <section id="reviews" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: 'rgba(244, 114, 182, 0.1)', border: '1px solid rgba(244, 114, 182, 0.2)',
              marginBottom: 24,
            }}>
              <Heart size={14} style={{ color: '#f472b6' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: '#f9a8d4' }}>Testimonials</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, marginBottom: 16 }}>
              Loved by <span className="gradient-text-pink">Thousands</span>
            </h2>
          </div>

          {/* Reviews */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {reviews.map((r) => (
              <div key={r.name} className="glass-card" style={{ padding: 32 }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} style={{ color: '#facc15', fill: '#facc15' }} />
                  ))}
                </div>
                <p style={{ fontSize: 14, color: '#d1d5db', lineHeight: 1.7, marginBottom: 24 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src={r.avatar} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: '#6b7280' }}>{r.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA SECTION
          ══════════════════════════ */}
      <section style={{ padding: '100px 0' }}>
        <div className="section-container" style={{ maxWidth: 900 }}>
          <div style={{ position: 'relative' }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', inset: -30,
              background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
              borderRadius: 24, filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            <div className="glass-card" style={{ position: 'relative', padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', overflow: 'hidden' }}>
              {/* Top Glow */}
              <div style={{
                position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)',
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 12px 30px rgba(124, 58, 237, 0.3)',
                }}>
                  <Sparkles size={28} />
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, marginBottom: 16 }}>
                  Ready to Find <span className="gradient-text-violet">Friends?</span>
                </h2>

                <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.6 }}>
                  Join 50,000+ people who are already making meaningful connections on Novara. Start your journey today.
                </p>

                <Link href="/auth" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Get Started — It&apos;s Free
                  <ArrowRight size={18} />
                </Link>

                <p style={{ fontSize: 12, color: '#4b5563', marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <CheckCircle2 size={12} style={{ color: '#34d399' }} />
                  No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FOOTER
          ══════════════════════════ */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '60px 0' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 13,
                  boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
                }}>
                  N
                </div>
                <span style={{ fontSize: 18, fontWeight: 700 }}>Novara</span>
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, maxWidth: 250 }}>
                The world&apos;s leading platform for hiring friends. Safe, verified, and always fun.
              </p>
            </div>

            {/* Link Columns */}
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Reviews', 'FAQ'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Safety', 'Cookies'] },
            ].map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{col.title}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#d1d5db')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{
            paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <p style={{ fontSize: 12, color: '#4b5563' }}>© 2025 Novara. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Twitter', 'Instagram', 'Discord'].map((s) => (
                <a key={s} href="#" style={{ fontSize: 12, color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#d1d5db')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}