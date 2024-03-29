import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Pagination from "@material-ui/lab/pagination";
import { Button,Modal} from 'react-bootstrap';
import CheckButton from "react-validation/build/button";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect ,withRouter} from "react-router-dom";
import GestionkeyService from "../services/GestionkeyService";

import Navbar from './Navbar';
import Sidebar from './Sidebar';



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


 class CalculPnl extends Component {
 
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.calculpnl = this.calculpnl.bind(this);
    this.onChangePeriode= this.onChangePeriode.bind(this);



    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    


    this.state = {
      tutorials: [],
      peride:"",
  
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

  
  calculpnl(){
    GestionkeyService.calculpnl(this.state.periode).then((res) => {
      this.setState({ fileInfos: res.data});
  });
 
  }

  viewPnl(id){
    this.props.history.push(`/pnl/${id}`);
}
  
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  

  }
  onChangePeriode(e) {
    this.setState({
      periode: e.target.value,
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
    GestionkeyService.getAllPnl(params)
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



  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
      loading: true,
    });
    
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      GestionkeyService.calculpnl( this.state.searchTitle).then(() => {
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
    window.location.reload();

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
               
                placeholder="Entrez annéé"
                value={this.state.searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              
               <button
             class="btn btn-secondary"
             type="button"
                  style={{marginLeft: "-20px"}}
                  onClick={this.retrieveTutorials}
                >
                  Search
                </button>

             <Form onSubmit={this.handleSubmit}
                ref={c => {
                  this.form = c;
                }}>
           <div className="input-group-append">
             
                 <button className='buttonAj' style={{marginLeft: "650px"}} onClick={this.calculpnl(this.state.periode)}>
                Calculer
              </button> 
           
              </div>
              <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
              </Form>

              </div>
             
           </div>

            </div>

          </div>
      <br></br>   <br></br>

       <h2 style={{color:"#778899"  }}>Resultat P&L par année</h2><br></br>
          <div >
           
            <div class="row">
                <div class="table-responsive " >
             <table class="table table-striped table-hover table-bordered">
             <thead>
                        <tr>
                        <th> periode</th>
                        <th> produit Exploitation</th>
                       <th> charge Exploitation</th>
                       <th> charges Financiere Nette</th>
                      <th> resultat Avant Impot  </th>
                      <th>resultat Exercice</th> 
                      <th>resultat Exploitation</th> 
                      <th>total Impot</th> 
                
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
                    {tutorial.periode}
                
                    </td>
             
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.produitExploitation}
                    
                    </td>
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.chargeExploitation}
                    
                    </td>
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.chargesfinance}
                    
                    </td>

                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.resultatAvantImpot}
                    
                    </td>
                  
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.  resultatExercice}
                    
                    </td>
                    
                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.resultatExploitation}
                    
                    </td>

                    <td
                     className={
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTutorial(tutorial, index)}
                    key={index}
                   
                  >
                    {tutorial.totalImpot}
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
      );
    }
  }

export default withRouter(CalculPnl)