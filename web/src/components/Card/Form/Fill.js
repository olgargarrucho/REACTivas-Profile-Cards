import React from 'react';
import Collapsable from '../Basic/Collapsable';
import GetImage from '../Image/GetImage';
import '../../../styles/layout/fill.scss';
import InputText from '../Basic/InputText';

function Fill(props) {
  
  const handleInputFil = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handleInput(inputName, inputValue);
  };

  return (
    <fieldset className="fill-section collapsablemenu">
      <Collapsable
        name="fill"
        className="legend-fill"
        icon="fa-solid fa-xl fa-keyboard"
        classSpan="fill"
        text="Rellena"
        handleCollapsed={props.handleCollapsed}
        rotate={props.rotate}
        setRotate={props.setRotate}
        index={1}
      />

      <div
        className={`fill-inputs-section section-to-hide ${props.collapsed[1]}`}
      >
        <InputText name="name" value={props.dataCard.name} placeholder="Ej: Ada Lovelace" onChange={handleInputFil} className="text-fill" labelText="nombre completo" />

        <InputText name="job" value={props.dataCard.job} placeholder="Ej: Front-End developer" onChange={handleInputFil} className="text-fill" labelText="puesto" />

        <GetImage
          avatar={props.dataCard.photo}
          updateAvatar={props.handleInput}
        />

        <InputText name="email" value={props.dataCard.email} placeholder="Ej: adalab@adalab" onChange={handleInputFil} className="text-fill" labelText="email" />

        <InputText name="phone" value={props.dataCard.phone} placeholder="Ej: 789 653 214" onChange={handleInputFil} type="phone" className="text-fill" labelText="teléfono" />

        <InputText name="linkedin" value={props.dataCard.linkedin} placeholder="Ej: https://www.linkedin.com/school/adalab/" onChange={handleInputFil} className="text-fill" labelText="linkedin" />

        <InputText name="github" value={props.dataCard.github} placeholder="Ej: @Adalab" onChange={handleInputFil} className="text-fill" labelText="github" />
        
      </div>
    </fieldset>
  );
}

export default Fill;
