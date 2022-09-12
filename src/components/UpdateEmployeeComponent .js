import React, { Component } from 'react'
import UserService from '../services/user.service'


import Navbar from './Navbar';
import Sidebar from './Sidebar';
class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            username: '',
            email: '',
            dep: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDepHandler = this.changeDepHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        UserService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({username: employee.username,
                email: employee.email,
                dep : employee.dep
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {username: this.state.username, email: this.state.email, dep: this.state.dep};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }

    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeDepHandler= (event) => {
        this.setState({dep: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                   <div class="col main pt-5 mt-3">
       <div class="container ">
          <div class="row ">


        <div class="formRegister ">

        <div  style={{color:"#778899"  }}><h2><b>Modifier Utilisateur</b></h2></div>

                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="nom" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="lemail" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Departement: </label>
                                            <input placeholder="Departement" name="dep" className="form-control" 
                                                value={this.state.dep} onChange={this.changeDepHandler}/>
                                        </div>
                                        <button className='buttonAj' onClick={this.updateEmployee}>Enregistrer</button>
                                        <button className='buttonQi' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                    </div>

</div>
</div>

</div>
          </div>

          </div>
 
          </div>
        )
    }
}

export default UpdateEmployeeComponent
