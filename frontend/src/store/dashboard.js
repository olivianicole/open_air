import { csrfFetch } from './csrf';

const LOAD = '/dashboard/LOAD';
const NEW_POST = '/dashboard/NEW';


const load = (posts) => ({
    type: LOAD,
    posts,
});


const newPost = (post) => ({
    type: NEW_POST,
    post,
})
   



export const getPosts = () => async (dispatch) => {
    
    const response = await fetch(`/api/dashboard`);
    
    if (response.ok) {
        const posts = await response.json();
       
        dispatch(load(posts));
    }
};

// export const getUsers = () => async (dispatch) => {
    
//     const response = await fetch(`/api/dashboard`);

//     if (response.ok) {
//         const users = await response.json();

//         dispatch(load(users));
//     }
// }


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
    
    if (response.ok) {
        const data = await response.json();
        console.log(data.post)
        dispatch(newPost(data.post));
    }
}

export const postImage = (post) => async dispatch => {
    const { title, text, userId, image } = post;
    const formData = new formData();
    formData.append('type', 'image');
    formData.append('title', title);
    formData.append('text', text);
    formData.append('userId', userId)
    if (image) formData.append('image', image);

    const response = await csrfFetch('/api/dashboard/image', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(newPost(data.post));
    }
}


export const postLink = (post) => async dispatch => {
    const { title, text, link, userId } = post;
    const response = await csrfFetch('/api/dashboard/link', {
        method: 'POST', 
        body: JSON.stringify({
            type: 'link',
            title,
            text,
            image:null,
            link,
            video:null,
            userId,
            numLikes: 0
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(newPost(data.post))
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
            newState = [...state, action.post];
            return newState;
        }
        default:
            return state;
    }
};

export default dashboardReducer;


