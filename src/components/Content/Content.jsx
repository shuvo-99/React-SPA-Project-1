import React, { useEffect, useState } from "react";
import "./Content.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Content = () => {
  // const [alert, setAlert] = useState(null);

  const [datas, setData] = useState([]);

  const [readTime, setTime] = useState(0);

  const [bookMarks, setBookmark] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addBookmark = (topic) => {
    if (bookMarks.includes(topic)) {
      let index = bookMarks.indexOf(topic);

      if (index !== -1) {
        // Create a new array without the item using spread operator
        const newArray = [
          ...bookMarks.slice(0, index),
          ...bookMarks.slice(index + 1),
        ];
        setBookmark(newArray);
      }
    } else {
      const newbookmarks = [...bookMarks, topic];
      // console.log(newbookmarks);
      setBookmark(newbookmarks);
    }
  };

  const addTime = (time) => {
    const newTime = parseInt(time) + readTime;
    // console.log(newTime);
    setTime(newTime);
  };

  return (
    <div>
      {/* {alert && <div>{alert}</div>} */}

      <div className="grid grid-cols-3 gap-4 px-10 py-10">
        <div className="col-span-2">
          {datas.map((data) => (
            <Blog
              key={data.id}
              data={data}
              addTime={addTime}
              addBookmark={addBookmark}
            ></Blog>
          ))}
        </div>
        <div className="rightSide_container">
          <Bookmark readTime={readTime} bookMarks={bookMarks}></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Content;
