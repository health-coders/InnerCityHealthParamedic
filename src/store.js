import {createStore, combineReducers} from 'redux';
import {citasPendientes} from './reducers';

const reducers = {
    citasPendientes
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
