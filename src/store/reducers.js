import { combineReducers } from 'redux'

import Home from './../modules/home/reducers'

const rootReducer = combineReducers({
  home: Home,
})

export default rootReducer
