import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">HealthManage</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Principal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gestionMedico">Gestión de médicos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sesion">Ingresar sesión</Link>
                                </li>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Organizar
  </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Médico general (consultas)</a>
                                        <a class="dropdown-item" href="#">Médico de urgencias</a>
                                        <a class="dropdown-item" href="#">Médico especialista</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Todos</a>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;