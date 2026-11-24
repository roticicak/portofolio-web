import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, PROFILE } from "../data/portfolioData";
import { EASE_OUT_EXPO, SPRING_NAV, mobileMenuVariants } from "../utils/motion";
import {
  IconArrowUpRight,
  IconBriefcase,
  IconFolder,
  IconHome,
  IconMail,
  IconMenu,
  IconUser,
  IconX,
} from "./Icons";

const NAV_ICON_MAP = {
  home: IconHome,
  about: IconUser,
  projects: IconFolder,
  experience: IconBriefcase,
  contact: IconMail,
};

export default function Navbar({ activeMenu, onSelectMenu, isTransitioning }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id) => {
    onSelectMenu(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top Progress Shimmer on Menu Switch */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="nav-shimmer"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400"
          />
        )}
      </AnimatePresence>

      {/* Floating Desktop & Tablet Header */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-nav rounded-2xl px-4 sm:px-5 h-16 flex items-center justify-between shadow-card">
            {/* Brand Wordmark */}
            <button
              type="button"
              onClick={() => handleSelect("home")}
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/5 border border-amber-400/30 text-amber-300 font-display font-bold text-sm transition-transform duration-300 group-hover:scale-105">
                SS
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0c0d12]" />
              </span>
              <div className="leading-tight">
                <span className="block font-display font-semibold text-sm sm:text-base text-white tracking-tight">
                  {PROFILE.shortName}
                </span>
                <span className="block font-mono text-[11px] text-zinc-400">
                  {PROFILE.role}
                </span>
              </div>
            </button>

            {/* Desktop Menu Pill Bar */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {NAV_ITEMS.map((item) => {
                const isActive = activeMenu === item.id;
                const Icon = NAV_ICON_MAP[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 focus:outline-none ${
                      isActive
                        ? "text-zinc-950"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        transition={SPRING_NAV}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 shadow-glow"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action + Mobile Drawer Trigger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSelect("contact")}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.06] hover:bg-white/[0.11] text-zinc-100 border border-white/10 transition-all duration-200 hover:border-amber-400/40"
              >
                <span>Let&apos;s Talk</span>
                <IconArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-zinc-200 hover:bg-white/10 transition-colors"
              >
                {mobileOpen ? (
                  <IconX className="w-5 h-5" />
                ) : (
                  <IconMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 md:hidden bg-[#09090b]/95 pt-24 px-6 pb-28 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Navigation Menu
              </p>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeMenu === item.id;
                const Icon = NAV_ICON_MAP[item.id];
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.35,
                      ease: EASE_OUT_EXPO,
                    }}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-amber-400/15 border-amber-400/40 text-amber-200"
                        : "bg-white/[0.03] border-white/[0.07] text-zinc-200 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 text-left">
                      <span className="font-mono text-xs text-zinc-500">
                        {item.index}
                      </span>
                      <Icon className="w-5 h-5" />
                      <div>
                        <span className="block font-display text-lg font-semibold">
                          {item.label}
                        </span>
                        <span className="block text-xs text-zinc-400">
                          {item.tagline}
                        </span>
                      </div>
                    </div>
                    <IconArrowUpRight className="w-4 h-4 opacity-70" />
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="pt-6 border-t border-white/10 text-xs text-zinc-400 flex items-center justify-between"
            >
              <span>{PROFILE.email}</span>
              <span className="font-mono text-emerald-400">Online</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Bottom Dock for Instant Smooth Transitions */}
      <nav
        aria-label="Mobile quick navigation"
        className="md:hidden fixed bottom-4 inset-x-4 z-50"
      >
        <div className="glass-nav rounded-2xl p-1.5 flex items-center justify-between shadow-card">
          {NAV_ITEMS.map((item) => {
            const isActive = activeMenu === item.id;
            const Icon = NAV_ICON_MAP[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`relative flex-1 py-2 rounded-xl flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
                  isActive ? "text-zinc-950" : "text-zinc-400"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobileNavPill"
                    transition={SPRING_NAV}
                    className="absolute inset-0 rounded-xl bg-amber-400"
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
