import reducer, { initialState } from "../reducer";
import {actionTypes} from "../actions"

describe("GetPosts", () => {
it('Load data on successfull fetch ',() =>{
  const mockdata= "test"
  expect(reducer(initialState,{
    type:actionTypes.LOAD_DATA_SUCCESS,
    data:mockdata
  })).toEqual({
    placeholderData:mockdata,
    error: false,
    isLoading: false
  });
});
});