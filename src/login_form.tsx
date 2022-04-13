import React from "react";

export class LoginForm extends React.PureComponent {
  render() {
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
