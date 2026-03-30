/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  Camera,
  Save,
  User,
  MapPin,
  DollarSign,
  FileText,
  Heart,
  Globe,
  Calendar,
  Sparkles,
  CheckCircle2,
  Plus,
  X,
  Music,
  Coffee,
  Palette,
  Dumbbell,
  BookOpen,
  Gamepad2,
  UtensilsCrossed,
  Plane,
  Code,
  Film,
  Bike,
  Cat,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   AVAILABLE INTERESTS
   ════════════════════════════════════════ */

const allInterests = [
  { label: 'Photography', icon: <Camera size={14} /> },
  { label: 'Music', icon: <Music size={14} /> },
  { label: 'Coffee', icon: <Coffee size={14} /> },
  { label: 'Art', icon: <Palette size={14} /> },
  { label: 'Fitness', icon: <Dumbbell size={14} /> },
  { label: 'Reading', icon: <BookOpen size={14} /> },
  { label: 'Gaming', icon: <Gamepad2 size={14} /> },
  { label: 'Cooking', icon: <UtensilsCrossed size={14} /> },
  { label: 'Travel', icon: <Plane size={14} /> },
  { label: 'Coding', icon: <Code size={14} /> },
  { label: 'Movies', icon: <Film size={14} /> },
  { label: 'Cycling', icon: <Bike size={14} /> },
  { label: 'Pets', icon: <Cat size={14} /> },
  { label: 'Hiking', icon: <Sparkles size={14} /> },
];

const allLanguages = [
  'English', 'Mandarin', 'Korean', 'Japanese', 'Spanish',
  'French', 'German', 'Arabic', 'Hindi', 'Bangla', 'Portuguese',
];

/* ════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════ */

