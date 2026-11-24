import React from "react";
import { motion } from "framer-motion";
import { PROFILE, PROJECTS } from "../../data/portfolioData";
import { staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import PageFooterNav from "../PageFooterNav";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCode,
  IconDatabase,
  IconLayers,
  IconSparkles,
} from "../Icons";

export default function HomeView({ onSelectMenu, onSelectProject }) {
  const featuredProject = PROJECTS[0];

  return (
    <div className="space-y-10">
      {/* Main Hero Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Intro */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-200 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {PROFILE.status}
            </span>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-3">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-zinc-400">
              {PROFILE.role}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06] text-white">
              Hi, I&apos;m{" "}
              <span className="text-gradient-amber">{PROFILE.name}</span>.
            </h1>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl"
          >
            {PROFILE.aboutParagraphs[0]}
          </motion.p>

          {/* Primary Actions */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <button
              type="button"
              onClick={() => onSelectMenu("projects")}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-zinc-950 font-semibold text-sm shadow-glow hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <span>Explore Projects</span>
              <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onSelectMenu("about")}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-zinc-100 font-medium text-sm transition-all"
            >
              <span>About Me</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMenu("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-zinc-400 hover:text-amber-200 text-sm font-medium transition-colors"
            >
              <span>Contact</span>
              <IconArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Quick Capability Strip */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-3 gap-3 pt-4 max-w-xl"
          >
            {[
              { icon: IconCode, label: "Web Apps", sub: "POS & Inventory" },
              { icon: IconDatabase, label: "Data", sub: "SQL & Analytics" },
              { icon: IconLayers, label: "UI / UX", sub: "Clean Usability" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/[0.025] border border-white/[0.06] px-3.5 py-3"
                >
                  <Icon className="w-4 h-4 text-amber-300 mb-1.5" />
                  <p className="font-display text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-zinc-400">{item.sub}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Sculpted Portrait Card */}
        <motion.div variants={staggerItem} className="lg:col-span-5">
          <SpotlightCard className="p-3 sm:p-4">
            <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.08]">
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="h-full w-full object-cover object-[50%_18%] scale-[1.16] transition-transform duration-700 ease-out group-hover:scale-[1.2]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent" />

              {/* Bottom Identity Overlay */}
              <div className="absolute inset-x-3 bottom-3 rounded-xl glass-nav p-3.5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-sm text-white">
                    {PROFILE.name}
                  </p>
                  <p className="font-mono text-[11px] text-amber-300/90">
                    {PROFILE.role}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-400/15 border border-emerald-400/25 font-mono text-[10px] text-emerald-300">
                  <IconSparkles className="w-3 h-3" />
                  IS Student
                </span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>

      {/* Featured Project Spotlight Teaser */}
      <motion.div variants={staggerItem}>
        <SpotlightCard
          onClick={() => onSelectProject(featuredProject)}
          className="cursor-pointer p-5 sm:p-6 hover:shadow-glow transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/25">
                  Featured Project
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {featuredProject.category} • {featuredProject.year}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors">
                {featuredProject.fullTitle}
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {featuredProject.desc}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 group-hover:translate-x-1 transition-transform">
                  Open Case Study
                  <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 aspect-[16/10]">
                <img
                  src={featuredProject.screenshots[0].src}
                  alt={featuredProject.screenshots[0].title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-zinc-200 border border-white/10">
                  3 Interactive Screenshots
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>

      <PageFooterNav activeMenu="home" onSelectMenu={onSelectMenu} />
    </div>
  );
}
