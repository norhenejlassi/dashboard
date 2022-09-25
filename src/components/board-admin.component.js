import React, { Component } from "react";
import UserService from "../services/user.service";

import EventBus from "../common/EventBus";
import Dashboard from './Dashboard';
import List from './List';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Graphchargetoutannee from "./graphtotalchargetoutanne";
import GraphImpottoutannee from "./graphtotalimpottoutanne";
import Graphnetttoutannee from "./graphtotalnettetoutannee";
import Graphrevenutoutannee  from "./graphtotalrevenuetoutannees";
import Graphrpnltoutannee  from "./graphpnltotal";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      
      <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
  
  
           
             <div class="col main pt-5 mt-3">
    <div class="col main pt-5 mt-3">
    <div class="container ">
    <div className=" row">

        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/resultatfinal">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="/resultatregional">Dashboard regional</a></li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Dashboard Profitability</p>

     
       
     
                    <table class="table">
                      
                        <tbody>



                        <tr>
                          
                          < div style={{display:"flex"}} >
                          <div class="col-lg-7 col-md-6 col-sm-12">
                              <h5 class="mt-3 mb-3 text-secondary">   Pourcentage PnL pour chaque annee 
                </h5>

                                  <div className="mb-6" style={{marginLeft:"-150px"}}><Graphrpnltoutannee/>    </div>
                                  <p>Ce graphe represente la variation <br></br>des resultat final  <br></br>calculé par rapport les années </p>

                                  </div>

                          </div>
      
                        
                                     </tr>









                        <tr>
                          
                          < div style={{display:"flex"}} >
                              <div class="col-lg-7 ">
                              <h5 class="mt-3 mb-3 text-secondary">Pourcentage impots pour chaque annee   </h5>
                              <div className="mb-6"style={{marginLeft:"-250px"}} ><GraphImpottoutannee/>    </div>
                              <p>Ce graphe represente la variation <br></br>des revenuues <br></br>calculé par rapport les années </p>

                              </div>


                              <div class="col-lg-7 ">
                              <h5 class="mt-3 mb-3 text-secondary">Pourcentage Charge Nette pour chaque annee   </h5>
                              <div className="mb-6"style={{marginLeft:"-250px"}} ><Graphnetttoutannee/>    </div>
                              <p>Ce graphe represente la variation <br></br>des charges financiére nette <br></br>calculé par rapport les années </p>
                              </div>






                            
                          </div>
      
                        
  </tr>

                        <tr>
                          
                          < div style={{display:"flex"}} >
                          <div class="col-lg-7 col-md-6 col-sm-12">
                              <h5 class="mt-3 mb-3 text-secondary">   Pourcentage Chargeexploitation pour chaque annee 
                </h5>

                                  <div className="mb-6" style={{marginLeft:"-150px"}}><Graphchargetoutannee/>    </div>
                                  <p>Ce graphe represente la variation <br></br>des Charges d'exploitation  <br></br>calculé par rapport les années </p>

                                  </div>

                              <div class="col-lg-7 ">
                              <h5 class="mt-3 mb-3 text-secondary">  Pourcentage Revenue pour chaque annee 
                              </h5>

                                  <div className="mb-6" style={{marginLeft:"-150px"}}><Graphrevenutoutannee/>    </div>
                                  <p>Ce graphe represente la variation <br></br>des revenuues <br></br>calculé par rapport les années </p>

                                  </div>
                          </div>
      
                        
                                     </tr>
                         
                                  
                        </tbody>
                    </table>
                               </div>               
            
        <hr/>
        </div>  
        </div>
        </div>
        </div>    </div>   </div> 
    );
  }
}
