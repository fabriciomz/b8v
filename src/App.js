import './componentes/css/estilo.css';
import Cartao from './componentes/cartao/Cartao.jsx';




function App() {
  return (

    <div className="geral">
    <div className="App">
      <Cartao desc="Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50" 
      PrAnt="R$ 2.813,99" PrNov="R$ 2.599,00" 
      Parc="259,90" foto="areaImg1" />
      <Cartao desc="Notebook Lenovo IdeaPad 3i, Intel Core i3-10110U, 4GB RAM, 256 GB SSD, Windows 10, 15.6, Prata" 
      PrAnt="R$ 3.813,99" PrNov="2.800,00" 
      Parc="280,00" foto="areaImg2" />
    </div>
    </div>
  );
}

export default App;
