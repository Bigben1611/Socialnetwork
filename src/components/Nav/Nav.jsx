import React from 'react';
import Styles from "./Nav.module.scss"
import{
  Link
} from "react-router-dom"

const Nav = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Nav}>
        <Link to="/profile">Profile</Link>
      </div>
    );
}

export default Nav