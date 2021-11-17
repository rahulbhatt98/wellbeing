import { combineReducers } from 'redux'
import benchmarkReducer from './benchmark'

const rootReducer = combineReducers({
    benchmark: benchmarkReducer
})

export default rootReducer