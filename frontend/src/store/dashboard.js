const LOAD = '/dash/LOAD';

const load = (list) => ({
    type: LOAD,
    list,
});

export const getPosts = () => async (dispatch) => {
    const response = await fetch(`/api/dashboard`);

    if (response.ok) {
        const posts = await response.json();
        dispatch(load(posts));
    }
};

const initialState = {
    posts: [],
};

const shufflePosts = (posts) => {
    let currentIndex = posts.length
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
    switch (action.type) {
        case LOAD: {
            const allPosts = {};
            action.posts.forEach((post) => {
                allPosts[post.id] = post;
            });
            return {
                ...allPosts,
                ...state,
                posts: shufflePosts(action.post),
            };
        }
        // next case
        default:
            return state;
    }
};

export default dashboardReducer;
