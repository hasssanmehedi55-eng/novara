'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bell,
  Shield,
  Eye,
  Globe,
  Moon,
  Smartphone,
  Lock,
  CreditCard,
  HelpCircle,
  FileText,
  LogOut,
  User,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Volume2,
  VolumeX,
  ToggleLeft,
  ToggleRight,
  Crown,
  Palette,
  Languages,
  Download,
  MessageCircle,
  Heart,
  Zap,
  Info,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   TOGGLE COMPONENT
   ════════════════════════════════════════ */

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      style={{
        width: 48, height: 28, borderRadius: 99,
        background: enabled
          ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
          : 'rgba(255,255,255,0.08)',
        border: enabled
          ? '1px solid rgba(139, 92, 246, 0.3)'
          : '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        boxShadow: enabled ? '0 4px 12px rgba(124, 58, 237, 0.25)' : 'none',
        padding: 0,
      }}
    >
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        background: '#fff',
        position: 'absolute', top: 2,
        left: enabled ? 23 : 3,
        transition: 'left 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }} />
    </button>
  );
}

/* ════════════════════════════════════════
   SECTION COMPONENT
   ════════════════════════════════════════ */

function SettingsSection({
  icon,
  iconColor,
  title,
  children,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      background: '#0c0c18',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 20, marginBottom: 16, overflow: 'hidden',
    }}>
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ color: iconColor }}>{icon}</span>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

/* ════════════════════════════════════════
   ROW COMPONENT
   ════════════════════════════════════════ */

