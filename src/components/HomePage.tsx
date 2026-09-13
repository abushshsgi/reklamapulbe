"use client";

import { useState } from "react";
import {
  Menu,
  QrCode,
  Smartphone,
  Sparkles,
  Type,
  X,
  Zap,
} from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import { FontConverter } from "@/components/FontConverter";
import { MockupPreviewer } from "@/components/MockupPreviewer";
import { QRStudio } from "@/components/QRStudio";

const NAV = [
  { href: "#fonts", label: "Fonts", icon: Type },
  { href: "#qr", label: "QR", icon: QrCode },
  { href: "#mockup", label: "Mockup", icon: Smartphone },
];

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-mint/20 blur-[100px] animate-float" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-coral/20 blur-[110px] animate-float [animation-delay:1.5s]" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px] animate-pulse-soft" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="group flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint/15 text-mint transition group-hover:scale-105">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
              Aesthetic<span className="text-mint">Hub</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-sand"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <a
              href="#tools"
              className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-coral px-4 py-2 text-sm font-semibold text-ink transition hover:bg-coral/90"
            >
              <Zap className="h-4 w-4" />
              Create
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sand md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-4 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-sand"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <section className="relative mb-8 animate-rise overflow-hidden rounded-[2rem] border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(62,224,194,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(255,107,107,0.18),_transparent_50%),linear-gradient(160deg,#071018_0%,#0d1a24_55%,#12202c_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.04%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

          <div className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
            <p className="mb-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-mint">
              Interactive Bio & Aesthetic Generator
            </p>
            <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">AestheticHub</span>
              <span className="mt-2 block text-sand">
                Instant bio fonts, QR styles, and glass card previews.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-mist sm:text-lg">
              One sleek workspace for social creators — convert text, generate
              branded codes, and preview your vibe before you post.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-2xl bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02] hover:bg-mint/90"
              >
                <Zap className="h-4 w-4" />
                Start generating
              </a>
              <a
                href="#mockup"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-sand transition hover:border-mint/40 hover:bg-white/10"
              >
                Preview mockup
              </a>
            </div>
          </div>
        </section>

        <div className="mb-8 animate-rise [animation-delay:80ms]">
          <AdSlot id="ad-leaderboard-top" size="728x90" label="Top Leaderboard" />
        </div>

        <div className="mb-6 flex justify-center md:hidden">
          <AdSlot id="ad-mobile-banner" size="320x50" label="Mobile Banner" />
        </div>

        <div
          id="tools"
          className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start"
        >
          <div className="space-y-6">
            <div className="animate-rise [animation-delay:120ms]">
              <FontConverter />
            </div>

            <div className="flex justify-center xl:hidden">
              <AdSlot
                id="ad-native-mid"
                size="300x250"
                label="Native Mid Placement"
              />
            </div>

            <div className="animate-rise [animation-delay:160ms]">
              <QRStudio />
            </div>

            <div className="animate-rise [animation-delay:200ms]">
              <MockupPreviewer />
            </div>
          </div>

          <aside className="hidden space-y-4 xl:sticky xl:top-24 xl:block">
            <AdSlot id="ad-sidebar-primary" size="300x250" label="Sidebar Ad" />
            <div className="glass rounded-2xl p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-mist/70">
                Creator tip
              </p>
              <p className="text-sm leading-relaxed text-sand/90">
                Pair wide fonts with mint QR codes for a cohesive link-in-bio
                look that feels intentional, not random.
              </p>
            </div>
            <AdSlot
              id="ad-sidebar-secondary"
              size="300x250"
              label="Sidebar Secondary"
            />
          </aside>
        </div>

        <div className="mt-8 animate-rise [animation-delay:240ms]">
          <AdSlot
            id="ad-leaderboard-bottom"
            size="728x90"
            label="Bottom Leaderboard"
          />
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <p className="font-display text-sm font-medium">
            AestheticHub — bio tools for the feed era
          </p>
          <p className="text-xs text-mist">
            Ad slots monetize via Kadam Direct Link (728×90, 300×250, 320×50).
          </p>
        </div>
      </footer>
    </div>
  );
}
