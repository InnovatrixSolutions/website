import React from "react";

export default function Terminos({ params }: { params: { locale: string } }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Términos y condiciones</h1>

      <div className="mt-4 text-sm text-white/70">
        <p>
          Ofrecemos servicios de asistencia, configuración y capacitación para herramientas
          digitales. No vendemos cuentas ni compartimos credenciales.
        </p>

        <h3 className="mt-4 font-semibold">Responsabilidad</h3>
        <p>
          El cliente es responsable de la información proporcionada y confirma que la cuenta será
          suya o estará bajo su control. Si se requiere acceso temporal para soporte, el cliente
          autoriza y coordina ese acceso.
        </p>
      </div>
    </div>
  );
}
