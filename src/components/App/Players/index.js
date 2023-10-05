import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import PlayersItem from './PlayersItem';
import { getPlayers } from '../../../selectors';

import './style.scss';

function Players() {
  // Récupère la liste des joueurs depuis le store Redux
  const players = useSelector(getPlayers);
  // Crée une référence à l'élément <ul> pour pouvoir le faire défiler
  const playersElement = useRef(null);

  useEffect(() => {
    // Fait défiler l'élément <ul> jusqu'en bas à chaque fois que la liste des joueurs change
    playersElement.current.scroll(0, playersElement.current.scrollHeight);
  }, [players]);

  return (
    <ul
      className="players" // Ajoute la classe CSS "players" à l'élément <ul>
      ref={playersElement} // Associe la référence à l'élément <ul>
    >
      {players.map((player) => (
        // Rend un composant PlayersItem pour chaque joueur dans la liste
        <PlayersItem key={player.id} {...player} />
      ))}
    </ul>
  );
}

export default Players;
