import { createStore } from 'redux';
import {itemReducer} from './reducers/itemReducer.js'
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(itemReducer, devToolsEnhancer());

export default store; 