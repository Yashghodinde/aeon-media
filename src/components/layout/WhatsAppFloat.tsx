"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contacts, whatsappLink } from "@/lib/site";

/** Floating WhatsApp button; opens a small chooser for the two direct contacts. */
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open && (
        <div role="dialog" aria-label="Chat on WhatsApp" className="w-64 rounded-2xl border border-taupe/40 bg-ivory p-3 text-charcoal shadow-[0_10px_30px_rgba(41,39,34,0.18)]">
          <p className="px-2 pb-2 pt-1 text-sm font-semibold">Chat with us on WhatsApp</p>
          {contacts.map((c) => (
            <a
              key={c.wa}
              href={whatsappLink(c.wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-between rounded-xl px-2 py-2 hover:bg-champagne"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-xs text-charcoal/60">{c.display}</span>
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chooser" : "Chat on WhatsApp"}
        className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <MessageCircle aria-hidden="true" className="size-7" />}
      </button>
    </div>
  );
}
