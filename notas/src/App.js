
import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let estudiantes = [
    { nombre: "Fulanito", apellido: "De Tal" },
    { nombre: "Peranito", apellido: "Pérez" },
    { nombre: "Menganito", apellido: "Rivera" },
    { nombre: "Jerónimo", apellido: "Arroyave" },
    { nombre: "Juan", apellido: "Salgado" },
    { nombre: "Johan", apellido: "Vásquez" },
    { nombre: "Simón", apellido: "Ávila" },
    { nombre: "Dylan", apellido: "Ocampo" },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/estudiantes'
                element={<Lista listaestudiantes={estudiantes} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
