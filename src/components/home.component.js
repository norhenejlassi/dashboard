import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
<div class="login" style={{width: "800px",height: "600px"}}>
        <header className="jumbotron" style={{marginTop: "65px"}}>
        <h1>réinitialiser le mot de passe</h1>
          <h3>le lien a été envoyé à votre courrier</h3>
          

        </header>
      </div>
    );
  }
}
