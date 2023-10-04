import { useSelector } from 'react-redux';
import { getPlayers } from '../../../selectors';
import './style.scss';

function Counter() {
  const players = useSelector(getPlayers);
  const count = players.length;
  let sentence = '';
  if (count === 0) {
    sentence = 'Aucun joueur en jeu...';
  }
  else if (count === 1) {
    sentence = '1 joueur en jeu';
  }
  else {
    sentence = `${count} joueurs en jeu`;
  }
  return (
    <p className="counter">{sentence}</p>
  );
}

export default Counter;
