import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userId} = useParams()
    return (
        <>
            <div className='bg-orange-700 text-white text-3xl text-center p-4'>
                User  {userId}
            </div>
        </>
    );
}

export default User;