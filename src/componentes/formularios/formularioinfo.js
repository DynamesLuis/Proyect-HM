import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../servicios/conexion_axios';

class formularioinfo extends Component {

    state = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        nivelEstudio: '',
        Especialidad: '',
        cedulaProfesional: '',
        universidad: '',
        ocupacion: '',
        numTelefono: '',
        correoElec: '',
        paginaweb: '',
        usuarioMedico_idusuarioMedico: '',
        editing: false,
        idinfoMedico: '',
    }

    async componentDidMount() {
        const resp = await Axios.get('BuscarOneInf/' + this.props.match.params.idinfoMedico);
        if (this.props.match.params.idinfoMedico) {
            this.setState({
                nombre: resp.data.nombre,
                apellidoPaterno: resp.data.apellidoPaterno,
                apellidoMaterno: resp.data.apellidoMaterno,
                nivelEstudio: resp.data.nivelEstudio,
                Especialidad: resp.data.Especialidad,
                cedulaProfesional: resp.data.cedulaProfesional,
                universidad: resp.data.universidad,
                ocupacion: resp.data.ocupacion,
                numTelefono: resp.data.numTelefono,
                correoElec: resp.data.correoElec,
                paginaweb: resp.data.paginaweb,
                usuarioMedico_idusuarioMedico: resp.data.usuarioMedico_idusuarioMedico,
                editing: true,
                idinfoMedico: this.props.match.params.idinfoMedico,
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newinfo = {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            nivelEstudio: this.state.nivelEstudio,
            Especialidad: this.state.Especialidad,
            cedulaProfesional: this.state.cedulaProfesional,
            universidad: this.state.universidad,
            ocupacion: this.state.ocupacion,
            numTelefono: this.state.numTelefono,
            correoElec: this.state.correoElec,
            paginaweb: this.state.paginaweb,
            usuarioMedico_idusuarioMedico: this.state.usuarioMedico_idusuarioMedico,
        }

        if(this.state.editing){
            await Axios.put('ActualizarInf/'+this.state.idinfoMedico, newinfo)
            window.location.href='/gestioninfo';
        }else{
            await Axios.post('createInf', newinfo);
            this.setState({
                nombre:'',
                apellidoPaterno:'',
                apellidoMaterno:'',
                nivelEstudio: '',
                Especialidad: '',
                cedulaProfesional: '',
                universidad: '',
                ocupacion: '',
                numTelefono: '',
                correoElec: '',
                paginaweb: '',
                usuarioMedico_idusuarioMedico:'',
            });
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
                <Link className="btn btn-primary mt-2" to="/gestioninfo" role="button">Regresar</Link>
                <div className="card border-dark mt-4 mb-4 text-center">
                    <h4 className="card-header">Información</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <p class="card-text">Nombre(s)</p>
                                <input type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={this.state.nombre}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su nombre" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Apellido Paterno</p>
                                <input type="text"
                                    className="form-control"
                                    name="apellidoPaterno"
                                    value={this.state.apellidoPaterno}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su apellido paterno" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Apellido Materno</p>
                                <input type="text"
                                    className="form-control"
                                    name="apellidoMaterno"
                                    value={this.state.apellidoMaterno}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su apellido materno" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Nivel de estudio</p>
                                <input type="text"
                                    className="form-control"
                                    name="nivelEstudio"
                                    value={this.state.nivelEstudio}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su nuvel de estudio" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Especialidad</p>
                                <input type="text"
                                    className="form-control"
                                    name="Especialidad"
                                    value={this.state.Especialidad}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su especialidad médica" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Cédula profesional</p>
                                <input type="text"
                                    className="form-control"
                                    name="cedulaProfesional"
                                    value={this.state.cedulaProfesional}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir cédula profesional" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Universidad de Egreso</p>
                                <input type="text"
                                    className="form-control"
                                    name="universidad"
                                    value={this.state.universidad}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su universidad de egreso" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Ocupación principal (Consultas, Urgencias, Casos especiales)</p>
                                <input type="text"
                                    className="form-control"
                                    name="ocupacion"
                                    value={this.state.ocupacion}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su ocupación en el hospital" />
                            </div>

                            <div className="mb-3 ">
                                <p class="card-text">Número telefono</p>
                                <input type="text"
                                    className="form-control"
                                    name="numTelefono"
                                    value={this.state.numTelefono}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir número de teléfono" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Email</p>
                                <input type="text"
                                    className="form-control"
                                    name="correoElec"
                                    value={this.state.correoElec}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir email" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Página web</p>
                                <input type="text"
                                    className="form-control"
                                    name="paginaweb"
                                    value={this.state.paginaweb}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir página web" />
                            </div>

                            <div className="mb-3">
                                <p class="card-text">Id de usuario (Cuidado con este campo, editar si el admin le indica)</p>
                                <input type="text"
                                    className="form-control"
                                    name="usuarioMedico_idusuarioMedico"
                                    value={this.state.usuarioMedico_idusuarioMedico}
                                    onChange={this.onInputChange}
                                    placeholder="Introducir su id usuario" />
                            </div>
                            <button type="submit" 
                            className="btn btn-primary mr-2 mt-3"
                            onClick={this.onSubmit}
                            >Guardar</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default formularioinfo;