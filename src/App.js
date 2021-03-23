import React, { Component } from 'react';
import './App.css';

import Header from './componentes/inicio/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pagprincipal from './paginas/pagprincipal';
import gestionMed from './paginas/gestionMed';
import formularioMed from './componentes/formularios/formularioMed';
import sesion from './paginas/sesion';
import formularioinfo from './componentes/formularios/formularioinfo';
import Horario from './componentes/formularios/horario';
import Perfil from './componentes/información/perfil';


class App extends Component {
  render() {
    return (<Router>
      <div className="container-fluid">
        <Header />
        <Route path='/' exact component={pagprincipal}/>
        <Route path='/gestionMedico' exact component={gestionMed}/>
        <Route path='/medico' exact component={formularioMed} />
        <Route path='/sesion' exact component={sesion} />
        <Route path='/info' exact component={formularioinfo} />
        <Route path='/horario' exact component={Horario} />
        <Route path='/perfil' exact component={Perfil} />
      </div>
    </Router>

    )


  }

}

export default App;
