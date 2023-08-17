import React from "react";

const Navbar = () => {
  return (
    <section className="container h-[5rem] flex justify-normal items-center">
      <a href="/" className="">
        <img className="logo mr-[1rem]" src="/suvaye-tech.jpg" alt="logo" />
      </a>
      <h1 className="font-bold text-2xl">
        <a href="/"> Suvaye Dictionary</a>
      </h1>
    </section>
  );
};

export default Navbar;
