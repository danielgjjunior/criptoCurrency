import './Card.css';
import React from 'react';
import indicator from '../../assets/indicator.png'

import BitcoinIcon from '../../assets/logos/Bitcoin.png';
import EthereumIcon from '../../assets/logos/Ethereum.png';
import BinanceCoinIcon from '../../assets/logos/Binance.png';
import CardanoIcon from '../../assets/logos/Cardano.png';
import SolanaIcon from '../../assets/logos/Solana.png';
import XRPIcon from '../../assets/logos/XRP.png';
import PolkadotIcon from '../../assets/logos/Polkadot.png';
import DogecoinIcon from '../../assets/logos/Dogecoin.png';
import ChainlinkIcon from '../../assets/logos/Chainlink.png';
import LitecoinIcon from '../../assets/logos/Litecoin.png';

// Defina o objeto iconMapping fora do componente
const iconMapping = {
    Bitcoin: BitcoinIcon,
    Ethereum: EthereumIcon,
    "Binance Coin": BinanceCoinIcon,
    Cardano: CardanoIcon,
    Solana: SolanaIcon,
    XRP: XRPIcon,
    Polkadot: PolkadotIcon,
    Dogecoin: DogecoinIcon,
    Chainlink: ChainlinkIcon,
    Litecoin: LitecoinIcon,
};

export default function Card(props) {
    // Acessar a propriedade criptoName diretamente
    const criptoName = props.criptoName;
    const momentVariation = props.momentVariation;
    const currentPrice = props.currentPrice;

    // Use o iconMapping para obter o ícone com base no nome da criptomoeda
    const icon = iconMapping[criptoName];

    return (
        <div className='cardMain'>
            <div className='cardUp'>
                <img src={icon} alt={criptoName} className='icon' />
                <span className='criptoName'>{criptoName}</span>
                <img
                    src={indicator}
                    alt='indicator'
                    className='indicator'
                    style={{ transform: momentVariation < 0 ? 'rotate(90deg)' : 'none' }}
                />
            </div>

            <div className='cardDown'>
                <div className='downLeft'>
                    <span className='currentPrice'>${parseFloat(currentPrice).toFixed(2)}</span>
                    <span className='momentVariation'>{(momentVariation * 100).toFixed(2)} %</span>
                </div>
                <div className='downRight'>
                    
                </div>
            </div>
        </div>
    )
}
