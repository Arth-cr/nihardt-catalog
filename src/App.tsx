import './App.css';
import Basicos from './components/Basicos';
import Opalas from './components/Opalas';
import PedrasNaturais from './components/PedrasNaturais';
import SemPedras from './components/SemPedras';
import Zirconias from './components/Zirconias';

function App() {
  return (
    <div className="container">
      <div className="Logo">
        <img src="img/logo.png" alt="Nihard Piercer" />
        <p>Nihardt | Catálogo</p>
      </div>
      <Basicos />
      <Zirconias />
      <Opalas />
      <PedrasNaturais />
      <SemPedras />
    </div>
  );
}

export default App;
