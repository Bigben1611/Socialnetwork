import React from 'react';
import Styles from "./Main.module.scss"
import Profile from "../Profile/Profile.jsx"
import {
  Switch,
  Route,
} from "react-router-dom";

const Main = (props) => {
    return (
      <div {...props} className={props.className+" "+Styles.Main}>
          <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            Main
          </Route>
        </Switch>
      </div>
    );
}

export default Main