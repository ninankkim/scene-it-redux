import { createStore } from 'redux';
import { searchReducer } from './reducer';

export const store = createStore(
    searchReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );