import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../servicios/conexion_axios';

class pagprincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        }
        this.getInfos = this.getInfos.bind(this);
    }

    componentDidMount() {
        this.getInfos();
    }

    getInfos = async () => {
        await Axios.get('buscarInf')
            .then(res => {
                this.setState({ infos: res.data });
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });
    }
    render() {
        const infos = this.state.infos.map((info, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4 card border-primary text-center">
                        <div className="card-header bg-primary">
                            <h4>Medico: {info.nombre} {info.apellidoPaterno} {info.apellidoMaterno}
                            </h4>
                        </div>
                        <div className="card-body">
                            <p>
                                Especialidad: {info.Especialidad}
                            </p>
                            <p>
                                Labor: {info.ocupacion}
                            </p>
                            <p>
                                Contacto: {info.numTelefono}
                            </p>
                            
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        {infos}
                    </div>
                </div>
            </div>
        )
    }
}
export default pagprincipal;