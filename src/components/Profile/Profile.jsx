import React from 'react';
import Styles from "./Profile.module.scss"
import profileImage from "./image.jpg"

const Profile = () => {
    return (
      <>
          <div>
            <img src={profileImage} alt="" />
            <p>Elon Mask</p>
          </div>
          <div>
            <h2></h2>
          </div>
      </>
    );
}

export default Profile