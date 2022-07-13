import React, { Component } from 'react';
import './styles.css';

class LevelDisplay extends Component {
  render() {
    return (
      <div id="level-display">
        <span className="text-shadow font-semibold text-xl tracking-wider">Lvl. 7</span>
      </div>
    );
  }
}

export default LevelDisplay;