//justing testing with axios
import axios from 'axios';

//Create Redux action types
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPosts = () => ({
    type: GET_POSTS
});
export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
});
export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
});

export function fetchPosts(){
    return async (dispatch) => {
        dispatch(getPosts())

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                                        .then(res=>res.data)//fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response;//.json();  //if using axios you won't need to call the json method as long as you specifically grab the data from the axios response like in the previous line

            dispatch(getPostsSuccess(data));
        } catch (error){
            dispatch(getPostsFailure());
        };
    };
};