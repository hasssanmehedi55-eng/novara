"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft, Save, User, MapPin, Calendar,
  Heart, Palette, Tag, FileText, DollarSign,
  Check, X,
} from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { updateUserProfile, getUserProfile } from "../../../lib/auth";

const interestOptions = [
  "Gaming", "Music", "Sports", "Movies", "Travel",
  "Photography", "Cooking", "Reading", "Anime", "Coding",
  "Art", "Dance", "Fitness", "Coffee", "Fashion",
  "Football", "Cricket", "Study", "Singing", "Streaming",
];

const genderOptions = ["Male", "Female", "Other"];

export default function EditProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Form fields
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [primaryColor, setPrimaryColor] = useState("#6c5ce7");

  useEffect(() => { setMounted(true); }, []);

  // Login check
  useEffect(() => {
    if (mounted && !isLoading && !isLoggedIn) router.push("/auth");
  }, [mounted, isLoading, isLoggedIn, router]);

  // Load existing profile
  useEffect(() => {
    async function loadProfile() {
      if (user?.uid) {
        const profile = await getUserProfile(user.uid);
        if (profile) {
          setDisplayName(profile.displayName || "");
          setUsername(profile.username || "");
          setBio(profile.bio || "");
          setAge(profile.age ? String(profile.age) : "");
          setGender(profile.gender || "");
          setLocation(profile.location || "");
          setHourlyRate(profile.hourlyRate ? String(profile.hourlyRate) : "");
          setInterests(profile.interests || []);
          setPrimaryColor(profile.customColors?.primary || "#6c5ce7");
        }
      }
    }
    if (mounted && user) loadProfile();
  }, [mounted, user]);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center animate-pulse-glow">
          <span className="text-xl font-black text-white">N</span>
        </div>
      </div>
    );
  }

  if (!isLoggedIn || !user) return null;

  // Toggle interest
  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else if (interests.length < 8) {
      setInterests([...interests, interest]);
    }
  };

  // Save profile
  const handleSave = async () => {
    if (!displayName.trim()) { alert("নাম দাও!"); return; }
    if (!age || Number(age) < 13) { alert("বয়স কমপক্ষে ১৩ হতে হবে"); return; }

    setSaving(true);
    try {
      await updateUserProfile(user.uid, {
        displayName: displayName.trim(),
        username: username.trim() || "user_" + user.uid.slice(0, 8),
        bio: bio.trim(),
        age: Number(age),
        gender,
        location: location.trim(),
        hourlyRate: Number(hourlyRate) || 0,
        interests,
        customColors: {
          primary: primaryColor,
          secondary: "#00b894",
          accent: "#fd79a8",
        },
      });
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        router.push("/profile");
      }, 1500);
    } catch (error) {
      console.error(error);
      alert("Save করতে সমস্যা হয়েছে!");
    }
    setSaving(false);
  };

  const colors = [
    "#6c5ce7", "#fd79a8", "#00b894", "#fdcb6e",
    "#e17055", "#0984e3", "#a29bfe", "#55efc4",
  ];

  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Top bar */}
      <div className="nv-nav sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button onClick={() => router.push("/profile")}
              className="flex items-center gap-2 text-muted hover:text-foreground transition cursor-pointer">
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back</span>
            </button>
            <span className="font-bold text-foreground">Edit Profile</span>
            <button onClick={handleSave} disabled={saving}
              className="btn-glow px-4 py-2 text-xs flex items-center gap-1.5 disabled:opacity-50">
              {saving ? "Saving..." : saved ? <><Check size={14} /> Saved!</> : <><Save size={14} /> Save</>}
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 mt-6 space-y-4">

        {/* Success message */}
        {saved && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="nv-card p-4 border-secondary/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center">
              <Check size={16} className="text-secondary" />
            </div>
            <p className="text-sm text-secondary font-semibold">Profile saved successfully! ✅</p>
          </motion.div>
        )}

        {/* Display Name */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <User size={16} className="text-primary" /> Display Name *
          </label>
          <input type="text" placeholder="তোমার নাম লেখো" value={displayName}
            onChange={e => setDisplayName(e.target.value)} maxLength={30}
            className="w-full bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
          <p className="text-xs text-muted mt-1.5">{displayName.length}/30</p>
        </div>

        {/* Username */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <span className="text-primary">@</span> Username
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">@</span>
            <input type="text" placeholder="username" value={username}
              onChange={e => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))} maxLength={20}
              className="w-full bg-input-bg border border-border rounded-xl pl-8 pr-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
          </div>
        </div>

        {/* Bio */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <FileText size={16} className="text-primary" /> Bio
          </label>
          <textarea placeholder="নিজের সম্পর্কে কিছু লেখো..." value={bio}
            onChange={e => setBio(e.target.value)} maxLength={150} rows={3}
            className="w-full bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all resize-none" />
          <p className="text-xs text-muted mt-1.5">{bio.length}/150</p>
        </div>

        {/* Age + Gender */}
        <div className="grid grid-cols-2 gap-4">
          <div className="nv-card p-5">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Calendar size={16} className="text-primary" /> Age *
            </label>
            <input type="number" placeholder="20" value={age} min={13} max={99}
              onChange={e => setAge(e.target.value)}
              className="w-full bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
          </div>

          <div className="nv-card p-5">
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Heart size={16} className="text-primary" /> Gender
            </label>
            <div className="flex gap-2">
              {genderOptions.map(g => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    gender === g
                      ? "bg-primary text-white"
                      : "bg-input-bg border border-border text-muted hover:text-foreground"
                  }`}>
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <MapPin size={16} className="text-primary" /> Location
          </label>
          <input type="text" placeholder="Dhaka, Bangladesh" value={location}
            onChange={e => setLocation(e.target.value)} maxLength={30}
            className="w-full bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
        </div>

        {/* Hourly Rate */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <DollarSign size={16} className="text-secondary" /> Hourly Rate (৳)
          </label>
          <input type="number" placeholder="200" value={hourlyRate} min={0}
            onChange={e => setHourlyRate(e.target.value)}
            className="w-full bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
          <p className="text-xs text-muted mt-1.5">প্রতি ঘণ্টায় কত টাকা চার্জ করবে</p>
        </div>

        {/* Interests */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
            <Tag size={16} className="text-primary" /> Interests
          </label>
          <p className="text-xs text-muted mb-3">সর্বোচ্চ ৮টা select করো ({interests.length}/8)</p>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map(int => (
              <button key={int} onClick={() => toggleInterest(int)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  interests.includes(int)
                    ? "bg-primary text-white"
                    : "bg-input-bg border border-border text-muted hover:text-foreground hover:border-primary/30"
                }`}>
                {interests.includes(int) && <span className="mr-1">✓</span>}
                {int}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Color */}
        <div className="nv-card p-5">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <Palette size={16} className="text-primary" /> Profile Color
          </label>
          <div className="flex gap-3">
            {colors.map(c => (
              <button key={c} onClick={() => setPrimaryColor(c)}
                className={`w-9 h-9 rounded-xl transition cursor-pointer ${
                  primaryColor === c ? "ring-2 ring-white ring-offset-2 ring-offset-card scale-110" : "hover:scale-105"
                }`}
                style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Save Button (bottom) */}
        <button onClick={handleSave} disabled={saving}
          className="w-full btn-glow py-4 text-base flex items-center justify-center gap-2 disabled:opacity-50 mt-4">
          {saving ? "Saving to Firebase..." : saved ? "✅ Saved!" : <><Save size={18} /> Save Profile</>}
        </button>
      </div>
    </div>
  );
}