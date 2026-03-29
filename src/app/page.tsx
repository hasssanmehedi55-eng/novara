"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Heart, MessageCircle, Shield, Sparkles,
  ArrowRight, Users, Star, Zap, Check,
  Globe, ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">

      {/* ===== NAVBAR ===== */}
      <nav className="nv-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-sm font-black text-white">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">Novara</span>
            </div>
            <button onClick={() => router.push("/auth")}
              className="btn-glow px-5 py-2.5 text-sm flex items-center gap-2">
              Get Started <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-28 sm:pt-36 pb-20 px-4 relative">
        {/* BG blobs */}
        <div className="absolute top-20 left-[5%] w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-accent/6 rounded-full blur-[120px]" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 nv-card px-5 py-2.5 mb-8 rounded-full">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-foreground/80">
              Bangladesh&apos;s #1 Friend Hiring Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">Find Your</span><br />
            <span className="gradient-text">Perfect Friend</span><br />
            <span className="text-foreground">Right Now</span>
            <span className="gradient-text">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Verified friends for hangouts, gaming, study sessions, events, or just
            someone to talk to. Real people, real connections.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => router.push("/auth")}
              className="btn-glow px-8 py-4 text-lg flex items-center gap-3 animate-pulse-glow">
              <Zap size={20} /> Start for Free <ArrowRight size={18} />
            </button>
            <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 nv-card text-foreground/80 font-semibold cursor-pointer hover:text-foreground transition-all flex items-center gap-2 rounded-xl">
              See How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto nv-card p-6 rounded-2xl">
            {[
              { value: "10K+", label: "ACTIVE USERS", icon: <Users size={16} className="text-primary" /> },
              { value: "50K+", label: "MATCHES MADE", icon: <Heart size={16} className="text-accent" /> },
              { value: "4.9", label: "AVG RATING", icon: <Star size={16} className="text-superlike" /> },
              { value: "24/7", label: "AVAILABLE", icon: <Globe size={16} className="text-secondary" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  {stat.icon}
                  <span className="text-xl sm:text-2xl font-black text-foreground">{stat.value}</span>
                </div>
                <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="shimmer-line max-w-md mx-auto my-4" />

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">FEATURES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
              Everything You <span className="gradient-text">Need</span>
            </h2>
            <p className="text-muted max-w-md mx-auto text-sm">
              A complete platform to discover, connect, and hire verified friends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "👤", title: "Friend Profiles", desc: "Discord-style profiles with badges, photos, custom themes", color: "#6c5ce7" },
              { emoji: "❤️", title: "Like & Match", desc: "Like or Super Like. Mutual likes = instant match!", color: "#fd79a8" },
              { emoji: "💬", title: "Premium Chat", desc: "Unlock private conversations with matched friends", color: "#00b894" },
              { emoji: "🔒", title: "100% Verified", desc: "Phone verified users. Real people, real connections", color: "#fdcb6e" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="nv-card p-6 hover:border-primary/20 transition-all cursor-default">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: f.color + "15" }}>
                  {f.emoji}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line max-w-md mx-auto my-4" />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">PROCESS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              Simple as <span className="gradient-text">1-2-3-4</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Create Profile", desc: "Sign up with phone. Add photos, bio, interests.", icon: "👤", color: "#6c5ce7" },
              { step: "02", title: "Browse & Like", desc: "Scroll through profiles. Like ❤️ or Super Like 💖", icon: "🔍", color: "#fd79a8" },
              { step: "03", title: "Get Matched", desc: "Mutual likes create a match instantly!", icon: "🎯", color: "#00b894" },
              { step: "04", title: "Chat & Meet", desc: "Unlock chat, plan your hangout, make memories.", icon: "🎉", color: "#fdcb6e" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="nv-card p-5 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: item.color + "15" }}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: item.color + "15", color: item.color }}>
                      STEP {item.step}
                    </span>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line max-w-md mx-auto my-4" />

      {/* ===== REVIEWS ===== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3 block">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              People <span className="gradient-text">Love</span> Novara
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Rafiq A.", text: "একটু nervous ছিলাম, কিন্তু প্রথম hangout এই বুঝলাম কতটা fun! 🎉" },
              { name: "Nusrat J.", text: "Study partner খুঁজছিলাম, Novara তে পেয়ে গেলাম! Best decision ever." },
              { name: "Karim H.", text: "Gaming buddy পেয়ে গেছি। প্রতিদিন together খেলি এখন! 🎮" },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="nv-card p-6">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-superlike" fill="#fdcb6e" />)}
                </div>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-[11px] text-secondary flex items-center gap-1">
                      <Check size={10} /> Verified
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="shimmer-line max-w-md mx-auto my-4" />

      {/* ===== CTA ===== */}
      <section className="py-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto nv-card p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-primary/10 blur-[80px]" />
          <div className="relative">
            <div className="text-5xl mb-5">🚀</div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
              Ready to Make <span className="gradient-text">New Friends</span>?
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto text-sm">
              Join thousands already connecting on Novara. 100% free to start.
            </p>
            <button onClick={() => router.push("/auth")}
              className="btn-glow px-8 py-4 text-lg flex items-center gap-3 mx-auto animate-pulse-glow">
              <Sparkles size={20} /> Join Novara — Free
            </button>
            <p className="text-xs text-muted mt-4 flex items-center justify-center gap-1.5">
              <Shield size={11} /> No credit card needed
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-[10px] font-black text-white">N</span>
            </div>
            <span className="text-sm font-bold text-foreground">Novara</span>
            <span className="text-xs text-muted">© 2025</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted">
            <span className="hover:text-foreground cursor-pointer transition">Privacy</span>
            <span className="hover:text-foreground cursor-pointer transition">Terms</span>
            <span className="hover:text-foreground cursor-pointer transition">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 