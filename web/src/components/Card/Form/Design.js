import Collapsable from '../Basic/Collapsable';
import InputRadio from '../Basic/InputRadio';
import '../../../styles/layout/design.scss';

function Design(props) {
  
 
  const handleInputPalette = (ev) => {
    const inputValue = parseInt(ev.target.value);
    const inputName = ev.target.name;
    props.handleInput(inputName, inputValue);
    props.handlePalette(inputValue);
    
  }

  return (
    <fieldset className="design-section collapsablemenu">
      <Collapsable
        name="design"
        className="legend-design"
        icon="icon fa-regular fa-object-ungroup"
        classSpan="fill"
        text="Diseña"
        handleCollapsed={props.handleCollapsed}
        rotate={props.rotate}
        index={0}
      />
      <section
        className={`design-colors section-to-hide ${props.collapsed[0]}`}
      >
        <h3 className="design-subtitle">Colores</h3>
        <div className="colors-options">
          
            <InputRadio dataCard={props.dataCard} type="radio" name="palette" value="1" className="color-palette-input1" id="1" title="viernes 13" handleInput={handleInputPalette} color1="color1"color2="color2" color3="color3"
            checked={props.dataCard.palette === 1} />
            
            
          
          <InputRadio dataCard={props.dataCard} type="radio" name="palette" value="2" className="color-palette-input2" id="2" title="Elm Street" handleInput={handleInputPalette} color1="color4"color2="color5" color3="color6"
          checked={props.dataCard.palette === 2}/>
            
           
          <InputRadio dataCard={props.dataCard} type="radio" name="palette" value="3" className="color-palette-input3" id="3" title="The Blair Witch" handleInput={handleInputPalette} color1="color7"color2="color8" color3="color9"
          checked={props.dataCard.palette === 3}/>
            
            
          <InputRadio dataCard={props.dataCard} type="radio" name="palette" value="4" className="color-palette-input4" id="4" title="Freddy come to me" handleInput={handleInputPalette} color1="color10"color2="color11" color3="color12"
          checked={props.dataCard.palette === 4}/>
            
        </div>
      </section>
    </fieldset>
  );
}

export default Design;
