export const ADD_PLAYER = 'ADD_PLAYER';

export function playerAdd(inputValue) {
  return {
    type: ADD_PLAYER,
    payload: { inputValue },
  };
}

export const SUPP_PLAYER = 'SUPP_PLAYER';

export function playerSupp(id) {
  return {
    type: SUPP_PLAYER,
    payload: { id },
  };
}
