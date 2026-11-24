import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../../data/portfolioData";
import { staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import PageFooterNav from "../PageFooterNav";
import {
  IconArrowRight,
  IconCode,
  IconDatabase,
  IconLayers,
} from "../Icons";

const PILLAR_ICONS = {
  web: IconCode,
  data: IconDatabase,
  ux: IconLayers,
};

export default function AboutView({ onSelectMenu }) {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <motion.div variants={staggerItem} className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
          <span>02</span>
          <span className="h-px w-6 bg-amber-400/40" />
          <span>About Me</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
          Bridging practical web engineering with{" "}
          <span className="text-gradient-amber">data clarity</span>.
        </h1>
      </motion.div>

      {/* Main Story + Compact Profile Card */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <motion.div variants={staggerItem} className="lg:col-span-8">
          <SpotlightCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-xl font-semibold text-white">
              Who I Am
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-[17px]">
              {PROFILE.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["POS Systems", "Inventory", "Analytics Dashboards", "UI/UX"].map(
                  (focus) => (
                    <span
                      key={focus}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                    >
                      {focus}
                    </span>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={() => onSelectMenu("projects")}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
              >
                <span>See my work</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div variants={staggerItem} className="lg:col-span-4">
          <SpotlightCard className="p-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover object-[50%_18%] scale-[1.18]"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {PROFILE.name}
                </h3>
                <p className="font-mono text-xs text-amber-300">{PROFILE.role}</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/[0.08] text-xs">
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Discipline</span>
                <span className="text-zinc-200 font-medium">Information Systems</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Primary Focus</span>
                <span className="text-zinc-200 font-medium">Web & Data Systems</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Availability</span>
                <span className="text-emerald-300 font-mono">Open to Collaborate</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectMenu("contact")}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-amber-400 hover:text-zinc-950 border border-white/10 hover:border-amber-300 text-sm font-medium text-zinc-100 transition-all duration-200"
            >
              Get in Touch
            </button>
          </SpotlightCard>
        </motion.div>
      </div>

      {/* 3 Core Pillars */}
      <motion.div variants={staggerItem} className="space-y-4">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
          Core Disciplines
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PROFILE.pillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id] || IconCode;
            return (
              <SpotlightCard key={pillar.id} className="p-6 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-amber-200/80 pt-2 border-t border-white/[0.06]">
                  {pillar.badge}
                </span>
              </SpotlightCard>
            );
          })}
        </div>
      </motion.div>

      {/* Tech Stack Matrix */}
      <motion.div variants={staggerItem} className="space-y-4">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
          Tools & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PROFILE.techGroups.map((group) => (
            <SpotlightCard key={group.category} className="p-5 space-y-3">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>

      <PageFooterNav activeMenu="about" onSelectMenu={onSelectMenu} />
    </div>
  );
}
