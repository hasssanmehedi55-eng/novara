"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Sparkles, MapPin, Star, Clock,
  Home, Search, MessageCircle, User, LogOut,
  Check, TrendingUp, Bell, Settings, Compass,
  Filter, Zap, X,
} from "lucide-react";
import { demoProfiles } from "../../lib/data";
import { useAuth } from "../../hooks/useAuth";

const filters = [
  { id: "all", label: "All", icon: <Sparkles size={14} /> },
  { id: "online", label: "Online", icon: <div className="w-2 h-2 rounded-full bg-secondary" /> },
  { id: "top", label: "Top Rated", icon: <Star size={14} /> },
  { id: "new", label: "New", icon: <Zap size={14} /> },
];

const sidebarLinks = [
  { icon: <Compass size={20} />, label: "Discover", path: "/feed", active: true },
  { icon: <Heart size={20} />, label: "Matches", path: "/feed", badge: 3 },
  { icon: <MessageCircle size={20} />, label: "Messages", path: "/feed", badge: 0 },
  { icon: <Bell size={20} />, label: "Notifications", path: "/feed", badge: 0 },
  { icon: <User size={20} />, label: "Profile", path: "/profile", badge: 0 },
  { icon: <Settings size={20} />, label: "Settings", path: "/feed", badge: 0 },
];

