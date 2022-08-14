import http from "../http-common";
import axios from 'axios';
const API_URL = 'http://localhost:8006/api/test/';

class ImportService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/import", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
 
  getExpenses(){
    return axios.get(API_URL+'expenses');
}

uploadcle(file, onUploadProgress) {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/importcle", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

getCles(){
  return axios.get(API_URL+'cles');
}


  
}

export default new ImportService();