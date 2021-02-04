import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { wrapper } from "../src/store/index";
import { loadData } from "../src/redux/GetPosts/actions";
import { END } from "redux-saga";
import Header from "components/Layout/Header/Header";

function HappyCustomers() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.getPostsReducer.isLoading);
  const placeholderData = useSelector((state) => state.getPostsReducer.placeholderData);
  const error = useSelector((state) => state.getPostsReducer.error);

  return (
    <>
      <div className=" w-full h-full   from-blue-500 to-purple-400 bg-gradient-to-r">
        <Header
          letsgo={"here are the happy hoomans"}
          hello={"you can enquire about the dogs and its Breeds"}
        />
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {loading && <p style={{ color: "red" }}>loading</p>}
          {placeholderData &&
            placeholderData.map((data, index) => {
              return (
                <div key={index + 1}>
                  <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <h2>{data.name}</h2>
                    <h3>{data.email}</h3>
                    <p>{data.phone}</p>
                    <p>
                      {data.address.street} ,{data.address.city}
                    </p>
                  </div>
                </div>
              );
            })}
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(loadData());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default HappyCustomers;