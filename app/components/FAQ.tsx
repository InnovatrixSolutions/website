import React from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 space-y-4">
      {items.map((it, idx) => (
        <div key={idx} className="rounded-xl border border-white/6 p-4">
          <div className="font-semibold">{it.q}</div>
          <div className="mt-2 text-sm text-white/70">{it.a}</div>
        </div>
      ))}
    </div>
  );
}
