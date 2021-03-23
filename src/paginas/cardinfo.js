import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cardinfo extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="row mt-4 ">
                    <div className="col-md-4">
                        <div className="card  mt-4">
                            <div className="card-body bg-primary">
                                <img src="..." class="card-img-top-" alt="..."/>
                                <h5 className="card-title text-center">(nombre del médico)</h5>
                                <p className="card-text">Tipo de labor: (urgencias, consulta, especialista)</p>
                                <Link className="btn btn-primary mt-2" to="/perfil" role="button">Ver perfil</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4 mb-4">
                            <div className="card-body bg-primary">
                                <img src="..." class="card-img-top" alt="..."/>
                                <h5 className="card-title text-center">(nombre del médico)</h5>
                                <p className="card-text">Tipo de labor: (urgencias, consulta, especialista)</p>
                                <Link className="btn btn-primary mt-2" to="/perfil" role="button">Ver perfil</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <div className="card-body bg-primary">
                                <img src="..." class="card-img-top" alt="..."/>
                                <h5 className="card-title text-center">(nombre del médico)</h5>
                                <p className="card-text">Tipo de labor: (urgencias, consulta, especialista)</p>
                                <Link className="btn btn-primary mt-2" to="/perfil" role="button">Ver perfil</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Cardinfo;