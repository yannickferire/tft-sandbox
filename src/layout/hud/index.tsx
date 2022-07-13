import React, { Component } from 'react';
import './styles.css';

import LevelDisplay from '../../components/hud/levelDisplay'
import GoldDisplay from '../../components/hud/goldDisplay'
import XpButton from '../../components/hud/xpButton'
import RefreshButton from '../../components/hud/refreshButton'
import ChampionsRoll from '../../components/hud/championsRoll'

class Hud extends Component {
  render() {
    return (
      <div id="hud" className="justify-self-center self-center mt-auto w-full">
        <LevelDisplay />
        <GoldDisplay />
        <XpButton />
        <RefreshButton />
        <ChampionsRoll />
      </div>
    );
  }
}

export default Hud;