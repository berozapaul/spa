import React, {useState, useMemo} from 'react';
/*
 * Purpose: The purpose of this component is the ref output.
 *
 * Version: 1.0
 */

const Memo = () =>{
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const factorial = useMemo(() => factorialOf(number), [number]);

    const onChange = event => {
        setNumber(Number(event.target.value));
    };

    return (
        <div>
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
        </div>
    );
};
export default Memo;


function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}
