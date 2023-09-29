import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between items-center  my-2">
      <div className=" font-bold  min-w-[30%]  py-5  border-black">
        <p className="text-2xl">CAF</p>
      </div>
      <div className="flex justify-end items-center grow  py-5">
        <ul className="nav-item ">About</ul>
        <ul className="nav-item">Service</ul>
        <ul className="nav-item">Contact</ul>
        <button className="action-btn">BOOK A TABLE</button>
      </div>
    </div>
  );
};

export default Header;
