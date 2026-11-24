import React from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../data/portfolioData";
import { staggerItem } from "../utils/motion";
import { IconArrowLeft, IconArrowRight } from "./Icons";

export default function PageFooterNav({ activeMenu, onSelectMenu }) {
  const currentIdx = NAV_ITEMS.findIndex((item) => item.id === activeMenu);
  const prevItem = currentIdx > 0 ? NAV_ITEMS[currentIdx - 1] : null;
  const nextItem =
    currentIdx < NAV_ITEMS.length - 1 ? NAV_ITEMS[currentIdx + 1] : null;

  return (
    <motion.footer
      variants={staggerItem}
      className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
    >
      <div className="flex-1">
        {prevItem ? (
          <button
            type="button"
            onClick={() => onSelectMenu(prevItem.id)}
            className="group w-full sm:w-auto inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/15 transition-all text-left"
          >
            <IconArrowLeft className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-amber-300" />
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Previous
              </span>
              <span className="block text-sm font-medium text-zinc-200 group-hover:text-white">
                {prevItem.label}
              </span>
            </div>
          </button>
        ) : (
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">1</kbd>–
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">5</kbd> to switch menus
          </span>
        )}
      </div>

      <div className="hidden lg:flex items-center gap-1.5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectMenu(item.id)}
            aria-label={`Open ${item.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              item.id === activeMenu
                ? "w-7 bg-amber-400"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        {nextItem ? (
          <button
            type="button"
            onClick={() => onSelectMenu(nextItem.id)}
            className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-end gap-3 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/15 border border-white/[0.08] hover:border-amber-400/35 transition-all text-right"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Next Menu
              </span>
              <span className="block text-sm font-medium text-zinc-100 group-hover:text-amber-200">
                {nextItem.label}
              </span>
            </div>
            <IconArrowRight className="w-4 h-4 text-amber-300 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onSelectMenu("home")}
            className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-end gap-3 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/15 border border-white/[0.08] hover:border-amber-400/35 transition-all text-right"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Back to Top
              </span>
              <span className="block text-sm font-medium text-zinc-100 group-hover:text-amber-200">
                Home
              </span>
            </div>
            <IconArrowRight className="w-4 h-4 text-amber-300 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </motion.footer>
  );
}
