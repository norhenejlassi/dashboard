import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect,useState} from 'react';

function SearchRecord() {

    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);

    var i =1; // For Ser no increment

    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("http://localhost:8006/api/test/employees")
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
        axios.post(`http://localhost:8006/api/test/search`)
        .then(response => {
          setSearch(response.data);
        });
    }
    

  return (
  <div class="container">
  <h4 className="text-center text-success mt-5"><b>Search Movie by Name</b></h4>
    <div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search Movie
   </button>
  </div>                   
  <table class="table table-striped">
    <thead>                   

    <tr>
                          <th></th>
                        <th>nom employer</th>
                       <th> Email</th>
                      <th> Departement  </th>
                     <th>Actions</th>
                        </tr>
    </thead>
    <tbody>
      {search.map((employee)=>
                                    
                                    
                              <tr>
                                        <td>{i++}</td> 
                                        <tr key = {employee.id}>
                                            <td> { employee.username} </td>   
                                             <td> {employee.email}</td>
                                          
                                      
                                             <td> {employee.dep}</td>
                                            

                                             <td>
                                <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}  onClick={ () => this.viewEmployee(employee.id)}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip" onClick={ () => this.updateEmployee(employee.id)}><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}  onClick={ () => this.deleteEmployee(employee.id)} ><i class="material-icons">&#xE872;</i></a>
                                          
                                </td> 

        
                                </tr>    
      </tr>
      )}  

    </tbody>
  </table>
</div>

  );
}

export default SearchRecord;
