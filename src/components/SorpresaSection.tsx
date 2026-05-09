import { LOGO_URL, TEXTOS } from "../data/branding";

function irASucursales() {
  document
    .getElementById("seccion-sucursales")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SorpresaSection() {
  return (
    <section className="sorpresa-card" aria-labelledby="sorpresa-heading">
      <h2 id="sorpresa-heading" className="sorpresa-card__titulo">
        {TEXTOS.sorpresaTitulo}
      </h2>
      <img
        src={LOGO_URL}
        alt=""
        className="sorpresa-card__logo"
        width={160}
        height={160}
        decoding="async"
      />
      <button
        type="button"
        className="sorpresa-card__cta"
        onClick={irASucursales}
      >
        {TEXTOS.sorpresaCta}
      </button>
    </section>
  );
}

export default SorpresaSection;
