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
getAllExpense(params) {
  return http.get("pagiexpense", { params });
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
uploadchargexp(file, onUploadProgress) {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/importcharge", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

uploadReve(file, onUploadProgress) {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/importrevenu", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

uploaddotation(file, onUploadProgress) {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/importcleDotation", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

getCles(){
  return axios.get(API_URL+'cles');
}

getRevenue(){
  return axios.get(API_URL+'revenues');
}
getChargexp(){
  return axios.get(API_URL+'chargexps');
}
getClesdotation(){
  return axios.get(API_URL+'clesdotation');
}
}

export default new ImportService();