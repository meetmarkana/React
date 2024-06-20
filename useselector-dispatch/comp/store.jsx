import {createStore} from 'redux'
import hello from './reducer'

const store = createStore(hello)

export default store