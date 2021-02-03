import { postActionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  error: null,
  data: {},
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case action.CREATE_DATA:
      return {
        ...state,
        error: null,
      };
    case postActionTypes.CREATE_DATA_SUCCESS:
      return {
        ...state,
        ...{ data: action.data, error: null },
      };
    case postActionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };
    default:
      return state;
  }
};

export default postReducer;
