import React, { Component } from 'react';
import './styles.css';

class RollingChances extends Component {
  render() {
    return (
      <ul id="rolling-chances" className="flex absolute text-xs">
        <li id="r-c-1-cost" className="flex-1 pl-4 relative mr-2"><span className="cost-shape">1 cost</span> 20%</li>
        <li id="r-c-2-cost" className="flex-1 pl-4 relative mr-2"><span className="cost-shape ">2 cost</span> 20%</li>
        <li id="r-c-3-cost" className="flex-1 pl-4 relative mr-2"><span className="cost-shape">3 cost</span> 20%</li>
        <li id="r-c-4-cost" className="flex-1 pl-4 relative mr-2"><span className="cost-shape">4 cost</span> 20%</li>
        <li id="r-c-5-cost" className="flex-1 pl-4 relative mr-2"><span className="cost-shape">5 cost</span> 20%</li>
      </ul>
    );
  }
}

export default RollingChances;