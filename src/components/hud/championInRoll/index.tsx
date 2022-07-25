import React from 'react';
import { RootState, Dispatch } from '../../../store/store';
import { connect } from 'react-redux';
import './styles.css';

import coinIcon from '../../../assets/images/icons/coin.png';

const championName = "Yasuo"
const championCost = 5

class ChampionInRoll extends React.PureComponent<Props> {
  render() {
    const { goldsState } = this.props
    return (
      <li onClick={goldsState >= championCost ? this.props.spend : undefined} className={"overflow-hidden cost-"+championCost}>
        <img className="z-0 absolute max-w-none" src="https://raw.communitydragon.org/pbe/game/assets/ux/tft/championsplashes/tft7_yasuo.tft_set7.png" alt={championName + championCost +" cost"} />
        <ul className="z-20 absolute bottom-9 left-3 text-sm leading-relaxed">
          <li>Mirage</li>
          <li>Warrior</li>
          <li>Dragonmancer</li>
        </ul>
        <div className="z-20 flex w-full absolute bottom-1 px-3 text-shadow font-semibold">
          <span className="flex-1">{championName}</span>
          <span><img className="inline-block -ml-0.5 -mt-0.5" src={coinIcon} alt="Coins" width="10" /> {championCost}</span>
        </div>
      </li>
    );
  }
}

const mapState = (state: RootState) => ({
	goldsState: state.golds,
})

const mapDispatch = (dispatch: Dispatch) => ({
	spend: () => dispatch.golds.spend(championCost),
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

export default connect(mapState, mapDispatch)(ChampionInRoll);
