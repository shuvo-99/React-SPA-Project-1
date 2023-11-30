import React from "react";
import "./Blog.css";

const Blog = (pros) => {
  console.log(pros);
  const { image, name, topic, time } = pros.data;

  return (
    <div className="bg-red-200">
      <img src={image} alt="" />
      <h5>Name: {name}</h5>
      <h5>Topic: {topic}</h5>
      <h5>Time: {time}</h5>
    </div>
  );
};

export default Blog;
