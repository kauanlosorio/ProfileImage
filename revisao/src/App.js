import Imagem from './img/celular.png'
import './App.css';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">
      <h1> teste </h1>
      <ProfileImage
      nome="Celular"
      imagem={Imagem}
      alt="teste" 
      preco="2.000"
      descricao="muito bom"
      caracteristicas="celular muito bom e barato"
      />
    </div>
  );
}

export default App;
