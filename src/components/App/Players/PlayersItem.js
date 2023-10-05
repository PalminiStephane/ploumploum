import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { playerSupp } from '../../../actions';

function PlayersItem({ id, player }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(playerSupp(id));
  };
  return (
    <li className="Players-item">
      {player}
      <button
        type="button"
        className="Players-item-button"
        onClick={handleClick}
      >
        X
      </button>
    </li>
  );
}

PlayersItem.propTypes = {
  player: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PlayersItem;
