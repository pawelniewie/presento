import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import presentation from './modules/presentation'

export default combineReducers({
  presentation,
  router
})
