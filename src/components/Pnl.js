import React, { Component } from 'react'
import GraphService from '../services/graphService';
import {  withRouter} from "react-router-dom";
import Chexp from './chexp';


class Pnl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tabpnl: {},
            charge: {},

        }
    }

    componentDidMount(){
        GraphService.getPnlByPeriode(this.state.id).then( res => {
            this.setState({tabpnl: res.data});
        });
        GraphService.getChargeByPeriode(this.state.id).then( res => {
            this.setState({charge: res.data});
        });
        
    }

    render() {
        
        return (
            <div>
                
                <br></br>
                    <h5 class="mt-3 mb-3 text-secondary"> Resultat Pnl { this.state.id}  </h5>
                    <div className = "card-body">
                    <div > 
                          <label style={{ fontWeight:"bold"}}>Produit d'exploitation: </label> . . . . . . . . . . . .  
                             { this.state.tabpnl.produitExploitation } Dt
                        </div>
                        <div >
                          <label>Revenue  : </label> . . . . . . . . . . . .  . . . . . . 
                             { this.state.tabpnl.produitExploitation } Dt
                        </div>
                    <div >
                          <label style={{ fontWeight:"bold",color:"green"}} >Charge exploitation : </label> . . . . . . . . . . . .  
                             { this.state.tabpnl.chargeExploitation } Dt
                             <div >
                             
            <Chexp/>

                        </div>

                        </div>
                        
                            <div >
                          <label style={{ fontWeight:"bold"}}>Résultat d’exploitation  : </label> . . . . . . . . . . . .  
                             { this.state.tabpnl.resultatExploitation } Dt
                        </div>
                       
                            <label> Charge financier nette : </label> . . . . . . . . . . . .
                             { this.state.tabpnl.chargesfinance} Dt
                        
                        <div >
                          <label style={{ fontWeight:"bold"}}>Résultat des activité  : </label> . . . . . . . . . . . .  
                             { this.state.tabpnl.resultatExploitation } Dt
                        </div>
                          
                        <div >
                          <label >  Impôts sur les sociétés  : </label> . . . . . . . . . . . .  
                             { this.state.tabpnl.totalImpot } Dt
                        </div>

                        <div  style={{color:"red",fontWeight:"bold"}}>
                         
                         <label style={{ fontWeight:"bold", color:"black"}}>  Résultat de l’exercice :  </label> . . . . . . . . . . . .  
                         { this.state.tabpnl.resultatExercice  }  

                        </div>


                        </div>

                </div>
        )
    }
}

export default withRouter(Pnl)