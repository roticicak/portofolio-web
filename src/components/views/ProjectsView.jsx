import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../../data/portfolioData";
import { EASE_OUT_EXPO, SPRING_NAV, staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import PageFooterNav from "../PageFooterNav";
import ProjectMockupPreview from "../ProjectMockupPreview";
import {
  IconArrowRight,
  IconExternal,
  IconGithub,
} from "../Icons";

const FILTERS = ["All", "Web App", "Data & Analytics"];

export default function ProjectsView({ onSelectMenu, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-9">
      {/* Header + Filter Controls */}
      <motion.div
        variants={staggerItem}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
            <span>03</span>
            <span className="h-px w-6 bg-amber-400/40" />
            <span>Selected Projects</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Systems built for{" "}
            <span className="text-gradient-amber">real operations</span>.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            Click any project to smoothly open its full overview, tech stack, and interactive previews.
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
                className={`relative px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isSelected ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="projectFilterPill"
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

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured && activeFilter === "All";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.36, ease: EASE_OUT_EXPO }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
              <SpotlightCard
                onClick={() => onSelectProject(project)}
                className="h-full cursor-pointer p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div
                  className={
                    isFeatured
                      ? "grid lg:grid-cols-12 gap-6 items-center h-full"
                      : "flex flex-col justify-between h-full gap-5"
                  }
                >
                  {/* Visual Preview */}
                  <div className={isFeatured ? "lg:col-span-6 order-2 lg:order-2" : ""}>
                    {project.screenshots.length > 0 ? (
                      <div className="grid grid-cols-12 gap-2.5">
                        <div className="col-span-8 rounded-xl overflow-hidden border border-white/10 bg-zinc-950 aspect-[16/10]">
                          <img
                            src={project.screenshots[0].src}
                            alt={project.screenshots[0].title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="col-span-4 flex flex-col gap-2.5">
                          <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
                            <img
                              src={project.screenshots[1].src}
                              alt={project.screenshots[1].title}
                              className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
                            <img
                              src={project.screenshots[2].src}
                              alt={project.screenshots[2].title}
                              className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ProjectMockupPreview type={project.previewType} compact />
                    )}
                  </div>

                  {/* Text & Metadata */}
                  <div
                    className={`flex flex-col justify-between gap-4 ${
                      isFeatured ? "lg:col-span-6 order-1 lg:order-1" : "flex-1"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.09] text-amber-300">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-zinc-500">
                          {project.year}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                          {project.fullTitle}
                        </h2>
                      </div>

                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.07]">
                      <div className="flex items-center gap-2">
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs transition-colors"
                          >
                            <span>Live Demo</span>
                            <IconExternal className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-zinc-500">
                            Local / Internal
                          </span>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-zinc-200 text-xs font-medium transition-colors"
                          >
                            <IconGithub className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <PageFooterNav activeMenu="projects" onSelectMenu={onSelectMenu} />
    </div>
  );
}
