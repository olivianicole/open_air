import { csrfFetch } from './csrf';

const LOAD = '/dashboard/LOAD';
const NEW_POST = 'dashboard/NEW';
const ADD_ONE = 'dashboard/ADD_ONE';

const load = (posts) => ({
    type: LOAD,
    posts,
});

const addOnePost = post => ({
    type: ADD_ONE,
    post
})

const newPost = (post) => {
    return {
        type: NEW_POST,
        post
    }
}



export const getPosts = () => async (dispatch) => {
    
    const response = await fetch(`/api/dashboard`);
    
    if (response.ok) {
        const posts = await response.json();
       
        dispatch(load(posts));
    }
};


export const makePost = (post) => async dispatch => {
    const { title, text,  userId} = post;
    const response = await csrfFetch('/api/dashboard/text', {
        method: 'POST',
        body: JSON.stringify({
            type: 'text',
            title,
            text, 
            image: null,
            link: null,
            video: null,
            userId,
            numLikes: 0
        })
    });
    console.log('MAKEPOST RESPONSE:', response)
    if (response.ok) {
        const data = await response.json();
        dispatch(newPost(data.post));
    }
}



const initialState = [];

const shufflePosts = (posts) => {
    let currentIndex = posts.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = posts[currentIndex];
        posts[currentIndex] = posts[randomIndex];
        posts[randomIndex] = temporaryValue;
    }
    return posts;
}

const dashboardReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            const newPosts = shufflePosts(action.posts)
            newState = [...state, ...newPosts];
            return newState;
        }
        case NEW_POST: {
            newState = [... state, action.post, ]
            return newState;
        }
        case ADD_ONE: {
            if (!state[action.post]) {
                const newState = [...state, action.post]
            }
        }
        default:
            return state;
    }
};

export default dashboardReducer;


