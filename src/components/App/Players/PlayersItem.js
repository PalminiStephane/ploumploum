import PropTypes from 'prop-types';

function PlayersItem({ player }) {
  console.log({player});
  return (
    <li className="Players-item">
      <p>{player}</p>
    </li>
  );
}

PlayersItem.propTypes = {
  player: PropTypes.string.isRequired,
};

export default PlayersItem;
