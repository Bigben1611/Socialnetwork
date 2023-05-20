import React from 'react';
import Styles from "./Nav.module.scss"

const Nav = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Nav}>
          Nav poor nice
      </div>
    );
}

export default Nav