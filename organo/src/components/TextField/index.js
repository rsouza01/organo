import "./TextField.css";

const TextField = (props) => {
  const onType = (event) => {
    console.log(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        required={props.required}
        placeholder={props.placeholder}
        onChange={onType}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
