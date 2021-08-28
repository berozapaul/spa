import { useRef } from 'react';
/*
 * Purpose: A custom hook for constructor inside functional component
 *
 * Version: 1.0
 */

const useConstructor = (callBack = () => {}) => {
    const hasBeenCalled = useRef(false);
    if (hasBeenCalled.current) return;
    callBack();
    hasBeenCalled.current = true;
};
export default useConstructor;
