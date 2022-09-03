
import React, { Component } from "react";
import Pagination from "@material-ui/lab/pagination";
import Profitaility from "./profitaility";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Button,Modal,Input } from 'react-bootstrap';
import ProfitabilityService from "../services/ProfitabilityService";

export default class Calculrevenue extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.calculProfi = this.calculProfi.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      page: 1,
      count: 0,
      pageSize: 3,
    };
    this.pageSizes = [3, 6, 9];
  }
  componentDidMount() {
    this.retrieveTutorials();
  }

  calculProfi(){
    ProfitabilityService.calculProfi().then((res) => {
      this.setState({ fileInfos: res.data});
      window.location.reload(false)
  });
 


  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }
  getRequestParams(searchTitle, page, pageSize) {
    let params = {};
    if (searchTitle) {
      params["title"] = searchTitle;
    }
    if (page) {
      params["page"] = page - 1;
    }
    if (pageSize) {
      params["size"] = pageSize;
    }
    return params;
  }
  retrieveTutorials() {
    const { searchTitle, page, pageSize } = this.state;
    const params = this.getRequestParams(searchTitle, page, pageSize);
    ProfitabilityService.getAll(params)
      .then((response) => {
        const { tutorials, totalPages } = response.data;
        this.setState({
          tutorials: tutorials,
          count: totalPages,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveTutorials();
      }
    );
  }
  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1
      },
      () => {
        this.retrieveTutorials();
      }
    );
  }
  render() {
    const {
        searchTitle,
        tutorials,
        currentTutorial,
        currentIndex,
        page,
        count,
        pageSize,
      } = this.state;
      return (



        <div>
        <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
<div class="col main pt-5 mt-3">
<div class="container ">
        <div className=" row">
        


          <div className="col-md-8">
            <div className="input-group mb-3">


              <input
                type="text"
               
                placeholder="Search by periode"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  class="btn btn-success"
                  type="button"
                  style={{marginLeft: "-20px"}}
                  onClick={this.retrieveTutorials}
                >
                  Search
                </button>
              </div>

              </div>

            </div>





            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary"      onClick={this.calculProfi}
>
                Calculer
              </Button>
             </div>
          </div>
      

          <h4 style={{color:"red"}}>Resultat du calculs des revenues</h4>
          <div >
           
          



            <div class="row">
                <div class="table-responsive " >
             <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Id</th>
                       <th> Expense Value</th>
                       <th> Key</th>
                      <th> Key Value </th>   
                      <th> Label </th>  
                      <th> Region  </th>
                      <th> Periode  </th>
                      <th> Resultat </th>
                        </tr>
                    </thead>

                    <tbody>
          
     
            
              {tutorials &&
             
                tutorials.map((tutorial, index) => (
                <tr>
                  <td
                    className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                  >
                    {tutorial.id}
                   

                    </td>
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.expense_value}
             
                    </td>


                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.key}
                    
                    </td>

                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.key_value}
                    
                    </td>

                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.labelid}
                    
                    </td>


                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.region}
                    
                    </td>


                    
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.periode}
                    
                    </td>



                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.result}
                    
                    </td>





                    </tr>    
                )
                )
                }










</tbody>

</table>


<div className="mt-3">
              {"Items per Page: "}

              <select onChange={this.handlePageSizeChange} value={pageSize} style={{display:"none"}}>
                {this.pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <div style={{marginLeft: "700px"}} > 
              <a href="#" > <i class="fas fa-calculator"></i></a>
              {"Total: "} </div>
           
              <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={this.handlePageChange}
              />

            </div>
        
    </div>
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


