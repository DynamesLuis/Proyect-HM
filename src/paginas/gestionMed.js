import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class gestionMed extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/medico" role="button">Agregar Médico</Link>
                <table className="table  mt-4">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Nombre de usuario</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Correo electrónico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Antony</td>
                            <td>Mark123</td>
                            <td>MarkAnt1978</td>
                            <td>Mark_Ant@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
        

        )
    }
}
export default gestionMed;