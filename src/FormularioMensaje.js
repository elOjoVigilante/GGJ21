import React, {Component} from 'react';
import './FormularioMensaje.css';


export default class Formulario extends Component{

    render(){
        
        return(
            <div className="menu">
                <div id="boton">
                    <div class="d-grid gap-2 col-1 mx-auto">
                       <a href="#"><button type="button" class="btn btn-success btn-lg" id="btnJugar">JUGAR</button></a> 
                    </div>
                </div>
                <div id="boton2">
                    <div className="mensaje">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Añadir mensaje secreto</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" id="modalHeader">
                                    <h5 class="modal-title" id="exampleModalLabel">Mensaje secreto</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Tu mensaje:</label>
                                            <textarea class="form-control" id="message-text"required></textarea>
                                        </div>
                                        <div class="row">
                                            <div class="col" id="botones">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrar">Cerrar</button>
                                                <button type="submit" class="btn btn-primary">Enviar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>  
            </div>
                </div>
                <div id="version">
                    <h5 className="version">Version 0.1</h5>
                </div>  
            </div>
            
        );
    }
}