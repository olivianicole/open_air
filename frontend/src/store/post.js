const NEW_POST = 'dashboard/text';

const newPost = (post) => {
    return {
        type: NEW_POST,
        post
    }
}

export const makePost = (post) => async dispatch => {
    const {type, title, text, image, link, video, userId, numLikes} = post;
    const response = await fetch('/api/dashboard/text', {
        method: 'POST',
        body: JSON.stringify({
            type,
            title,
            text, 
            image,
            link,
            video,
            userId,
            numLikes
        })
    });
    const data = await response.json();
    dispatch(newPost(data.post));
    return response;
}

const initialState = { post: null }

const postReducer = (state = initialState, action ) => {
    let newState;
    switch (action.type) {
        case NEW_POST:
            newState = {};
            newState.post = action.post;
            return newState;
            default:
                return state
    } 
    
}

export default postReducer;