import axios from "axios";
import http from "../http-common";
import { useParams } from "react-router";

const API_URL = "http://localhost:8006/api/test/";

class GestionkeyService {



//ajout charge financiere
  ajout(periode,chargeFinanciere) {
    return axios.post(API_URL + "AjouterChargesFinanciere", {
   
      periode,
      chargeFinanciere
   
    
     
    });
  }
  //delete charges financiere
  
deleteCharge(chargeId){
  return axios.delete(API_URL + 'charges/' + chargeId);
}
//update charges
updateCharge(charge, chargeId){
  return axios.put(API_URL + 'charges/' + chargeId, charge);
}


  //affiche charge financiere by id
getChargeById(chargeId){
  return axios.get(API_URL + 'charges/' + chargeId);
}

  //affiche charge financiere
 getChargeFinancier(){
    return axios.get(API_URL+'chargesfinanciers');
}

//impots

ajoutImpot(periode,impots) {
  return axios.post(API_URL + "AjouterImpots", {
 
    periode,
    impots
 
  });
}

deleteImpots(impotId){
return axios.delete(API_URL + 'impots/' + impotId);
}
updateImpots(impot, impotId){
return axios.put(API_URL + 'impots/' + impotId, impot);
}


getImpotById(impotId){
return axios.get(API_URL + 'impots/' + impotId);
}

getImpots(){
  return axios.get(API_URL+'impots');
}

//get charge exploitation by periode
getAllCharge(params) {
  return http.get("rechercheexpo", { params });
}


//get charge exploitation by periode
getAllPnl(params) {
  return http.get("recherchepnl", { params });
}
//calcule charge exploitation
 
calculchargeExp(periode){
  return axios.post(API_URL+"totalCharges",{periode});


}



//getChargeExp(periode) {
 // return http.get(`/totalCharges/${periode}`);
//}

calculpnl(periode){
  return axios.post(API_URL+"ImportPnlData",{periode});

}

//ajout cle
register(id, key, keyvalue,region) {
    return axios.post(API_URL + "ajoutkey", {
      id,
      key,
      keyvalue,
      region
     
    });
  }

  getAll(params) {
    return http.get("pagicle", { params });
  }

 // updateKey(clee,key,region,keyvalue){
   // return axios.put(API_URL + 'modifkey/' +  key + "/" + region + "/" + keyvalue,clee);
//}

getCleeById(cleId){
  return axios.get(API_URL + 'clees/' + cleId);
}


updateClee(clee, cleeId){
  return axios.put(API_URL + 'clees/' +  cleeId, clee);
}

deleteEmployee(cleeId){
  return axios.delete(API_URL + 'clees/' + cleeId);
}



}export default new GestionkeyService();
