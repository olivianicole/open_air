// import { csrfFetch } from './csrf';

const LOAD = '/dashboard/LOAD';

const load = (posts) => ({
    type: LOAD,
    posts,
});



export const getPosts = () => async (dispatch) => {
    
    const response = await fetch(`/api/dashboard`);
    console.log('RESPONSE IS HERE:', response);
    if (response.ok) {
        const posts = await response.json();
       
        dispatch(load(posts));
    }
};

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
    console.log('POSTS:', posts)
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
        // next case
        default:
            return state;
    }
};

export default dashboardReducer;


