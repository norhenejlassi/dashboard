

import React, { Component } from "react";
import Pagination from "@material-ui/lab/pagination";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Button,Modal,Input } from 'react-bootstrap';
import GestionkeyService from "../services/GestionkeyService";
import { Redirect ,withRouter} from "react-router-dom";


class Cle extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.addCle = this.addCle.bind(this);
    this.updateClee = this.updateClee.bind(this);
    this.deleteClee = this.deleteClee.bind(this);



    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      page: 1,
      count: 0,
      pageSize: 5,
    };
    this.pageSizes = [2, 5, 6];
  }
  componentDidMount() {
    this.retrieveTutorials();
  }

  deleteClee(id){
    GestionkeyService.deleteEmployee(id).then( res => {
        this.setState({tutorials: this.state.tutorials.filter(clee => clee.id !== id)});
    });
}

  updateClee(id){
    this.props.history.push(`/upd-cle/${id}`);
}
  addCle(){
    this.props.history.push('/ajoutcle');
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
    GestionkeyService.getAll(params)
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
               
                placeholder="Search by Key"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                 class="btn btn-secondary"
               
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
              <Button className="buttonAj"   onClick={this.addCle}
>
                Ajouter
              </Button>
             </div>
          </div>
      

       <h2 style={{color:"#778899"  }}>Table des clées de répartition</h2><br></br>
          <div >
           
          



            <div class="row">
                <div class="table-responsive " >
             <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Id</th>
                       <th> Key</th>
                      <th> Key Value </th>   
                      <th> Region  </th>
                      <th> Action  </th>
                  
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
                    {tutorial.key}
                    
                    </td>

                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.keyvalue}
                    
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

                    <td>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip" style={{color:"#D71DB2"}} onClick={ () => this.updateClee(tutorial.id)}><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}} onClick={ () => this.deleteClee(tutorial.id)} ><i class="material-icons">&#xE872;</i></a>
                                          
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

export default withRouter(Cle)