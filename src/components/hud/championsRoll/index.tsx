import React, { Component } from 'react';
import './styles.css';

import ChampionInRoll from '../championInRoll';

class ChampionsRoll extends Component {
  render() {
    return (
      <ul id="champions-roll" className="flex absolute top">
        <ChampionInRoll />
        <ChampionInRoll />
        <ChampionInRoll />
        <ChampionInRoll />
        <ChampionInRoll />
      </ul>
    );
  }
}

export default ChampionsRoll;