import { createStore, combineReducers } from 'redux';
import { todos} from './todos/reducers';

const reducers = {todos,};

const rootReducer = combineReducers(reducers); //package to a type consumable by createStore;

export const configureStore = () => createStore(rootReducer);
