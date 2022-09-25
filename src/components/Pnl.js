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
                  
                   
                   


                          
                       
                        <div >
                    <table >
                      
                     
                        <tbody>
                        
                            <tr>
                            < div style={{display:"flex",backgroundColor:"#cfcfcf"}} >
                                        <div  class="col-lg-7 "> <label style={{ fontWeight:"bold"}}>Produit d'exploitation: </label> </div>
                                        <div  class="col-lg-7 "><p  >{ this.state.tabpnl.produitExploitation } Dt</p>  </div>
                            </div> 
                               
                            </tr>
                            <tr>
                            < div style={{display:"flex"}} >
                                    <div  class="col-lg-7 "><label >Revenue:  </label> </div>
                                    <div  class="col-lg-7 "> <p  >    { this.state.tabpnl.produitExploitation } Dt</p></div>
                                    
                            </div>       
                            </tr>
                        

                            <tr>
                            < div style={{display:"flex",backgroundColor:"#cfcfcf"}} >
                                    <div  class="col-lg-7 "><label style={{ fontWeight:"bold"}}>Charge exploitation :  </label> </div>
                                    <div  class="col-lg-7 "> <p  > { this.state.tabpnl.chargeExploitation }</p></div>
                         
                                    
                            </div> 
                            <tr><div >
                             
                             <Chexp/>
                 
                                         </div>  </tr>      
                            </tr>

                            <tr>
                            < div style={{display:"flex",backgroundColor:"#cfcfcf"}} >
                                    <div  class="col-lg-7 "><label style={{ fontWeight:"bold"}}>Résultat d’exploitation :  </label> </div>
                                    <div  class="col-lg-7 "> <p  > { this.state.tabpnl.resultatExploitation } Dt</p></div>
 
                                    
                            </div>       
                            </tr>         

                            <tr>
                            < div style={{display:"flex"}} >
                                    <div  class="col-lg-7 "><label >Charge financier nette:   </label> </div>
                                    <div  class="col-lg-7 "> <p  >  { this.state.tabpnl.chargesfinance} Dt</p></div>
 
                                    
                            </div>       
                            </tr> 

                            <tr>
                            < div style={{display:"flex",backgroundColor:"#cfcfcf"}} >
                                    <div  class="col-lg-7 "><label style={{ fontWeight:"bold"}}> Résultat des activité :   </label> </div>
                                    <div  class="col-lg-7 "> <p  >   { this.state.tabpnl.resultatExploitation } Dt</p></div>
 
                                    
                            </div>       
                            </tr> 
                            <tr>
                            < div style={{display:"flex"}} >
                                    <div  class="col-lg-7 "><label >Impôts sur les sociétés :   </label> </div>
                                    <div  class="col-lg-7 "> <p  > { this.state.tabpnl.totalImpot } Dt</p></div>
 
                                    
                            </div>       
                            </tr> 
                            <tr>
                            < div style={{display:"flex",fontWeight:"bold",color:"green",backgroundColor:"#cfcfcf"}} >
                                    <div  class="col-lg-7 "><label >Résultat de l’exercice :    </label> </div>
                                    <div  class="col-lg-7 "> <p  >     { this.state.tabpnl.resultatExercice  }   Dt</p></div>
 
                                    
                            </div>       
                            </tr> 
                        </tbody>
                    </table>

                    </div>
                        


                        </div>











     
        )
    }
}

export default withRouter(Pnl)