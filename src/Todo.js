import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    updateTodo,
    toggleStatus,
    filterTodos,
    loadTodos,
    storeTodos,
} from './actions';

const Todo = (props) => {
    console.log(props, 'props');
    const [todo, setTodo] = useState('');

    const [edTodoStatus, setEdTodoStatus] = useState();
    const [edid, setEdid] = useState('');
    const dispatch = useDispatch();
    const todos = props.todos.todos;

    const editTodo = (index) => {
        // console.log(props.todos.todos[index]);
        setTodo(props.todos.todos[index].title);
        setEdid(index);
        setEdTodoStatus(props.todos.todos[index].completed);
    };
    useEffect(() => {
        dispatch(loadTodos());
    }, []);
    
    return (
        <div>
            <h1>Todo</h1>
            <input
                type='text'
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                value={todo}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(todo));
                    setTodo('');
                }}>
                Add
            </button>
            {edid !== '' && (
                <button
                    onClick={() => {
                        dispatch(
                            updateTodo(edid, {
                                title: todo,
                                completed: edTodoStatus,
                            })
                        );
                        setTodo('');
                        setEdid('');
                    }}>
                    Update
                </button>
            )}
            <br />
            <input
                type='radio'
                name='radio'
                value='all'
                checked={props.todos.key === 'all' ? 'checked' : ''}
                onChange={(e) => {
                    dispatch(filterTodos(e.target.value));
                }}
            />{' '}
            All
            <input
                type='radio'
                name='radio'
                value='completed'
                checked={props.todos.key === 'completed'}
                onChange={(e) => {
                    dispatch(filterTodos(e.target.value));
                }}
            />{' '}
            Completed
            <input
                type='radio'
                name='radio'
                value='notCompleted'
                checked={props.todos.key === 'notCompleted'}
                onChange={(e) => {
                    dispatch(filterTodos(e.target.value));
                }}
            />{' '}
            Not Completed
            <br />
            {props.todos.filteredTodos.map((item, index) => {
                // console.log(item, todos[item], 'item');
                return (
                    <div key={index}>
                        <i>{todos[item].title} </i>
                        <button
                            onClick={() => {
                                dispatch(toggleStatus(item));
                            }}>
                            Make it{' '}
                            {todos[item].completed
                                ? 'Not Completed'
                                : 'Completed'}
                        </button>
                        <button
                            onClick={() => {
                                dispatch(removeTodo(index));
                            }}>
                            X
                        </button>
                        <button
                            onClick={(e) => {
                                editTodo(index);
                            }}>
                            edit
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export default connect((state) => state)(Todo);
