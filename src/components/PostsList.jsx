import React from "react";
import Post from "./Post";

const PostsList = () => {
  return (
    <div>
      <ul>
        <Post author="Thakur Neupane" body="React JS is awesome" />
        <Post author="Ranjana " body="JS is awesome" />
        <Post author="Dipesh Neupane" body="CSS is awesome" />
        <Post author="Daya Neupane" body="I am awesome" />
      </ul>
    </div>
  );
};

export default PostsList;
