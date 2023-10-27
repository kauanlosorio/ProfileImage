import Imagem from './img/naruto.png'
import './App.css';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">
      <h1> teste </h1>
      <ProfileImage
      titulo="imagem teste ilustrativa"
      imagem={Imagem}
      alt="teste" />
    </div>
  );
}

export default App;
