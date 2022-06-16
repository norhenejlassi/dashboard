import React, { Component } from 'react'
import UserService from '../services/user.service'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        UserService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detail Employer</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nom Employer: </label>
                            <div> { this.state.employee.username }</div>
                        </div>
                        <div className = "row">
                            <label>Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> Departement: </label>
                            <div> { this.state.employee.dep}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
