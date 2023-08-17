import React from "react";

const Navbar = () => {
  return (
    <div className="container h-[3rem]">
      <a href="/" className="flex justify-normal items-center">
        <img className="logo mr-[1rem]" src="/suvaye-tech.jpg" alt="logo" />
        <h1 className="font-bold text-xl">Suvaye Dictionary</h1>
      </a>
    </div>
  );
};

export default Navbar;
