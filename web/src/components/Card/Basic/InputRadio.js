function InputRadio (props) {
    return (
        <div className="option">
           <input
            checked={props.checked}
              onChange={props.handleInput}
              type={props.type}
              name={props.name}
              value={props.value}
              className={props.className}
              id={props.id}
              title={props.title}
            />
            
            <div className="option" title={props.title} >
              <div className={props.color1}></div>
              <div className={props.color2}></div>
              <div className={props.color3}></div>
            </div>
          </div>
        
    );
};

InputRadio.defaultProps = {
    type: 'radio',
}

export default InputRadio;