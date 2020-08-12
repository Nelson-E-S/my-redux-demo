import React from 'react';
import { useLocation } from 'react-router-dom';

const SinglePost = ({match}) =>{
    const {params: {postID}} = match;
    const post = useLocation().state.data
    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default SinglePost;