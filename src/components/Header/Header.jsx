import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header border-b-2 font-semibold text-3xl">
      <div>Knowledge Cafe</div>
      <div>
        <img src="../../../resources/images/profile.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
