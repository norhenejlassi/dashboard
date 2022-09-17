import React, { Component } from "react";
import UserService from "../services/user.service";

import EventBus from "../common/EventBus";
import Dashboard from './Dashboard';
import List from './List';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

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

     

<div class="row ">
             <iframe  title="Dashboard" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=a40c1959-9ff0-48ed-94e0-ffdb82250997&autoAuth=true&ctid=889cdbee-d881-42dc-bd06-ad3237c34a53" frameborder="0" allowFullScreen="true"></iframe>
            </div>  
        </div>  
        </div>
        </div>
        </div>
       
    );
  }
}
