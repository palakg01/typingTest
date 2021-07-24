import React from "react";

import Testpage from "./Testpage";
import Try from "./Try";

const Test = ({
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
    <div className="test-container">
      {timeLeft > 0 ? (
        <Testpage
          timeLeft={timeLeft}
          timerStarted={timerStarted}
          chars={chars}
          words={words}
          speed={speed}
          para={para}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      ) : (
        <Try
          chars={chars}
          words={words}
          speed={speed}
          retryFunction={retryFunction}
        />
      )}
    </div>
  );
};

export default Test;
