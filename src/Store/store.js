import { createStore, combineReducers } from 'redux';
import counterreducer from './counter.redu';
import todoReducer from './todo.redu';

var reducer = combineReducers({
    counterreducer,
    todos: todoReducer,
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
