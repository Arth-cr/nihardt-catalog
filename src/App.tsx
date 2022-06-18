import "./App.css";
import Basicos from "./components/Basicos";
import Opalas from "./components/Opalas";
import PedrasCorrentes from "./components/PedrasCorrentes";
import PedrasNaturais from "./components/PedrasNaturais";
import SemPedras from "./components/SemPedras";
import Zirconias from "./components/Zirconias";

function App() {
  return (
    <div className="container">
      <div className="Logo">
        <img src="img/logo.png" alt="Nihard Piercer" />
        <p>Nihardt | Catálogo</p>
      </div>

      <div className="text">
        <p>
          Oie! Todas as jóias desse catalogo são em titânio grau implante
          fabricados pela Millennium Jewelry. Por ser um material inerte, isto
          é, compatível com nosso organismo, resistente, leve, livre de níquel
          ou outros metais pesados, é o ideal para ficar em contato constante
          com o corpo. É uma joia pra vida toda. Todas tem rosqueamento interno
          e polimento espelho. São enviadas higienizadas e estéreis, junto com a
          garantia e laudo de composição. Qualquer dúvida me fala ❤️
        </p>
      </div>
      <Basicos />
      <Zirconias />
      <Opalas />
      <PedrasNaturais />
      <SemPedras />
      <PedrasCorrentes />
    </div>
  );
}

export default App;
