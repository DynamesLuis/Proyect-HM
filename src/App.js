import React, { Component } from 'react';
import './App.css';

import Header from './componentes/inicio/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pagprincipal from './paginas/pagprincipal';
import gestionMed from './paginas/gestionMed';
import formularioMed from './componentes/formularios/formularioMed';
import sesion from './paginas/sesion';
import formularioinfo from './componentes/formularios/formularioinfo';
import Perfil from './componentes/información/perfil';
import Cardinfo from './paginas/cardinfo';

class App extends Component {
  render() {
    return (<Router>
      <div className="container-fluid">
        <Header />
        <Route path='/' exact component={pagprincipal}/>
        <Route path='/gestionMedico' exact component={gestionMed}/>
        <Route path='/medico' exact component={formularioMed} />
        <Route path='/editar/:idusuarioMedico' exact component={formularioMed} />
        <Route path='/sesion' exact component={sesion} />
        <Route path='/info' exact component={formularioinfo} />
        <Route path='/editinfo/:idinfoMedico' exact component={formularioinfo} />
        <Route path='/perfil' exact component={Perfil} />
        <Route path='/consulperfil/:idinfoMedico' exact component={Perfil} />
        <Route path='/gestioninfo' exact component={Cardinfo} />
      </div>
    </Router>

    )


  }

}

export default App;
