import { combineReducers } from 'redux';
import reducer from "../redux/GetPosts/reducer"
import postReducer  from "../redux/PostQuery/reducer"
export default combineReducers({
    reducer,
    postReducer
});
