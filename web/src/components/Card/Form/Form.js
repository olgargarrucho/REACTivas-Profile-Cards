import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form(props) {
  return (
    <section className="design-profile">
      <form
        action="https://adalab-server-form.herokuapp.com"
        method="post"
        className="form"
      >
        <Design
          handleCollapsed={props.handleCollapsed}
          dataCard={props.dataCard}
          handleInput={props.handleInput}
          collapsed={props.collapsed}
          handlePalette={props.handlePalette}
          rotate={props.rotate}
          
        />

        <Fill
          handleCollapsed={props.handleCollapsed}
          dataCard={props.dataCard}
          handleInput={props.handleInput}
          collapsed={props.collapsed}
          rotate={props.rotate}
          
        />

        <Share
          handleCollapsed={props.handleCollapsed}
          dataCard={props.dataCard}
          resultCard={props.resultCard}
          setResultCard={props.setResultCard}
          handleCreateCard={props.handleCreateCard}
          collapsed={props.collapsed}
          rotate={props.rotate}
          
        />
      </form>
    </section>
  );
}

export default Form;
