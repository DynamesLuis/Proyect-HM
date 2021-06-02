import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../servicios/conexion_axios';

class gestionMed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
        this.getUsuarios = this.getUsuarios.bind(this);
    }

    componentDidMount() {
        this.getUsuarios();
    }

    getUsuarios = async () => {
        await Axios.get('buscar')
            .then(res => {
                this.setState({ usuarios: res.data });
              
            }).catch((error) => {
                console.log(error);
            });
    }

    deleteUsuarios = async (idusuarioMedico) => {
        await Axios.delete('eliminar/' + idusuarioMedico)
        this.getUsuarios();
    }


    render() {
        return (
            <div>
                <div>
                    <Link className="btn btn-primary mt-2" to="/medico" role="button">Agregar Médico</Link>
                    <table className="table  mt-4">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">id Usuario</th>
                                <th scope="col">Nombre de usuario</th>
                                <th scope="col">Contraseña</th>
                                <th scope="col">Editar Usuario</th>
                                <th scope="col">Eliminar Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(usuario =>
                                    <tr key={usuario.idusuarioMedico}>
                                        <th>{usuario.idusuarioMedico} </th>
                                        <th>{usuario.nombreUsuario} </th>
                                        <th>{usuario.contraseña} </th>

                                        <th>
                                            <Link className="btn btn-primary"
                                                to={"/editar/" + usuario.idusuarioMedico}
                                                role="button"
                                            >Editar</Link>
                                        </th>

                                        <th>
                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => this.deleteUsuarios(usuario.idusuarioMedico)}
                                            >Eliminar</button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        )
    }
}
export default gestionMed;