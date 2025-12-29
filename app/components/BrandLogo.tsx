import Image from "next/image";

type Variant = "isotipo" | "logotipo" | "lockup";
type Tone = "normal" | "black" | "white" | "dark";

const fileMap: Record<Variant, Record<Tone, string>> = {
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
  className = "",
  priority = false,
}: {
  variant?: Variant;
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const lightSrc = fileMap[variant].black; // white background
  const darkSrc = fileMap[variant].white; // dark background

  const width =
    variant === "isotipo"
      ? size
      : variant === "lockup"
      ? Math.round(size * 4.2)
      : Math.round(size * 3.2);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="block dark:hidden">
        <Image
          src={lightSrc}
          alt="Innovatrix"
          width={width}
          height={size}
          priority={priority}
        />
      </span>

      <span className="hidden dark:block">
        <Image
          src={darkSrc}
          alt="Innovatrix"
          width={width}
          height={size}
          priority={priority}
        />
      </span>
    </span>
  );
}
