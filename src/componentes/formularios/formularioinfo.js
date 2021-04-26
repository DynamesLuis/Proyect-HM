import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class formularioinfo extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/sesion" role="button">Regresar</Link>
                <div className="card  border-dark mt-4">
                    <h4 className="card-header">Información</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="cedula" placeholder="Introducir cédula profesional" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="uniegreso" placeholder="Introducir Universidad de egreso (Licenciatura)" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="posgrado" placeholder="Introducir su tipo de posgrado" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="uniposgrado" placeholder="Introducir Universidad de posgrado" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="labor" placeholder="Introducir tipo de labor en el hospital" />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" name="telefono" placeholder="Introducir número de teléfono" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" name="email" placeholder="Introducir email" />
                            </div>
                            <div className="mb-3">
                                <input type="url" className="form-control" name="paginaweb" placeholder="Introducir página web" />
                            </div>
                        </form>

                    </div>
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
                        <button type="submit" className="btn btn-primary mr-2 mt-2">Aceptar</button>
                    <button type="submit" className="btn btn-primary mt-2">Cancelar</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default formularioinfo;