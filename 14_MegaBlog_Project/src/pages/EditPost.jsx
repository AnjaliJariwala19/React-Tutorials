import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';

const EditPosts = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    const { slug } = useParams() // it takes the url parameter as a slug . e.g. product/123 =>slug = 123 

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }

        else {
            navigate('/')
        }

    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container >
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

}

export default EditPosts;

