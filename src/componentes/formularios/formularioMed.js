import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../servicios/conexion_axios';

class formularioMed extends Component {

    state = {
        nombreUsuario: '',
        contraseña: '',
        editing: false,
        idusuarioMedico: '',
    }

    async componentDidMount() {
        const resp = await Axios.get('BuscarOne/' + this.props.match.params.idusuarioMedico);
        if (this.props.match.params.idusuarioMedico) {
            this.setState({
                nombreUsuario: resp.data.nombreUsuario,
                contraseña: resp.data.contraseña,
                editing: true,
                idusuarioMedico: this.props.match.params.idusuarioMedico,
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newusuario = {
            nombreUsuario: this.state.nombreUsuario,
            contraseña: this.state.contraseña,
        }
        if (this.state.editing) {
            await Axios.put('Actualizar/' + this.state.idusuarioMedico, newusuario);
            window.location.href='/gestionMedico';
        } else {
            await Axios.post('create', newusuario);
            this.setState({
                nombreUsuario: '',
                contraseña: '',
            })
        }
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/gestionMedico" role="button">Regresar</Link>
                <div className="card border-dark mt-4">
                    <h5 className="card-header">Agregar Usuario Médico</h5>
                    <div className="card-body">
                        <form>

                            <div className="mb-3">
                                <input type="text"
                                    className="form-control"
                                    name="nombreUsuario"
                                    value={this.state.nombreUsuario}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir usuario" />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                    className="form-control"
                                    name="contraseña"
                                    value={this.state.contraseña}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir contraseña" />
                            </div>


                            <button type="submit"
                                className="btn btn-primary mr-2"
                                onClick={this.onSubmit}
                            >Aceptar</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default formularioMed;