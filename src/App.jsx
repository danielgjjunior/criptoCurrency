import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mova a definição da função para o escopo do componente
  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('../localhost.json');
      const data = response.data;
      setCryptoData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Chame a função quando o componente for montado
    fetchCryptoData();
  }, []);

  return (
    <div className='main'>
      <div className='upperDiv'>
        <div className='title'>Projeto de Criptomoedas Semana Nacional</div>
        <div className='authors'> Daniel Júnior, Carlos Eduardo, Fabiano, Pedro Henrique</div>
        <button onClick={fetchCryptoData}>Buscar Dados</button>
      </div>

      <div className='downDiv'>
        <span className='marketTitle'>Valor de Mercado</span>
        <div className='cards'>
          {cryptoData.map((crypto, index) => (
            <Card
              key={index}
              criptoName={crypto.coin}
              currentPrice={crypto.currentPrice}
              momentVariation={crypto.momentVariation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
