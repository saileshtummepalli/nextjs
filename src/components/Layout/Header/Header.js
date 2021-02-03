import React from "react";
import Link from "next/link"
function Header(props) {
  return (
    <div data-test="HeaderComponent">
      <div
        className=" py-20 from-blue-500 to-purple-400 bg-gradient-to-r w-full h-64 block">
        <div className="container mx-auto px-6">
          <h2 className=" uppercase font-bold text-2xl text-black">{props.hello} </h2>
          <h3 className="text-2xl mb-8 text-gray-200">{props.letsgo}</h3>
          {props.button && <Link href="/dogs">
          <button className="bg-white font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider">wooof</button>
          </Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
