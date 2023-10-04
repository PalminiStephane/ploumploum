import {
  ADD_PLAYER,
} from '../actions';
import { getNextId } from '../selectors';

const initialState = {
  players: [],
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PLAYER: {
      // on récupère la valeur du champ (transmis par l'action)
      const { inputValue } = payload;

      // on crée un nouvel objet player
      const newPlayer = {
        id: getNextId(state.players),
        player: inputValue,
      };

      // on ajoute le nouveau joueur à la liste des joueurs existants
      const updatedPlayers = [
        ...state.players,
        newPlayer,
      ];

      // on retourne le nouveau state
      return {
        ...state,
        players: updatedPlayers,
      };
    }

    default:
      return state;
  }
}

export default reducer;
