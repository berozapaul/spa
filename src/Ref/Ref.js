import React, {useRef, useEffect} from 'react';
/*
 * Purpose: The purpose of this component is the ref output.
 *
 * Version: 1.0
 */

const Ref = () =>{

  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement.classList.item(0));
  }, []);

  return (
      <div ref={elementRef} className="ad">
        This is div element
      </div>
  );
};
export default Ref;
