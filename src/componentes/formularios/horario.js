import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Horario extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/sesion" role="button">Regresar</Link>
                <div className="card  border-dark mt-4">
                    <h4 className="card-header">Horario</h4>
                    <div className="card-body">
                        <ul className="EnSal">
                            <li className="liEn">Entrada</li>
                            <li className="liSal">Salida</li>
                        </ul>
                        <div className="input-group">
                            <span className="input-group-text">Lunes</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Martes</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Miercoles</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Viernes</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Sábado</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Domingo</span>
                            <input type="text" aria-label="Lunes" className="form-control" />
                            <input type="text" aria-label="Lunes" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Horario;