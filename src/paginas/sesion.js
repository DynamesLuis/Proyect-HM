import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class sesion extends Component {
    render() {
        return (
            <div>
                <div className="card border-dark mt-4">
                    <h5 className="card-title ml-3">Iniciar Sesión</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="disabledTextInput" className="form-label">Usuario</label>
                                <input type="text" id="disabledTextInput" className="form-control"/>
    </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <button type="submit" className="btn btn-primary mr-2">Entrar</button>
                                <button type="submit" className="btn btn-primary mr-2">Cancelar</button>
                                <Link className="btn btn-primary mr-2" to="/info" role="button">Boton de prueba (ir al formulario info)</Link>
                                
                                
                        </form>
                    </div>
                    </div>
                </div>
        )
    }
}
export default sesion;