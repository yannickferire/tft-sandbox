import React, { Component } from 'react';
import './styles.css';

import GoldDisplay from '../../components/goldDisplay'
import XpButton from '../../components/xpButton'
import RefreshButton from '../../components/refreshButton'
import ChampionsRoll from '../../components/championsRoll'

class Hud extends Component {
  render() {
    return (
      <div id="hud" className="justify-self-center self-center mt-auto w-full">
        <GoldDisplay />
        <XpButton />
        <RefreshButton />
        <ChampionsRoll />
      </div>
    );
  }
}

export default Hud;