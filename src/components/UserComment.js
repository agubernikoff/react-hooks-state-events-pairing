import React from "react";

function UserComment({ user, comment }) {
  return (
    <>
      <h2>{user}</h2>
      <p>{comment}</p>
    </>
  );
}

export default UserComment;
