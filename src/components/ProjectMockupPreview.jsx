import React from "react";
import { IconChart, IconPackage } from "./Icons";

export default function ProjectMockupPreview({ type, compact = false }) {
  if (type === "inventory") {
    const rows = [
      { sku: "SKU-104", name: "Thermal Receipt Roll", qty: 142, status: "In Stock", tone: "emerald" },
      { sku: "SKU-219", name: "Arabica Coffee Beans", qty: 18, status: "Low Stock", tone: "amber" },
      { sku: "SKU-305", name: "Packaging Cup 16oz", qty: 320, status: "In Stock", tone: "emerald" },
    ];

    return (
      <div
        className={`w-full rounded-xl bg-[#0b0d12] border border-white/[0.08] overflow-hidden ${
          compact ? "p-3.5" : "p-5 sm:p-6"
        }`}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-300">
              <IconPackage className="w-3.5 h-3.5" />
            </span>
            <span className="font-mono text-xs text-zinc-300">
              inventory_db • MySQL
            </span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
            Synced
          </span>
        </div>

        <div className="space-y-2">
          {rows.map((row) => (
            <div
              key={row.sku}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/[0.025] border border-white/[0.04] text-xs"
            >
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-zinc-500 mr-2">
                  {row.sku}
                </span>
                <span className="text-zinc-200 truncate">{row.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-zinc-300">{row.qty}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    row.tone === "emerald"
                      ? "bg-emerald-400/15 text-emerald-300"
                      : "bg-amber-400/15 text-amber-300"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Sales Dashboard Preview
  const bars = [
    { label: "Jan", height: "42%" },
    { label: "Feb", height: "58%" },
    { label: "Mar", height: "50%" },
    { label: "Apr", height: "76%" },
    { label: "May", height: "68%" },
    { label: "Jun", height: "94%" },
  ];

  return (
    <div
      className={`w-full rounded-xl bg-[#0b0d12] border border-white/[0.08] overflow-hidden ${
        compact ? "p-3.5" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center text-emerald-300">
            <IconChart className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs text-zinc-300">
            sales_performance.sql
          </span>
        </div>
        <span className="font-mono text-[11px] text-emerald-300">+24.8% YoY</span>
      </div>

      <div className={`flex items-end gap-2.5 ${compact ? "h-24" : "h-36"} px-1 pt-2`}>
        {bars.map((b, i) => (
          <div key={b.label} className="flex-1 h-full flex flex-col items-center justify-end gap-1.5">
            <div className="w-full flex-1 flex items-end">
              <div
                style={{ height: b.height }}
                className={`w-full rounded-t-md transition-all duration-500 ${
                  i === bars.length - 1
                    ? "bg-gradient-to-t from-amber-500/80 to-amber-300"
                    : "bg-gradient-to-t from-white/10 to-white/25 group-hover:to-amber-300/50"
                }`}
              />
            </div>
            <span className="font-mono text-[10px] text-zinc-500">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
