import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Typography,
  FormHelperText,
} from "@mui/material";

export class LoginForm extends React.PureComponent {
  handleChange() {
    console.log("asdf");
  }
  render() {
    const age = 20;
    return (
      <>
        <Typography variant="h5">API Log-in</Typography>

        <FormControl>
          <InputLabel>CrowdStrike Cloud Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="CrowdStrike Cloud Region"
            onChange={this.handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <Button variant="contained">Log-in</Button>
      </>
    );
  }
  renders() {
    return (
      <form id="loginForm">
        <h2>CrowdStrike API: Please Log in</h2>
        <label>
          <strong>Client Id</strong>
        </label>
        <input
          type="password"
          id="clientId"
          placeholder="Your API Client ID"
          name="clientId"
          required
        />
        <br />
        <label>
          <strong>Client Secret</strong>
        </label>
        <input
          type="password"
          id="clientId"
          placeholder="Your Api Client Secret"
          name="clientSecret"
          required
        />
        <br />
        <button type="submit">Log in</button>
      </form>
    );
  }
}
