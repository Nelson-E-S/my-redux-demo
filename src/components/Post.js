import React from 'react';
import {Link} from 'react-router-dom';

export const Post = ({post}) => (
    <article className="post-excerpt">
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,100)}...</p>
        <Link to={{
            pathname:`/post/${post.id}`,
            state:{data:post}}} className="post-button">
            View Post
        </Link>
    </article>
);