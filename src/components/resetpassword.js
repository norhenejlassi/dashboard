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

class reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: "",
          loading: false,
          message: "",
          token: this.props.match.params.token
        };
        this.onChangepassword = this.onChangepassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    onChangepassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      
        handleSubmit(e) {
          e.preventDefault();
          this.setState({
            message: "",
            successful: false,
            loading: true,
          });
          this.form.validateAll();
      
         if (this.checkBtn.context._errors.length === 0 ){
          AuthService.resetpassword(this.state.password,this.state.token).then(() => {
            this.props.history.push("/");
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

  <h2 class="active"><img src="/puplic/logott.png" />Changer votre mot de passe </h2>




          <Form
          class="for"
            onSubmit={this.handleSubmit}
            ref={c => {
              this.form = c;
            }}
          >
            
  
    
            <br/>
    
              <Input
               class="inp"
                type="text"
                className="form-control text" 
                name="username"
                value={this.state.password}
                onChange={this.onChangepassword}
                validations={[required]}
              />
               
                  
           <span class="loginn">Nom utilisateur</span>



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
<a href="#" class="loginnn"  ><span class="loginn">mot de passe oublier?</span></a>

          </Form>
        </div>

    );
  }
}

export default withRouter(reset);


   