function SettingsRow({
  icon,
  iconColor,
  label,
  description,
  rightElement,
  onClick,
  danger,
}: {
  icon: React.ReactNode;
  iconColor?: string;
  label: string;
  description?: string;
  rightElement?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 14,
        borderBottom: '1px solid rgba(255,255,255,0.03)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 12,
        background: danger ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.04)',
        border: danger ? '1px solid rgba(239, 68, 68, 0.15)' : '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: danger ? '#ef4444' : (iconColor || '#9ca3af'),
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 14, fontWeight: 600,
          color: danger ? '#ef4444' : '#fff',
        }}>
          {label}
        </p>
        {description && (
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>
            {description}
          </p>
        )}
      </div>
      {rightElement || (
        onClick && <ChevronRight size={16} style={{ color: '#4b5563', flexShrink: 0 }} />
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */

export default function SettingsPage() {
  /* Toggle States */
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [matchNotif, setMatchNotif] = useState(true);
  const [messageNotif, setMessageNotif] = useState(true);
  const [likeNotif, setLikeNotif] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  const [showOnline, setShowOnline] = useState(true);
  const [showDistance, setShowDistance] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [readReceipts, setReadReceipts] = useState(true);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#030507', color: '#fff' }}>

      {/* ═══ TOP BAR ═══ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(3, 5, 7, 0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 700, margin: '0 auto', padding: '14px 20px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <Link href="/feed" style={{
            width: 38, height: 38, borderRadius: 12,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', textDecoration: 'none',
          }}>
            <ChevronLeft size={20} />
          </Link>
          <h1 style={{ fontSize: 18, fontWeight: 700 }}>Settings</h1>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '20px 20px 80px' }}>

        {/* ═══════════════════════════════════
            PREMIUM UPGRADE CARD
            ═══════════════════════════════════ */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: 20, padding: 24, marginBottom: 20,
          display: 'flex', alignItems: 'center', gap: 16,
          flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -20, right: -20,
            width: 120, height: 120,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)',
            flexShrink: 0,
          }}>
            <Crown size={24} style={{ color: '#fff' }} />
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
              Upgrade to Premium
            </h3>
            <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.4 }}>
              Unlimited likes, see who liked you, priority matching & more
            </p>
          </div>
          <button style={{
            padding: '10px 24px', borderRadius: 12,
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            border: 'none', color: '#fff', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
            transition: 'all 0.3s', flexShrink: 0,
          }}>
            <Zap size={14} />
            Upgrade
          </button>
        </div>

        {/* ═══════════════════════════════════
            ACCOUNT
            ═══════════════════════════════════ */}
        <SettingsSection icon={<User size={18} />} iconColor="#a78bfa" title="Account">
          <SettingsRow
            icon={<User size={16} />}
            iconColor="#a78bfa"
            label="Edit Profile"
            description="Name, bio, photos, interests"
            onClick={() => window.location.href = '/profile/edit'}
          />
          <SettingsRow
            icon={<Phone size={16} />}
            iconColor="#34d399"
            label="Phone Number"
            description="+880 1XXXXXXXXX"
            rightElement={
              <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                <CheckCircle2 size={12} /> Verified
              </span>
            }
          />
          <SettingsRow
            icon={<Mail size={16} />}
            iconColor="#60a5fa"
            label="Email Address"
            description="Add email for recovery"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<MapPin size={16} />}
            iconColor="#f59e0b"
            label="Location"
            description="New York, NY"
            onClick={() => {}}
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            NOTIFICATIONS
            ═══════════════════════════════════ */}
        <SettingsSection icon={<Bell size={18} />} iconColor="#facc15" title="Notifications">
          <SettingsRow
            icon={<Bell size={16} />}
            iconColor="#facc15"
            label="Push Notifications"
            description="Receive push notifications"
            rightElement={<Toggle enabled={pushNotif} onChange={() => setPushNotif(!pushNotif)} />}
          />
          <SettingsRow
            icon={<Mail size={16} />}
            iconColor="#60a5fa"
            label="Email Notifications"
            description="Weekly summaries & updates"
            rightElement={<Toggle enabled={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />}
          />
          <SettingsRow
            icon={<Heart size={16} />}
            iconColor="#ec4899"
            label="Match Notifications"
            description="When someone matches with you"
            rightElement={<Toggle enabled={matchNotif} onChange={() => setMatchNotif(!matchNotif)} />}
          />
          <SettingsRow
            icon={<MessageCircle size={16} />}
            iconColor="#22d3ee"
            label="Message Notifications"
            description="New message alerts"
            rightElement={<Toggle enabled={messageNotif} onChange={() => setMessageNotif(!messageNotif)} />}
          />
          <SettingsRow
            icon={<Sparkles size={16} />}
            iconColor="#a78bfa"
            label="Like Notifications"
            description="When someone likes your profile"
            rightElement={<Toggle enabled={likeNotif} onChange={() => setLikeNotif(!likeNotif)} />}
          />
          <SettingsRow
            icon={soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            iconColor="#34d399"
            label="Sound Effects"
            description="Play sounds for notifications"
            rightElement={<Toggle enabled={soundEnabled} onChange={() => setSoundEnabled(!soundEnabled)} />}
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            PRIVACY
            ═══════════════════════════════════ */}
        <SettingsSection icon={<Eye size={18} />} iconColor="#22d3ee" title="Privacy">
          <SettingsRow
            icon={<Eye size={16} />}
            iconColor="#22d3ee"
            label="Profile Visibility"
            description="Show your profile to others"
            rightElement={<Toggle enabled={profileVisible} onChange={() => setProfileVisible(!profileVisible)} />}
          />
          <SettingsRow
            icon={<Sparkles size={16} />}
            iconColor="#22c55e"
            label="Online Status"
            description="Show when you're online"
            rightElement={<Toggle enabled={showOnline} onChange={() => setShowOnline(!showOnline)} />}
          />
          <SettingsRow
            icon={<MapPin size={16} />}
            iconColor="#f59e0b"
            label="Show Distance"
            description="Display distance on your profile"
            rightElement={<Toggle enabled={showDistance} onChange={() => setShowDistance(!showDistance)} />}
          />
          <SettingsRow
            icon={<User size={16} />}
            iconColor="#f472b6"
            label="Show Age"
            description="Display your age on profile"
            rightElement={<Toggle enabled={showAge} onChange={() => setShowAge(!showAge)} />}
          />
          <SettingsRow
            icon={<CheckCircle2 size={16} />}
            iconColor="#60a5fa"
            label="Read Receipts"
            description="Let others see when you read messages"
            rightElement={<Toggle enabled={readReceipts} onChange={() => setReadReceipts(!readReceipts)} />}
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            SECURITY
            ═══════════════════════════════════ */}
        <SettingsSection icon={<Shield size={18} />} iconColor="#22c55e" title="Security">
          <SettingsRow
            icon={<Lock size={16} />}
            iconColor="#a78bfa"
            label="Change Password"
            description="Update your account password"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<Shield size={16} />}
            iconColor="#22c55e"
            label="Two-Factor Authentication"
            description={twoFactor ? 'Enabled — extra security layer' : 'Add extra security to your account'}
            rightElement={<Toggle enabled={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />}
          />
          <SettingsRow
            icon={<Smartphone size={16} />}
            iconColor="#60a5fa"
            label="Active Sessions"
            description="Manage your logged-in devices"
            onClick={() => {}}
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            APPEARANCE
            ═══════════════════════════════════ */}
        <SettingsSection icon={<Palette size={18} />} iconColor="#f472b6" title="Appearance">
          <SettingsRow
            icon={<Moon size={16} />}
            iconColor="#a78bfa"
            label="Dark Mode"
            description="Always dark theme"
            rightElement={<Toggle enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          />
          <SettingsRow
            icon={<Languages size={16} />}
            iconColor="#34d399"
            label="Language"
            description="English"
            onClick={() => {}}
            rightElement={
              <span style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
                English <ChevronRight size={14} />
              </span>
            }
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            BILLING
            ═══════════════════════════════════ */}
        <SettingsSection icon={<CreditCard size={18} />} iconColor="#f59e0b" title="Billing & Subscription">
          <SettingsRow
            icon={<Crown size={16} />}
            iconColor="#f59e0b"
            label="Current Plan"
            description="Free Plan"
            rightElement={
              <span style={{
                padding: '4px 12px', borderRadius: 8,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: 11, fontWeight: 600, color: '#9ca3af',
              }}>
                Free
              </span>
            }
          />
          <SettingsRow
            icon={<CreditCard size={16} />}
            iconColor="#60a5fa"
            label="Payment Methods"
            description="Add or manage payment methods"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<FileText size={16} />}
            iconColor="#22d3ee"
            label="Billing History"
            description="View past transactions"
            onClick={() => {}}
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            SUPPORT
            ═══════════════════════════════════ */}
        <SettingsSection icon={<HelpCircle size={18} />} iconColor="#60a5fa" title="Support & About">
          <SettingsRow
            icon={<HelpCircle size={16} />}
            iconColor="#60a5fa"
            label="Help Center"
            description="FAQs and support articles"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<MessageCircle size={16} />}
            iconColor="#34d399"
            label="Contact Support"
            description="Get help from our team"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<FileText size={16} />}
            iconColor="#9ca3af"
            label="Terms of Service"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<Shield size={16} />}
            iconColor="#9ca3af"
            label="Privacy Policy"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<Download size={16} />}
            iconColor="#a78bfa"
            label="Download My Data"
            description="Export your personal data"
            onClick={() => {}}
          />
          <SettingsRow
            icon={<Info size={16} />}
            iconColor="#6b7280"
            label="App Version"
            rightElement={
              <span style={{ fontSize: 12, color: '#4b5563', fontWeight: 500 }}>
                v1.0.0
              </span>
            }
          />
        </SettingsSection>

        {/* ═══════════════════════════════════
            DANGER ZONE
            ═══════════════════════════════════ */}
        <div style={{
          background: '#0c0c18',
          border: '1px solid rgba(239, 68, 68, 0.1)',
          borderRadius: 20, overflow: 'hidden', marginBottom: 16,
        }}>
          <SettingsRow
            icon={<LogOut size={16} />}
            label="Log Out"
            description="Sign out of your account"
            danger
            onClick={() => setShowLogoutModal(true)}
          />
          <SettingsRow
            icon={<Trash2 size={16} />}
            label="Delete Account"
            description="Permanently delete your account and data"
            danger
            onClick={() => setShowDeleteModal(true)}
          />
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '20px 0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700,
            }}>
              N
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#4b5563' }}>Novara</span>
          </div>
          <p style={{ fontSize: 11, color: '#374151' }}>
            Made with ❤️ for meaningful connections
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════
          LOGOUT MODAL
          ═══════════════════════════════════ */}
      {showLogoutModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }}
          onClick={() => setShowLogoutModal(false)}
        >
          <div
            style={{
              width: '100%', maxWidth: 380, padding: 32,
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              width: 60, height: 60, borderRadius: 18,
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', color: '#ef4444',
            }}>
              <LogOut size={28} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Log Out?</h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24, lineHeight: 1.5 }}>
              Are you sure you want to log out of your account?
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1, padding: '12px 0', borderRadius: 14,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#d1d5db', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Cancel
              </button>
              <Link href="/" style={{
                flex: 1, padding: '12px 0', borderRadius: 14,
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                border: 'none', color: '#fff', fontSize: 14, fontWeight: 600,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.25)',
              }}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════
          DELETE MODAL
          ═══════════════════════════════════ */}
      {showDeleteModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20,
        }}
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            style={{
              width: '100%', maxWidth: 380, padding: 32,
              background: '#0c0c18', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              width: 60, height: 60, borderRadius: 18,
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', color: '#ef4444',
            }}>
              <AlertTriangle size={28} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Delete Account?</h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24, lineHeight: 1.5 }}>
              This action is permanent and cannot be undone. All your data, matches, and messages will be deleted forever.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setShowDeleteModal(false)}
                style={{
                  flex: 1, padding: '12px 0', borderRadius: 14,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#d1d5db', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Cancel
              </button>
              <button style={{
                flex: 1, padding: '12px 0', borderRadius: 14,
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                border: 'none', color: '#fff', fontSize: 14, fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.25)',
              }}>
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}