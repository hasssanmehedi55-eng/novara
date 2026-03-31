/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  Heart,
  MessageCircle,
  Star,
  UserPlus,
  ShieldCheck,
  Bell,
  Sparkles,
  Zap,
  Gift,
  CheckCheck,
  Clock,
  Trash2,
  Settings,
  Crown,
  TrendingUp,
  Eye,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   TYPES
   ════════════════════════════════════════ */

interface Notification {
  id: string;
  type: 'like' | 'match' | 'message' | 'super_like' | 'review' | 'system' | 'profile_view' | 'badge' | 'welcome';
  title: string;
  description: string;
  avatar?: string;
  time: string;
  isRead: boolean;
  actionUrl: string;
}

/* ════════════════════════════════════════
   DATA
   ════════════════════════════════════════ */

const notifications: Notification[] = [
  {
    id: '1',
    type: 'match',
    title: 'New Match! 🎉',
    description: 'You and Aria Chen liked each other! Start a conversation now.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    time: '2 min ago',
    isRead: false,
    actionUrl: '/messages',
  },
  {
    id: '2',
    type: 'super_like',
    title: 'Super Like Received ⚡',
    description: 'Marcus Rivera super liked your profile!',
    avatar: 'https://i.pravatar.cc/150?img=12',
    time: '15 min ago',
    isRead: false,
    actionUrl: '/matches',
  },
  {
    id: '3',
    type: 'message',
    title: 'New Message',
    description: 'Luna Kim: "The ramen place in Shibuya was incredible! 🍜"',
    avatar: 'https://i.pravatar.cc/150?img=9',
    time: '1 hour ago',
    isRead: false,
    actionUrl: '/messages',
  },
  {
    id: '4',
    type: 'like',
    title: 'Someone Liked You ❤️',
    description: 'Jake Thompson liked your profile. Like back to match!',
    avatar: 'https://i.pravatar.cc/150?img=11',
    time: '2 hours ago',
    isRead: false,
    actionUrl: '/matches',
  },
  {
    id: '5',
    type: 'review',
    title: 'New Review ⭐',
    description: 'Sophia Park left you a 5-star review: "Amazing companion!"',
    avatar: 'https://i.pravatar.cc/150?img=16',
    time: '5 hours ago',
    isRead: true,
    actionUrl: '/profile',
  },
  {
    id: '6',
    type: 'profile_view',
    title: 'Profile Viewed 👀',
    description: 'Daniel Brooks viewed your profile 3 times today.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    time: '6 hours ago',
    isRead: true,
    actionUrl: '/profile',
  },
  {
    id: '7',
    type: 'badge',
    title: 'New Badge Earned! 🏆',
    description: 'Congratulations! You earned the "Super Host" badge.',
    time: '1 day ago',
    isRead: true,
    actionUrl: '/profile',
  },
  {
    id: '8',
    type: 'system',
    title: 'Profile Verified ✅',
    description: 'Your identity has been verified. You now have a verified badge!',
    time: '2 days ago',
    isRead: true,
    actionUrl: '/profile',
  },
  {
    id: '9',
    type: 'like',
    title: 'Someone Liked You ❤️',
    description: 'Emily Watson liked your profile!',
    avatar: 'https://i.pravatar.cc/150?img=20',
    time: '3 days ago',
    isRead: true,
    actionUrl: '/matches',
  },
  {
    id: '10',
    type: 'message',
    title: 'New Message',
    description: 'Ryan Lee: "Hey! Would love to hang out sometime 🤝"',
    avatar: 'https://i.pravatar.cc/150?img=53',
    time: '4 days ago',
    isRead: true,
    actionUrl: '/messages',
  },
  {
    id: '11',
    type: 'system',
    title: 'Weekly Summary 📊',
    description: 'You got 12 likes, 3 matches, and 8 profile views this week!',
    time: '1 week ago',
    isRead: true,
    actionUrl: '/matches',
  },
  {
    id: '12',
    type: 'welcome',
    title: 'Welcome to Novara! 🎉',
    description: 'Complete your profile to start getting matches. Add photos and interests.',
    time: '2 weeks ago',
    isRead: true,
    actionUrl: '/profile/edit',
  },
];

const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'unread', label: 'Unread' },
  { id: 'likes', label: 'Likes' },
  { id: 'messages', label: 'Messages' },
  { id: 'system', label: 'System' },
];

/* ════════════════════════════════════════
   HELPER
   ════════════════════════════════════════ */

function getNotifIcon(type: string) {
  switch (type) {
    case 'like': return { icon: <Heart size={18} />, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)', border: 'rgba(236, 72, 153, 0.2)' };
    case 'match': return { icon: <Sparkles size={18} />, color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.2)' };
    case 'message': return { icon: <MessageCircle size={18} />, color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.2)' };
    case 'super_like': return { icon: <Zap size={18} />, color: '#facc15', bg: 'rgba(250, 204, 21, 0.1)', border: 'rgba(250, 204, 21, 0.2)' };
    case 'review': return { icon: <Star size={18} />, color: '#facc15', bg: 'rgba(250, 204, 21, 0.1)', border: 'rgba(250, 204, 21, 0.2)' };
    case 'profile_view': return { icon: <Eye size={18} />, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.1)', border: 'rgba(167, 139, 250, 0.2)' };
    case 'badge': return { icon: <Crown size={18} />, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.2)' };
    case 'system': return { icon: <ShieldCheck size={18} />, color: '#22d3ee', bg: 'rgba(34, 211, 238, 0.1)', border: 'rgba(34, 211, 238, 0.2)' };
    case 'welcome': return { icon: <Gift size={18} />, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.1)', border: 'rgba(167, 139, 250, 0.2)' };
    default: return { icon: <Bell size={18} />, color: '#9ca3af', bg: 'rgba(156, 163, 175, 0.1)', border: 'rgba(156, 163, 175, 0.2)' };
  }
}

