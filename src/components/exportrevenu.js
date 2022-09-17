import React, { Component } from "react";
import ImportService from "../services/import.service";
import { Button,Modal,Input } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import { savePDF } from '@progress/kendo-react-pdf';
import ReactDOM from 'react-dom';
import Dashboard from './graphreve';
import graphService from '../services/graphService';

 class ImportRev extends Component {
    constructor(props) {
      super(props);

      this.appContainer = React.createRef();
      this.state = {
        charges: [],
        id: this.props.match.params.id,
      }
    }
  
    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.export), { paperSize: 'auto' });
      }
      cancel(id){
        this.props.history.push(`/Affichagereve/${id}`);
    }

  
       
    componentDidMount(){
    
     graphService.getresultall().then( res => {
        this.setState({annes: res.data});
 });
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
                <div style={{display:"flex"}}>
                <button className='buttonAj' onClick={this.handlePDFExport}>Exporter en PDF</button>
              <button className="buttonQi" onClick={() =>this.cancel(this.state.id)} style={{marginLeft: "450px"}}>Retour</button>
                </div>
              
              </div>
              <div className="export"  ref={(el) => this.export = el}>
              <div >
                 
                </div>
            
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
export default withRouter(ImportRev);