import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import PlayersItem from './PlayersItem';

import { getPlayers } from '../../../selectors';

import './style.scss';

function Players() {
  const players = useSelector(getPlayers);

  const playersElement = useRef(null);

  useEffect(() => {
    playersElement.current.scroll(0, playersElement.current.scrollHeight);
  }, [players]);

  return (
    <ul
      className="players"
      ref={playersElement}
    >
      {players.map((player) => (
        <PlayersItem key={player.id} {...player} />
      ))}
    </ul>
  );
}

export default Players;
