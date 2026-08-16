"use client";

import { useState } from "react";
import { ArrowLeft, Check, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage(){
  const [showPassword,setShowPassword]=useState(false);
  const [submitted,setSubmitted]=useState(false);
  return <main className="login-page">
    <section className="login-visual" aria-label="Aerowisata travel experience">
      <div className="login-visual-shade"/>
      <a className="login-brand light" href="/" aria-label="Aerowisata home"><span className="brand-mark"><i/><i/><i/></span><span className="brand-copy"><b>Aerowisata</b><small>GARUDA INDONESIA GROUP</small></span></a>
      <div className="login-story"><p className="eyebrow">ONE ACCOUNT, EVERY JOURNEY</p><h1>Travel seamlessly,<br/>wherever you go.</h1><p>Manage flights, stays, transfers, and every detail of your journey from one trusted platform.</p><div className="login-benefits"><span><Check/>All bookings in one place</span><span><Check/>Exclusive member offers</span><span><Check/>24/7 travel assistance</span></div></div>
      <p className="login-visual-note">Aerowisata Integrated Travel</p>
    </section>
    <section className="login-panel">
      <div className="login-mobile-top"><a className="login-brand" href="/"><span className="brand-mark"><i/><i/><i/></span><span className="brand-copy"><b>Aerowisata</b><small>GARUDA INDONESIA GROUP</small></span></a></div>
      <div className="login-box"><a className="back-home" href="/"><ArrowLeft/>Back to home</a><div className="login-heading"><p>WELCOME BACK</p><h2>Log in to your account</h2><span>Continue planning your next journey with Aerowisata.</span></div>
        <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>
          <label className="login-label" htmlFor="email">Email address</label><div className="login-input"><Mail/><input id="email" type="email" placeholder="name@company.com" required autoComplete="email"/></div>
          <div className="password-label"><label className="login-label" htmlFor="password">Password</label><a href="#forgot">Forgot password?</a></div><div className="login-input"><LockKeyhole/><input id="password" type={showPassword?"text":"password"} placeholder="Enter your password" required autoComplete="current-password"/><button type="button" onClick={()=>setShowPassword(!showPassword)} aria-label={showPassword?"Hide password":"Show password"}>{showPassword?<EyeOff/>:<Eye/>}</button></div>
          <label className="remember"><input type="checkbox"/><span/>Keep me signed in</label>
          <button className="login-submit" type="submit">Log In</button>{submitted&&<p className="login-message">Demo login submitted successfully.</p>}
        </form>
        <div className="login-divider"><span>or continue with</span></div><button className="google-login"><b>G</b>Continue with Google</button><p className="signup-prompt">New to Aerowisata? <a href="#signup">Create an account</a></p>
      </div><p className="login-legal">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
    </section>
  </main>
}
