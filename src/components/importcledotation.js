import React, { Component } from "react";
import ImportService from "../services/import.service";
import { Button,Modal,Input } from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
 class Importcledotation extends Component {
    constructor(props) {
      super(props);
      this.selectFile = this.selectFile.bind(this);
      this.uploaddotation = this.uploaddotation.bind(this);

  
      this.state = {
        selectedFiles: undefined,
        currentFile: undefined,
        progress: 0,
        message: "",
  
        fileInfos: [],
      };
    }
  
    componentDidMount(){
      ImportService.getClesdotation().then((res) => {
          this.setState({ fileInfos: res.data});
      });
  }

  
    selectFile(event) {
      this.setState({
        selectedFiles: event.target.files,
      });
    }

 

  
    uploaddotation() {
      let currentFile = this.state.selectedFiles[0];
  
      this.setState({
        progress: 0,
        currentFile: currentFile,
      });
  
      ImportService.uploaddotation(currentFile, (event) => {
        
        this.setState({
          progress: Math.round((100 * event.loaded) / event.total),

        });
        window.location.reload(false)
      })
       
        .then((files) => {
          this.setState({
            fileInfos: files.data,
          });
        })
        .catch(() => {
          this.setState({
            progress: 0,
            message: "Could not upload  file!",
            currentFile: undefined,
          });
        });
  
      this.setState({
        selectedFiles: undefined,
      });
    }
  

    render() {
      const {
        selectedFiles,
        currentFile,
        progress,
        message,
        fileInfos,
      } = this.state;
  
      return (
        <div>
        <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
<div class="col main pt-5 mt-3">
<div class="container ">
<div class="row ">
  
          
  <h2 class=" offset-sm-2" style={{color:"#778899"  }}><b>Importer des table</b></h2>

          

          </div>
          <br/>  <br/>  
        <div>
          {currentFile && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}
  
          <label className="btn btn-default">
            <input type="file" onChange={this.selectFile} />
          </label>
  
          <button
                      class="buttonAj"

            disabled={!selectedFiles}
            onClick={this.uploaddotation}
          >
            Upload
          </button>


          <div className="alert alert-light" role="alert">
            {message}
          </div>
  
        


          <div class="row">
                <div class="table-responsive " >
          <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                        <th> id</th>
                       <th> clé</th>
                       <th> pourcentage</th>
                     
                        </tr>
                    </thead>
                
                    <tbody>
          
                                {
                                    this.state.fileInfos.map(
                                        cle => 
                                        <tr >
                                    
                                    <td> { cle.id} </td>  

                                            <td> { cle.cle} </td>   
                                            <td> {cle.pourcentage}</td>

                                      
                                         
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
        </div>
      );
    }
}
export default withRouter(Importcledotation);