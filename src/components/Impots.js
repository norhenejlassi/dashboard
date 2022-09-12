import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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


export default class Impots extends Component {
  constructor(props) {
    super(props);
    this.handleAjout = this.handleAjout.bind(this);
 
    this.onChangeImpots = this.onChangeImpots.bind(this);
    this.onChangePeriode = this.onChangePeriode.bind(this);
    this.deleteImpots = this.deleteImpots.bind(this);
    this.updateImpots = this.updateImpots.bind(this);
   
    
       

    

    this.state = {
      impotss: [],
     id: "",
     periode: "",
     impots: "",
      successful: false,
      message: ""
    };
  }


  componentDidMount(){
    GestionkeyService.getImpots().then((res) => {
        this.setState({ impotss: res.data});
    });
}
updateImpots(id){
  this.props.history.push(`/upd-impot/${id}`);
}

deleteImpots(id){
  GestionkeyService.deleteImpots(id).then( res => {
      this.setState({impotss: this.state.Impotss.filter(impot=> impot.id !== id)});
  });
}

  onChangePeriode(e) {
    this.setState({
      periode: e.target.value
    });
  }

  onChangeImpots(e) {
    this.setState({
      impots: e.target.value
    });
  }

  handleAjout(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      GestionkeyService.ajoutImpot(
      
        this.state.periode,
        this.state.impots
  
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
      window.location.reload(false)
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

     

          <div class="row ">


        <div class="formRegister ">

        <div  style={{color:"#778899"  }}><h2><b>Ajouter Impots</b></h2></div>
      

          <Form
            onSubmit={this.handleAjout}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>

                
            

                <div className="form-group">
                  <label htmlFor="periode"><h6>periode</h6></label>
                  <Input
                    type="text"
                 
                    name="key"
                    value={this.state.periode}
                    onChange={this.onChangePeriode}
                    validations={[required]}

                  />
                </div>

                <div className="form-group">
                  <label htmlFor="impot"><h6>Impot</h6></label>
                  <Input
                    type="impot"
                  
                    name="key"
                    value={this.state.impots}
                    onChange={this.onChangeImpots}
                    validations={[required]}

                  />
                </div>
           

                <div className="form-group">
                  <button className="buttonAj" >Ajouter</button>

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
<br></br><br></br>


<div  class="formRegister ">
<div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Impot</th>
                       <th> periode</th>
                      
                     <th>Actions</th>
                        </tr>
                    </thead>
                
                    <tbody>
                                {
                                    this.state.impotss.map(
                                      impot => 
                                        <tr key = {impot.id}>
                                            <td> { impot.impots} </td>   
                                             <td> {impot.periode}</td>
                                          
                                      
                                         
                                            

                                             <td>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip" style={{color:"#D71DB2"}}  onClick={ () => this.updateImpots(impot.id)} ><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}  onClick={ () => this.deleteImpots(impot.id)}  ><i class="material-icons">&#xE872;</i></a>
                                          
                                </td>   </tr>
                                    )
                                }
                            </tbody>

                   
                </table>
            </div>   
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
