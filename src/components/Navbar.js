
import React, { Component } from "react";

import AuthService from '../services/auth.service';

   
   
      class Navbar extends Component {

        constructor(props) {
            super(props);
            this.logOut = this.logOut.bind(this);
          
           
          }
          

          logOut ()  {
            AuthService.logout();
            localStorage.clear();
           
          }

          render() {


            return (
        
                <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3 s">
                    <div class="flex-row d-flex">
                        <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div>
                        <img class = "imgtele" src="https://www.tunisietelecom.tn/_layouts/15/MCS.TT.Internet.UI/assets/img/logo-tt.svg" className="imgtele"></img>

                          <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template"><p style={{marginleft:"100px"}}><h5>Profitability</h5></p></a> 

                        </div>
                        
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="navbar-collapse collapse" id="collapsingNavbar">
                        
                        <ul class="navbar-nav ml-auto">
                           
                            <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                      </a>
                    </li>
                   
                      <li class="nav-item">
                          <a class="nav-link waves-effect waves-light text-white" href='/'  onClick={ () => this.logOut()}>
                          <i class="fas fa-sign-out-alt"></i>
                          </a>
                        </li>
                        </ul>
                    </div>
           </nav>
        )


          }



      }


  


export default Navbar
