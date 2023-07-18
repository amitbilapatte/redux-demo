const redux = require("redux");
const createStore = redux.createStore;
console.log(" index.js madhe ahe");
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
}

//REDUCER accepts "(proviousState, action)" and it returns  "newState"
// (proviousState, action) => newState

const initialState = {
  noOfCakes: 4,
  noOfIcecreams: 5,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1 >= 0 ? state.noOfCakes - 1 : "Out Of Stock",
      };
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1 >= 0 ? state.noOfIcecreams - 1 : "Out Of Stock",
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial states", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
