import axios from "axios";
import React, { useState, useEffect } from "react";

function Csr() {
  const [data, setData] = useState("");
  const comments = async () => {
    const api = await axios(
      "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5"
    );
    const apiData = await api.data;
    setData(apiData);
  };
  useEffect(() => {
    comments();
  }, []);
  return (
    <>
      <h1 className="py-10 px-5">Client Side Rendering (CSR) -Basic</h1>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {data &&
          data.map((d, index) => {
            return (
              <div key={index + 1}>
                <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-blue-900 relative text-white">
                  <h2>comments </h2>
                  <h2>{d.body}</h2>
                  <h2>By</h2>
                  <p>name: {d.name}</p>
                  <h3>email: {d.email}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Csr;
