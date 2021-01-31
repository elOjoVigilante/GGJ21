import React, {Component} from 'react';
import './InterfazMenu.css'; //importo el estilo

export default class Menu extends Component{ 

    render(){
        return(
            <div className="menu">
                <div id="boton">
                    <div class="d-grid gap-2 col-1 mx-auto">
                       <a href="#"><button type="button" class="btn btn-success btn-lg" id="btnJugar">JUGAR</button></a> 
                    </div>
                </div>
                <div id="boton2">
                    <div class="d-grid gap-2 col-1 mx-auto">
                       <a href="#"><button type="button" class="btn btn-secondary btn-lg" id="btnComoJuega">¿Cómo se juega?</button></a> 
                    </div>
                </div>
                <div id="version">
                    <h5 className="version">Version 0.1</h5>
                </div>  
            </div>
        );
    }
}