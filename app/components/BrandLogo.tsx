import Image from "next/image";

type Variant = "isotipo" | "logotipo" | "lockup";
type Tone = "auto" | "dark" | "black" | "white" | "normal";

const files: Record<Variant, Record<Exclude<Tone, "auto">, string>> = {
  isotipo: {
    normal: "/Images/isotipo.png",
    black: "/Images/isotipoBlack.png",
    white: "/Images/isotipoWhite.png",
    dark: "/Images/isotipoDark.png",
  },
  logotipo: {
    normal: "/Images/logotipo.png",
    black: "/Images/logotipoBlack.png",
    white: "/Images/logotipoWhite.png",
    dark: "/Images/logotipoDark.png",
  },
  lockup: {
    normal: "/Images/principal.png",
    black: "/Images/principalBlack.png",
    white: "/Images/principalWhite.png",
    dark: "/Images/PrincipalDark.png",
  },
};

export default function BrandLogo({
  variant = "lockup",
  size = 40,
  tone = "auto",
  className = "",
  priority = false,
}: {
  variant?: Variant;
  size?: number;
  tone?: Tone;
  className?: string;
  priority?: boolean;
}) {
  const width = variant === "isotipo" ? size : Math.round(size * 3.2);
  const height = size;

  if (tone !== "auto") {
    return (
      <Image
        src={files[variant][tone]}
        alt="Innovatrix"
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <span className={`inline-flex ${className}`}>
      {/* light */}
      <span className="block dark:hidden">
        <Image
          src={files[variant].black}
          alt="Innovatrix"
          width={width}
          height={height}
          priority={priority}
        />
      </span>

      {/* dark */}
      <span className="hidden dark:block">
        <Image
          src={files[variant].dark}
          alt="Innovatrix"
          width={width}
          height={height}
          priority={priority}
        />
      </span>
    </span>
  );
}
