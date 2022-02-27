import React from "react";
import VoteButton from "./VoteButton";

function Video({ video, renderComments }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <small>{video.views} Views </small>
      <small>| Uploaded {video.createdAt}</small>
      <br></br>
      <br></br>
      <VoteButton votes={video.upvotes} emoji="👍" />
      <VoteButton votes={video.downvotes} emoji="👎" />
      <br></br>
      <br></br>
    </div>
  );
}

export default Video;
