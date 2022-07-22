import React, { Component } from 'react';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';

class ChampionInRoll extends Component {
  render() {
    return (
      <li className="overflow-hidden five-cost">
        <img className="z-0 absolute max-w-none" src="https://raw.communitydragon.org/pbe/game/assets/ux/tft/championsplashes/tft7_yasuo.tft_set7.png" alt="Yasuo - 5 cost" />
        <ul className="z-20 absolute bottom-9 left-3 text-sm leading-relaxed">
          <li>Mirage</li>
          <li>Warrior</li>
          <li>Dragonmancer</li>
        </ul>
        <div className="z-20 flex w-full absolute bottom-1 px-3 text-shadow font-semibold">
          <span className="flex-1">Yasuo</span>
          <span><img className="inline-block -ml-0.5 -mt-0.5" src={coinIcon} alt="Coins" width="10" /> 5</span>
        </div>
      </li>
    );
  }
}

export default ChampionInRoll;