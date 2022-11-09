import { createStore } from 'redux'
import rootReducer from './reducers/rtReducer.js'


export const store = createStore(rootReducer)