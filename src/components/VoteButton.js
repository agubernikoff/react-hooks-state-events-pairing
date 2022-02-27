import React, { useState } from "react";

function VoteButton({ votes, emoji }) {
  const [updatedVotes, setUpdatedVotes] = useState(votes);
  function handleClick() {
    setUpdatedVotes(updatedVotes + 1);
  }
  console.log(updatedVotes);
  return (
    <button onClick={handleClick}>
      {updatedVotes}
      {emoji}
    </button>
  );
}

export default VoteButton;
