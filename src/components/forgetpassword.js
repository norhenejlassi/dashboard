import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {withRouter} from "react-router-dom"
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class forgot extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
   

    this.state = {
      email: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  cancel(){
    this.props.history.push('/');
}

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.forgotpass(this.state.email).then(
        () => {
          this.props.history.push("/home");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
     
<div class="login">

  <h2 class="active">Changer votre mot de passe </h2>




          <Form
          class="for"
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            
  
    
            <br/>
    
              <Input
               class="inp"
                type="text"
                className="form-control text" 
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
               
                  
           <span class="loginn">Email</span>



           <br/>
          
   <br/>
                    
              <button
                className="signin"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm" ></span>
                )}
                Envoyer
              </button>
              <button onClick={this.cancel.bind(this)}  className="signin" >Cancel</button>


            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            

            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

          </Form>
        </div>

    );
  }
}

export default withRouter(forgot);


   