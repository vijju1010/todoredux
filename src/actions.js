export const increment = () => {
    return { type: 'INCREMENT' };
};
export const decrement = () => {
    return { type: 'DECREMENT' };
};

export const addTodo = (todo) => {
    return { type: 'ADD_TODO', payload: { title: todo, completed: false } };
};
export const removeTodo = (id) => {
    return { type: 'REMOVE_TODO', payload: id };
};
export const updateTodo = (index, todo) => {
    return { type: 'UPDATE_TODO', payload: { index, todo } };
};

export const toggleStatus = (index) => {
    return { type: 'TOGGLE_STATUS', payload: index };
};
export const filterTodos = (key) => {
    return { type: 'FILTER_TODOS', payload: key };
};
export const loadTodos = (todos) => {
    return { type: 'LOAD_TODOS', payload: todos };
};

export const storeTodos = (todos) => {
    return { type: 'STORE_TODOS', payload: todos };
};