"use client";

import { useState } from "react";

export default function ContactForm({
  emailLabel,
  messageLabel,
  messagePlaceholder,
  buttonLabel,
}: {
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  buttonLabel: string;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ✅ For now, just open email client (no backend needed)
    const subject = encodeURIComponent("Innovatrix — Contact");
    const body = encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:contact@innovatrix.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="mt-8 grid gap-4 md:grid-cols-12" onSubmit={onSubmit}>
      <div className="md:col-span-5">
        <label className="mb-2 block text-xs text-white/60">{emailLabel}</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#42A5F6]/60"
          placeholder="you@company.com"
          type="email"
          required
        />
      </div>

      <div className="md:col-span-5">
        <label className="mb-2 block text-xs text-white/60">{messageLabel}</label>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#42A5F6]/60"
          placeholder={messagePlaceholder}
          required
        />
      </div>

      <div className="md:col-span-2 md:flex md:items-end">
        <button
          className="h-12 w-full rounded-xl bg-[#42A5F6] text-sm font-medium text-black transition hover:opacity-90"
          type="submit"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
