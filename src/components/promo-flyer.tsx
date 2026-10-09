import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/** Foto promocional de limpieza profunda (inicio y /limpieza-profunda). */
export const PROMO_FLYER_SRC = "/images/limpieza-profunda-a-domicilio-casas-y-deptos-mudanza-santiago.jpg";

interface PromoFlyerProps {
  src: string;
  alt: string;
  /** Si se indica, la foto enlaza a esa ruta y aparece el botón "Ver qué incluye". */
  href?: string;
  /** Si se indica, aparece el botón "Cotizar limpieza profunda" por WhatsApp. */
  whatsappUrl?: string;
  className?: string;
}

/** Foto promocional con marco de vidrio, para el Hero de las landings. */
export function PromoFlyer({ src, alt, href, whatsappUrl, className = "" }: PromoFlyerProps) {
  const frameClass =
    "block rounded-[28px] border border-white/25 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-md";
  const image = (
    <img
      src={src}
      alt={alt}
      width={1024}
      height={1024}
      fetchPriority="high"
      className="block h-auto w-full rounded-[22px]"
    />
  );

  return (
    <figure className={`mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none ${className}`}>
      {href ? (
        <Link href={href} className={`${frameClass} transition-transform hover:scale-[1.01]`}>
          {image}
        </Link>
      ) : (
        <div className={frameClass}>{image}</div>
      )}
      {(href || whatsappUrl) && (
        <figcaption className="mt-4 flex flex-wrap justify-center gap-3">
          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              Ver qué incluye
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <Phone className="w-4 h-4" />
              Cotizar limpieza profunda
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
