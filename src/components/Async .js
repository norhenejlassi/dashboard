import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProfitabilityService from "../services/ProfitabilityService";
import Pagination from "@material-ui/lab/pagination";

const headers = [
  { label: "ID", key: "id" },
  { label: "key", key: "key" },
  { label: "Region", key: "region" },
  { label: "key Value", key: "key_value" },
  { label: "Expense", key: "expense_value" },
  { label: "Periode", key: "periode" },
  { label: "Resultat", key: "result" }

];

class Async  extends Component {
  constructor(props) {
    super(props);
    this.csvLinkEl = React.createRef();
    
    this.state = {
      data: [],
   
    };

  

  }


  componentDidMount(){
    ProfitabilityService.getProfit().then((res) => {
      this.setState({ data: res.data});
  });
}




  getUserList = () => {
    return fetch('http://localhost:8006/api/test/liste')
      .then(res => res.json());
      window.location.reload(false)

  }

  downloadReport = async () => {
    const data = await this.getUserList();
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }







  render() {
    const { data } = this.state;

    return (






      
      <div>
      <Navbar/>
      <div class="container-fluid" id="main">
       <div class="row row-offcanvas row-offcanvas-left">
         <Sidebar/>
<div class="col main pt-5 mt-3">
<div class="container ">

<div class="row ">

 
           <div  style={{color:"blue"}}><h2><b>Exporter un fichier CSV</b></h2></div>
          
        </div>
        <br/>  <br/>  
      <div>
  
      <input type="button"     
       class="buttonAj"
       value="Export to CSV " 
        onClick={this.downloadReport} />
        <CSVLink
          headers={headers}
          filename="Profitability.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>



<br></br>

 
<br></br>


          <div class="row">
                <div class="table-responsive " >
          <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Id</th>
                       <th> Expense Value</th>
                       <th> Key</th>
                      <th> Key Value </th>   
                      <th> Region  </th>
                      <th> Periode  </th>
                      <th> Resultat </th>
                        </tr>
                    </thead>
                
                    <tbody>
          
                                {
                                    this.state.data.map(
                                        expe => 
                                        <tr >
                                            <td >{expe.id}</td>

                                            <td> { expe.expense_value} </td>   
                                            <td> {expe.key}</td>

                                            <td> {expe.expense_value}</td>
                                            <td> {expe.region}</td>
                                            <td> {expe.periode}</td>
                                            <td> {expe.result}</td>

                                         
                                          </tr>
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
}

export default Async ;