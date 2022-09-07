function InputText (props) {
    return (
        <>
        <label htmlFor={props.name} className={props.className}>
        {props.labelText}
        </label>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        />
        </>
    );
};

InputText.defaultProps = {
    type: 'text',
    required: '',

}

export default InputText;