import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  // Mova a definição da função para o escopo do componente
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get('http://localhost:5555/get-balances');
      const data = response.data;
      setCryptoData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <div className='main'>
      <div className='upperDiv'>
        <div className='title'>Projeto de Criptomoedas Semana Nacional</div>
        <div className='authors'> Daniel Júnior, Carlos Eduardo, Fabiano, Pedro Henrique</div>
        <button onClick={fetchCryptoData} className='button'>Buscar Dados</button>
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
