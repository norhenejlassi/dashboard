import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Pagination from "@material-ui/lab/pagination";
import { Button,Modal} from 'react-bootstrap';
import CheckButton from "react-validation/build/button";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect ,withRouter} from "react-router-dom";

import GestionkeyService from "../services/GestionkeyService";

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CalculchargeExp from "./calculchargeExp";



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


class Ca extends Component {
 
  constructor(props) {
    super(props);
    

    this.calculchargeExp = this.calculchargeExp.bind(this);

    


    this.state = {
        fileInfo: [],
      id:this.props.match.params.id,
   
    };
   
  }
 
  componentDidMount() {

  }


  calculchargeExp(){
    GestionkeyService.calculchargeExp(this.state.id).then((res) => {
      this.setState({ fileInfos: res.data});
  });
 
  }
  

  render() {

      return (

              <Button variant="primary"    onClick={this.calculchargeExp()}>
                Calculer
              </Button>
             
      );
    }
  }

  export  default withRouter(Ca)