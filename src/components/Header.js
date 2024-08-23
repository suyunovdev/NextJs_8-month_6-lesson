import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10 shadow-slate-300 ">
      <h1 className="text-3xl font-semibold">Where in the world?</h1>
      <button className="text-base font-medium">Dark Mode</button>
    </div>
  );
};

export default Header;
