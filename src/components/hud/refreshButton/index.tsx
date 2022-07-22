import React from 'react';
import { RootState, Dispatch } from '../../../store/store';
import { connect } from 'react-redux';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';
import coinInactiveIcon from '../../../assets/images/icons/coin--inactive.png';

class RefreshButton extends React.PureComponent<Props> {
  render() {
    const { goldsState } = this.props
    return (
      <button onClick={goldsState > 1 ? this.props.spend : undefined} id="refresh-button" className="absolute text-left px-4">
        <span className="text-shadow text-xl font-semibold leading-3">
          Refresh<br/>
          <small><img className="inline-block -ml-0.5 -mt-0.5" src={goldsState > 1 ? coinIcon : coinInactiveIcon} alt="Coins" width="10" /> 2</small>
        </span>
      </button>
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

export default connect(mapState, mapDispatch)(RefreshButton);

