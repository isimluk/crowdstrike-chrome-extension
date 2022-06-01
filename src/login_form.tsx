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

interface LoginFormProps {
  submit: (cloud: FalconCloud, clientId: string, clientSecret: string) => void;
}
interface LoginFormState {
  cloud: FalconCloud;
  clientId: string;
  clientSecret: string;
}

export class LoginForm extends React.PureComponent<
  LoginFormProps,
  LoginFormState
> {
  cloudRegions: FalconCloud[] = ["us-1", "us-2", "eu-1", "us-gov-1"];
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      cloud: "us-1",
      clientId: "",
      clientSecret: "",
    };
  }

  handleCloudChange(e: SelectChangeEvent<FalconCloud>) {
    const val = e.target.value;
    if (val == "us-1" || val == "us-2" || val == "eu-1" || val == "us-gov-1") {
      this.setState({ cloud: val });
    }
  }

  handleClientIdChange(e: any) {
    this.setState({ clientId: e.target.value });
  }
  handleClientSecretChange(e: any) {
    this.setState({ clientSecret: e.target.value });
  }

  render() {
    const { cloud, clientId, clientSecret } = this.state;
    return (
      <>
        <Typography variant="h5">API Log-in</Typography>

        <FormControl>
          <InputLabel>CrowdStrike Cloud Region</InputLabel>
          <Select
            labelId="selectCloud"
            id="selectCloud"
            value={cloud}
            label="CrowdStrike Cloud Region"
            onChange={(e) => {
              this.handleCloudChange(e);
            }}
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
          <InputLabel htmlFor="clientId">Client Id</InputLabel>
          <Input
            id="clientId"
            aria-describedby="clientId"
            onChange={(e) => {
              this.handleClientIdChange(e);
            }}
          />
          <FormHelperText id="my-helper-text">
            New API Credentials can be established in CrowdStrike Falcon
            console.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="clientSecret">Client Secret</InputLabel>
          <Input
            id="clientSecret"
            aria-describedby="clientSecret"
            onChange={(e) => {
              this.handleClientSecretChange(e);
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={() => {
            this.props.submit(cloud, clientId, clientSecret);
          }}
        >
          Log-in
        </Button>
      </>
    );
  }
}
