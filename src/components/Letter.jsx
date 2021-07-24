import React from "react";

const Letter = ({ individualLetter }) => {
  // const status = individualLetter.status can be writtten as follow
  const { status } = individualLetter;

  // let statusClass;
  // if (status==="correct"){statusClass="letter-correct"}
  // else if()...
  //instead can do the follwing

  const statusClass = {
    correct: "letter-correct",
    incorrect: "letter-incorrect",
    notAttempted: "letter-notAttempted",
  }[status]; //dict key-values called for status

  return (
    <span className={`letter ${statusClass}`}>{individualLetter.letter}</span>
  );
};

export default Letter;
