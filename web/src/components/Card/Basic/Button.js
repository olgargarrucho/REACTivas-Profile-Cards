function Button (props) {
    return (
        <div className={props.classContainer}>
            <button className={props.className} name={props.name} href={props.href} target={props.target} onClick={props.onClick}>
            <i className={props.icon}></i>
                 {props.text}
            </button>
        </div>

    );
};

export default Button;