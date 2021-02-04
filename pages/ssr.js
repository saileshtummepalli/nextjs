import React from "react";
import axios from "axios";
function Ssr(props) {
  const comments = props.data;
  return (
    <>
      <h1 className="py-10 px-5">Service Side Rendering(SSR) BASICS</h1>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {comments &&
          comments.map((c, index) => {
            return (
              <div key={index + 1}>
                <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-blue-400 relative">
                  <h2>comments </h2>
                  <h2>{c.body}</h2>
                  <h2>By</h2>
                  <p>name: {c.name}</p>
                  <h3>email: {c.email}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  console.log(typeof window);
  const res = await axios(
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5"
  );
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
};
export default Ssr;
