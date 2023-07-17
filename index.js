const redux = require("redux");
const createStore = redux.createStore;
console.log(" index.js madhe ahe");
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//REDUCER accepts "(proviousState, action)" and it returns  "newState"
// (proviousState, action) => newState

const initialState = {
  noOfCakes: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial statse", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
