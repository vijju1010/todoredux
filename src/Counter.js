import React from 'react';
import { increment, decrement } from './actions';
import { useSelector, useDispatch, connect } from 'react-redux';

const Counter = (props) => {
    const count = useSelector((state) => state.counterreducer);
    const dispatch = useDispatch();
    // console.log(props);
    return (
        <div>
            Count : {props.counterreducer.count}
            <br />
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};
export default connect((state) => state)(Counter);
