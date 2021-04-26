import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class formularioMed extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/gestionMedico" role="button">Regresar</Link>
                <div className="card border-dark mt-4">
                    <h5 className="card-header">Agregar Usuario Médico</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="nombre" placeholder="Introducir nombre(s)" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="apellidos" placeholder="Introducir apellido paterno" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="apellidos" placeholder="Introducir apellido materno" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="usuario" placeholder="Introducir usuario" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="contraseña" placeholder="Introducir contraseña" />
                            </div>
                            

                            <button type="submit" className="btn btn-primary mr-2">Aceptar</button>
                            <button type="submit" className="btn btn-primary">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default formularioMed;