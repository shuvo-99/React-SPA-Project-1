import React from "react";
import "./Bookmark.css";

const Bookmark = (pros) => {
  const { readTime, bookMarks } = pros;
  // console.log(bookMarks);
  return (
    <div className="rightSide">
      <div className="spent_time bg-slate-300 text-center border-2 border-indigo-600">
        <p className="pt-3 text-2xl font-semibold">
          Spent time on read: {readTime} min
        </p>
      </div>
      <br />
      <div className="bookmark bg-slate-200 px-5 py-10">
        <div className="">Bookmarked Blogs:</div>
        <div className="bookmark_contents pt-10 ">
          {bookMarks.map((topic, index) => (
            <div
              className="bookmark_content py-2 px-3 bg-white mb-5 "
              key={index}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
