import React from 'react';
import { RootState, Dispatch } from '../../../store/store';
import { connect, useSelector } from 'react-redux';
import './styles.css';

import rollingData from '../../../data/rolling.json';

const RollingChances = () => {
	const levelState = useSelector((state: RootState) => state.level)
  const lvl = 'lvl'+levelState;
  const lvlData: Array<number> = rollingData[lvl];
	return (
    <ul id="rolling-chances" className="flex absolute text-xs">
      {Object.entries(lvlData).map(rollChance => (
        <li key={rollChance[0]} id={"r-c-"+rollChance[0]} className="flex-1 pl-4 relative mr-2"><span className="cost-shape">{rollChance[0]}</span> {rollChance[1]}%</li>
      ))}
    </ul>
  );
}

const mapState = (state: RootState) => ({
	levelState: state.level,
})

const mapDispatch = (dispatch: Dispatch) => ({
	setLevel: () => dispatch.level.setLevel(),
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

export default connect(mapState, mapDispatch)(RollingChances);