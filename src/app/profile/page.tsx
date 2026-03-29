"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User, Phone, Shield, LogOut, Edit, MapPin,
  Star, Clock, Tag, Heart, Home, Search,
  MessageCircle, Compass, DollarSign,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { getUserProfile } from "../../lib/auth";
import { UserProfile } from "../../types";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && !isLoading && !isLoggedIn) router.push("/auth");
  }, [mounted, isLoading, isLoggedIn, router]);

  // Load profile from Firebase
  useEffect(() => {
    async function load() {
      if (user?.uid) {
        const p = await getUserProfile(user.uid);
        setProfile(p);
      }
    }
    if (mounted && user) load();
  }, [mounted, user]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn || !user) return null;

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-8">
      {/* Top bar */}
      <div className="nv-nav sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button onClick={() => router.push("/feed")}
              className="text-muted hover:text-foreground transition cursor-pointer text-sm">
              ← Back
            </button>
            <span className="font-bold text-foreground">My Profile</span>
            <button onClick={() => router.push("/profile/edit")}
              className="btn-glow px-4 py-2 text-xs flex items-center gap-1.5">
              <Edit size={13} /> Edit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Profile Card */}
          <div className="nv-card p-8 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-3xl bg-primary/15 border-2 border-primary/25 flex items-center justify-center mx-auto mb-4">
              <User size={40} className="text-primary" />
            </div>

            <h2 className="text-2xl font-black gradient-text">
              {profile?.displayName || "New User"}
            </h2>
            <p className="text-sm text-muted mt-1">
              @{profile?.username || user.uid.slice(0, 10)}
            </p>

            {profile?.bio && (
              <p className="text-sm text-foreground/70 mt-3 max-w-sm mx-auto">{profile.bio}</p>
            )}

            {/* Stats */}
            {(profile?.location || profile?.age) && (
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted">
                {profile.location && (
                  <span className="flex items-center gap-1"><MapPin size={12} />{profile.location}</span>
                )}
                {profile.age > 0 && (
                  <span>{profile.age} years</span>
                )}
                {profile.hourlyRate > 0 && (
                  <span className="text-secondary font-bold">৳{profile.hourlyRate}/hr</span>
                )}
              </div>
            )}

            {/* Interests */}
            {profile?.interests && profile.interests.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {profile.interests.map(int => (
                  <span key={int} className="text-xs font-medium px-3 py-1 rounded-full bg-card border border-border text-muted">
                    {int}
                  </span>
                ))}
              </div>
            )}

            {/* Badges */}
            <div className="flex justify-center gap-2 mt-4">
              {(profile?.badges || [{ id: "new", name: "Newcomer", icon: "🌟", color: "#fdcb6e", earnedAt: 0 }]).map(b => (
                <span key={b.id} className="text-xs font-bold px-3 py-1 rounded-lg"
                  style={{ backgroundColor: b.color + "15", color: b.color }}>
                  {b.icon} {b.name}
                </span>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-3 mt-4">
            <div className="nv-card p-4 flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm font-semibold text-foreground">{user.phone}</p>
              </div>
            </div>

            <div className="nv-card p-4 flex items-center gap-3">
              <Shield size={18} className="text-secondary" />
              <div>
                <p className="text-xs text-muted">Status</p>
                <p className="text-sm font-semibold text-secondary">Verified ✅</p>
              </div>
            </div>

            <div className="nv-card p-4 flex items-center gap-3">
              <Star size={18} className="text-superlike" />
              <div>
                <p className="text-xs text-muted">Rating</p>
                <p className="text-sm font-semibold text-foreground">⭐ {profile?.rating || 5.0}</p>
              </div>
            </div>
          </div>

          {/* Edit + Logout */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={() => router.push("/profile/edit")}
              className="btn-glow py-3 text-sm flex items-center justify-center gap-2">
              <Edit size={16} /> Edit Profile
            </button>
            <button onClick={() => { logout(); router.push("/"); }}
              className="nv-card py-3 text-sm flex items-center justify-center gap-2 text-danger hover:bg-danger/5 transition cursor-pointer font-semibold">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden nv-nav fixed bottom-0 left-0 right-0 z-50 border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          {[
            { icon: <Compass size={22} />, label: "Discover", active: false, path: "/feed" },
            { icon: <Heart size={22} />, label: "Matches", active: false, path: "/feed" },
            { icon: <MessageCircle size={22} />, label: "Chat", active: false, path: "/feed" },
            { icon: <User size={22} />, label: "Profile", active: true, path: "/profile" },
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