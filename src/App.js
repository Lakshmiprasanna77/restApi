import React, { Component } from "react";
class App extends Component {
  state = {};
  componentDidMount() {
    fetch("www.example.com/api/get/1").then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Check the rest api status in terminal </h1>
      </React.Fragment>
    );
  }
}

export default App;
