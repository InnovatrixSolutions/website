import React from "react";

export default function Privacidad({ params }: { params: { locale: string } }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Política de privacidad</h1>

      <div className="mt-4 text-sm text-white/70">
        <p>
          Respetamos tu privacidad. No compartimos datos con terceros sin consentimiento. Usamos
          la información mínima necesaria para prestar el servicio y comunicarnos por WhatsApp.
        </p>
        <p className="mt-3">
          Si solicitamos acceso temporal para soporte remoto, te informaremos qué información se
          requiere y cómo será usada.
        </p>
      </div>
    </div>
  );
}
