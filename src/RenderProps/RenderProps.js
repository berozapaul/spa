import React from 'react';
/*
 * Purpose: The purpose of this component is to explain render props
 * using functional component.
 *
 * Version: 1.0
 */

function Renderer(props) {
    console.log(props);
    return (
        props.children()
    );
}

const RenderProps = () =>{
    return (
        <div className="App">
            <Renderer>
                {() => {
                    return (
                        <h1>I am rendered using render props</h1>
                    );
                }}
            </Renderer>
        </div>
    );
};
export default RenderProps;
