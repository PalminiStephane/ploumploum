import { useSelector } from 'react-redux';
import './style.scss';
import { getPlayers } from '../../../selectors';

function Ploumploum() {
  // Je récupére l'ensemble des joueurs
  const players = useSelector(getPlayers);
  // Si j'ai pas au moins 2 joueurs, je ne peux pas jouer
  if (players.length < 2) {
    return null;
  }
  // Je choisi un joueur au hasard
  const handleClick = (event) => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    console.log(randomPlayer);
  };
  return (
    <button
      type="button"
      className="ploumploum"
      onClick={handleClick}
    >
      Ploum-Ploum
    </button>
  );
}

export default Ploumploum;
