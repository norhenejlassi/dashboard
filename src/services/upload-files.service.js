import http from "../http-common";
import axios from 'axios';
const API_URL = 'http://localhost:8006/api/test/';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  
deleteFile(fileId){
  return axios.delete(API_URL + 'employees/' + fileId);
}


  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();