/* eslint-disable no-unused-vars */
import React from "react";
import "../Blogs/Blogs.css";
import OtherBlogs from "./OtherBlogs";
import BlogData from "./BlogData";

const Blogs = () => {
  return (
    <>
      <div className="skills container my-5">
        <div className="text-center mt-4 skills_heading">Blogs</div>
        <div className="text-center mt-1 mb-3">
          <span className="other_heading">Latest News</span>
        </div>
        <div className="text-center">
          <p className="skills_paragraph mb-5">
            Stay up-to-date, check the latest news from all around the world and
            keep your knowledge Updated.
          </p>
        </div>
        <div className="gridios container my-5">
          {BlogData.map((val, ind) => {
            return (
              <OtherBlogs
                key={ind}
                imgSrc={val.imgSrc}
                avatarImage={val.avatarImage}
                spanName={val.spanName}
                heading={val.heading}
                subHeading={val.subHeading}
                date={val.date}
                subData={val.subData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
