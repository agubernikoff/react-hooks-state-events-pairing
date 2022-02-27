import React from "react";
import UserComment from "./UserComment";

function Comments({ comments }) {
  console.log(comments);
  const userComments = comments.map((comment) => (
    <UserComment
      key={comment.id}
      user={comment.user}
      comment={comment.comment}
    />
  ));
  return (
    <div>
      <h1>{comments.length} Comments</h1>
      {userComments}
    </div>
  );
}

export default Comments;
