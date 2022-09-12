import http from "../http-common";
import axios from 'axios';
const API_URL = 'http://localhost:8006/api/test/';

class GraphService {
  
  getannee(){
    return axios.get(API_URL+'annee');
}
getresultbyannee(periode){
    return axios.get(API_URL+' PoucentageChargesExp/'+periode);
}

getresultall(){
  return axios.get(API_URL+'poucentageCharges'); 
}
  
}

export default new GraphService();