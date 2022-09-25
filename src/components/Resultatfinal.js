import React from 'react'


import Navbar from './Navbar';
import Sidebar from './Sidebar';
import graphService from '../services/graphService';
import { Component } from 'react';
  

 class Resultatfinal extends Component{
  
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
        this.props.history.push(`/pdffinal/${e.target.value}`);
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
        
    
        <p class="lead d-none d-sm-block" style={{ fontWeight:"bold",color:"#778899" ,marginLeft:"250px"}} >Exporter la résultat final</p>
        
           
          
           
        <hr/>
      
      
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
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
       
                <div class="table-responsive">
               




                </div>
                
                </div>
                <br></br>                          <br></br>
      <br></br>

      <br></br>

        <a id="more"></a>
        <hr/>
        <h2 class="lead d-none d-sm-block" style={{ fontWeight:"bold",color:"#778899" ,marginLeft:"250px"}} > Document comptable </h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Les charges d'exploitation correspondent aux dépenses réalisées par TT qui peuvent être comptabilisées en charges.</p>
                            <footer>Charge d'exploitatoion <cite title="Source Title">TT</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Les revenus sont le montant total des revenus générés par la vente de biens ou de services liés aux activités principales de TT.</p>
                            <footer>Revenue <cite title="Source Title">TT</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>les charges financières correspondent au coût des ressources d'emprunt obtenus auprès des différents créanciers bancaires et financiers..</p>
                            <footer>Charge Financiére <cite title="Source Title">TT</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>L’impôt est un versement obligatoire et sans contrepartie aux administrations publiques. L’impôt sert à financer les dépenses publiques et peut constituer un moyen de régulation de l’activité économique..</p>
                            <footer>Impot <cite title="Source Title">TT</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
       
                </div></div></div></div>   
                

    </div>
    )
}
 }

export default Resultatfinal;

