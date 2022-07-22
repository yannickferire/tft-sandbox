import React from 'react';
import { RootState, Dispatch } from '../../../store/store';
import { connect } from 'react-redux';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';

class GoldDisplay extends React.PureComponent<Props> {
	render() {
		const { goldsState } = this.props
		return (
      <div id="gold-display" className="absolute flex items-center">
        <img className="inline-block mr-3" src={coinIcon} alt="Coins" />
        <span className="text-shadow font-semibold text-xl tracking-wider">{goldsState}</span>
      </div>
    );
	}
}

const mapState = (state: RootState) => ({
	goldsState: state.golds,
})

const mapDispatch = (dispatch: Dispatch) => ({
	spend: () => dispatch.golds.spend(2),
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

export default connect(mapState, mapDispatch)(GoldDisplay);

