import React from 'react';
import { RootState, Dispatch } from '../../../store/store';
import { connect } from 'react-redux';
import './styles.css';

class LevelDisplay extends React.PureComponent<Props> {
  render() {
    const { levelState } = this.props
    return (
      <div id="level-display">
        <span className="text-shadow font-semibold text-xl tracking-wider">Lvl. {levelState}</span>
      </div>
    );
  }
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

export default connect(mapState, mapDispatch)(LevelDisplay);