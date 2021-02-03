import axios from "axios";
import configureMockStore from "redux-mock-store";
import  {loadDataSuccess } from "../actions";
 
import loadDataSaga from "../saga"

const mockStore = configureMockStore();
const initialState = {}
const store = mockStore(initialState)
describe("getPosts loadDataSucess", () => {
    const data = {
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      steet: "Kulas Light",
      city: "Gwenborough",
    };
    it('action', () => {
      store.dispatch(loadDataSuccess(data));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
