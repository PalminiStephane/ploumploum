/* eslint-disable import/prefer-default-export */
function getNextId(list) {
  if (!list.length) { // si pas de messages dans le state
    return 1;
  }
  // je cherche l'id le plus élevé
  // je récupère dans un tableau tous les id
  const ids = list.map(({ id }) => id);
  // je cherche la valeur la plus élevée avec `Math.max`
  // attention : `Math.max` accepte comme argument ule LISTE DE VALEURS
  // j'utilise la _Spread syntax_ pour déverser mes valeurs
  // const arr = [1, 3, 9];
  // ...arr → 1 3 9
  const maxId = Math.max(...ids);

  // je retourne cet id + 1
  return maxId + 1;
}

function getPlayers(state) {
  return state.players;
}

export { getNextId, getPlayers };
