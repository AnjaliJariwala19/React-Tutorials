import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
//    const [data,setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/AnjaliJariwala19')
//         .then(response => response.json()
//         .then(data =>{
//             console.log(data)
//             setData(data)
//         }
//         )
// )
//     },[])

const data = useLoaderData();
    return (
        <div className='text-center text-white bg-gray-700 text-3xl p-4 font-bold'>
            <h1>Github Login ID : {data.login}</h1>
            <div className='flex justify-center flex-row m-4'>
                <img src={data.avatar_url} alt="Anjali Jariwala" className=' rounded-full w-50 h-50'/>
                <div className='text-xl font-mono p-5'>
                    <ul className='mt-4 space-y-3'>
                        <li>Name : {data.name}</li>
                        <li>Bio : {data.bio}</li>
                        <li>Public Repositories : {data.public_repos}</li>
                        <li>Location :  {data.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/AnjaliJariwala19')
    return response.json()
}