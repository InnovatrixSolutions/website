import React from "react";

export default function Reembolsos({ params }: { params: { locale: string } }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Política de reembolsos</h1>

      <div className="mt-4 text-sm text-white/70">
        <p>
          Debido a la naturaleza de los servicios (configuración y asistencia), los reembolsos se
          manejan caso por caso. Si no quedas satisfecho, contáctanos por WhatsApp y evaluaremos
          una solución o reembolso parcial según el trabajo realizado.
        </p>
      </div>
    </div>
  );
}
