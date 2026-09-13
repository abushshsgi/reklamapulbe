"use client";

import { useMemo, useState } from "react";
import { Instagram, Link2, Smartphone, Twitter } from "lucide-react";
import { convertFont } from "@/lib/fonts";

const THEMES = [
  {
    id: "aurora",
    label: "Aurora",
    card: "from-[#12353a] via-[#1d4e52] to-[#2a6b62]",
    accent: "#3ee0c2",
  },
  {
    id: "ember",
    label: "Ember",
    card: "from-[#3a1820] via-[#5a2430] to-[#7a3a2e]",
    accent: "#ff6b6b",
  },
  {
    id: "lunar",
    label: "Lunar",
    card: "from-[#141c2c] via-[#1d2a40] to-[#243652]",
    accent: "#9ec5ff",
  },
] as const;

export function MockupPreviewer() {
  const [name, setName] = useState("nova.muse");
  const [bio, setBio] = useState("creating soft chaos daily");
  const [handle, setHandle] = useState("@nova.muse");
  const [themeId, setThemeId] = useState<(typeof THEMES)[number]["id"]>(
    "aurora",
  );

  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];
  const styledName = useMemo(() => convertFont(name, "cursive"), [name]);
  const styledBio = useMemo(() => convertFont(bio, "wide"), [bio]);

  return (
    <section id="mockup" className="glass rounded-3xl p-5 sm:p-7">
      <div className="mb-6">
        <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-mint">
          <Smartphone className="h-3.5 w-3.5" />
          Live Mockup
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Social Media Mockup Previewer
        </h2>
        <p className="mt-2 max-w-xl text-sm text-mist">
          See how your glass card and bio aesthetic land on a mobile profile
          frame — update text and watch it shift live.
        </p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <Field
            label="Display name"
            value={name}
            onChange={setName}
            maxLength={28}
          />
          <Field
            label="Handle"
            value={handle}
            onChange={setHandle}
            maxLength={24}
          />
          <Field
            label="Bio line"
            value={bio}
            onChange={setBio}
            maxLength={60}
          />

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-mist/80">
              Card theme
            </p>
            <div className="flex flex-wrap gap-2">
              {THEMES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setThemeId(item.id)}
                  className={`rounded-xl border px-3 py-2 text-xs transition ${
                    themeId === item.id
                      ? "border-mint/50 bg-mint/15 text-mint"
                      : "border-white/10 bg-white/[0.04] text-mist hover:text-sand"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[320px]">
          <div className="relative mx-auto overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#05080d] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/70" />
            <div className="overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-[#0c141c] to-[#081018] pt-8">
              <div className="px-4 pb-5">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-lg font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}, transparent)`,
                    }}
                  >
                    {name.slice(0, 1).toUpperCase() || "A"}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold">
                      {styledName}
                    </p>
                    <p className="truncate text-xs text-mist">{handle}</p>
                  </div>
                </div>

                <div
                  className={`mb-4 rounded-2xl border border-white/10 bg-gradient-to-br ${theme.card} p-4 backdrop-blur-xl transition duration-500`}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Glass card
                  </p>
                  <p className="font-display text-sm leading-relaxed text-white">
                    {styledBio}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-white/75">
                    <Instagram className="h-3.5 w-3.5" />
                    <Twitter className="h-3.5 w-3.5" />
                    <Link2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="aspect-square rounded-xl border border-white/8 bg-white/[0.04]"
                      style={{
                        backgroundImage: `linear-gradient(145deg, ${theme.accent}${n % 2 === 0 ? "33" : "18"}, transparent)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-mist/80">
        {label}
      </span>
      <input
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-ink-soft/70 px-4 py-3 text-sm text-sand outline-none transition focus:border-mint/50 focus:ring-2 focus:ring-mint/20"
      />
    </label>
  );
}
