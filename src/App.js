import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Async  from "./components/Async ";

import pagination from "./components/pagination";
import ProtectedRoute from './components/ProtectedRouter';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import List from "./components/List";

import Cle from "./components/Cle";
import Graph from "./components/grapfcharge";

import Profitability from "./components/profitaility";


import calculreve from "./components/calculreve";
import Dashboard from "./components/Dashboard";

import UpdateEmployeeComponent  from "./components/UpdateEmployeeComponent ";
import UpdateCle from "./components/UpdateCle";

import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import UploadFiles from "./components/uploadfilescomponent";
import Import from "./components/import";
import Importcle from "./components/importcle";
import Importchargexp from "./components/importchargexp";

import importreve from  "./components/importreve";


import forgot from "./components/forgetpassword";
import reset from "./components/resetpassword";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import profitaility from "./components/profitaility";
import Gestioncle from "./components/gestioncle";
import Modifcle from "./components/modifcle";
import ChargeFinancier from "./components/Chargefinaciere";
import UpdateCharge from "./components/updateCharge";
import Impots from "./components/Impots";
import UpdateImpots from "./components/updateImpots";
import CalculChargeExp from "./components/calculchargeExp";
import Ca from "./components/ca";
import Calculpnl from "./components/Calculpnl";
import Affichage from "./components/affichage";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (

      
      <div>
       

        <div className="container mt-3">
          <Switch>

            
          <Route exact path="/profile" component={Profile} />
            <Route exact path="/forgotpassword" component={forgot} />
            <Route exact path={"/reset_password/:token"} component={reset} />
            
          <Route exact path={"/Async"} component={Async } />
          
          <Route exact path={"/ajoutcle"} component={Gestioncle} />
          <Route exact path={"/modifcle"} component={Modifcle} />

            <Route exact path={"/home"} component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <ProtectedRoute path="/admin" component={BoardAdmin} />
            <ProtectedRoute path = "/employees" component = {List}/>

            <ProtectedRoute path = "/clees" component = {Cle}/>

            <ProtectedRoute path = "/profitability" component = {profitaility}/>

            <ProtectedRoute path = "/pagination" component = {pagination}/>
            <ProtectedRoute path = "/calculchargexp" component = {CalculChargeExp}/>
            <ProtectedRoute path = "/calculpnl" component = {Calculpnl}/>

            <ProtectedRoute path = "/c/:id" component = {Ca}/>



            <ProtectedRoute path = "/calculreve" component = {calculreve}/>
            <ProtectedRoute path = "/Dashboard" component = {Dashboard}/>
            <ProtectedRoute path = "/Affichage" component = {Affichage}/>

            <ProtectedRoute path = "/UploadFiles" component = {UploadFiles}/>
            <ProtectedRoute path = "/import" component = {Import}/>
            <ProtectedRoute path = "/importcle" component = {Importcle}/>
            <ProtectedRoute path = "/importreve" component = {importreve}/>
            <ProtectedRoute path = "/importchargexpo" component = {Importchargexp}/>

            <ProtectedRoute path = "/chargefinanciere" component = {ChargeFinancier}/>

            <ProtectedRoute path = "/impots" component = {Impots}/>
            <ProtectedRoute path = "/graph/:id" component = {Graph}/>


            <ProtectedRoute path = "/upd-cle/:id" component = {UpdateCle}/>
            
            <ProtectedRoute path = "/upd-charge/:id" component = {UpdateCharge}/>
            <ProtectedRoute path = "/upd-impot/:id" component = {UpdateImpots}/>


            <ProtectedRoute path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
            <ProtectedRoute path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
            <ProtectedRoute path = "/upd-employee/:id" component = { UpdateEmployeeComponent }/>
       
            

            <ProtectedRoute path = "/UploadFiles/:id" component = { UploadFiles }/>
          </Switch>
               
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
