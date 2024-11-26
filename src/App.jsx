import "./App.css";
import Post from "./components/Post";

import React from "react";

const App = () => {
  return (
    <main>
      <Post author="Thakur Neupane" body="React JS is awesome" />
      <Post author="Ranjana " body="JS is awesome" />
      <Post author="Dipesh Neupane" body="CSS is awesome" />
      <Post author="Daya Neupane" body="I am awesome" />
    </main>
  );
};

export default App;
