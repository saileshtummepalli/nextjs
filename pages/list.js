import React, { useState } from "react";

import axios from "axios";
function List({ listOfDogs }) {
  const [show, setShow] = useState(true);
  
  const handleBreedPhoto = (r) => {
    setShow(false);
    
  };
  const hideHandleBreedPhoto = (r) =>{
      setShow(true)
  }
  return (
    <div>
      <h1>Breed List</h1>
      {listOfDogs &&
        Object.keys(listOfDogs.message).map((r, index) => {
          return (
            <div key={index}>
               <div className="rounded bg-blue-200 w-64 p-2">
                <div className="flex items-center   cursor-pointer hover:bg-white text-gray-700 hover:text-gray-900 px-3 py-1">
                  <h1 className="flex-1 text-sm font-mono">{r}</h1>
                  {show ? 
                  <button
                    className="py-1 px-2 bg-gray-400 rounded uppercase text-xs font-bold text-white hover:bg-teal-500"
                    onClick={() => handleBreedPhoto(r)}
                  >
                    +
                  </button> :<button
                  className="py-1 px-2 bg-gray-400 rounded uppercase text-xs font-bold text-white hover:bg-teal-500"
                  onClick={() => hideHandleBreedPhoto(r)}
                >
                  -
                </button>}
                </div>
              </div> 
              
            </div>
          );
        })}
    </div>
  );
}

List.getInitialProps = async (ctx) => {
  const res = await axios("https://dog.ceo/api/breeds/list/all");
  const json = await res.data;
  return { listOfDogs: json };
};

export default List;
