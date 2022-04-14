import React from "react";
import ReactDOM from "react-dom";
import Paper from "@mui/material/Paper";
import { Manager } from "./falcon";
import { LoginForm } from "./login_form";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

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
    <Container sx={{ minWidth: "600px", minHeight: "250px" }}>
      <CssBaseline />
      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 20px",
        }}
      >
        <Typography variant="h4">
          CrowdStrike Falcon
          <Box component="img" src="/icons/icon128.png" />
        </Typography>

        <CrwdPopup loggedIn={Manager.getInstance().loggedIn()} />
      </Paper>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
