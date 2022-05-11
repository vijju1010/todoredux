// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actions';
const Todo = (props) => {
    console.log(props, 'props');
    const [todo, setTodo] = useState('');
    const [edid, setEdid] = useState('');
    const dispatch = useDispatch();
    const editTodo = (index) => {
        setTodo(props.todos.todos[index]);
        setEdid(index);
    };

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
            <br />
            <input type='radio' name='radio' value='all' /> All
            <input type='radio' name='radio' value='completed' /> Completed
            <input type='radio' name='radio' value='notCompleted' /> Not
            Completed
            {edid !== '' && (
                <button
                    onClick={() => {
                        dispatch(updateTodo(edid, todo));
                        setTodo('');
                        setEdid('');
                    }}>
                    Update
                </button>
            )}
            {props.todos.todos.map((item, index) => {
                return (
                    <div key={index}>
                        <i>{item} </i>
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

export default connect((state) => state)(Todo);