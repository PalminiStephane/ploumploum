export const ADD_PLAYER = 'ADD_PLAYER';

export function playerAdd(inputValue) {
  return {
    type: ADD_PLAYER,
    payload: { inputValue },
  };
}
