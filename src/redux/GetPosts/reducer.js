import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  error: false,
  placeholderData: null,
  isLoading:true
};

function reducer(state =initialState, action) {
  console.log(action,"action")
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error  ,isLoading:false},
      };
      case actionTypes.LOAD_DATA:
      return {
        ...state,
        ...{ isLoading: true },
      };
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
         placeholderData: action.data ,isLoading:false ,
      };

    default:
      return state;
  }
}

export default reducer;
