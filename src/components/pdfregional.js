import React, { Component } from "react";
import ImportService from "../services/import.service";
import { Button,Modal,Input } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import { getPageMargin, savePDF } from '@progress/kendo-react-pdf';
import ReactDOM from 'react-dom';
import Dashboard from './graphregionalimpot';
import Dashboarde from './graphregionalnett';
import Pnl from './Pnl';

import AuthService from '../services/user.service';
import graphService from '../services/graphService';
import Calculpnl from "./Calculpnl";



 class Pdfregional extends Component {
  
    constructor(props) {
      super(props);
      var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    
      this.appContainer = React.createRef();
      this.state = {
        charges: [],
        date: new Date().toLocaleString(),
        id: this.props.match.params.id,
        userReady: false,
        currentUser: { username: "" }

      };
    }
    
  
    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.export), { paperSize: 'auto' });
      }
      cancel(id){
        this.props.history.push(`/resultatfinal/${id}`);
    }

   
       
    componentDidMount(){
    
     graphService.getresultall().then( res => {
        this.setState({annes: res.data});
      });
      
    
    }
 UserNow(){
    const currentUser = AuthService.getCurrentUser();
      if (!currentUser) 

      this.setState({ currentUser: currentUser, userReady: true });

    }
    render() {
      const { currentUser } = this.state;

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
              <button className='buttonAj' onClick={this.handlePDFExport}>Exporter en PDF</button>
              <button className="buttonQi" onClick={() =>this.cancel(this.state.id)} style={{marginLeft: "450px"}}>Retour</button>
              </div>
              <div className="export"  ref={(el) => this.export = el}><br></br>

                <div class="row ">
                <div style={{backgroundColor:"white",width:"800px",height:"10px",marginLeft:"-50px"}}> </div>

                  <div style={{backgroundColor:"#A9A9A9",width:"870px",height:"200px"}}>  

                  <div style={{display:"flex"}}>              
                <img  style={{width:"80px",height:"80px",marginLeft:"-10px"}} src="https://www.tunisietelecom.tn/_layouts/15/MCS.TT.Internet.UI/assets/img/logo-tt.svg" className="imgtele"></img>
                <h3 style={{color:"white",textAlign:"center",marginLeft:"50px"}}>Tableau de board de profitability</h3><br></br>

                 <div style={{ color:"white",marginLeft:"100px"}}>
                               <h7> Tunisie Telecom Direction Centrale<br></br> des finance-Monplaisir{}</h7>
                               
                          </div>

                                </div>  
                                <div style={{ color:"white"}}>
                                {(this.UserNow) ? 
                                <h8 > Nom et Prenom:   {currentUser.username}  </h8>   : null}<br></br>
                             
                                <h8 > Date/Heure: {this.state.date}</h8>
                                </div> 
                                
                                                  
                    </div>
                 

              <div > <Dashboard /></div> 
              
              <div style={{marginLeft:"-200px"}}>  <Dashboarde/></div>  
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
export default withRouter(Pdfregional);



