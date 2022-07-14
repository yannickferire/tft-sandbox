import React, { Component } from 'react';
import './styles.css';

import rollingData from '../../../data/rolling.json';

const lvl = "lvl7"
const lvlData = rollingData[lvl];

class RollingChances extends Component {
  render() {
    return (
      <ul id="rolling-chances" className="flex absolute text-xs">
        {Object.entries(lvlData).map(rollChance => (
          <li id={"r-c-"+rollChance[0]} className="flex-1 pl-4 relative mr-2"><span className="cost-shape">{rollChance[0]}</span> {rollChance[1]}%</li>
        ))}
      </ul>
    );
  }
}

export default RollingChances;