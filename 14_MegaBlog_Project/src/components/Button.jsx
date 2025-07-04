import React from 'react';

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    ...props //for user's additional property
}) => {
    return (
        <button className = {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} {...props}`}>
            {children}
        </button>
    );
}

export default Button;