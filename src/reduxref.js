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
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(ADD_USER({ name: 'Hoang Vu', age: 20, job: 'Sudent' }));
store.dispatch(ADD_USER({ name: 'Hoang', age: 2, job: 'Stuent' }));
store.dispatch(ADD_USER({ name: 'Vu', age: 0, job: 'Studet' }));
store.dispatch(
  UPDATE_USER({ id: 2, name: 'Vu Viet', age: 24, job: 'Student' })
);

// console.log(store.getState());
// App state: a plain object with many keys or "slices"
{
  todos: [{
      text: 'Eat food',
      completed: true
  }, {
      text: 'Exercise',
      completed: false
  }],
  visibilityFilter : 'SHOW_COMPLETED'
}
// Actions: plain objects with a "type" field
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

//This is the store we create with redux's createStore method
const store = createStore(todoApp, {})

// Provider is given the store as a prop
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-node')
)
import {createStore, applyMiddleware} from "redux";

// Middleware written as ES5 functions
function middleware1(storeAPI) {
    return function(next) {
        return function(action) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here
        }
    }
}

// Same thing, but written as ES6 arrow functions:
const middleware2 = storeAPI => next => action => {
    // Do work here
}

const logger = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}

const middlewareEnhancer = applyMiddleware(middleware1, middleware2, logger)
const store = createStore(rootReducer, preloadedState, middlewareEnhancer);