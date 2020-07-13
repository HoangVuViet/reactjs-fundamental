// Actions
const ADD_USER = (payload) => {
  return { type: 'ADD_USER', payload: payload };
};
const UPDATE_USER = (payload) => {
  return { type: 'UPDATE_USER', payload: payload };
};
//Reducers
let id = 1;
const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: id++,
          name: action.payload.name,
          age: action.payload.age,
          job: action.payload.job,
        },
      ];
    case 'UPDATE_USER':
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        } else {
          return {
            ...user,
            name: action.payload.name || user.name,
            age: action.payload.age || user.age,
            job: action.payload.job || user.job,
          };
        }
      });
    default:
      return state;
  }
};
//Store
let { createStore, applyMiddleware } = Redux;
const store = createStore(user, []);
// console.log(store.getState());
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(ADD_USER({ name: 'Hoang Vu', age: 20, job: 'Sudent' }));
// store.dispatch(ADD_USER({ name: 'Hoang', age: 2, job: 'Stuent' }));
// store.dispatch(ADD_USER({ name: 'Vu', age: 0, job: 'Studet' }));
// store.dispatch(
//   UPDATE_USER({ id: 2, name: 'Vu Viet', age: 24, job: 'Student' })
// );

// console.log(store.getState());
