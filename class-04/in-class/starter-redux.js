var redux = require('redux')

const NewLike = 'NEW_LIKE'
const NewLikes = 'NEW_LIKES'

const store = redux.createStore(reducer, 10)
store.subscribe(() => console.log(store.getState()))

function reducer(state = 0, action) {
  switch(action.type) {
    case NewLike:
      return state + 1
    case NewLikes:
    case 'UNLIKES':
      return state + action.numberOfLikes
    default:
      return state
  }
}

function newLike() {
  return {
    type: NewLike
  }
}

function newLikes(numberOfLikes) {
  store.dispatch({
    type: NewLikes,
    numberOfLikes
  })
}

store.dispatch(newLike())
newLikes(50)
store.dispatch({ type: 'UNLIKES', numberOfLikes: -40 })