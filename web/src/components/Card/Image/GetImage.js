import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../images/photo2.png';

function GetAvatar(props) {
  
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const inputName = "photo";
    const inputValue = fr.result;
    props.updateAvatar(inputName, inputValue);
   
  };

  const avatar = props.avatar === '' ? photo : props.avatar;
  return (
    <div className="div-text-fill">
        <div>
          <p className="profile">imagen de perfil</p>
          <label className="text-fill image_button" htmlFor="image">añadir imagen</label>
          <input type="file" name="photo"
            ref={myFileField}
            onChange={uploadImage}
            id="image" className="image__hiddenField js__profile-upload-btn js-img-input" required="" />
        </div>
        <div className="profile__preview js__profile-image" style={{ backgroundImage: `url(${avatar})` }}>
        </div>
   </div>
        
      
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;