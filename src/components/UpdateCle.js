import React, { Component } from 'react'
import GestionkeyService from '../services/GestionkeyService'


import Navbar from './Navbar';
import Sidebar from './Sidebar';

class UpdateCle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            key: '',
            keyvalue: '',
            region: ''
        }
        this.changeKeyHandler = this.changeKeyHandler.bind(this);
        this.changeKeyvalueHandler = this.changeKeyvalueHandler.bind(this);
        this.changeRegionHandler = this.changeRegionHandler.bind(this);
        this.updateclee = this.updateClee.bind(this);
    }

    componentDidMount(){
        GestionkeyService.getChargeById(this.state.id).then( (res) =>{
            let clee = res.data;
            this.setState({key: clee.key,
                keyvalue: clee.keyvalue,
                region : clee.region
            });
        });
    }

    updateClee = (e) => {
        e.preventDefault();
        let clee = {key: this.state.key, keyvalue: this.state.keyvalue, region: this.state.region};
        console.log('clee => ' + JSON.stringify(clee));
        console.log('id => ' + JSON.stringify(this.state.id));
        GestionkeyService.updateClee(clee, this.state.id).then( res => {
            this.props.history.push('/impots');
        });
    }

    changeKeyHandler= (event) => {
        this.setState({key: event.target.value});
    }

    changeKeyvalueHandler= (event) => {
        this.setState({keyvalue: event.target.value});
    }

    changeRegionHandler= (event) => {
        this.setState({region: event.target.value});
    }

    cancel(){
        this.props.history.push('/clees');
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

        <div  style={{color:"#778899"  }}><h2><b>Modifier Clé</b></h2></div>

                                    <form>
                                        <div className = "form-group">
                                            <label>  Key: </label>
                                            <input placeholder="key" name="key" className="form-control" 
                                                value={this.state.key} onChange={this.changeKeyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> clé valeur: </label>
                                            <input placeholder="keyvalue" name="keyvalue" className="form-control" 
                                                value={this.state.keyvalue} onChange={this.changeKeyvalueHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Region: </label>
                                            <input placeholder="region" name="region" className="form-control" 
                                                value={this.state.region} onChange={this.changeRegionHandler}/>
                                        </div>
                                        <button  className='buttonAj' onClick={this.updateClee}>Enregistrer</button>
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

export default UpdateCle
