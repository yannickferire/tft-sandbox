import React, { Component } from 'react';
import './styles.css';

class ChampionsRoll extends Component {
  render() {
    return (
      <ul id="champions-roll" className="flex absolute top">
        <li className="five-cost"></li>
        <li className="five-cost"></li>
        <li className="five-cost"></li>
        <li className="five-cost"></li>
        <li className="five-cost"></li>
      </ul>
    );
  }
}

export default ChampionsRoll;