"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Sparkles, Type, Wand2 } from "lucide-react";
import {
  AESTHETIC_SYMBOLS,
  convertFont,
  FONT_STYLE_META,
  type FontStyle,
} from "@/lib/fonts";

const STYLES = Object.keys(FONT_STYLE_META) as FontStyle[];

export function FontConverter() {
  const [text, setText] = useState("your aesthetic bio");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const conversions = useMemo(
    () =>
      STYLES.map((style) => ({
        style,
        value: convertFont(text || " ", style),
        ...FONT_STYLE_META[style],
      })),
    [text],
  );

  async function copyValue(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1400);
    } catch {
      setCopiedKey(null);
    }
  }

  return (
    <section id="fonts" className="glass rounded-3xl p-5 sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-mint">
            <Type className="h-3.5 w-3.5" />
            Font Studio
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Aesthetic Font & Symbol Converter
          </h2>
          <p className="mt-2 max-w-xl text-sm text-mist">
            Type once, style instantly — gothic, bold, wide, and cursive bio
            fonts with one-tap copy.
          </p>
        </div>
        <Wand2 className="hidden h-8 w-8 text-coral/80 sm:block" />
      </div>

      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-mist/80">
        Your text
      </label>
      <div className="relative mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          maxLength={180}
          placeholder="Type your bio or username..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-ink-soft/70 px-4 py-3 text-base text-sand outline-none transition focus:border-mint/50 focus:ring-2 focus:ring-mint/20"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 text-xs text-mist/50">
          {text.length}/180
        </span>
      </div>

      <div className="grid gap-3">
        {conversions.map((item, index) => {
          const isCopied = copiedKey === item.style;
          return (
            <button
              key={item.style}
              type="button"
              onClick={() => copyValue(item.style, item.value)}
              className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition hover:-translate-y-0.5 hover:border-mint/35 hover:bg-white/[0.06]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-mist">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-mist/50">{item.hint}</span>
                </div>
                <p className="truncate font-display text-lg text-sand sm:text-xl">
                  {item.value}
                </p>
              </div>
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
                  isCopied
                    ? "border-mint/50 bg-mint/15 text-mint"
                    : "border-white/10 bg-white/5 text-mist group-hover:text-sand"
                }`}
              >
                {isCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-7">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-mist/80">
          <Sparkles className="h-3.5 w-3.5 text-coral" />
          Symbol stash
        </div>
        <div className="flex flex-wrap gap-2">
          {AESTHETIC_SYMBOLS.map((symbol) => {
            const key = `sym-${symbol}`;
            const isCopied = copiedKey === key;
            return (
              <button
                key={symbol}
                type="button"
                onClick={() => copyValue(key, symbol)}
                className={`rounded-xl border px-3 py-2 text-sm transition hover:-translate-y-0.5 ${
                  isCopied
                    ? "border-mint/40 bg-mint/15 text-mint"
                    : "border-white/10 bg-white/[0.04] text-sand hover:border-coral/40"
                }`}
                title="Copy symbol"
              >
                {symbol}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
