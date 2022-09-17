
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
getresultallRevenue(){
  return axios.get(API_URL+'poucentageRevenue'); 
}
//affichage pnl par periode 
getPnlByPeriode(periode){
  return axios.get(API_URL + 'pnl/' + periode);
}
//affichage pnl par periode 
getChargeByPeriode(periode){
  return axios.get(API_URL + 'charge/' + periode);
}
  
}

export default new GraphService();