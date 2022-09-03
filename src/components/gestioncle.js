import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "bootstrap/dist/css/bootstrap.min.css";

import GestionkeyService from "../services/GestionkeyService";

import Navbar from './Navbar';
import Sidebar from './Sidebar';



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};





export default class Gestioncle extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeKey = this.onChangeKey.bind(this);
   
    this.onChangeRegion = this.onChangeRegion.bind(this);
       
    this.onChangeKeyvalue = this.onChangeKeyvalue.bind(this);
    

    this.state = {
     id: "",
     key: "",
      keyvalue: "",
      region: "",
      successful: false,
      message: ""
    };
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeKey(e) {
    this.setState({
     key: e.target.value
    });
  }


  onChangeKeyvalue(e) {
    this.setState({
      keyvalue: e.target.value
    });
  }

  onChangeRegion(e) {
    this.setState({
      region: e.target.value
    });
  }

  
  cancel(){
    this.props.history.push('/clees');
}
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      GestionkeyService.register(
        this.state.id,
        this.state.key,
        this.state.keyvalue,
        this.state.region
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
 
      <div>

                    <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>

                   <div class="col main pt-5 mt-3">

       <div class="container ">

          <div class="row ">


        <div class="formRegister ">

        <div  style={{color:"blue"}}><h2><b>Ajouter un nouveau cle</b></h2></div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>

                
            
<div className="form-group">
                  <label htmlFor="id">Id</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="key"
                    value={this.state.id}
                    onChange={this.onChangeId}
                    validations={[required]}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="key">key</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="key"
                    value={this.state.key}
                    onChange={this.onChangeKey}
                    validations={[required]}

                  />
                </div>

                

                <div className="form-group">
                  <label htmlFor="keyvalue">key value</label>
                  <Input
                    type="keyvalue"
                    className="form-control"
                    name="keyvalue"
                    value={this.state.keyvalue}
                    onChange={this.onChangeKeyvalue}
                    validations={[required]}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="region">Region</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="region"
                    value={this.state.dep}
                    onChange={this.onChangeRegion}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <button variant="secondary" class="buttonAj" >Ajouter</button>
                  <button onClick={this.cancel.bind(this)}   class="buttonQi" style={{marginLeft: "20px"}}>Cancel</button>

                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
     

     
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
</div>
</div>

</div>
          </div>

          </div>
  </div>
 
    );
  }
}
