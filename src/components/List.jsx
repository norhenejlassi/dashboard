import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Modal,Input } from 'react-bootstrap';

import { Redirect ,withRouter} from "react-router-dom";
import UserService from "../services/user.service";


import Navbar from './Navbar';
import Sidebar from './Sidebar';

class List extends Component{

    
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
                redirect: null
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.searchEmployee = this.searchEmployee.bind(this);


        

    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }

    deleteEmployee(id){
        UserService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    updateEmployee(id){
        this.props.history.push(`/upd-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        UserService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    

    addEmployee(){
        this.props.history.push('/register');
    }

    searchEmployee(){
        UserService.searchEmployee().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
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
                <div className="form-group">
                 <input  value={this.state.username} onChange={this.onChangeUsername}  class="form-control mr-sm-2" type="search" placeholder="chercher un utilisateur" aria-label="Search"/>
                 <button type="button"  class="btn btn-success" onClick={this.searchEmployee} style={{marginLeft: "-20px"}}>Search</button>
   </div>
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Liste des employes</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary"onClick={this.addEmployee}>
                Ajouter Employer
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>nom employer</th>
                       <th> Email</th>
                      <th> Departement  </th>
                     <th>Actions</th>
                        </tr>
                    </thead>
                
                    <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> { employee.username} </td>   
                                             <td> {employee.email}</td>
                                          
                                      
                                             <td> {employee.dep}</td>
                                            

                                             <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}  onClick={ () => this.viewEmployee(employee.id)}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip" onClick={ () => this.updateEmployee(employee.id)}><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}  onClick={ () => this.deleteEmployee(employee.id)} ><i class="material-icons">&#xE872;</i></a>
                                          
                                </td>   </tr>
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


)
}
}
export default withRouter(List)