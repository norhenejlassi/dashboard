import axios from 'axios';
import authHeader from './auth-header';
import http from "../http-common";

const API_URL = 'http://localhost:8006/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  getEmployees(){
    return axios.get(API_URL+'employees');
}

getRoles(){
  return axios.get(API_URL+'roles');
}

createEmployee(employee){
    return axios.post(API_URL, employee);
}

getEmployeeById(employeeId){
    return axios.get(API_URL + 'employees/' + employeeId);
}

updateEmployee(employee, employeeId){
    return axios.put(API_URL + 'employees/' + employeeId, employee);
}

deleteEmployee(employeeId){
    return axios.delete(API_URL + 'employees/' + employeeId);
}
  

searchEmployee(){
  return axios.post(API_URL + 'search' );
}
getAll(params) {
  return http.get("pagiuser", { params });
}

}

export default new UserService();
