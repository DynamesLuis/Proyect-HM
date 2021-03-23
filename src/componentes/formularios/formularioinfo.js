import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class formularioinfo extends Component{
    render(){
        return(
            <div>
                <Link className="btn btn-primary mt-2" to="/sesion" role="button">Regresar</Link>
                <div className="card  border-dark mt-4">
                    <h4 className="card-header">Información</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="nombre" placeholder="Introducir nombre(s)" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="apellidos" placeholder="Introducir apellidos" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="autorizacion" placeholder="Introducir autorización" />
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
                           
                            <button type="submit" className="btn btn-primary mr-2">Aceptar</button>
                            <button type="submit" className="btn btn-primary ">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default formularioinfo;