/* ════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════ */

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [readIds, setReadIds] = useState<string[]>([]);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const isRead = (n: Notification) => n.isRead || readIds.includes(n.id);

  const markAsRead = (id: string) => {
    if (!readIds.includes(id)) setReadIds((prev) => [...prev, id]);
  };

  const markAllRead = () => {
    setReadIds(notifications.map((n) => n.id));
  };

  const deleteNotif = (id: string) => {
    setDeletedIds((prev) => [...prev, id]);
  };

  const filtered = notifications.filter((n) => {
    if (deletedIds.includes(n.id)) return false;
    if (activeTab === 'unread') return !isRead(n);
    if (activeTab === 'likes') return n.type === 'like' || n.type === 'super_like' || n.type === 'match';
    if (activeTab === 'messages') return n.type === 'message';
    if (activeTab === 'system') return n.type === 'system' || n.type === 'badge' || n.type === 'welcome';
    return true;
  });

  const unreadCount = notifications.filter((n) => !isRead(n) && !deletedIds.includes(n.id)).length;

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
              <h1 style={{ fontSize: 18, fontWeight: 700 }}>Notifications</h1>
              {unreadCount > 0 && (
                <p style={{ fontSize: 11, color: '#a78bfa', fontWeight: 500 }}>
                  {unreadCount} unread
                </p>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {unreadCount > 0 && (
              <button onClick={markAllRead} style={{
                padding: '8px 14px', borderRadius: 10,
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa', fontSize: 12, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 5,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
                <CheckCheck size={14} />
                Read All
              </button>
            )}
            <Link href="/settings" style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#9ca3af', textDecoration: 'none',
            }}>
              <Settings size={17} />
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '20px 20px 80px' }}>

        {/* ═══ FILTER TABS ═══ */}
        <div style={{
          display: 'flex', gap: 6, marginBottom: 24,
          overflowX: 'auto', paddingBottom: 4,
        }}>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '9px 18px', borderRadius: 10,
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                  : 'rgba(255,255,255,0.03)',
                border: activeTab === tab.id
                  ? '1px solid rgba(139, 92, 246, 0.4)'
                  : '1px solid rgba(255,255,255,0.06)',
                color: activeTab === tab.id ? '#fff' : '#9ca3af',
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                whiteSpace: 'nowrap', flexShrink: 0,
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(124, 58, 237, 0.2)' : 'none',
              }}
            >
              {tab.label}
              {tab.id === 'unread' && unreadCount > 0 && (
                <span style={{
                  marginLeft: 6, padding: '1px 6px', borderRadius: 99,
                  background: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700,
                }}>
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ═══ NOTIFICATION LIST ═══ */}
        {filtered.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filtered.map((notif) => {
              const iconData = getNotifIcon(notif.type);
              const read = isRead(notif);

              return (
                <Link
                  key={notif.id}
                  href={notif.actionUrl}
                  onClick={() => markAsRead(notif.id)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '16px 18px', borderRadius: 16,
                    background: read ? '#0c0c18' : 'rgba(139, 92, 246, 0.04)',
                    border: read
                      ? '1px solid rgba(255,255,255,0.04)'
                      : '1px solid rgba(139, 92, 246, 0.12)',
                    textDecoration: 'none', color: '#fff',
                    transition: 'all 0.3s',
                    position: 'relative',
                  }}
                >
                  {/* Unread Dot */}
                  {!read && (
                    <div style={{
                      position: 'absolute', top: 18, left: 8,
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#7c3aed',
                    }} />
                  )}

                  {/* Icon or Avatar */}
                  {notif.avatar ? (
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14,
                        overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        <img src={notif.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{
                        position: 'absolute', bottom: -3, right: -3,
                        width: 22, height: 22, borderRadius: 8,
                        background: iconData.bg, border: `1px solid ${iconData.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: iconData.color,
                      }}>
                        {React.cloneElement(iconData.icon as React.ReactElement, { size: "11" } as any)}
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: iconData.bg, border: `1px solid ${iconData.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: iconData.color, flexShrink: 0,
                    }}>
                      {iconData.icon}
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontSize: 14, fontWeight: read ? 500 : 700,
                      color: read ? '#d1d5db' : '#fff',
                      marginBottom: 3,
                    }}>
                      {notif.title}
                    </p>
                    <p style={{
                      fontSize: 12.5, color: '#6b7280', lineHeight: 1.5,
                      overflow: 'hidden', textOverflow: 'ellipsis',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const,
                    }}>
                      {notif.description}
                    </p>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      marginTop: 6,
                    }}>
                      <Clock size={10} style={{ color: '#4b5563' }} />
                      <span style={{ fontSize: 11, color: '#4b5563', fontWeight: 500 }}>
                        {notif.time}
                      </span>
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteNotif(notif.id);
                    }}
                    style={{
                      width: 32, height: 32, borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#4b5563', cursor: 'pointer',
                      transition: 'all 0.2s', flexShrink: 0, marginTop: 4,
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </Link>
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
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Bell size={36} style={{ color: '#a78bfa' }} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              {activeTab === 'unread' ? 'All caught up!' : 'No notifications'}
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 300, margin: '0 auto', lineHeight: 1.5 }}>
              {activeTab === 'unread'
                ? 'You\'ve read all your notifications. Check back later!'
                : 'When someone likes you or sends a message, it will appear here.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}