"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "brand" | "details", string>>;
const supportOptions = ["Social media management", "Content strategy & planning", "Photoshoots & video shoots", "Video editing & post-production", "Meta advertising", "Not sure yet"];

const field = "mt-2 w-full rounded-none border-0 border-b border-taupe bg-transparent px-0 py-3 text-base outline-none min-h-11 transition-colors focus:border-charcoal focus-visible:outline-none aria-[invalid=true]:border-red-800";

/**
 * GitHub Pages has no backend, so submissions go to an external form service.
 * Set NEXT_PUBLIC_FORM_ENDPOINT (a public endpoint URL — never a secret) to enable sending.
 * Until it is set the form validates but reports the integration as PENDING and sends nothing.
 * PENDING: chosen service, spam protection beyond the honeypot, and consent text.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
type Status = "idle" | "sending" | "success" | "error" | "pending";
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const next: Errors = {};
    if (!String(d.get("name") ?? "").trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email") ?? "").trim())) next.email = "Please enter a valid email address.";
    if (!String(d.get("brand") ?? "").trim()) next.brand = "Please tell us your brand or company name.";
    if (String(d.get("details") ?? "").trim().length < 10) next.details = "A sentence or two about your project helps us understand.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (String(d.get("website") ?? "")) return setStatus("success"); // honeypot: silently drop bots
    if (!FORM_ENDPOINT) return setStatus("pending");
    setStatus("sending");
    try {
      if (FORM_ENDPOINT.includes("script.google.com")) {
        // Google Apps Script web app (pattern reused from the YOT site): JSON as text/plain avoids CORS preflight.
        const payload = { type: "contact", ...Object.fromEntries([...d.entries()].filter(([k]) => k !== "website")) };
        const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(payload) });
        const out = await res.json();
        if (out.result !== "success") throw new Error(out.message || "Submission failed");
      } else {
        const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: d });
        if (!res.ok) throw new Error(String(res.status));
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" || status === "pending") {
    return (
      <div role="status" className="border border-taupe bg-champagne p-6 md:p-10">
        <h2 className="display-md">{status === "success" ? "Thank you." : "Almost there."}</h2>
        <p className="mt-4 text-muted">
          {status === "success"
            ? "Your message has been sent. We will be in touch."
            : "Your details look good, but the form is not connected to a delivery service yet, so nothing was sent. (Integration pending.)"}
        </p>
      </div>
    );
  }

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-2 text-sm text-red-800">{errors[k]}</p>;
  const a = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined }) as const;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-7 md:gap-10">
      <div aria-hidden="true" className="absolute -left-[9999px]"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid gap-7 sm:grid-cols-2 md:gap-10">
        <label className="block text-sm font-semibold">Name<input name="name" autoComplete="name" required className={field} {...a("name")} />{err("name")}</label>
        <label className="block text-sm font-semibold">Work email<input name="email" type="email" autoComplete="email" required className={field} {...a("email")} />{err("email")}</label>
      </div>
      <div className="grid gap-7 sm:grid-cols-2 md:gap-10">
        <label className="block text-sm font-semibold">Brand / company name<input name="brand" autoComplete="organization" required className={field} {...a("brand")} />{err("brand")}</label>
        <label className="block text-sm font-semibold">Phone (optional)<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
      </div>
      <label className="block text-sm font-semibold">What support are you looking for?
        <select name="service" defaultValue="" className={cn(field, "appearance-none")}>
          <option value="" disabled>Select one</option>
          {supportOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="block text-sm font-semibold">Tell us about your project
        <textarea name="details" rows={5} required className={cn(field, "resize-y")} {...a("details")} />{err("details")}
      </label>
      <div>
        <button type="submit" disabled={status === "sending"} className="min-h-12 rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-[#3d3a33] disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Start a conversation"}
        </button>
        {status === "error" && <p role="alert" className="mt-4 text-sm text-red-800">Something went wrong sending your message. Please try again in a moment.</p>}
      </div>
    </form>
  );
}
