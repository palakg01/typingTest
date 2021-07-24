import React from "react";

import DetailCard from "./DetailCard";
import Letter from "./Letter";

const Testpage = ({
  chars,
  words,
  speed,
  para,
  timeLeft,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="main">
      <div className="main-left">
        <DetailCard cardname="characters" cardvalue={chars} />
        <DetailCard cardname="words" cardvalue={words} />
        <DetailCard cardname="wpm" cardvalue={speed} />
      </div>
      <div className="main-right">
        <div className="timer-container">
          <p className="timer">
            Time left -{" "}
            <span className="time-left">
              00:{timeLeft > 9 ? timeLeft : `0${timeLeft}`}
            </span>
          </p>
          <p className="timer-text">
            {timeLeft === 60 ? `start typing to begin` : undefined}
          </p>
        </div>
        <div className="textareas">
          <div className="text-left">
            {/* <p>{para}</p> */}
            {testInfo.map((x, index) => {
              return <Letter individualLetter={x} key={index} />;
            })}
          </div>
          <textarea
            placeholder="Type here..."
            className="text-right"
            onChange={(e) => onInputChange(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default Testpage;
