import React, { Component } from 'react';
import '../Estilos/login.css';
import imagenusuario from '../imagenes/imagenusuario.png';

class sesion extends Component {
    render() {
        return (
            <dev>
                <div className="wrapper fadeInDown">
                    <div id="formContent">



                        <div className="fadeIn first">
                            <img src={imagenusuario} width="90px" alt="User Icon" />
                        </div>


                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Nombre de Usuario" />
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña" />
                            <input type="submit" class="fadeIn fourth" value="Log In" />
                        </form>


        

                    </div>
                </div>
            </dev>
        )
    }

}
export default sesion;