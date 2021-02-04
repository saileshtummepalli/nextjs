import Navbar from "components/Layout/Navbar/navbar";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Swr() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/albums",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <>
    <div class="mt-0 border-t-2 border-gray-300 flex flex-col items-center"></div>
      <p>basic Swr Fetching</p>
      <div>
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {data.map((r, index) => {
            return (
              <div key={index + 1}>
                <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-blue-100 relative">
                  <ul>
                    <li>Id: {r.id} </li>
                    <li>Title: {r.title}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Swr;
