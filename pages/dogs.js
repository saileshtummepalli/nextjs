import React from "react";
import axios from "axios";

function Dogs({ dogs }) {
  return (
    <div>
      <div className=" w-full flex  from-blue-500 to-purple-400 bg-gradient-to-r">
        <main className="w-full overflow-y-auto">
          <div className="px-10 mt-5">
            <span className="uppercase font-bold text-2xl text-white">
              Here we are hooman
            </span>
          </div>
          <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {dogs &&
              dogs.message.map((r, index) => {
                return (
                  <div key={index + 1}>
                    <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                      <img className="w-full h-45" src={r} alt="image" />
                      <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300"></div>
                      <div className="desc p-4 text-gray-800">
                        {r.split("/")[4]}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}

Dogs.getInitialProps = async (ctx) => {
  const res = await axios("https://dog.ceo/api/breed/hound/images/random/6");
  const json = await res.data;
  return { dogs: json };
};

export default Dogs;
