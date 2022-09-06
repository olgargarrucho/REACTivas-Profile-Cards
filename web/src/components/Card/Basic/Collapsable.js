import knife from '../../../images/knife.png'

function Collapsable(props) {
  const handleCollapsed = (ev) => {
    const targetCollapsed = ev.currentTarget.id;
    props.handleCollapsed(targetCollapsed);
    
  };
  return (
    <legend
      id={props.name}
      className={props.className}
      onClick={handleCollapsed}
    >
      <i className={props.icon}></i>
      <span className={props.classSpan}>{props.text}</span>
      <img src={knife} className={"skull " + props.rotate[props.index]} alt="" />
    </legend>
  );
}
export default Collapsable;
