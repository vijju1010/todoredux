import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './Store/store';
import { Provider } from 'react-redux';
import Todo, { saveTodos } from './Todo';

store.subscribe(() => {
    console.log(store.getState(), 'store.getState');
    saveTodos(store.getState());
});
function App() {
    return (
        <div className='App'>
            <Provider store={store}>
                <Counter />
                <Todo />
            </Provider>
        </div>
    );
}

export default App;
