import React from 'react';
import Child from './Child'
/*
 * Purpose: The purpose of this component is exchange data between
 *          parent and child component.
 *
 * Version: 1.0
 */

const Parent = () =>{
    let userSettings = {};
    const getPreferenceData = (params) => {
        userSettings = {...userSettings, ...params};
        console.log(userSettings);
    };

    return (
        <div>
            <h1>Data exchange</h1>
            <Child sendData={getPreferenceData} />
        </div>
    );
};
export default Parent;
