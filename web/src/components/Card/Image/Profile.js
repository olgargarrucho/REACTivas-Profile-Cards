import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../images/photo2.png';

function Profile(props) {
  
  const avatar = props.avatar === '' ? photo : props.avatar;
  return (
    <img className="photo js-preview-photo" src={avatar} alt="profile" />
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;