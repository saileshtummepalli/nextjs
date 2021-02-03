import { combineReducers } from 'redux';
import getPostsReducer from "../redux/GetPosts/reducer"
import postReducer  from "../redux/PostQuery/reducer"
export default combineReducers({
    getPostsReducer,
    postReducer
});
//export default getPostsReducer;
