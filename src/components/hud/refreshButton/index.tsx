import React, { Component } from 'react';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';
import coinInactiveIcon from '../../../assets/images/icons/coin--inactive.png';

class RefreshButton extends Component {
  render() {
    return (
      <button id="refresh-button" className="absolute text-left px-4">
        <span className="text-shadow text-xl font-semibold leading-3">
          Refresh<br/>
          <small><img className="inline-block -ml-0.5 -mt-0.5" src={coinIcon} alt="Coins" width="10" /> 2</small>
        </span>
      </button>
    );
  }
}

export default RefreshButton;