import React, { useEffect, useState } from "react";
import "./Content.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Content = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 px-10">
      <div className="col-span-2">
        {datas.map((data) => (
          <Blog key={data.id} data={data}></Blog>
        ))}
      </div>
      <div>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
};

export default Content;
