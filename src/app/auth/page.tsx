"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Shield, Lock, ArrowRight, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { createUserProfile } from "../../lib/auth";
import { useAuth } from "../../hooks/useAuth";

type Step = "phone" | "otp" | "password";

export default function AuthPage() {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => { if (isLoggedIn) router.push("/feed"); }, [isLoggedIn, router]);
  useEffect(() => { if (countdown > 0) { const t = setTimeout(() => setCountdown(c => c - 1), 1000); return () => clearTimeout(t); } }, [countdown]);

  const submitPhone = () => {
    if (phone.length < 10) { alert("সঠিক নম্বর দাও"); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("otp"); setCountdown(30); }, 1200);
  };

  const changeOtp = (i: number, v: string) => {
    if (!/^\d*$/.test(v) || v.length > 1) return;
    const n = [...otp]; n[i] = v; setOtp(n);
    if (v && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const otpKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus();
  };

  const submitOtp = () => {
    if (otp.join("").length !== 6) { alert("৬ ডিজিট দাও"); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("password"); }, 1200);
  };

  const submitPassword = async () => {
    if (password.length < 6) { alert("কমপক্ষে ৬ অক্ষর"); return; }
    if (password !== confirmPassword) { alert("মিলছে না!"); return; }
    setLoading(true);
    try {
      const uid = "user_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
      const ph = "+880" + phone.replace(/^0/, "");
      await createUserProfile(uid, ph);
      login(uid, ph);
      router.push("/feed");
    } catch { alert("সমস্যা হয়েছে!"); }
    setLoading(false);
  };

  const anim = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* BG glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 mb-4">
            <span className="text-3xl font-black gradient-text">N</span>
          </div>
          <h1 className="text-3xl font-black gradient-text">Novara</h1>
          <p className="text-muted text-sm mt-1">Find & hire friends for any occasion</p>
        </div>

        {/* Card */}
        <div className="nv-card p-8">
          <AnimatePresence mode="wait">

            {/* PHONE */}
            {step === "phone" && (
              <motion.div key="phone" {...anim} className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Enter your phone</h2>
                    <p className="text-xs text-muted">We&apos;ll send you a verification code</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center gap-2 bg-input-bg border border-border rounded-xl px-4 py-3 text-sm text-muted">
                    BD <span className="font-semibold text-foreground">+880</span>
                  </div>
                  <input type="tel" placeholder="(555) 123-4567" value={phone}
                    onChange={e => { const v = e.target.value.replace(/\D/g, ""); if (v.length <= 11) setPhone(v); }}
                    className="flex-1 bg-input-bg border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-primary transition-all" />
                </div>

                <button onClick={submitPhone} disabled={loading}
                  className="w-full btn-glow py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? "Sending..." : <>Send Verification Code <ArrowRight size={16} /></>}
                </button>

                <div className="flex items-start gap-2 mt-2">
                  <Shield size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted">Your phone number is encrypted and never shared with other users</p>
                </div>
              </motion.div>
            )}

            {/* OTP */}
            {step === "otp" && (
              <motion.div key="otp" {...anim} className="space-y-5">
                <button onClick={() => setStep("phone")} className="flex items-center gap-1 text-muted hover:text-foreground text-sm cursor-pointer">
                  <ArrowLeft size={14} /> Back
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                    <Shield size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Verify your phone</h2>
                    <p className="text-xs text-muted">Code sent to +880****{phone.slice(-4)}</p>
                  </div>
                </div>

                <p className="text-xs text-muted">Enter any 6-digit code to continue</p>

                <div className="flex justify-center gap-2.5">
                  {otp.map((d, i) => (
                    <input key={i} ref={el => { otpRefs.current[i] = el; }}
                      type="text" inputMode="numeric" maxLength={1} value={d}
                      onChange={e => changeOtp(i, e.target.value)}
                      onKeyDown={e => otpKey(i, e)}
                      className={`w-12 h-14 text-center text-lg font-bold bg-input-bg border-2 rounded-xl outline-none transition-all ${
                        d ? "border-primary text-foreground" : "border-border text-muted"
                      } focus:border-primary`} />
                  ))}
                </div>

                <div className="text-center">
                  {countdown > 0 ? (
                    <p className="text-sm text-muted">Resend code in <span className="text-primary font-bold">{countdown}s</span></p>
                  ) : (
                    <button onClick={() => setCountdown(30)} className="text-primary text-sm font-semibold cursor-pointer">Resend code</button>
                  )}
                </div>

                <button onClick={submitOtp} disabled={loading || otp.join("").length !== 6}
                  className="w-full btn-glow py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? "Verifying..." : <>Verify <ArrowRight size={16} /></>}
                </button>
              </motion.div>
            )}

            {/* PASSWORD */}
            {step === "password" && (
              <motion.div key="password" {...anim} className="space-y-5">
                <button onClick={() => setStep("otp")} className="flex items-center gap-1 text-muted hover:text-foreground text-sm cursor-pointer">
                  <ArrowLeft size={14} /> Back
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Lock size={18} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Welcome back!</h2>
                    <p className="text-xs text-muted">Enter your password to continue</p>
                  </div>
                </div>

                <div className="relative">
                  <input type={showPw ? "text" : "password"} placeholder="Enter your password"
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="w-full bg-input-bg border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted focus:border-primary transition-all pr-12" />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground cursor-pointer">
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="relative">
                  <input type={showPw ? "text" : "password"} placeholder="Confirm password"
                    value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    className={`w-full bg-input-bg border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted focus:border-primary transition-all ${
                      confirmPassword && password !== confirmPassword ? "border-danger" : "border-border"
                    }`} />
                </div>

                {confirmPassword && password !== confirmPassword && (
                  <p className="text-danger text-xs">Passwords don&apos;t match</p>
                )}

                <button onClick={submitPassword} disabled={loading || password.length < 6 || password !== confirmPassword}
                  className="w-full btn-glow py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? "Creating account..." : <>Sign In <ArrowRight size={16} /></>}
                </button>

                <p className="text-center text-xs text-primary cursor-pointer hover:underline">Forgot password?</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-muted text-xs mt-6">
          By continuing, you agree to Novara&apos;s <span className="text-primary cursor-pointer">Terms of Service</span> & <span className="text-primary cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}