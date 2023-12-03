import { createStore, combineReducers, compose } from "redux"
import calculator from "./calculator/reducers"
import config from "./config/reducers"

const rootReducer = combineReducers({
  calculator,
  config
})

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
