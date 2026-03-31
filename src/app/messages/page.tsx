/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  ImageIcon,
  Smile,
  Mic,
  Check,
  CheckCheck,
  Circle,
  ArrowLeft,
  Plus,
  Sparkles,
  ShieldCheck,
  Star,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   TYPES
   ════════════════════════════════════════ */

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  time: string;
  status: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  isVerified: boolean;
  lastMessage: string;
  lastTime: string;
  unread: number;
  messages: Message[];
}

/* ════════════════════════════════════════
   CONVERSATION DATA
   ════════════════════════════════════════ */

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Aria Chen',
    username: '@aria_vibes',
    avatar: 'https://i.pravatar.cc/150?img=5',
    isOnline: true,
    isVerified: true,
    lastMessage: 'That sounds amazing! Let\'s meet at Central Park 🌳',
    lastTime: '2m ago',
    unread: 2,
    messages: [
      { id: 'm1', text: 'Hey Aria! I saw your profile and love your photography!', sender: 'me', time: '10:30 AM', status: 'read' },
      { id: 'm2', text: 'Thank you so much! 😊 I love capturing city vibes', sender: 'them', time: '10:32 AM', status: 'read' },
      { id: 'm3', text: 'Would you like to hang out this weekend? Maybe explore some hidden spots in the city?', sender: 'me', time: '10:35 AM', status: 'read' },
      { id: 'm4', text: 'I\'d love that! I know some amazing rooftop cafes we could check out ☕', sender: 'them', time: '10:38 AM', status: 'read' },
      { id: 'm5', text: 'Perfect! How about Saturday afternoon around 2pm?', sender: 'me', time: '10:40 AM', status: 'read' },
      { id: 'm6', text: 'Saturday at 2pm works perfectly for me!', sender: 'them', time: '10:42 AM', status: 'read' },
      { id: 'm7', text: 'Where should we meet? I was thinking somewhere in Manhattan', sender: 'me', time: '10:45 AM', status: 'read' },
      { id: 'm8', text: 'That sounds amazing! Let\'s meet at Central Park 🌳', sender: 'them', time: '10:47 AM', status: 'read' },
    ],
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    username: '@marc.creates',
    avatar: 'https://i.pravatar.cc/150?img=12',
    isOnline: true,
    isVerified: true,
    lastMessage: 'GG! That was an epic gaming session 🎮',
    lastTime: '15m ago',
    unread: 0,
    messages: [
      { id: 'm1', text: 'Hey Marcus! Wanna play some games tonight?', sender: 'me', time: '8:00 PM', status: 'read' },
      { id: 'm2', text: 'Absolutely! What are you playing?', sender: 'them', time: '8:02 PM', status: 'read' },
      { id: 'm3', text: 'I was thinking Valorant or maybe some co-op games', sender: 'me', time: '8:05 PM', status: 'read' },
      { id: 'm4', text: 'Let\'s do Valorant! I\'ve been grinding ranked lately', sender: 'them', time: '8:07 PM', status: 'read' },
      { id: 'm5', text: 'GG! That was an epic gaming session 🎮', sender: 'them', time: '11:30 PM', status: 'read' },
    ],
  },
  {
    id: '3',
    name: 'Luna Kim',
    username: '@lunarkm',
    avatar: 'https://i.pravatar.cc/150?img=9',
    isOnline: false,
    isVerified: true,
    lastMessage: 'The ramen place in Shibuya was incredible! 🍜',
    lastTime: '2h ago',
    unread: 1,
    messages: [
      { id: 'm1', text: 'Luna! How was your trip to Tokyo?', sender: 'me', time: '3:00 PM', status: 'read' },
      { id: 'm2', text: 'It was amazing! Tokyo is so vibrant', sender: 'them', time: '3:15 PM', status: 'read' },
      { id: 'm3', text: 'Did you find any good book stores?', sender: 'me', time: '3:20 PM', status: 'read' },
      { id: 'm4', text: 'The ramen place in Shibuya was incredible! 🍜', sender: 'them', time: '3:45 PM', status: 'read' },
    ],
  },
  {
    id: '4',
    name: 'Jake Thompson',
    username: '@jake_t',
    avatar: 'https://i.pravatar.cc/150?img=11',
    isOnline: true,
    isVerified: false,
    lastMessage: 'The hiking trail was breathtaking! 🏔️',
    lastTime: '1d ago',
    unread: 0,
    messages: [
      { id: 'm1', text: 'Hey Jake! Ready for the hike this weekend?', sender: 'me', time: '9:00 AM', status: 'read' },
      { id: 'm2', text: 'Can\'t wait! I\'ve got all my gear ready', sender: 'them', time: '9:10 AM', status: 'read' },
      { id: 'm3', text: 'The hiking trail was breathtaking! 🏔️', sender: 'them', time: '5:00 PM', status: 'read' },
    ],
  },
  {
    id: '5',
    name: 'Sophia Park',
    username: '@soph.art',
    avatar: 'https://i.pravatar.cc/150?img=16',
    isOnline: false,
    isVerified: true,
    lastMessage: 'The gallery exhibition was so inspiring ✨',
    lastTime: '3d ago',
    unread: 0,
    messages: [
      { id: 'm1', text: 'Sophia, have you seen the new art exhibition?', sender: 'me', time: '2:00 PM', status: 'read' },
      { id: 'm2', text: 'The gallery exhibition was so inspiring ✨', sender: 'them', time: '2:30 PM', status: 'read' },
    ],
  },
  {
    id: '6',
    name: 'Daniel Brooks',
    username: '@dan.b',
    avatar: 'https://i.pravatar.cc/150?img=8',
    isOnline: true,
    isVerified: true,
    lastMessage: 'That pizza place was fire! 🍕🔥',
    lastTime: '5d ago',
    unread: 0,
    messages: [
      { id: 'm1', text: 'Daniel! Know any good restaurants around here?', sender: 'me', time: '7:00 PM', status: 'read' },
      { id: 'm2', text: 'I know the best Italian place! Let me take you there', sender: 'them', time: '7:05 PM', status: 'read' },
      { id: 'm3', text: 'That pizza place was fire! 🍕🔥', sender: 'them', time: '9:30 PM', status: 'read' },
    ],
  },
];

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Record<string, Message[]>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* Initialize messages */
  useEffect(() => {
    const initial: Record<string, Message[]> = {};
    conversations.forEach((c) => {
      initial[c.id] = c.messages;
    });
    setChatMessages(initial);
  }, []);

  /* Auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat, chatMessages]);

  const activeConvo = conversations.find((c) => c.id === activeChat);
  const currentMessages = activeChat ? chatMessages[activeChat] || [] : [];

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (!newMessage.trim() || !activeChat) return;

    const msg: Message = {
      id: `new-${Date.now()}`,
      text: newMessage.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };

    setChatMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), msg],
    }));
    setNewMessage('');

    /* Simulate reply */
    setTimeout(() => {
      const replies = [
        'That sounds great! 😊',
        'Awesome, can\'t wait!',
        'Haha, love that! 😂',
        'Sure, let\'s do it! 🎉',
        'That\'s so cool! Tell me more',
        'I\'m in! When should we meet? 🤝',
      ];
      const reply: Message = {
        id: `reply-${Date.now()}`,
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'them',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read',
      };
      setChatMessages((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), reply],
      }));
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      height: '100vh', background: '#030507', color: '#fff',
      display: 'flex', overflow: 'hidden',
    }}>

      {/* ═══════════════════════════════════
          LEFT SIDEBAR — Conversation List
          ═══════════════════════════════════ */}
      <div style={{
        width: 380, minWidth: 380,
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        background: '#060610',
        ...(activeChat ? {
          position: 'absolute' as const,
          left: 0, top: 0, bottom: 0, zIndex: 20,
        } : {}),
      }}
        className={activeChat ? 'mobile-hide' : ''}
      >
        {/* Header */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
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
              <h1 style={{ fontSize: 20, fontWeight: 700 }}>Messages</h1>
            </div>
            <button style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
            }}>
              <Plus size={18} />
            </button>
          </div>

          {/* Search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px', borderRadius: 14,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <Search size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: '#fff', fontSize: 13,
              }}
            />
          </div>
        </div>

        {/* Conversation List */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filteredConversations.map((convo) => (
            <button
              key={convo.id}
              onClick={() => setActiveChat(convo.id)}
              style={{
                width: '100%', padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 14,
                background: activeChat === convo.id ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
                borderLeft: activeChat === convo.id ? '3px solid #7c3aed' : '3px solid transparent',
                border: 'none', borderBottom: '1px solid rgba(255,255,255,0.03)',
                cursor: 'pointer', transition: 'all 0.2s',
                textAlign: 'left',
              }}
            >
              {/* Avatar */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 16,
                  overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <img src={convo.avatar} alt={convo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {convo.isOnline && (
                  <div style={{
                    position: 'absolute', bottom: -1, right: -1,
                    width: 14, height: 14, borderRadius: '50%',
                    background: '#22c55e', border: '2.5px solid #060610',
                  }} />
                )}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{convo.name}</span>
                    {convo.isVerified && <ShieldCheck size={13} style={{ color: '#3b82f6' }} />}
                  </div>
                  <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 500, flexShrink: 0 }}>
                    {convo.lastTime}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p style={{
                    fontSize: 12.5, color: convo.unread > 0 ? '#d1d5db' : '#6b7280',
                    fontWeight: convo.unread > 0 ? 500 : 400,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    maxWidth: 220,
                  }}>
                    {convo.lastMessage}
                  </p>
                  {convo.unread > 0 && (
                    <div style={{
                      minWidth: 20, height: 20, borderRadius: 99,
                      background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 700, color: '#fff',
                      padding: '0 6px', flexShrink: 0,
                    }}>
                      {convo.unread}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          RIGHT SIDE — Chat Area
          ═══════════════════════════════════ */}
      {activeChat && activeConvo ? (
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          background: '#030507', minWidth: 0,
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '14px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(3, 5, 7, 0.9)', backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* Back button for mobile */}
              <button
                onClick={() => setActiveChat(null)}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', cursor: 'pointer',
                }}
                className="mobile-back-btn"
              >
                <ArrowLeft size={18} />
              </button>

              <div style={{
                width: 42, height: 42, borderRadius: 14,
                overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <img src={activeConvo.avatar} alt={activeConvo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{activeConvo.name}</span>
                  {activeConvo.isVerified && <ShieldCheck size={14} style={{ color: '#3b82f6' }} />}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: activeConvo.isOnline ? '#22c55e' : '#6b7280',
                  }} />
                  <span style={{ fontSize: 11, color: activeConvo.isOnline ? '#22c55e' : '#6b7280', fontWeight: 500 }}>
                    {activeConvo.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
              {[Phone, Video, MoreVertical].map((Icon, i) => (
                <button key={i} style={{
                  width: 38, height: 38, borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9ca3af', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '20px',
            display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {/* Date Badge */}
            <div style={{ textAlign: 'center', margin: '8px 0 16px' }}>
              <span style={{
                padding: '6px 16px', borderRadius: 99,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: 11, color: '#6b7280', fontWeight: 500,
              }}>
                Today
              </span>
            </div>

            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                  marginBottom: 4,
                }}
              >
                <div style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.sender === 'me'
                    ? 'linear-gradient(135deg, #7c3aed, #6d28d9)'
                    : '#0c0c18',
                  border: msg.sender === 'me'
                    ? '1px solid rgba(139, 92, 246, 0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: msg.sender === 'me'
                    ? '0 4px 15px rgba(124, 58, 237, 0.15)'
                    : 'none',
                }}>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: '#fff', wordBreak: 'break-word' }}>
                    {msg.text}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                    gap: 4, marginTop: 6,
                  }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{msg.time}</span>
                    {msg.sender === 'me' && (
                      msg.status === 'read' ? (
                        <CheckCheck size={12} style={{ color: '#60a5fa' }} />
                      ) : msg.status === 'delivered' ? (
                        <CheckCheck size={12} style={{ color: 'rgba(255,255,255,0.4)' }} />
                      ) : (
                        <Check size={12} style={{ color: 'rgba(255,255,255,0.4)' }} />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(6, 6, 16, 0.8)', backdropFilter: 'blur(20px)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'flex-end', gap: 10,
            }}>
              {/* Attachment Buttons */}
              <div style={{ display: 'flex', gap: 4, paddingBottom: 4 }}>
                <button style={{
                  width: 38, height: 38, borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6b7280', cursor: 'pointer',
                }}>
                  <ImageIcon size={17} />
                </button>
              </div>

              {/* Text Input */}
              <div style={{
                flex: 1, display: 'flex', alignItems: 'flex-end',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16, overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  rows={1}
                  style={{
                    flex: 1, padding: '12px 16px',
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#fff', fontSize: 14, lineHeight: 1.5,
                    resize: 'none', maxHeight: 120,
                  }}
                  onFocus={(e) => {
                    const p = e.target.parentElement;
                    if (p) p.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  }}
                  onBlur={(e) => {
                    const p = e.target.parentElement;
                    if (p) p.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                />
                <button style={{
                  padding: '12px 14px',
                  background: 'none', border: 'none',
                  color: '#6b7280', cursor: 'pointer',
                }}>
                  <Smile size={18} />
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!newMessage.trim()}
                style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: newMessage.trim()
                    ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                    : 'rgba(255,255,255,0.04)',
                  border: newMessage.trim()
                    ? '1px solid rgba(139, 92, 246, 0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: newMessage.trim() ? '#fff' : '#4b5563',
                  cursor: newMessage.trim() ? 'pointer' : 'not-allowed',
                  boxShadow: newMessage.trim() ? '0 4px 15px rgba(124, 58, 237, 0.3)' : 'none',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ═══════ EMPTY STATE ═══════ */
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 16,
        }}
          className="empty-state-hide"
        >
          <div style={{
            width: 80, height: 80, borderRadius: 24,
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Sparkles size={36} style={{ color: '#a78bfa' }} />
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700 }}>Your Messages</h3>
          <p style={{ fontSize: 14, color: '#6b7280', textAlign: 'center', maxWidth: 300, lineHeight: 1.5 }}>
            Select a conversation to start chatting with your friends.
          </p>
        </div>
      )}

      {/* ═══════ RESPONSIVE STYLES ═══════ */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-hide {
            display: none !important;
          }
          .empty-state-hide {
            display: none !important;
          }
          .mobile-back-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-hide {
            position: relative !important;
            display: flex !important;
          }
          .mobile-back-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}