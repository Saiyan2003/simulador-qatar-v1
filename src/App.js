import './App.css';
//import background_mundial_web from './img/background_mundial_web.png'
import CompCabecera from "./Componentes/CompCabecera";
import CompGrupos from './Componentes/CompGrupos';
import CompRonda1 from "./Componentes/CompRonda1";
import { BrowserRouter } from 'react-router-dom';
import CompRonda2 from './Componentes/CompRonda2';
import CompTabla1 from './Componentes/Tablas/CompTabla1';
import CompRonda3 from './Componentes/CompRonda3';
import CompRonda4 from './Componentes/CompRonda4';
import CompRonda5 from './Componentes/CompRonda5';
import CompRonda6 from './Componentes/CompRonda6';
import CompRonda7 from './Componentes/CompRonda7';
import CompRonda8 from './Componentes/CompRonda8';
import CompTabla8 from './Componentes/Tablas/CompTabla8';
import CompTabla7 from './Componentes/Tablas/CompTabla7';
import CompWelcome from './Componentes/CompWelcome';
import CompTabla6 from './Componentes/Tablas/CompTabla6';
import CompTabla2 from './Componentes/Tablas/CompTabla2';
import CompTabla3 from './Componentes/Tablas/CompTabla3';
import CompTabla5 from './Componentes/Tablas/CompTabla5';
import CompTabla4 from './Componentes/Tablas/CompTabla4';
import CompFaseFinal from './Componentes/CompFaseFinal';

//INTENTAR ADAPTAR LA IMAGEN RESPONSIVE Y CORREGIR CON LO DEL MENU
//COMPRONDA 7 MODIFICAR VALORES

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <CompCabecera />
        <br></br>
        <br></br>
        <CompWelcome/>
        <CompGrupos/>
        <br></br>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CompRonda1 />
              <CompTabla1 />
            </div>
            <div class="carousel-item">
              <CompRonda2 />
              <CompTabla2 />
            </div>
            <div class="carousel-item">
              <CompRonda3 />
              <CompTabla3 />
            </div>
            <div class="carousel-item">
              <CompRonda4 />
              <CompTabla4 />
            </div>
            <div class="carousel-item">
              <CompRonda5 />
              <CompTabla5 />
            </div>
            <div class="carousel-item">
              <CompRonda6 />
              <CompTabla6 />
            </div>
            <div class="carousel-item">
              <CompRonda7 />
              <CompTabla7 />
            </div>
            <div class="carousel-item">
              <CompRonda8 />
              <CompTabla8 />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className='container'>
          <nav className='nav-grupos'>
            <h3>
              FASE FINAL
            </h3>
          </nav>
        </div>
        <br></br><br></br>
        <CompFaseFinal />
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
      </div>
    </BrowserRouter>
  );
}


export default App;
