// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./css/navbar.css";
// import { iconName } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/solid";

import React from "react";

const Navbar = () => {
  return (
    <div className="text-gray-900 border-gray-700 p-3 bg-slate-900 text-cyan-100">
      <div className="flex flex-row justify-between pl-4">
        <a href="index.html">
          <div className="flex gap-1 justify-center content-center  border-gray-700">
            <AtSymbolIcon className="h-8 w-8 text-gray-200"></AtSymbolIcon>
            <span className="text-2xl font-bold text-cyan-200">CUERS</span>
          </div>
        </a>
        <div className="flex gap-8 text-md pr-4">
          <a href="" className="hover:text-blue-600">
            About
          </a>
          <a href="" className="hover:text-blue-600">
            Help
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