export default function ProfileEditPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  /* Form States */
  const [name, setName] = useState('Aria Chen');
  const [username, setUsername] = useState('aria_vibes');
  const [bio, setBio] = useState(
    '✨ Creative soul exploring the world one city at a time. Love finding hidden gems, trying new cuisines, and having deep conversations over coffee.'
  );
  const [location, setLocation] = useState('New York, NY');
  const [price, setPrice] = useState('21');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Photography', 'Music', 'Coffee', 'Art', 'Travel',
  ]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    'English', 'Mandarin', 'Korean',
  ]);
  const [availability, setAvailability] = useState([
    { day: 'Mon', short: 'M', available: true },
    { day: 'Tue', short: 'T', available: true },
    { day: 'Wed', short: 'W', available: false },
    { day: 'Thu', short: 'T', available: true },
    { day: 'Fri', short: 'F', available: true },
    { day: 'Sat', short: 'S', available: true },
    { day: 'Sun', short: 'S', available: false },
  ]);

  /* Handlers */
  const toggleInterest = (label: string) => {
    setSelectedInterests((prev) =>
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : prev.length < 10
          ? [...prev, label]
          : prev
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const toggleDay = (index: number) => {
    setAvailability((prev) =>
      prev.map((d, i) => (i === index ? { ...d, available: !d.available } : d))
    );
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1500);
  };

  /* ═══════ RENDER ═══════ */

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
          maxWidth: 700, margin: '0 auto', padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/profile" style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              <ChevronLeft size={20} />
            </Link>
            <h1 style={{ fontSize: 18, fontWeight: 700 }}>Edit Profile</h1>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '10px 24px', borderRadius: 12, border: 'none',
              background: saved
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #7c3aed, #9333ea)',
              color: '#fff', fontSize: 13, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 6,
              cursor: saving ? 'not-allowed' : 'pointer',
              boxShadow: saved
                ? '0 4px 15px rgba(34, 197, 94, 0.3)'
                : '0 4px 15px rgba(124, 58, 237, 0.3)',
              transition: 'all 0.3s',
            }}
          >
            {saving ? (
              <div style={{
                width: 16, height: 16,
                border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
            ) : saved ? (
              <>
                <CheckCircle2 size={15} />
                Saved!
              </>
            ) : (
              <>
                <Save size={15} />
                Save
              </>
            )}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════ */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 20px 80px' }}>

        {/* ══════════════════════════
            COVER PHOTO
            ══════════════════════════ */}
        <div style={{
          position: 'relative', height: 200, borderRadius: 20,
          overflow: 'hidden', marginBottom: 20,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
            alt="Cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <button style={{
              padding: '12px 24px', borderRadius: 14,
              background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontSize: 13, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <Camera size={16} />
              Change Cover
            </button>
          </div>
        </div>

        {/* ══════════════════════════
            AVATAR
            ══════════════════════════ */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginTop: -60,
          marginBottom: 32, position: 'relative', zIndex: 10,
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 110, height: 110, borderRadius: 24,
              border: '4px solid #030507',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            }}>
              <img
                src="https://i.pravatar.cc/300?img=5"
                alt="Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <button style={{
              position: 'absolute', bottom: -4, right: -4,
              width: 36, height: 36, borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              border: '3px solid #030507',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
            }}>
              <Camera size={14} />
            </button>
          </div>
        </div>

        {/* ══════════════════════════
            BASIC INFO SECTION
            ══════════════════════════ */}
        <SectionCard
          icon={<User size={18} />}
          iconColor="#a78bfa"
          title="Basic Information"
        >
          {/* Name */}
          <InputField
            label="Full Name"
            value={name}
            onChange={setName}
            placeholder="Your full name"
            maxLength={30}
          />

          {/* Username */}
          <InputField
            label="Username"
            value={username}
            onChange={setUsername}
            placeholder="your_username"
            prefix="@"
            maxLength={20}
          />

          {/* Bio */}
          <div style={{ marginBottom: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 8,
            }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#9ca3af' }}>Bio</label>
              <span style={{
                fontSize: 11, fontWeight: 500,
                color: bio.length > 180 ? '#f59e0b' : '#4b5563',
              }}>
                {bio.length}/200
              </span>
            </div>
            <textarea
              value={bio}
              onChange={(e) => {
                if (e.target.value.length <= 200) setBio(e.target.value);
              }}
              placeholder="Tell people about yourself..."
              rows={4}
              style={{
                width: '100%', padding: '14px 16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14, outline: 'none',
                color: '#fff', fontSize: 14, lineHeight: 1.6,
                resize: 'vertical', minHeight: 100,
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>
        </SectionCard>

        {/* ══════════════════════════
            LOCATION & PRICE
            ══════════════════════════ */}
        <SectionCard
          icon={<MapPin size={18} />}
          iconColor="#34d399"
          title="Location & Pricing"
        >
          {/* Location */}
          <InputField
            label="Location"
            value={location}
            onChange={setLocation}
            placeholder="City, Country"
            iconLeft={<MapPin size={16} style={{ color: '#6b7280' }} />}
          />

          {/* Price */}
          <div style={{ marginBottom: 0 }}>
            <label style={{
              display: 'block', fontSize: 13, fontWeight: 600,
              color: '#9ca3af', marginBottom: 8,
            }}>
              Hourly Rate
            </label>
            <div style={{
              display: 'flex', alignItems: 'center',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              <div style={{
                padding: '14px 16px',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                color: '#34d399', fontSize: 16, fontWeight: 700,
                display: 'flex', alignItems: 'center',
              }}>
                <DollarSign size={18} />
              </div>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0"
                min="1"
                max="999"
                style={{
                  flex: 1, padding: '14px 16px',
                  background: 'transparent', border: 'none', outline: 'none',
                  color: '#fff', fontSize: 18, fontWeight: 700,
                }}
              />
              <div style={{
                padding: '14px 16px',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                color: '#6b7280', fontSize: 13, fontWeight: 500,
              }}>
                per hour
              </div>
            </div>
          </div>
        </SectionCard>

        {/* ══════════════════════════
            INTERESTS
            ══════════════════════════ */}
        <SectionCard
          icon={<Heart size={18} />}
          iconColor="#f472b6"
          title="Interests"
          subtitle={`${selectedInterests.length}/10 selected`}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allInterests.map((interest) => {
              const isSelected = selectedInterests.includes(interest.label);
              return (
                <button
                  key={interest.label}
                  onClick={() => toggleInterest(interest.label)}
                  style={{
                    padding: '10px 16px', borderRadius: 12,
                    background: isSelected ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.03)',
                    border: isSelected
                      ? '1px solid rgba(139, 92, 246, 0.3)'
                      : '1px solid rgba(255,255,255,0.06)',
                    color: isSelected ? '#a78bfa' : '#9ca3af',
                    fontSize: 13, fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: 6,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  <span style={{ color: isSelected ? '#a78bfa' : '#6b7280' }}>
                    {interest.icon}
                  </span>
                  {interest.label}
                  {isSelected && (
                    <X size={12} style={{ marginLeft: 2, color: '#a78bfa' }} />
                  )}
                </button>
              );
            })}
          </div>
        </SectionCard>

        {/* ══════════════════════════
            LANGUAGES
            ══════════════════════════ */}
        <SectionCard
          icon={<Globe size={18} />}
          iconColor="#22d3ee"
          title="Languages"
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allLanguages.map((lang) => {
              const isSelected = selectedLanguages.includes(lang);
              return (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  style={{
                    padding: '10px 16px', borderRadius: 12,
                    background: isSelected ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255,255,255,0.03)',
                    border: isSelected
                      ? '1px solid rgba(34, 211, 238, 0.25)'
                      : '1px solid rgba(255,255,255,0.06)',
                    color: isSelected ? '#22d3ee' : '#9ca3af',
                    fontSize: 13, fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: 6,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  {isSelected && <CheckCircle2 size={13} />}
                  {lang}
                </button>
              );
            })}
          </div>
        </SectionCard>

        {/* ══════════════════════════
            AVAILABILITY
            ══════════════════════════ */}
        <SectionCard
          icon={<Calendar size={18} />}
          iconColor="#60a5fa"
          title="Availability"
          subtitle="Tap to toggle"
        >
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {availability.map((day, i) => (
              <button
                key={day.day}
                onClick={() => toggleDay(i)}
                style={{
                  width: 64, height: 72, borderRadius: 16,
                  background: day.available ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255,255,255,0.03)',
                  border: day.available
                    ? '1px solid rgba(34, 197, 94, 0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 8,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                <span style={{
                  fontSize: 13, fontWeight: 600,
                  color: day.available ? '#22c55e' : '#4b5563',
                }}>
                  {day.day}
                </span>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: day.available ? '#22c55e' : '#374151',
                  transition: 'all 0.2s',
                }} />
              </button>
            ))}
          </div>
        </SectionCard>

        {/* ══════════════════════════
            BOTTOM SAVE BUTTON
            ══════════════════════════ */}
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            width: '100%', padding: '16px 0', borderRadius: 16, border: 'none',
            background: saved
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : 'linear-gradient(135deg, #7c3aed, #9333ea)',
            color: '#fff', fontSize: 16, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            cursor: saving ? 'not-allowed' : 'pointer',
            boxShadow: saved
              ? '0 8px 30px rgba(34, 197, 94, 0.3)'
              : '0 8px 30px rgba(124, 58, 237, 0.3)',
            transition: 'all 0.3s',
            marginTop: 8,
          }}
        >
          {saving ? (
            <>
              <div style={{
                width: 20, height: 20,
                border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
              Saving...
            </>
          ) : saved ? (
            <>
              <CheckCircle2 size={20} />
              Changes Saved Successfully!
            </>
          ) : (
            <>
              <Save size={20} />
              Save Changes
            </>
          )}
        </button>

        {/* ══════════════════════════
            DANGER ZONE
            ══════════════════════════ */}
        <div style={{
          marginTop: 32, padding: 24, borderRadius: 20,
          background: 'rgba(239, 68, 68, 0.04)',
          border: '1px solid rgba(239, 68, 68, 0.1)',
        }}>
          <h3 style={{
            fontSize: 15, fontWeight: 700, color: '#ef4444',
            marginBottom: 8,
          }}>
            Danger Zone
          </h3>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, lineHeight: 1.5 }}>
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <button style={{
            padding: '10px 24px', borderRadius: 12,
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: '#ef4444', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.2s',
          }}>
            Delete Account
          </button>
        </div>
      </div>

      {/* Spinner Animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════════════
   REUSABLE COMPONENTS
   ════════════════════════════════════════ */

function SectionCard({
  icon,
  iconColor,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      background: '#0c0c18',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 20, padding: 24, marginBottom: 20,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <h3 style={{
          fontSize: 16, fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ color: iconColor }}>{icon}</span>
          {title}
        </h3>
        {subtitle && (
          <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  maxLength,
  iconLeft,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  prefix?: string;
  maxLength?: number;
  iconLeft?: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 8,
      }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: '#9ca3af' }}>
          {label}
        </label>
        {maxLength && (
          <span style={{
            fontSize: 11, fontWeight: 500,
            color: value.length > maxLength * 0.9 ? '#f59e0b' : '#4b5563',
          }}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 14, overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}>
        {prefix && (
          <div style={{
            padding: '14px 0 14px 16px',
            color: '#6b7280', fontSize: 14, fontWeight: 500,
          }}>
            {prefix}
          </div>
        )}
        {iconLeft && (
          <div style={{ paddingLeft: 16, display: 'flex', alignItems: 'center' }}>
            {iconLeft}
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            if (maxLength && e.target.value.length > maxLength) return;
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          style={{
            flex: 1, padding: prefix ? '14px 16px 14px 4px' : '14px 16px',
            paddingLeft: iconLeft ? 10 : prefix ? 4 : 16,
            background: 'transparent', border: 'none', outline: 'none',
            color: '#fff', fontSize: 14,
          }}
          onFocus={(e) => {
            const parent = e.target.parentElement;
            if (parent) parent.style.borderColor = 'rgba(139, 92, 246, 0.4)';
          }}
          onBlur={(e) => {
            const parent = e.target.parentElement;
            if (parent) parent.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        />
      </div>
    </div>
  );
}