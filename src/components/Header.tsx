import { LOGO_URL, TEXTOS } from "../data/branding";

interface Props {
  telefono: string;
  codigoPromotor: string;
}

function Header({ telefono, codigoPromotor }: Props) {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <img className="header__logo" src={LOGO_URL} alt="Logo Mi Primera Casa S.A." />
      </div>
      <h1 className="header__titulo">{TEXTOS.tituloPrincipal}</h1>
      <span className="header__badge">{TEXTOS.badge}</span>
      <p className="header__subtitulo">{TEXTOS.subtitulo}</p>

      <div className="header__info-card">
        <div className="header__info-item">
          <span className="header__info-label">CELULAR</span>
          <span className="header__info-valor">{telefono || "_"}</span>
        </div>
        <div className="header__info-divisor" aria-hidden="true" />
        <div className="header__info-item">
          <span className="header__info-label">PROMOTOR</span>
          <span className="header__info-valor">{codigoPromotor || "_"}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
