import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import Comments from "./Comments";

function App() {
  const [isClicked, setIsClicked] = useState("false");
  function renderComments() {
    setIsClicked(!isClicked);
  }
  function handleClick() {
    renderComments();
  }
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <button onClick={handleClick}>
        {isClicked ? "Hide Comments" : "Show Comments"}
      </button>
      <br></br>
      <hr></hr>
      {isClicked ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
