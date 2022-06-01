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
import { FalconCloud } from "crowdstrike-falcon";

export class LoginForm extends React.PureComponent {
  cloudRegions: FalconCloud[] = ["us-1", "us-2", "eu-1", "us-gov-1"];

  handleChange(x: SelectChangeEvent<FalconCloud>) {
    console.log("asdf");
    console.log(x.target);
  }
  render() {
    const cloud: FalconCloud = "us-1";
    return (
      <>
        <Typography variant="h5">API Log-in</Typography>

        <FormControl>
          <InputLabel>CrowdStrike Cloud Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cloud}
            label="CrowdStrike Cloud Region"
            onChange={this.handleChange}
          >
            {this.cloudRegions.map(function (region: FalconCloud, i: number) {
              return (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Client Id</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            New API Credentials can be established in CrowdStrike Falcon
            console.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Client Secret</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <Button variant="contained">Log-in</Button>
      </>
    );
  }
}
