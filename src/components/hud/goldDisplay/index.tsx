import React, { Component } from 'react';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';

class GoldDisplay extends Component {
  render() {
    return (
      <div id="gold-display" className="absolute flex items-center">
        <img className="inline-block mr-3" src={coinIcon} alt="Coins" />
        <span className="text-shadow font-semibold text-xl tracking-wider">20</span>
      </div>
    );
  }
}

export default GoldDisplay;