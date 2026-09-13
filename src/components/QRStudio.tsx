"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode, RefreshCw } from "lucide-react";

export function QRStudio() {
  const [url, setUrl] = useState("https://instagram.com/yourhandle");
  const [fg, setFg] = useState("#071018");
  const [bg, setBg] = useState("#3ee0c2");
  const [dataUrl, setDataUrl] = useState<string>("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      setBusy(true);
      try {
        const value = url.trim() || "https://aesthetic.hub";
        const next = await QRCode.toDataURL(value, {
          width: 420,
          margin: 2,
          color: { dark: fg, light: bg },
          errorCorrectionLevel: "H",
        });
        if (!cancelled) setDataUrl(next);
      } catch {
        if (!cancelled) setDataUrl("");
      } finally {
        if (!cancelled) setBusy(false);
      }
    }

    const timer = window.setTimeout(render, 180);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [url, fg, bg]);

  function download() {
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "aesthetic-qr.png";
    link.click();
  }

  return (
    <section id="qr" className="glass rounded-3xl p-5 sm:p-7">
      <div className="mb-6">
        <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-mint">
          <QrCode className="h-3.5 w-3.5" />
          QR Studio
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Custom QR Code Studio
        </h2>
        <p className="mt-2 max-w-xl text-sm text-mist">
          Style scannable codes for social profiles and links — pick colors,
          preview live, download PNG.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-mist/80">
              Profile or link
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-2xl border border-white/10 bg-ink-soft/70 px-4 py-3 text-sm text-sand outline-none transition focus:border-mint/50 focus:ring-2 focus:ring-mint/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-mist/80">
                Foreground
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={fg}
                  onChange={(e) => setFg(e.target.value)}
                  className="h-10 w-10 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-transparent"
                />
                <span className="font-mono text-xs text-sand/80">{fg}</span>
              </div>
            </label>
            <label className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-mist/80">
                Background
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bg}
                  onChange={(e) => setBg(e.target.value)}
                  className="h-10 w-10 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-transparent"
                />
                <span className="font-mono text-xs text-sand/80">{bg}</span>
              </div>
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { fg: "#071018", bg: "#3ee0c2", label: "Mint Ink" },
              { fg: "#1a0f0f", bg: "#ff6b6b", label: "Coral" },
              { fg: "#f4efe6", bg: "#0d1a24", label: "Night" },
              { fg: "#06261f", bg: "#f7c948", label: "Solar" },
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setFg(preset.fg);
                  setBg(preset.bg);
                }}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-mist transition hover:border-mint/40 hover:text-sand"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-ink-soft/60 p-5">
          <div className="relative flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {dataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dataUrl}
                alt="Generated QR code"
                className="h-full w-full object-contain p-3 transition duration-300"
              />
            ) : (
              <RefreshCw
                className={`h-8 w-8 text-mist ${busy ? "animate-spin" : ""}`}
              />
            )}
          </div>
          <button
            type="button"
            onClick={download}
            disabled={!dataUrl}
            className="inline-flex items-center gap-2 rounded-2xl bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mint/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            Download PNG
          </button>
        </div>
      </div>
    </section>
  );
}
