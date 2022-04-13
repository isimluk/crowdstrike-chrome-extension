import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Manager } from "./falcon";

class CrwdPopup extends React.PureComponent {
    render() {
        if (Manager.getInstance().loggedIn()) {
            return (
                <p>Login successful</p>
            );
        } else {
            return (
                <p>please log in</p>
            );
        }
    }
};

ReactDOM.render(
  <React.StrictMode>
    <CrwdPopup />
  </React.StrictMode>,
  document.getElementById("root")
);
