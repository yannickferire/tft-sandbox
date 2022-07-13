import React, { Component } from 'react';
import './styles.css';

import coinInactiveIcon from '../../../assets/images/icons/coin--inactive.png';

class XpButton extends Component {
  render() {
    return (
      <button id="xp-button" className="absolute text-left px-4 inactive-btn">
        <span className="text-shadow text-xl font-semibold leading-3">
          Buy XP<br/>
          <small><img className="inline-block -ml-0.5 -mt-0.5" src={coinInactiveIcon} alt="Coins" width="10" /> 4</small>
        </span>
      </button>
    );
  }
}

export default XpButton;