import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (pros) => {
  // console.log(pros);
  const { image, name, topic, time } = pros.data;
  const addBookmark = pros.addBookmark;
  const addTime = pros.addTime;

  return (
    <div className="blog px-2 border-b-2 mb-8">
      <img src={image} alt="" />
      <br />
      <div className="grid grid-cols-3 gap-4">
        <div className="person col-span-2">
          <div className="pe-5">
            <img src="../../../resources/images/boy1.png" alt="" />
          </div>
          <div>
            <p className="font-bold text-lg"> {name}</p>
            <p className="text-sm">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className=" row-span-4 text-right">
          {time} min read{" "}
          <span id="icon" onClick={() => addBookmark(topic)}>
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
        <div className="col-span-2 font-bold text-4xl">{topic}</div>
        <div className="col-span-2">#beginners #programming</div>
        <div
          className="col-span-2"
          onClick={() => addTime(time)}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Mark as read
        </div>
      </div>
      <br />
    </div>
  );
};

export default Blog;
