import http from "../http-common";
import axios from 'axios';
const API_URL = 'http://localhost:8006/api/test/';

class ProfitabilityService {
  
 calculProfi(){
    return axios.post(API_URL+'calcul');

 }
    
  getProfit(){
    return axios.get(API_URL+'profi');
}






  
}

export default new ProfitabilityService();