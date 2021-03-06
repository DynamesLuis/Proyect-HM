import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../servicios/conexion_axios';


class Perfil extends Component {


    

    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/" role="button">Regresar</Link>
                <div className="cartainfo">
                    <div className="card  border-dark text-center mt-4">

                        <h5 className="card-title text-center">(nombre del médico)</h5>
                        <ul className="list-group list-group-flush">
                            <div className="info">
                                <li className="list-group-item">Cédula profesional: </li>
                                <li className="list-group-item">Universidad de egreso (licenciatura):</li>
                                <li className="list-group-item">Posgrado:</li>
                                <li className="list-group-item">Universidad de posgrado:</li>
                                <li className="list-group-item">Tipo de labor:</li>
                                <li className="list-group-item">Número de teléfono:</li>
                                <li className="list-group-item">Correo electrónico:</li>
                                <li className="list-group-item">Página web:</li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil;