import React from "react";
import ReactDOM from "react-dom";
import Paper from "@mui/material/Paper";
import { Manager } from "./falcon";
import { LoginForm } from "./login_form";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { FalconCloud, FalconErrorExplain } from "crowdstrike-falcon";

interface CrwdPopupProps {}

interface CrwdPopupState {
  falcon?: Manager;
}

class CrwdPopup extends React.Component<CrwdPopupProps, CrwdPopupState> {
  constructor(props: CrwdPopupProps) {
    super(props);
    this.state = {};
  }
  private login(cloud: FalconCloud, clientId: string, clientSecret: string) {
    const manager = Manager.getInstance();
    manager
      .login(cloud, clientId, clientSecret)
      .catch((err) => {
        FalconErrorExplain(err).then((txt) =>
          alert("Coud not verify login: " + txt)
        );
        throw err;
      })
      .then((res) => {
        this.setState({ falcon: manager });
      });
  }

  render() {
    console.log("CrwdPopup#render");
    if (this.state.falcon) {
      return <p>Login successful</p>;
    } else {
      return (
        <LoginForm
          submit={(a, b, c) => {
            this.login(a, b, c);
          }}
        />
      );
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

        <CrwdPopup />
      </Paper>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
