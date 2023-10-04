export const ADD_PLAYER = 'ADD_PLAYER';

export function playerAdd(newPlayer) {
  return {
    type: ADD_PLAYER,
    payload: { newPlayer },
  };
}
