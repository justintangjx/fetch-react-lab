import React from "react";

import './ProfileCard.css';

const ProfilePhoto = props => {
  return (
    <img className="ProfilePhoto" src={props.imageUrl} alt="ProfilePhoto" />
  );
};

export default ProfilePhoto;
