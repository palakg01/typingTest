import React from "react";
import "./style.css";
import Nav from "./components/Nav";
import Challenge from "./components/Challenge";

const time = 60;
const serviceUrl =
  "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=text";
const defaultState = {
  timeLeft: time,
  para: "",
  timerStarted: false,
  words: 0,
  chars: 0,
  speed: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;

  fetchNewPara = () => {
    fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        const arrPara = data.split("");
        const testInfo = arrPara.map((item) => {
          return {
            letter: item,
            status: "notAttempted",
          };
        });
        this.setState({ ...defaultState, testInfo, para: data.slice(0, 650) });
      });
  };

  componentDidMount() {
    this.fetchNewPara();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        //wpm
        const timeSpent = time - this.state.timeLeft;
        const wpm = timeSpent > 0 ? (this.state.words * time) / timeSpent : 0;
        this.setState({
          timeLeft: this.state.timeLeft - 1,
          speed: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleChange = (inputText) => {
    if (this.state.timerStarted === false) {
      this.startTimer();
    }
    const characters = inputText.length;
    const words = inputText.split(" ").length;
    const index = characters - 1;

    //underflow -> set testinfo[0].status = unattempted and all others remain the same
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            letter: this.state.testInfo[0].letter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        //testinfo array of onjects, changing value of first object and keeping all others the same
        //by spreading
        words: words,
        chars: characters,
      });
      return;
    }

    //overflow
    if (index >= this.state.para.length) {
      this.setState({ chars: characters, words: words });
      return;
    }

    //backspace case -> make a copy of testinfo
    const testInfo = this.state.testInfo;
    if (!(index == this.state.para.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    //correct , incorrect cases
    if (inputText[index] === testInfo[index].letter) {
      testInfo[index].status = "correct";
    } else {
      testInfo[index].status = "incorrect";
    }

    //update state
    this.setState({
      testInfo: testInfo,
      chars: characters,
      words: words,
    });
  };

  retryFunction = () => {
    this.fetchNewPara();
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Challenge
          timeLeft={this.state.timeLeft}
          para={this.state.para}
          words={this.state.words}
          chars={this.state.chars}
          speed={this.state.speed}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleChange}
          retryFunction={this.retryFunction}
        />
      </div>
    );
  }
}

export default App;
