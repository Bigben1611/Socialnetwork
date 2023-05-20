import React from 'react';
import Styles from "./Layout.module.scss"

const Layout = (props) => {
    return (
      <div className={Styles.layout}>
          <props.header className={Styles.header}/>
          <props.nav className={Styles.nav}/>
          <props.main className={Styles.main}/>
      </div>
    );
}

export default Layout