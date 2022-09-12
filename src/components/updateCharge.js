import React, { Component } from 'react'
import GestionkeyService from '../services/GestionkeyService'


import Navbar from './Navbar';
import Sidebar from './Sidebar';

class UpdateCharge extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
           periode: '',
           chargeFinanciere: '',
            
        }
        this.changePeriodeHandler = this.changePeriodeHandler.bind(this);
        this.changeChargeFinabciereHandler = this.changeChargeFinabciereHandler.bind(this);
        this.UpdateCharge = this.UpdateCharge.bind(this);
    }

    componentDidMount(){
        GestionkeyService.getChargeById(this.state.id).then( (res) =>{
            let charge = res.data;
            this.setState({periode: charge.periode,
               chargeFinanciere: charge.chargeFinanciere,
               
            });
        });
    }

    UpdateCharge = (e) => {
        e.preventDefault();
        let charge = {periode: this.state.periode, chargeFinanciere: this.state.chargeFinanciere};
        console.log('charge => ' + JSON.stringify(charge));
        console.log('id => ' + JSON.stringify(this.state.id));
        GestionkeyService.updateCharge(charge, this.state.id).then( res => {
            this.props.history.push('/chargefinanciere');
        });
    }

    changePeriodeHandler= (event) => {
        this.setState({periode: event.target.value});
    }

    changeChargeFinabciereHandler= (event) => {
        this.setState({chargeFinanciere: event.target.value});
    }


    cancel(){
        this.props.history.push('/charges');
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

        <div  style={{color:"#778899"  }}><h2><b>Modifier Charge Financiere</b></h2></div>

                                    <form>
                                        <div className = "form-group">
                                            <label> <h6> Periode:</h6> </label>
                                            <input placeholder="periode" name="periode" className="form-control" 
                                                value={this.state.periode} onChange={this.changePeriodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <h6>Charge Financiere</h6> </label>
                                            <input placeholder="chargeFinanciere" name="ChargeFinanciere" className="form-control" 
                                                value={this.state.chargeFinanciere} onChange={this.changeChargeFinabciereHandler}/>
                                        </div>
                                    
                                        <button className="buttonAj" onClick={this.UpdateCharge}>Enregistrer</button>
                                        <button className="buttonQi" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
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

export default UpdateCharge
