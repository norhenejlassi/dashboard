import React, { Component } from "react";
import UploadService from "../services/upload-files.service";
import { Button,Modal,Input } from 'react-bootstrap';

import Navbar from './Navbar';
import Sidebar from './Sidebar'
export default class UploadFiles extends Component {
    constructor(props) {
      super(props);
      this.selectFile = this.selectFile.bind(this);
      this.upload = this.upload.bind(this);
  
      this.state = {
        selectedFiles: undefined,
        currentFile: undefined,
        progress: 0,
        message: "",
  
        fileInfos: [],
      };
    }
  
    componentDidMount() {
      UploadService.getFiles().then((response) => {
        this.setState({
          fileInfos: response.data,
        });
      });
    }
  
    selectFile(event) {
      this.setState({
        selectedFiles: event.target.files,
      });
    }
  
    upload() {
      let currentFile = this.state.selectedFiles[0];
  
      this.setState({
        progress: 0,
        currentFile: currentFile,
      });
  
      UploadService.upload(currentFile, (event) => {
        this.setState({
          progress: Math.round((100 * event.loaded) / event.total),
        });
      })
        .then((response) => {
          this.setState({
            message: response.data.message,
          });
          return UploadService.getFiles();
        })
        .then((files) => {
          this.setState({
            fileInfos: files.data,
          });
        })
        .catch(() => {
          this.setState({
            progress: 0,
            message: "Could not upload the file!",
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
  



          
          <div class="col-sm-3 mt-5 mb-4 text-gred">
             <div className="search">
               <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="chercher un document" aria-label="Search"/>
              
               </form>
             </div>    
             </div>  
             <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"blue"}}><h2><b>Liste des documents</b></h2></div>
            
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
            onClick={this.upload}
          >
            Upload
          </button>
  
          <div className="alert alert-light" role="alert">
            {message}
          </div>
  
          <div className="card">
            <div className="card-header">Liste des document</div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}  ><i class="material-icons">&#xE872;</i></a>

                    <a href={file.url}>{file.name}</a>
                  </li>
                ))}
            </ul>
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