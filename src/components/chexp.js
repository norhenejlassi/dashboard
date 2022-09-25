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
                                <tr
                               
                                  
                                  onClick={() => this.setActiveTutorial(tutorial)}
                                 
                                >
                                    < div style={{display:"flex"}} >
                                        <div  class="col-lg-7 "> <label >  {tutorial.label}  </label> </div>
                                        <div  class="col-lg-7 "><p  >   {tutorial.expense} Dt</p>  </div>
                            </div> 
                           
                                 
              
                                  </tr>

                                  
                                  )
                                  )
                                  }
                                   </div>
                
        )
    }
}

export default withRouter(Chexp)