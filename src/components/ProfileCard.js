import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import "./ProfileCard.css";


const ProfileCard = props => {
  return (
    <div className ="profileCard">
      <div id="ProfilePhoto">
        <ProfilePhoto imageUrl={props.profile.picture.medium}/>
      </div>
      <h2>
        {props.profile.name.first} {props.profile.name.last}
      </h2>
      <p>
        {props.profile.email} {props.profile.cell}
      </p>
      <p>{props.profile.location.street}</p>
    </div>
  );
};

export default ProfileCard;