import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../servicios/conexion_axios';

class Cardinfo extends Component {

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
              
            }).catch((error) => {
                console.log(error);
            });
    }

    deleteInfos = async (idinfoMedico) => {
        await Axios.delete('eliminarInf/' + idinfoMedico)
        this.getInfos();
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/info" role="button">Agregar info</Link>
                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Nivel estudio</th>
                            <th scope="col">Especialidad</th>
                            <th scope="col">Ocupación</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.infos.map(infos =>
                                <tr key={infos.idinfoMedico}>
                                    <th>{infos.nombre} </th>
                                    <th>{infos.apellidoPaterno} </th>
                                    <th>{infos.apellidoMaterno} </th>
                                    <th>{infos.nivelEstudio} </th>
                                    <th>{infos.Especialidad} </th>
                                    <th>{infos.ocupacion} </th>
                                    
                                    <th><Link class="btn btn-primary" 
                                    to={"/editinfo/"+infos.idinfoMedico} 
                                    role="button"
                                    >Editar</Link></th>

                                    <th><button type="button"
                                     className="btn btn-danger"
                                     onClick={()=>this.deleteInfos(infos.idinfoMedico)}
                                     >Eliminar</button></th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Cardinfo;