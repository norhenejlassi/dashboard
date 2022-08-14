import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";


import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import List from "./components/List";
import Profitability from "./components/profitaility";

import S from "./components/s";

import Dashboard from "./components/Dashboard";

import UpdateEmployeeComponent  from "./components/UpdateEmployeeComponent ";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import UploadFiles from "./components/uploadfilescomponent";
import Import from "./components/import";
import Importcle from "./components/importcle";


import forgot from "./components/forgetpassword";
import reset from "./components/resetpassword";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import profitaility from "./components/profitaility";

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
            <Route exact path={"/home"} component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/forgotpassword" component={forgot} />
            <Route exact path={"/reset_password/:token"} component={reset} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path = "/employees" component = {List}></Route>
            <Route path = "/profitability" component = {profitaility}></Route>

            
            <Route path = "/Dashboard" component = {Dashboard}></Route>

            <Route path = "/UploadFiles" component = {UploadFiles}></Route>
            <Route path = "/import" component = {Import}></Route>
            <Route path = "/importcle" component = {Importcle}></Route>



            <Route path = "/s" component = {S}></Route>

            <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
            <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
            <Route path = "/upd-employee/:id" component = { UpdateEmployeeComponent }></Route>

            <Route path = "/UploadFiles/:id" component = { UploadFiles }></Route>
          </Switch>
               
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
