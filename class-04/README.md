# Class 4

resources:
- [getting started](https://redux.js.org/introduction/getting-started)
- [learning resources](https://redux.js.org/introduction/learning-resources)
- [intro course notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
- [intermediate course notes](https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes)
- [glossary](https://redux.js.org/glossary)


store
dispatch(action: Action): void {
  newState = ourReducer(state, action)
}
getState() => currentState
subscribe(fn) => call fn()


action
type Action = {
  type: string,
  payload: {
    name: 'zach'
    group: 'rsi'
    id: 5,
    role: 'admin'
  }
}


reducer:
type AppState = {
  user: string
  numberOfLikes: number
}
function ourReducer(state: AppState, action: Action): AppState 