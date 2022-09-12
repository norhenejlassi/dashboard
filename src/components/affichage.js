import React from 'react'


import Navbar from './Navbar';
import Sidebar from './Sidebar';
import graphService from '../services/graphService';
import { Component } from 'react';
  

 class Affi extends Component{
  
    constructor(props) {
        super(props); 
        
      
        this.state = {
            id: this.props.match.params.id,
          charges: [],
          annes: [],
         periode: "",
         chargeFinanciere: "",
          successful: false,
          message: ""
        };
      }
      
      componentDidMount(){
        graphService.getannee().then( res => {
            this.setState({charges: res.data});
       });
       graphService.getresultall().then( res => {
          this.setState({annes: res.data});
   });
      }
      
  
  render() {
   const handleChange = (e) => {
        if(e.target.value){
        this.props.history.push(`/graph/${e.target.value}`);
        window.location.reload(false)    
        } 
      }
    return (
<div>  
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>


    <div class="col main pt-5 mt-3">
        
    
        <p class="lead d-none d-sm-block">Reporting charge exploitation  par année</p>
        <form  ref={c => {
              this.form = c;
            }}>
        <label style={{marginLeft: "55px"}}>
        <i style={{marginLeft: "10px",fontSize:"20px",color:"black"}} className="fa fa-calculator"></i> Choisissez votre année :  
         <select  className="btnchoi"style={{marginLeft: "10px"}} value={this.state.value} onChange={(e) => handleChange(e)}>
          <option >--- choisie ---</option>
            {this.state.charges.map(arrayItem => <option value={arrayItem.periode}>{arrayItem.periode}</option>)}
          </select>
        </label>
        </form>
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
       
           
          
           
        <hr/>
      
      
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
              Resultat du calcul
              </h5>
                <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Periode</th>
                       <th> Label</th>
                      <th> Resultat en %  </th>
                        </tr>
                    </thead>
                
                    <tbody>
                                {
                                    this.state.annes.map(
                                        dg => 
                                        <tr key = { dg.id}>
                                          <td> { dg.periode} </td>   
                                            <td> { dg.label} </td>   
                                             <td> {dg.poucentage}</td>
                                            

                                               </tr>
                                    )
                                }
                            </tbody>

                   
                </table>
                </div>
                </div>
                </div></div></div></div>   
                

    </div>
    )
}
 }

export default Affi;

