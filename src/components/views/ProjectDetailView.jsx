import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../../data/portfolioData";
import { EASE_OUT_EXPO, staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import ProjectMockupPreview from "../ProjectMockupPreview";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconExternal,
  IconGithub,
  IconMaximize,
  IconX,
} from "../Icons";

export default function ProjectDetailView({
  project,
  onBack,
  onSelectProject,
}) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];
  const screenshots = project.screenshots || [];

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopImmediatePropagation();
        setLightboxIdx(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIdx((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIdx(
          (prev) => (prev - 1 + screenshots.length) % screenshots.length
        );
      }
    };
    window.addEventListener("keydown", handleKey, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKey, { capture: true });
  }, [lightboxIdx, screenshots.length]);

  return (
    <div className="space-y-8">
      {/* Top Back Bar */}
      <motion.div
        variants={staggerItem}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-sm font-medium text-zinc-200 transition-all"
        >
          <IconArrowLeft className="w-4 h-4 text-amber-300 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </button>

        <span className="font-mono text-xs text-zinc-500">
          Case Study • {project.category} ({project.year})
        </span>
      </motion.div>

      {/* Hero Case Study Card */}
      <motion.div variants={staggerItem}>
        <SpotlightCard className="p-6 sm:p-9 space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 font-mono text-xs text-amber-300">
              {project.subtitle}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.fullTitle}
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
              {project.desc}
            </p>
            {project.detail && project.detail !== project.desc && (
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
                {project.detail}
              </p>
            )}
          </div>

          {/* Action Buttons & Tech Stack */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-4 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-zinc-950 font-semibold text-sm shadow-glow hover:brightness-105 transition-all"
                >
                  <span>Open Live Demo</span>
                  <IconExternal className="w-4 h-4" />
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-zinc-400">
                  Private / Local Deployment
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.11] border border-white/10 text-zinc-100 text-sm font-medium transition-all"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.09] text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>

      {/* Screenshots or Interactive Preview */}
      <motion.div variants={staggerItem} className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
            {screenshots.length > 0 ? "Interface Gallery" : "System Preview"}
          </h2>
          {screenshots.length > 0 && (
            <span className="font-mono text-xs text-zinc-500">
              Click any screenshot to inspect full screen
            </span>
          )}
        </div>

        {screenshots.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-5">
            {screenshots.map((shot, idx) => (
              <SpotlightCard
                key={shot.title}
                onClick={() => setLightboxIdx(idx)}
                className="cursor-pointer p-3 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 h-10 w-10 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white">
                      <IconMaximize className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="px-1 space-y-1">
                  <h3 className="font-display text-sm font-semibold text-white">
                    {shot.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {shot.caption}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        ) : (
          <SpotlightCard className="p-5 sm:p-7">
            <ProjectMockupPreview type={project.previewType} />
          </SpotlightCard>
        )}
      </motion.div>

      {/* Key Features & Architecture Highlights */}
      <motion.div variants={staggerItem}>
        <SpotlightCard className="p-6 sm:p-7 space-y-4">
          <h2 className="font-display text-xl font-semibold text-white">
            Key Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06]"
              >
                <span className="mt-0.5 h-5 w-5 rounded-md bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0">
                  <IconCheck className="w-3 h-3" />
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </motion.div>

      {/* Next Project Switcher */}
      <motion.div variants={staggerItem}>
        <button
          type="button"
          onClick={() => onSelectProject(nextProject)}
          className="group w-full p-5 sm:p-6 rounded-2xl glass-panel hover:border-amber-400/35 flex items-center justify-between gap-4 text-left transition-all"
        >
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              Next Project
            </span>
            <span className="block font-display text-lg sm:text-xl font-semibold text-white group-hover:text-amber-200 transition-colors">
              {nextProject.fullTitle}
            </span>
          </div>
          <span className="h-11 w-11 rounded-xl bg-white/[0.05] group-hover:bg-amber-400 text-zinc-200 group-hover:text-zinc-950 flex items-center justify-center transition-all shrink-0">
            <IconArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </button>
      </motion.div>

      {/* Fullscreen Animated Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && screenshots[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full space-y-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {screenshots[lightboxIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {screenshots[lightboxIdx].caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(null)}
                  aria-label="Close lightbox"
                  className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                >
                  <IconX className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950">
                <img
                  src={screenshots[lightboxIdx].src}
                  alt={screenshots[lightboxIdx].title}
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />

                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIdx(
                          (prev) =>
                            (prev - 1 + screenshots.length) % screenshots.length
                        )
                      }
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/70 hover:bg-amber-400 text-white hover:text-zinc-950 border border-white/15 flex items-center justify-center transition-all"
                    >
                      <IconChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIdx((prev) => (prev + 1) % screenshots.length)
                      }
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/70 hover:bg-amber-400 text-white hover:text-zinc-950 border border-white/15 flex items-center justify-center transition-all"
                    >
                      <IconChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center gap-2">
                {screenshots.map((shot, i) => (
                  <button
                    key={shot.title}
                    type="button"
                    onClick={() => setLightboxIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === lightboxIdx
                        ? "w-8 bg-amber-400"
                        : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
