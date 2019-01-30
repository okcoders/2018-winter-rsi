const redux = require('redux')

function addTodo(name) {
  return {
    type: 'ADD_TODO',
    payload: name
  }
}

function markTodoComplete(name) {
  return {
    type: 'MARK_TODO_COMPLETE',
    payload: name
  }
}

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { name: action.payload, complete: false }]
    case 'MARK_TODO_COMPLETE':
      return state.map(todo => todo.name === action.payload ? { ...todo, complete: true }: todo)
    default:
        return state
  }
}

const ourMiddleware = ({dispatch, getState }) => next => action => {
  console.log(action)
  console.log(getState())
  const result = next(action)
  console.log(getState())
  return result
}

const stateFromServerOrCache = [{name: "old to do", complete: false}]

const store = redux.createStore(reducer, stateFromServerOrCache, redux.applyMiddleware(ourMiddleware))

store.dispatch(addTodo("learn redux"))
store.dispatch(addTodo("learn how redux works with react"))
store.dispatch(addTodo("learn how to do async in redux"))
store.dispatch(markTodoComplete("learn redux"))
