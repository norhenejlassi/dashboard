import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Modal,Input } from 'react-bootstrap';
import axios from 'axios';
import {useEffect,useState} from 'react';
import { Redirect ,withRouter} from "react-router-dom";
import UserService from "../services/user.service";


import Navbar from './Navbar';
import Sidebar from './Sidebar';
function SearchRecord() {

    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);

    var i =1; // For Ser no increment

    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("http://localhost:3000/employees")
        .then(response => {
          setSearch(response.data);
        });
      
    }
    useEffect(() => {
        loadRecords();
    }, []);

    
    // Search Item by Name
    const searchRecords = () =>
    {
        axios.get(`http://localhost:3000/employees/?username=${record}`)
        .then(response => {
          setSearch(response.data);
        });
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
<div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search User
   </button>
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
                
      {search.map((employee)=>
       
                        <tr key = {employee.id}>
                                  <td>{i++}</td>  

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








  );
}

export default SearchRecord;
