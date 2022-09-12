import React, { Component } from "react";
import ImportService from "../services/import.service";
import { Button,Modal,Input } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import { savePDF } from '@progress/kendo-react-pdf';
import ReactDOM from 'react-dom';
import Dashboard from './graph'
 class ImportReve extends Component {
    constructor(props) {
      super(props);
      this.appContainer = React.createRef();
      this.state = {
        id: this.props.match.params.id,
      }
    }
  
    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.export), { paperSize: 'auto' });
      }
      cancel(id){
        this.props.history.push(`/graph/${id}`);
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
<div>

              <div className='exp'>
              <button className='btn btn-primary' onClick={this.handlePDFExport}>Exporter en PDF</button>
              <button className="btn btn-danger" onClick={() =>this.cancel(this.state.id)} style={{marginTop:"-7%" ,marginLeft: "125%"}}><i className="fa fa-reply"></i></button>
              </div>
              <div className="export"  ref={(el) => this.export = el}>
                <Dashboard />
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
export default withRouter(ImportReve);