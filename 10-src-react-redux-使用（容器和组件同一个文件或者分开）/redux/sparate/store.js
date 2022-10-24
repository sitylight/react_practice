import { legacy_createStore, applyMiddleware } from 'redux';
import {textReducers} from './reducers';
import thunk from 'redux-thunk';

export default legacy_createStore(textReducers, applyMiddleware(thunk));
