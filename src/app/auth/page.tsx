'use client';

import { useState } from 'react';
import {
  Phone,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  Shield,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

/* ════════════════════════════════════════
   AUTH PAGE COMPONENT
   ════════════════════════════════════════ */

export default function AuthPage() {
  const [step, setStep] = useState<'phone' | 'otp' | 'password'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ── OTP Input Handler ── */
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  /* ── Step Handlers ── */
  const handlePhoneSubmit = () => {
    if (phone.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1000);
  };

  const handleOtpSubmit = () => {
    const code = otp.join('');
    if (code.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('password');
    }, 1000);
  };

  const handlePasswordSubmit = () => {
    if (password.length < 6 || password !== confirmPassword) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/feed';
    }, 1200);
  };

  const goBack = () => {
    if (step === 'otp') setStep('phone');
    if (step === 'password') setStep('otp');
  };

  /* ── Password Strength ── */
  const getPasswordStrength = () => {
    if (password.length === 0) return { label: '', color: '', width: '0%' };
    if (password.length < 4) return { label: 'Weak', color: '#ef4444', width: '25%' };
    if (password.length < 6) return { label: 'Fair', color: '#f59e0b', width: '50%' };
    if (password.length < 8) return { label: 'Good', color: '#3b82f6', width: '75%' };
    return { label: 'Strong', color: '#22c55e', width: '100%' };
  };

  const strength = getPasswordStrength();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#030507',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ═══ Background Effects ═══ */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, right: -100,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: -100,
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ═══ Grid Pattern ═══ */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* ═══ Main Card ═══ */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 440,
      }}>
        {/* ── Logo & Back ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 12,
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 14,
              boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)',
            }}>
              N
            </div>
            <span style={{ fontSize: 18, fontWeight: 700 }}>Novara</span>
          </Link>

          {step !== 'phone' && (
            <button onClick={goBack} style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10, padding: '8px 14px',
              color: '#9ca3af', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <ChevronLeft size={16} />
              Back
            </button>
          )}
        </div>

        {/* ── Card ── */}
        <div style={{
          background: '#0c0c18',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: 24,
          padding: 'clamp(24px, 5vw, 40px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Card Glow */}
          <div style={{
            position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)',
            width: 200, height: 200,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* ══════════════════════════
               STEP 1: PHONE
               ══════════════════════════ */}
            {step === 'phone' && (
              <>
                {/* Step Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                  {[1, 2, 3].map((s) => (
                    <div key={s} style={{
                      height: 3, borderRadius: 99, flex: 1,
                      background: s === 1 ? 'linear-gradient(90deg, #7c3aed, #9333ea)' : 'rgba(255,255,255,0.06)',
                      transition: 'all 0.3s',
                    }} />
                  ))}
                </div>

                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, color: '#a78bfa',
                }}>
                  <Phone size={24} />
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Welcome to Novara
                </h2>
                <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32, lineHeight: 1.5 }}>
                  Enter your phone number to get started. We&apos;ll send you a verification code.
                </p>

                {/* Phone Input */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#9ca3af', marginBottom: 8 }}>
                    Phone Number
                  </label>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 0,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14, overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}>
                    <div style={{
                      padding: '14px 16px',
                      borderRight: '1px solid rgba(255,255,255,0.06)',
                      color: '#6b7280', fontSize: 14, fontWeight: 500,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      🇧🇩 +880
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="1XXXXXXXXX"
                      maxLength={11}
                      style={{
                        flex: 1, padding: '14px 16px',
                        background: 'transparent', border: 'none', outline: 'none',
                        color: '#fff', fontSize: 15, fontWeight: 500,
                      }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handlePhoneSubmit}
                  disabled={phone.length < 6 || loading}
                  style={{
                    width: '100%', padding: '14px 0', borderRadius: 14, border: 'none',
                    background: phone.length >= 6 ? 'linear-gradient(135deg, #7c3aed, #9333ea)' : 'rgba(255,255,255,0.06)',
                    color: phone.length >= 6 ? '#fff' : '#4b5563',
                    fontSize: 15, fontWeight: 600, cursor: phone.length >= 6 ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: phone.length >= 6 ? '0 8px 25px rgba(124, 58, 237, 0.25)' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {loading ? (
                    <div style={{
                      width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                  ) : (
                    <>
                      Send Verification Code
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Demo Notice */}
                <div style={{
                  marginTop: 20, padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(250, 204, 21, 0.06)', border: '1px solid rgba(250, 204, 21, 0.12)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Sparkles size={14} style={{ color: '#facc15', flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: '#fbbf24', lineHeight: 1.4 }}>
                    Demo mode — any number will work!
                  </p>
                </div>
              </>
            )}

            {/* ══════════════════════════
               STEP 2: OTP
               ══════════════════════════ */}
            {step === 'otp' && (
              <>
                {/* Step Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                  {[1, 2, 3].map((s) => (
                    <div key={s} style={{
                      height: 3, borderRadius: 99, flex: 1,
                      background: s <= 2 ? 'linear-gradient(90deg, #7c3aed, #9333ea)' : 'rgba(255,255,255,0.06)',
                      transition: 'all 0.3s',
                    }} />
                  ))}
                </div>

                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, color: '#34d399',
                }}>
                  <Shield size={24} />
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Verify Your Number
                </h2>
                <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 8, lineHeight: 1.5 }}>
                  We sent a 6-digit code to
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#a78bfa', marginBottom: 32 }}>
                  +880 {phone}
                </p>

                {/* OTP Inputs */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 24, justifyContent: 'center' }}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value.replace(/\D/g, ''))}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      style={{
                        width: 48, height: 56, borderRadius: 12,
                        background: digit ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255,255,255,0.03)',
                        border: digit ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255,255,255,0.08)',
                        color: '#fff', fontSize: 20, fontWeight: 700,
                        textAlign: 'center', outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                        e.target.style.background = 'rgba(139, 92, 246, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = digit ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.08)';
                        e.target.style.background = digit ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255,255,255,0.03)';
                      }}
                    />
                  ))}
                </div>

                {/* Submit */}
                <button
                  onClick={handleOtpSubmit}
                  disabled={otp.join('').length < 6 || loading}
                  style={{
                    width: '100%', padding: '14px 0', borderRadius: 14, border: 'none',
                    background: otp.join('').length >= 6 ? 'linear-gradient(135deg, #7c3aed, #9333ea)' : 'rgba(255,255,255,0.06)',
                    color: otp.join('').length >= 6 ? '#fff' : '#4b5563',
                    fontSize: 15, fontWeight: 600,
                    cursor: otp.join('').length >= 6 ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: otp.join('').length >= 6 ? '0 8px 25px rgba(124, 58, 237, 0.25)' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {loading ? (
                    <div style={{
                      width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                  ) : (
                    <>
                      Verify Code
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Resend */}
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                  <p style={{ fontSize: 13, color: '#6b7280' }}>
                    Didn&apos;t receive the code?{' '}
                    <button style={{
                      background: 'none', border: 'none', color: '#a78bfa',
                      fontWeight: 600, cursor: 'pointer', fontSize: 13,
                    }}>
                      Resend
                    </button>
                  </p>
                </div>

                {/* Demo Notice */}
                <div style={{
                  marginTop: 20, padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(250, 204, 21, 0.06)', border: '1px solid rgba(250, 204, 21, 0.12)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Sparkles size={14} style={{ color: '#facc15', flexShrink: 0 }} />
                  <p style={{ fontSize: 12, color: '#fbbf24', lineHeight: 1.4 }}>
                    Demo — enter any 6 digits!
                  </p>
                </div>
              </>
            )}

            {/* ══════════════════════════
               STEP 3: PASSWORD
               ══════════════════════════ */}
            {step === 'password' && (
              <>
                {/* Step Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                  {[1, 2, 3].map((s) => (
                    <div key={s} style={{
                      height: 3, borderRadius: 99, flex: 1,
                      background: 'linear-gradient(90deg, #7c3aed, #9333ea)',
                      transition: 'all 0.3s',
                    }} />
                  ))}
                </div>

                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: 'rgba(244, 114, 182, 0.1)', border: '1px solid rgba(244, 114, 182, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, color: '#f472b6',
                }}>
                  <Lock size={24} />
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Create Password
                </h2>
                <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32, lineHeight: 1.5 }}>
                  Set a strong password to secure your account.
                </p>

                {/* Password Input */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#9ca3af', marginBottom: 8 }}>
                    Password
                  </label>
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14, overflow: 'hidden',
                  }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      style={{
                        flex: 1, padding: '14px 16px',
                        background: 'transparent', border: 'none', outline: 'none',
                        color: '#fff', fontSize: 15,
                      }}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        padding: '14px 16px', background: 'none', border: 'none',
                        color: '#6b7280', cursor: 'pointer',
                      }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Strength Bar */}
                  {password.length > 0 && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{
                        height: 3, borderRadius: 99,
                        background: 'rgba(255,255,255,0.06)',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%', borderRadius: 99,
                          width: strength.width,
                          background: strength.color,
                          transition: 'all 0.3s',
                        }} />
                      </div>
                      <p style={{ fontSize: 11, color: strength.color, marginTop: 6, fontWeight: 500 }}>
                        {strength.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#9ca3af', marginBottom: 8 }}>
                    Confirm Password
                  </label>
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: confirmPassword && password !== confirmPassword
                      ? '1px solid rgba(239, 68, 68, 0.3)'
                      : confirmPassword && password === confirmPassword
                        ? '1px solid rgba(34, 197, 94, 0.3)'
                        : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14, overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}>
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      style={{
                        flex: 1, padding: '14px 16px',
                        background: 'transparent', border: 'none', outline: 'none',
                        color: '#fff', fontSize: 15,
                      }}
                    />
                    <button
                      onClick={() => setShowConfirm(!showConfirm)}
                      style={{
                        padding: '14px 16px', background: 'none', border: 'none',
                        color: '#6b7280', cursor: 'pointer',
                      }}
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Match Indicator */}
                  {confirmPassword && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
                      {password === confirmPassword ? (
                        <>
                          <CheckCircle2 size={12} style={{ color: '#22c55e' }} />
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 500 }}>Passwords match</span>
                        </>
                      ) : (
                        <>
                          <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444' }} />
                          </div>
                          <span style={{ fontSize: 11, color: '#ef4444', fontWeight: 500 }}>Passwords don&apos;t match</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handlePasswordSubmit}
                  disabled={password.length < 6 || password !== confirmPassword || loading}
                  style={{
                    width: '100%', padding: '14px 0', borderRadius: 14, border: 'none',
                    background: password.length >= 6 && password === confirmPassword
                      ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                      : 'rgba(255,255,255,0.06)',
                    color: password.length >= 6 && password === confirmPassword ? '#fff' : '#4b5563',
                    fontSize: 15, fontWeight: 600,
                    cursor: password.length >= 6 && password === confirmPassword ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: password.length >= 6 && password === confirmPassword
                      ? '0 8px 25px rgba(124, 58, 237, 0.25)'
                      : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {loading ? (
                    <div style={{
                      width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── Bottom Links ── */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <p style={{ fontSize: 13, color: '#4b5563' }}>
            By continuing, you agree to our{' '}
            <a href="#" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 500 }}>Terms</a>
            {' '}and{' '}
            <a href="#" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</a>
          </p>
        </div>

        {/* Security Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          marginTop: 24,
        }}>
          <Shield size={12} style={{ color: '#22c55e' }} />
          <span style={{ fontSize: 11, color: '#4b5563' }}>
            256-bit SSL Encrypted
          </span>
        </div>
      </div>

      {/* ═══ Spinner Keyframe ═══ */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}