import { useState } from 'react';
import '../App.css';
import Basico from '../json/basicos.json'



function Basicos() {
    const [active, setActive] = useState("")
  return (
    <table>
      
        <caption className="tableRow title">
          Básicos
        </caption>

      <tr className="topicos">
        <td></td>
        <td>Joia</td>
        <td>Espessura</td>
        <td>Tamanho (da haste)</td>
        <td>Preço</td>
      </tr>
      

      {
        Basico.map((item, i) => {

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
              <td>{item.espessura}</td>
              <td>{item.tamanho}</td>
              <td>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
          </tr>
          )
        })
      }
    </table>
  );
}

export default Basicos;
