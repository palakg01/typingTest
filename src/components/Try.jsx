import React from "react";

const Try = ({ chars, words, speed, retryFunction }) => {
  return (
    <div className="try-again-container">
      <p className="test-results">
        <u>Test Results</u>
      </p>
      <div className="score">
        <p>
          <b>Characters:</b> {chars}
        </p>
        <p>
          <b>Words: </b>
          {words}
        </p>
        <p>
          <b>Speed: </b>
          {speed} wpm
        </p>
      </div>
      <div className="share-btns">
        <button className="share-btn retry" onClick={retryFunction}>
          Retry
        </button>
        <button
          className="share-btn share"
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=https://react-y2revw.stackblitz.io",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
        >
          Share
        </button>
        <button
          className="share-btn tweet"
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?url=https://react-y2revw.stackblitz.io&text=Checkout+this+amazing+typing+test!+++https://react-y2revw.stackblitz.io",
              "Twitter"
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Try;
