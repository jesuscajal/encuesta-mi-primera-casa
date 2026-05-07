type Props = {
  icono: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  name: string;
  autoComplete?: string;
};

function TextInput({ icono, placeholder, value, onChange, name, autoComplete = "off" }: Props) {
  return (
    <label className="text-input">
      <span className="text-input__icono-wrap" aria-hidden="true">
        <span className="text-input__icono">{icono}</span>
      </span>
      <input
        type="text"
        name={name}
        className="text-input__field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
      />
    </label>
  );
}

export default TextInput;
