import React, { Component } from "react";
import ProfitabilityService from "../services/ProfitabilityService";
import { Button,Modal,Input } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
 class Profitability extends Component {
    constructor(props) {
      super(props);
     

  
      this.state = {
    
        progress: 0,
        message: "",
  
        fileInfos: [],
      };
     
     this.calculProfi = this.calculProfi.bind(this);

    }
  
    componentDidMount(){
        ProfitabilityService.getProfit().then((res) => {
          this.setState({ fileInfos: res.data});
      });
  }

  
  calculProfi(){
    ProfitabilityService.calculProfi().then((res) => {
      this.setState({ fileInfos: res.data});
  });

  }
  

    render() {
      const {
     
        progress,
        message,
        fileInfos,
      } = this.state;
  
      return (
        <div>
        <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
<div class="col main pt-5 mt-3">
<div class="container ">
  
  <div class="row ">
  
          
          <div class="col-sm-3 mt-5 mb-4 text-gred">
             <div className="search">
               <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="chercher un document" aria-label="Search"/>
              
               </form>
             </div>    
             </div>  
             <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"blue"}}><h2><b>Calculer la profitability</b></h2></div>
            
          </div>
          <br/>  <br/>  
        <div>
          
  
       
  
          <button
                      class="buttonAj"
                      onClick={this.calculProfi}

           
          >
            Calcul
          </button>


          <div className="alert alert-light" role="alert">
            {message}
          </div>
  
        


          <div class="row">
                <div class="table-responsive " >
          <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Id</th>
                       <th> Expense Value</th>
                       <th> Key</th>
                      <th> Key Value </th>   
                      <th> Region  </th>
                      <th> Periode  </th>
                      <th> Resultat </th>
                        </tr>
                    </thead>
                
                    <tbody>
          
                                {
                                    this.state.fileInfos.map(
                                        expe => 
                                        <tr >
                                            <td >{expe.id}</td>

                                            <td> { expe.expense_value} </td>   
                                            <td> {expe.key}</td>

                                            <td> {expe.expense_value}</td>
                                            <td> {expe.region}</td>
                                            <td> {expe.periode}</td>
                                            <td> {expe.result}</td>

                                         
                                          </tr>
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
export default withRouter(Profitability);