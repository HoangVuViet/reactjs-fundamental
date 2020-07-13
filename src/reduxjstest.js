import { createStore } from 'redux';

let initialState = {
  title: 'Kind of Blue',
  artist: 'Miles Davis',
  year: 1959,
};
function reducer(state, action) {
  return state;
}
let store = createStore(reducer, initialState);
let state = store.getState();
console.log(state);
