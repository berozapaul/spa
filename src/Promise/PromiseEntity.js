import React, {useEffect, useState} from 'react';
/*
 * Purpose: The purpose of this component is to understand JavaScript  promise.
 *
 * Version: 1.0
 */

const PromiseEntity = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const promiseObj = new Promise((resolve, reject) => {
            if(Math.random() < 0.5) {
                resolve('success');
            } else {
                reject('Error');
            }
        });

        promiseObj.then((status) =>{
            console.log(status);
            setData(status);
        }).catch((error) => {
            console.log(error);
            setData(error);
        }).finally(() => {
            console.log('Promise completed');
        });
    }, []);

    return (
        <>
            <h1>Promise example: {data}</h1>
        </>
    );
};
export default PromiseEntity;
