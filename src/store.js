import { createStore, combineReducers } from 'redux';

const reducers = {};

const rootReducer = combineReducers(reducers); //package to a type consumable by createStore;

export const configureStore = () => createStore(rootReducer);
