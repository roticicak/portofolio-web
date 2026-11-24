import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE, PROJECTS } from "../../data/portfolioData";
import { staggerItem } from "../../utils/motion";
import SpotlightCard from "../SpotlightCard";
import PageFooterNav from "../PageFooterNav";
import {
  IconArrowUpRight,
  IconCheck,
  IconCopy,
  IconExternal,
  IconGithub,
  IconMail,
  IconSend,
} from "../Icons";

export default function ContactView({ onSelectMenu }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for non-HTTPS clipboard contexts
      const temp = document.createElement("textarea");
      temp.value = PROFILE.email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Steven,\n\n${formState.message.trim()}\n\nBest regards,\n${formState.name.trim() || "Visitor"}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div variants={staggerItem} className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
          <span>05</span>
          <span className="h-px w-6 bg-amber-400/40" />
          <span>Contact</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
          Let&apos;s build something{" "}
          <span className="text-gradient-amber">practical together</span>.
        </h1>
        <p className="text-sm sm:text-base text-zinc-400">
          Have a web application, POS system, or data dashboard in mind? Reach out directly via email or send a quick message below.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Direct Contact Channels */}
        <motion.div variants={staggerItem} className="lg:col-span-5 space-y-5">
          <SpotlightCard className="p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <IconMail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Direct Email
                </p>
                <p className="font-display font-semibold text-white">
                  Fastest way to reach me
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] font-mono text-xs sm:text-sm text-amber-200 break-all">
              {PROFILE.email}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs sm:text-sm font-medium text-zinc-100 transition-all"
              >
                {copied ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="w-4 h-4 text-zinc-300" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Open Mail</span>
                <IconArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </SpotlightCard>

          {/* Online Links */}
          <SpotlightCard className="p-5 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Links & Live Work
            </p>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] transition-all group"
            >
              <div className="flex items-center gap-3">
                <IconGithub className="w-4 h-4 text-zinc-300" />
                <div>
                  <span className="block text-sm font-medium text-zinc-100">
                    GitHub
                  </span>
                  <span className="block font-mono text-[11px] text-zinc-500">
                    github.com/roticicak
                  </span>
                </div>
              </div>
              <IconExternal className="w-4 h-4 text-zinc-500 group-hover:text-amber-300 transition-colors" />
            </a>

            <a
              href={PROJECTS[0].demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] transition-all group"
            >
              <div className="flex items-center gap-3">
                <IconExternal className="w-4 h-4 text-amber-300" />
                <div>
                  <span className="block text-sm font-medium text-zinc-100">
                    Angkringan Jo POS Live
                  </span>
                  <span className="block font-mono text-[11px] text-zinc-500">
                    pos-angkringan.vercel.app
                  </span>
                </div>
              </div>
              <IconArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-300 transition-colors" />
            </a>
          </SpotlightCard>
        </motion.div>

        {/* Quick Message Composer */}
        <motion.div variants={staggerItem} className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  Send a Quick Note
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Draft your message here and launch it straight into your email client.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="text-xs font-medium text-zinc-300">
                    Your Name
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder="Alex Pratama"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400/60 focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-colors"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-xs font-medium text-zinc-300">
                    Subject
                  </span>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, subject: e.target.value }))
                    }
                    placeholder="Web App / Dashboard Project"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400/60 focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-colors"
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="text-xs font-medium text-zinc-300">
                  Message
                </span>
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Tell me about your project, timeline, or collaboration idea..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400/60 focus:outline-none text-sm text-white placeholder:text-zinc-600 resize-none transition-colors"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-zinc-950 font-semibold text-sm shadow-glow hover:brightness-105 active:scale-[0.98] transition-all"
                >
                  <IconSend className="w-4 h-4" />
                  <span>Compose Email</span>
                </button>

                <AnimatePresence>
                  {sentNotice && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300"
                    >
                      <IconCheck className="w-4 h-4" />
                      Email draft opened!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>

      <PageFooterNav activeMenu="contact" onSelectMenu={onSelectMenu} />
    </div>
  );
}
