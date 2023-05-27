import React from 'react';
import Styles from "./Header.module.scss"
import logo from './logo.svg';


const Header = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Header}>
          <img src={logo} alt="logo" />
      </div>
    );
}

export default Header