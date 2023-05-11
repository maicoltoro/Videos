import '../src/Styles/App.css';
import { ListaUsuario } from '../src/Componetes/listaUsuario';
import { AgregarUsuario } from '../src/Componetes/AgregarUsuario';
import { EditarUsuario } from '../src/Componetes/EditarUsuario';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Crud con MongoDB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AgregarUsuario">Agregar video</a>
              </li>            
            </ul>
          </div>
        </div>
      </nav>

    <BrowserRouter>
     <Routes>
        <Route path='/' element={<ListaUsuario/>} exact></Route>
        <Route path='/AgregarUsuario' element={<AgregarUsuario/>} exact></Route>
        <Route path='/Editarusuario/:_id' element={<EditarUsuario/>} exact></Route>
     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;