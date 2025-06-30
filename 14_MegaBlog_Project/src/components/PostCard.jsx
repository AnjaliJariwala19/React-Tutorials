import React from 'react';
import appwriteSevices from '../appwrite/config'
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full j mb-4'>
                    <img src={appwriteSevices.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;