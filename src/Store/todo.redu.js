const initialState = {
    todos: [
        {
            title: 'Learn React',
            completed: true,
        },
        {
            title: 'Learn Redux',
            completed: false,
        },
        {
            title: 'Learn React Native',
            completed: false,
        },
    ],
    filteredTodos: [0, 1, 2],
    key: 'all',
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const todostemp = [...state.todos, action.payload];
            const filteredTodostemp = todostemp.map((item, index) => {
                if (state.key === 'all') {
                    return index;
                }
                if (state.key === 'completed' && item.completed) {
                    return index;
                }
                if (state.key === 'notCompleted' && !item.completed) {
                    return index;
                }
            });
            return {
                todos: todostemp,
                filteredTodos: filteredTodostemp,
                key: state.key,
            };
        case 'REMOVE_TODO':
            const todotemp = state.todos.filter(
                (item, index) => index !== action.payload
            );
            const ty = todotemp.map((item, index) => {
                if (state.key === 'all') {
                    return index;
                }
                if (state.key === 'completed' && item.completed) {
                    return index;
                }
                if (state.key === 'notCompleted' && !item.completed) {
                    return index;
                }
            });
            let filtereedTodostemp = ty.filter((item) => item !== undefined);
            return {
                todos: state.todos.filter(
                    (item, index) => index !== action.payload
                ),
                filteredTodos: filtereedTodostemp,
                key: state.key,
            };
        case 'UPDATE_TODO':
            return {
                todos: state.todos.map((item, index) => {
                    if (index === action.payload.index) {
                        return action.payload.todo;
                    }
                    return item;
                }),
                filteredTodos: [...state.filteredTodos],
                key: state.key,
            };
        case 'TOGGLE_STATUS':
            const todos = state.todos.map((item, index) => {
                if (index === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            });
            const temp = todos.map((item, index) => {
                if (state.key === 'all') {
                    return index;
                }
                if (state.key === 'completed' && item.completed) {
                    return index;
                }
                if (state.key === 'notCompleted' && !item.completed) {
                    return index;
                }
            });
            let filteredTodos = temp.filter((item) => item !== undefined);
            console.log(filteredTodos, 'filteredTodostoogle');
            return {
                todos: todos,
                filteredTodos: filteredTodos,
                key: state.key,
            };
        case 'FILTER_TODOS':
            console.log(action.payload, 'action.payload');
            var filt = state.todos.map((item, index) => {
                if (action.payload === 'all') {
                    return index;
                } else if (action.payload === 'completed') {
                    if (item.completed) {
                        return index;
                    }
                } else if (action.payload === 'notCompleted') {
                    if (!item.completed) {
                        return index;
                    }
                }
            });

            return {
                filteredTodos: filt.filter((item) => item !== undefined),
                todos: state.todos,
                key: action.payload,
            };
        case 'LOAD_TODOS':
            var todoss = localStorage.getItem('todos')
                ? JSON.parse(localStorage.getItem('todos'))
                : [];
            // var tep = todoss.todos.todos;
            return {
                todos: todoss.todos.todos,
                filteredTodos: todoss.todos.todos.map((item, index) => index),
                key: 'all',
            };

        default:
            return state;
    }
};
export default todoReducer;
