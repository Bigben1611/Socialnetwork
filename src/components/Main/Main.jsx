import React from 'react';
import Styles from "./Main.module.scss"

const Main = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Main}>
          Main
      </div>
    );
}

export default Main