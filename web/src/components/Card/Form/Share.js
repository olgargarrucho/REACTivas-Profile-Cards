import Button from '../Basic/Button';
import Collapsable from '../Basic/Collapsable';
import '../../../styles/layout/share.scss';

function Share(props) {
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    props.handleCreateCard();
  };
  return (
    <fieldset className="share-section collapsablemenu">
      <Collapsable
        name="share"
        className="legend-share"
        icon="icon fa-solid fa-share-nodes fa-xl"
        classSpan="fill"
        text="Comparte"
        handleCollapsed={props.handleCollapsed}
        rotate={props.rotate}
        setRotate={props.setRotate}
        index={2}
      />

      <div
        className={`container-collapsible section-to-hide ${props.collapsed[2]}`}
      >
        <Button
          classContainer="button-container"
          name="newCardButton"
          className="button-create"
          icon="fa-solid fa-address-card"
          text="crear tarjeta"
          onClick={handleCreateCard}
        />

        <div className="check">
          <h3 className="share-text"></h3>
        </div>

        <div className="created">
          <h3 className="share-text">
            {props.resultCard.success === true
              ? 'La tarjeta ha sido creada:'
              : props.resultCard.error}
          </h3>
          <a className="link" href={props.resultCard.cardURL} target="_blank">
            {props.resultCard.success === true ? props.resultCard.cardURL : ''}
          </a>
          <a className="button-share" href="#" target="_blank">
        <i className="fa-brands fa-twitter"></i>
        <span> Compartir en twitter</span>
      </a>
          
        </div>
      </div>
    </fieldset>
  );
}

export default Share;
