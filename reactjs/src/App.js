import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './App.css';

import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Informacoes from './components/Informacoes';
import Contato from './components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/sobre' exact component={Sobre} />
        <Route path='/informacoes' exact component={Informacoes} />
        <Route path='/contato' exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
