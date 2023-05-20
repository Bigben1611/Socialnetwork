import React from 'react';
import Styles from "./Header.module.scss"

const Header = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Header}>
          Header
      </div>
    );
}

export default Header