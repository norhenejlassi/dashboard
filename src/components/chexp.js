import React, { Component } from 'react'
import GraphService from '../services/graphService';
import {  withRouter} from "react-router-dom";


class Chexp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
        
            charge: [],

        }
    }

    componentDidMount(){
       
        GraphService.getChargeByPeriode(this.state.id).then( res => {
            this.setState({charge: res.data});
        })
    }

    render() {
        
        return (
            <div>
            
                               
                        {
             
             this.state.charge.map((tutorial) => (
                                <tr>
                                <td
                                  
                                  onClick={() => this.setActiveTutorial(tutorial)}
                                 
                                >
                                  {tutorial.label} ...................................  {tutorial.expense}Dt
                                 
              
                                  </td>
                                  </tr>
                                  )
                                  )
                                  }
                                   </div>
                
        )
    }
}

export default withRouter(Chexp)