import React, { Component } from 'react';
import './styles.css';

import GoldDisplay from '../../components/goldDisplay'

class Hud extends Component {
  render() {
    return (
      <div id="hud" className="justify-self-center self-center mt-auto w-full">
        <GoldDisplay />
      </div>
    );
  }
}

export default Hud;