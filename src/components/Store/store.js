import { createStore } from 'redux';
import {itemReducer} from './reducers/itemReducer.js'

const Store = createStore(itemReducer);

export default Store; 