export default function FeedPage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [likes, setLikes] = useState<string[]>([]);
  const [superLikes, setSuperLikes] = useState<string[]>([]);
  const [showHeart, setShowHeart] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (mounted && !isLoading && !isLoggedIn) router.push("/auth");
  }, [mounted, isLoading, isLoggedIn, router]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center animate-pulse-glow">
          <span className="text-xl font-black text-white">N</span>
        </div>
      </div>
    );
  }
  if (!isLoggedIn) return null;

  const handleLike = (uid: string) => {
    if (likes.includes(uid)) { setLikes(likes.filter(id => id !== uid)); return; }
    setLikes([...likes, uid]);
    setSuperLikes(superLikes.filter(id => id !== uid));
    setShowHeart(uid);
    setTimeout(() => setShowHeart(null), 700);
  };

  const handleSuperLike = (uid: string) => {
    if (superLikes.includes(uid)) { setSuperLikes(superLikes.filter(id => id !== uid)); return; }
    setSuperLikes([...superLikes, uid]);
    setLikes(likes.filter(id => id !== uid));
    setShowHeart(uid);
    setTimeout(() => setShowHeart(null), 700);
  };

  const filteredProfiles = activeFilter === "online"
    ? demoProfiles.filter(p => p.isOnline)
    : activeFilter === "top"
      ? [...demoProfiles].sort((a, b) => b.rating - a.rating)
      : demoProfiles;

  return (
    <div className="min-h-screen bg-background flex">

      {/* ===== SIDEBAR (Desktop) ===== */}
      <aside className="hidden lg:flex w-[260px] flex-col fixed left-0 top-0 bottom-0 bg-card border-r border-border z-40">
        {/* Logo */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-base font-black text-white">N</span>
            </div>
            <span className="text-xl font-bold gradient-text">Novara</span>
          </div>
        </div>

        {/* User mini card */}
        <div className="mx-4 mb-4 p-3 rounded-xl bg-background border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <User size={18} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">You</p>
              <p className="text-xs text-muted truncate">@{user?.uid.slice(0, 10)}</p>
            </div>
            <Sparkles size={16} className="text-primary" />
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => router.push(link.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                link.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:text-foreground hover:bg-card-hover"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
              {link.badge ? (
                <span className="ml-auto w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {link.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-border">
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted hover:text-danger hover:bg-danger/5 transition-all cursor-pointer"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ===== MOBILE TOP NAV ===== */}
      <div className="lg:hidden nv-nav fixed top-0 left-0 right-0 z-50">
        <div className="px-4 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-black text-white">N</span>
            </div>
            <span className="font-bold text-foreground">Novara</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted">
              <Search size={16} />
            </button>
            <button className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted">
              <Bell size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 lg:ml-[260px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 lg:pt-8 pb-24 lg:pb-8">

          {/* Desktop top bar */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h1 className="text-2xl font-black text-foreground">Discover</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2">
                <Search size={16} className="text-muted" />
                <input type="text" placeholder="Search friends..."
                  className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted w-48" />
              </div>
              <button className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-foreground transition">
                <Bell size={18} />
              </button>
            </div>
          </div>

          {/* Header card */}
          <div className="nv-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-1">
              <Sparkles size={20} className="text-primary" />
              <h2 className="text-lg font-bold text-foreground">Discover People</h2>
            </div>
            <p className="text-sm text-muted">
              Find amazing friends to hang out with. Like profiles you&apos;re interested in!
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted hover:text-foreground hover:border-primary/30"
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>

          {/* ===== PROFILE CARDS GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProfiles.map((p, i) => {
              const liked = likes.includes(p.uid);
              const superLiked = superLikes.includes(p.uid);

              return (
                <motion.div
                  key={p.uid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`nv-card overflow-hidden relative group ${
                    liked ? "glow-pink" : superLiked ? "glow-purple" : ""
                  }`}
                >
                  {/* Banner */}
                  <div className="h-32 sm:h-36 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${
                        p.uid === "demo_1" ? "#1a1a2e, #16213e, #0f3460" :
                        p.uid === "demo_2" ? "#1b1b3a, #2d1b69, #4a1a7a" :
                        p.uid === "demo_3" ? "#0d2137, #0a3d62, #1e5f74" :
                        p.uid === "demo_4" ? "#2d1b2e, #4a1a4e, #6b2d6e" :
                        p.uid === "demo_5" ? "#1a2a1a, #2d4a2d, #1a5a3a" :
                        "#2a1a1a, #4a2a1a, #5a3a1a"
                      })`,
                    }}
                  >
                    {/* Stars overlay */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(12)].map((_, j) => (
                        <div key={j} className="absolute w-0.5 h-0.5 bg-white rounded-full"
                          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.8 + 0.2 }} />
                      ))}
                    </div>

                    {/* Rate badge */}
                    <div className="absolute top-3 left-3 bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1">
                      ৳ {p.hourlyRate}/hr
                    </div>

                    {/* Online badge */}
                    {p.isOnline && (
                      <div className="absolute top-3 right-3 bg-secondary/20 text-secondary text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-secondary/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Online
                      </div>
                    )}
                  </div>

                  {/* Avatar overlapping banner */}
                  <div className="relative px-4 -mt-8">
                    <div className="avatar-ring inline-block">
                      <div className="avatar-inner w-16 h-16">
                        <img src={p.avatar} alt={p.displayName} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {p.isVerified && (
                      <div className="absolute left-[68px] bottom-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-card">
                        <Check size={10} className="text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 pt-2">
                    {/* Name + Age */}
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">{p.displayName}</h3>
                      <span className="text-sm text-muted">{p.age}</span>
                    </div>
                    <p className="text-xs text-muted">@{p.username}</p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {p.badges.map(b => (
                        <span key={b.id} className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                          style={{ backgroundColor: b.color + "15", color: b.color }}>
                          {b.icon} {b.name}
                        </span>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-foreground/70 mt-2.5 line-clamp-2 leading-relaxed">{p.bio}</p>

                    {/* Location + Rating */}
                    <div className="flex items-center gap-3 mt-2.5 text-xs text-muted">
                      <span className="flex items-center gap-1"><MapPin size={11} />{p.location}</span>
                      <span className="flex items-center gap-1"><Star size={11} className="text-superlike" fill="#fdcb6e" />{p.rating}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />1d ago</span>
                    </div>

                    {/* Interests */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {p.interests.slice(0, 3).map(int => (
                        <span key={int} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-background border border-border text-muted">
                          {int}
                        </span>
                      ))}
                      {p.interests.length > 3 && (
                        <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-background border border-border text-muted">
                          +{p.interests.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="px-4 pb-4 flex items-center gap-2">
                    <button onClick={() => handleLike(p.uid)}
                      className={`flex-1 h-10 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 ${
                        liked
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-muted hover:text-accent hover:border-accent/30"
                      }`}>
                      <Heart size={15} fill={liked ? "white" : "none"} className={liked ? "animate-heartbeat" : ""} />
                      {liked ? "Liked" : "Like"}
                    </button>
                    <button onClick={() => handleSuperLike(p.uid)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
                        superLiked
                          ? "bg-primary text-white"
                          : "bg-card border border-border text-muted hover:text-primary hover:border-primary/30"
                      }`}>
                      <Sparkles size={16} />
                    </button>
                  </div>

                  {/* Heart overlay */}
                  <AnimatePresence>
                    {showHeart === p.uid && (
                      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 2 }} transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 rounded-2xl">
                        <span className="text-6xl">{likes.includes(p.uid) ? "❤️" : "💖"}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <div className="lg:hidden nv-nav fixed bottom-0 left-0 right-0 z-50 border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          {[
            { icon: <Compass size={22} />, label: "Discover", active: true, path: "/feed" },
            { icon: <Heart size={22} />, label: "Matches", active: false, path: "/feed" },
            { icon: <MessageCircle size={22} />, label: "Chat", active: false, path: "/feed" },
            { icon: <User size={22} />, label: "Profile", active: false, path: "/profile" },
          ].map(item => (
            <button key={item.label} onClick={() => router.push(item.path)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition cursor-pointer ${
                item.active ? "text-primary" : "text-muted"
              }`}>
              {item.icon}
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}