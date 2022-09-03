import React, { Component } from 'react'
import GestionkeyService from '../services/GestionkeyService'


import Navbar from './Navbar';
import Sidebar from './Sidebar';

class UpdateImpots extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
           periode: '',
           impots: '',
            
        }
        this.changePeriodeHandler = this.changePeriodeHandler.bind(this);
        this.changeImpotsHandler = this.changeImpotsHandler.bind(this);
        this.UpdateImpots = this.UpdateImpots.bind(this);
    }

    componentDidMount(){
        GestionkeyService.getImpotById(this.state.id).then( (res) =>{
            let impot = res.data;
            this.setState({periode: impot.periode,
               impots: impot.impots,
               
            });
        });
    }

    UpdateImpots = (e) => {
        e.preventDefault();
        let impot = {periode: this.state.periode, impots: this.state.impots};
        console.log('impot => ' + JSON.stringify(impot));
        console.log('id => ' + JSON.stringify(this.state.id));
        GestionkeyService.updateImpots(impot, this.state.id).then( res => {
            this.props.history.push('/impots');
        });
    }

    changePeriodeHandler= (event) => {
        this.setState({periode: event.target.value});
    }

    changeImpotsHandler= (event) => {
        this.setState({impots: event.target.value});
    }


    cancel(){
        this.props.history.push('/impots');
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

        <div  style={{color:"blue"}}><h2><b>Modifier Impot</b></h2></div>

                                    <form>
                                        <div className = "form-group">
                                            <label> <h6> Periode:</h6> </label>
                                            <input placeholder="periode" name="periode" className="form-control" 
                                                value={this.state.periode} onChange={this.changePeriodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <h6>Import</h6> </label>
                                            <input placeholder="impots" name="impots" className="form-control" 
                                                value={this.state.impots} onChange={this.changeImpotsHandler}/>
                                        </div>
                                    
                                        <button  class="buttonAj" onClick={this.UpdateImpots}>Save</button>
                                        <button class="buttonQi" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default UpdateImpots
