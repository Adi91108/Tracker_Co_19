import React from "react";
import { FaVirusCovid } from "react-icons/fa6";

const LogoWhite = () => {
  return (
    //  <img src="src/assets/img/logo-white.png" id="logoCovid" alt="Logo"/>
    <h1 className="text-3xl font-bold text-white flex ml-4">
      Covid Tracker{" "}
      <span className="pl-2">
      <FaVirusCovid />
      </span>
    </h1>
  );
};

export default LogoWhite;
