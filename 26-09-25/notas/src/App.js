import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    {nombre:"Fulanito", apellido:"De Tal"},
    {nombre:"Peranito", apellido:"Perez"},
    {nombre:"Meganito", apellido:"Rivera"},
  ];
  return (
    <div className="App">
      <Lista listaestudiantes={estudiantes} />
    </div>
  );
}

export default App;
