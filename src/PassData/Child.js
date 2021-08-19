import React from 'react';
/*
 * Purpose: The purpose of this component is exchange data between
 *          parent and child component.
 *
 * Version: 1.0
 */

const Child = (props) =>{
    const handleClick = () => {
        props.sendData({name: 'Joe Smith'});
    };
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
export default Child;
