import { useCallback, useState } from "react";
import { TEXTOS } from "../data/branding";
import { REDES_SOCIALES } from "../data/socialLinks";

type Props = {
  telefono: string;
};

const iconoRegalo = (
  <svg
    className="sorpresa-card__tocar-icono"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
    <path d="M22 7H2v5h20V7Z" />
    <path d="M12 22V7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
  </svg>
);

function enlaceContactoAsesor(telefono: string): { href: string; externo: boolean } {
  const digits = telefono.replace(/\D/g, "");
  if (digits.length >= 8) {
    const texto = encodeURIComponent(
      "Hola, quiero información sobre el descuento y los productos disponibles."
    );
    return {
      href: `https://wa.me/${digits}?text=${texto}`,
      externo: true,
    };
  }
  const instagram = REDES_SOCIALES.find((r) => r.red === "Instagram");
  return {
    href: instagram?.url ?? "#",
    externo: true,
  };
}

function SorpresaSection({ telefono }: Props) {
  const [ofertaVisible, setOfertaVisible] = useState(false);

  const revelar = useCallback(() => {
    setOfertaVisible(true);
  }, []);

  const contacto = enlaceContactoAsesor(telefono);

  return (
    <section className="sorpresa-card" aria-labelledby="sorpresa-heading">
      <h2 id="sorpresa-heading" className="sorpresa-card__titulo">
        {TEXTOS.sorpresaTitulo}
      </h2>

      {!ofertaVisible ? (
        <button
          type="button"
          className="sorpresa-card__tocar"
          onClick={revelar}
          aria-expanded={false}
          aria-controls="sorpresa-oferta-panel"
        >
          <span className="sorpresa-card__tocar-brillo" aria-hidden="true" />
          {iconoRegalo}
          <span className="sorpresa-card__tocar-texto">{TEXTOS.sorpresaCta}</span>
        </button>
      ) : null}

      {ofertaVisible ? (
        <div
          id="sorpresa-oferta-panel"
          className="sorpresa-card__oferta"
          role="region"
          aria-labelledby="sorpresa-oferta-titulo"
        >
          <div className="sorpresa-card__oferta-visual" aria-hidden="true">
            <span className="sorpresa-card__rayo sorpresa-card__rayo--1" />
            <span className="sorpresa-card__rayo sorpresa-card__rayo--2" />
            <span className="sorpresa-card__rayo sorpresa-card__rayo--3" />
            <div className="sorpresa-card__pct-hero">
              <span className="sorpresa-card__pct-num">40</span>
              <span className="sorpresa-card__pct-sign">%</span>
            </div>
          </div>

          <p id="sorpresa-oferta-titulo" className="sorpresa-card__oferta-titulo">
            {TEXTOS.sorpresaDescuentoEncabezado}
          </p>
          <p className="sorpresa-card__oferta-texto">
            {TEXTOS.sorpresaDescuentoTexto}
          </p>
          <a
            className="sorpresa-card__btn-asesor"
            href={contacto.href}
            target={contacto.externo ? "_blank" : undefined}
            rel={contacto.externo ? "noopener noreferrer" : undefined}
          >
            {TEXTOS.sorpresaAsesorCta}
          </a>
        </div>
      ) : null}
    </section>
  );
}

export default SorpresaSection;
