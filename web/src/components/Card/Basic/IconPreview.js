function IconPreview (props) {
    return (
        <li>
          <a className={"icon-" + props.className + " icon-border card-links"} title="Teléfono" href={props.href} target="_blank" rel="noreferrer">
            <i className={props.icon}></i>
          </a>
        </li>
    );
};

export default IconPreview;