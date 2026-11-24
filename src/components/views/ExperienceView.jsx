import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAPABILITIES, EXPERIENCES } from "../../data/portfolioData";
import { EASE_OUT_EXPO, SPRING_NAV, staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import PageFooterNav from "../PageFooterNav";
import { IconBriefcase, IconCheck } from "../Icons";

const FILTERS = ["All", "Industry Roles", "Technical Projects"];

const ACCENT_STYLES = {
  emerald: {
    spotlight: "rgba(52, 211, 153, 0.14)",
    iconBox: "bg-emerald-400/10 border-emerald-400/25 text-emerald-300",
    orgText: "text-emerald-300/90",
    dot: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]",
    badge: "bg-emerald-400/15 border-emerald-400/30 text-emerald-300",
  },
  amber: {
    spotlight: "rgba(245, 158, 11, 0.14)",
    iconBox: "bg-amber-400/10 border-amber-400/25 text-amber-300",
    orgText: "text-amber-300/90",
    dot: "bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]",
    badge: "bg-amber-400/10 border-amber-400/25 text-amber-200",
  },
  sky: {
    spotlight: "rgba(56, 189, 248, 0.14)",
    iconBox: "bg-sky-400/10 border-sky-400/25 text-sky-300",
    orgText: "text-sky-300/90",
    dot: "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]",
    badge: "bg-sky-400/10 border-sky-400/25 text-sky-200",
  },
};

export default function ExperienceView({ onSelectMenu }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredExperiences =
    activeFilter === "All"
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.category === activeFilter);

  return (
    <div className="space-y-10">
      {/* Header + Filter Controls */}
      <motion.div
        variants={staggerItem}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
            <span>04</span>
            <span className="h-px w-6 bg-amber-400/40" />
            <span>Work Experience</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Industry experience, systems &{" "}
            <span className="text-gradient-amber">data engineering</span>.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            Spanning IT infrastructure support, campaign data analytics, network architecture, and full-stack web software delivery.
          </p>
        </div>

        {/* Animated Filter Tabs */}
        <div className="inline-flex self-start md:self-auto p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
          {FILTERS.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  isSelected ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="experienceFilterPill"
                    transition={SPRING_NAV}
                    className="absolute inset-0 rounded-lg bg-amber-400"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Quick Highlights Bar */}
      <motion.div
        variants={staggerItem}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {[
          { value: "2", label: "Industry Roles", sub: "IT Support & Game UA" },
          { value: "3", label: "Technical Tracks", sub: "Full-Stack, Net & Data" },
          { value: "SQL & Excel", label: "Data Tooling", sub: "Dashboards & Reporting" },
          { value: "Cisco & Vercel", label: "Infra & Deploy", sub: "VLANs, CI/CD & APIs" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-white/[0.025] border border-white/[0.07] px-4 py-3.5"
          >
            <p className="font-display text-lg sm:text-xl font-bold text-white">
              {stat.value}
            </p>
            <p className="text-xs font-medium text-zinc-300 mt-0.5">{stat.label}</p>
            <p className="font-mono text-[10px] text-zinc-500 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </motion.div>

      {/* Vertical Experience Timeline */}
      <motion.div variants={staggerItem} className="relative">
        {/* Vertical Rail (Desktop / Tablet) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/50 via-amber-400/35 to-white/10"
        />

        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => {
              const style = ACCENT_STYLES[exp.accent] || ACCENT_STYLES.amber;

              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.38, ease: EASE_OUT_EXPO }}
                  className="relative md:pl-14"
                >
                  {/* Timeline Node */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex absolute left-0 top-7 h-10 w-10 items-center justify-center rounded-full bg-[#0c0d12] border border-white/10"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                    {exp.current && (
                      <span className="animate-ping absolute h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-60" />
                    )}
                  </div>

                  <SpotlightCard
                    spotlightColor={style.spotlight}
                    className="p-6 sm:p-7"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-11 w-11 rounded-2xl border flex items-center justify-center shrink-0 ${style.iconBox}`}
                        >
                          <IconBriefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                              {exp.role}
                            </h2>
                          </div>
                          <p className={`font-mono text-xs sm:text-sm mt-1 ${style.orgText}`}>
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end shrink-0">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-xs ${
                            exp.current
                              ? style.badge
                              : "bg-white/[0.04] border-white/[0.09] text-zinc-300"
                          }`}
                        >
                          {exp.current && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          )}
                          {exp.period}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                          {exp.category}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3.5">
                      {exp.details.map((line, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1 h-5 w-5 rounded-md bg-white/[0.05] border border-white/10 text-amber-300 flex items-center justify-center shrink-0">
                            <IconCheck className="w-3 h-3" />
                          </span>
                          <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.07] flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Workflow / Delivery Capabilities */}
      <motion.div variants={staggerItem} className="space-y-4 pt-2">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
          How I Deliver Systems
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {CAPABILITIES.map((cap) => (
            <SpotlightCard key={cap.step} className="p-6 space-y-3">
              <span className="font-mono text-xs text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-lg inline-block">
                STEP {cap.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {cap.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {cap.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>

      <PageFooterNav activeMenu="experience" onSelectMenu={onSelectMenu} />
    </div>
  );
}
