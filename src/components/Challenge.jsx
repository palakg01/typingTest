import React from "react";
import Test from "./Test";
import Typewriter from "typewriter-effect";

const Challenge = ({
  timeLeft,
  timerStarted,
  para,
  words,
  speed,
  chars,
  testInfo,
  onInputChange,
  retryFunction,
}) => {
  return (
    <div className="challenge-container">
      <p className="heading heading1">How fast can you type?</p>
      <p
        className="heading heading2"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        Take a test to find out!!
      </p>
      <Test
        timerStarted={timerStarted}
        para={para}
        words={words}
        speed={speed}
        chars={chars}
        timeLeft={timeLeft}
        testInfo={testInfo}
        onInputChange={onInputChange}
        retryFunction={retryFunction}
      />
    </div>
  );
};

export default Challenge;
