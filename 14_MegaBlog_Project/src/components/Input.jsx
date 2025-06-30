/* forwardRef: It is a utility function that enables a parent component to receive a ref and "forward" it to a DOM element or another component rendered by its child component. This allows the parent component to directly interact with that specific element or component instance, even if it's deeply nested within the component hierarchy. */

import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            ref= {ref}
            id = {id}
            {...props}/>
        </div>
    );
})

export default Input;
