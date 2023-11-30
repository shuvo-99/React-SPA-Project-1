import React from "react";
import "./Bookmark.css";

const Bookmark = () => {
  return (
    <div className="rightSide_container">
      <div className="spent_time bg-slate-300 text-center border-2 border-indigo-600">
        <p className="pt-3 text-2xl font-semibold">Spent time on read: min</p>
      </div>
      <div className="bookmark">
        <div>Bookmarked Blogs:</div>
        <div className="bookmark_content">
          Master Microsoft Power Platform and Become an In-Demand!
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
