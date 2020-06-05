import React from 'react';
import NavTempo from './componentes/NavTempo';
import NavPerfil from './componentes/NavPerfil';
import NavFuncionalidades from './componentes/NavFuncionalidades';
import Conteudo from './componentes/Conteudo';
import NavIcones from './componentes/NavIcones';

function App() {
  return (
    <div id="container">
      <NavFuncionalidades />
      <div className="esqueletoTempo">
        <NavTempo />
        <Conteudo />
      </div>
      <div className="esqueletoPerfil">
        <NavPerfil />
        <NavIcones />
      </div>    
          
    </div>
  );
}

export default App;
