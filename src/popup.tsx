import React from "react";
import ReactDOM from "react-dom";
import { Manager } from "./falcon";
import { LoginForm } from "./login_form";

interface PopupProps {
  loggedIn: boolean;
}

class CrwdPopup extends React.PureComponent<PopupProps, {}> {
  render() {
    console.log("render");
    if (this.props.loggedIn) {
      return <p>Login successful</p>;
    } else {
      return <LoginForm />;
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CrwdPopup loggedIn={Manager.getInstance().loggedIn()} />
  </React.StrictMode>,
  document.getElementById("root")
);
