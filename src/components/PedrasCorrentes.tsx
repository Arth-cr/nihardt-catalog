import { useState } from 'react';
import '../App.css';
import PedrasCorrente from '../json/pingentes-e-correntes.json'



function PedrasCorrentes() {
    const [active, setActive] = useState("")
  return (
    <table>
      
        <caption className="tableRow title pedras-e-correntes">
          Pedras e Correntes
        </caption>

      <tr className="topicos">
        <td></td>
        <td>Joia</td>
        <td>Comprimento</td>
        <td>Tamanho</td>
        <td>Preço</td>
      </tr>
      

      {
        PedrasCorrente.map((item, i) => {

          return (
            <tr className="tableRow" key={item.nome}>
              <td>
                <button className="popupOpen" onClick={() => setActive(item.nome)}>
                    <img src={`img/${item.img}.png`} alt={item.nome} />
                </button>
                {active === item.nome && 
                <div className="containerPopup">
                    <div className="popupClose" onClick={() => setActive("")}></div>
                    <div className="popupImg">
                    <img src={`img/${item.img}.png`} alt={item.nome} />
                        </div>    
                </div>
                    }
              </td>
              <td>{item.nome}</td>
              <td>{item.comprimento}</td>
              <td>{item.tamanho}</td>
              <td>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
          </tr>
          )
        })
      }
    </table>
  );
}

export default PedrasCorrentes;
