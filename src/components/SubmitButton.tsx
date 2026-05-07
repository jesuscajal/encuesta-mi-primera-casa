type Props = {
  enviando: boolean;
  onClick: () => void;
};

function SubmitButton({ enviando, onClick }: Props) {
  return (
    <button type="button" className="boton-enviar" onClick={onClick} disabled={enviando}>
      {enviando ? "Enviando..." : "ENVIAR"}
    </button>
  );
}

export default SubmitButton;
