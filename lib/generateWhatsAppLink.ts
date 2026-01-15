export function formatCOP(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

export function generateWhatsAppLink({
  name,
  priceCOP,
  slug,
}: {
  name: string;
  priceCOP: number;
  slug?: string;
}) {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP ?? "+57300XXXXXXX"; // placeholder
  const phone = raw.replace(/[^0-9+]/g, "");
  const price = formatCOP(priceCOP);

  const message = `Hola, quiero el servicio: ${name}. Precio: ${price}. Mi correo es: ____ . ¿Me ayudas a configurarlo? Referencia: ${slug ?? "-"}`;

  return `https://wa.me/${phone.replace(/^\+/, "")}?text=${encodeURIComponent(message)}`;
}

export default generateWhatsAppLink;
