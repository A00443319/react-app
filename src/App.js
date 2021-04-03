import "./App.css";
import Me from "./components/Me";
import Town from "./components/Town";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: "me"
    };
  }
  render() {
    return (
      <div className="App">
        <div className="menu">
          <p
            className="menu-item"
            onClick={() => this.setState({ selectedMenu: "me" })}
          >
            {this.state.selectedMenu === "me" ? (
              <span>About Me</span>
            ) : (
              "About Me"
            )}
          </p>
          <p
            className="menu-item"
            onClick={() => this.setState({ selectedMenu: "town" })}
          >
            {this.state.selectedMenu === "me" ? (
              "My Town"
            ) : (
              <span>My Town</span>
            )}
          </p>
        </div>

        {this.state.selectedMenu === "me" ? <Me /> : <Town />}
      </div>
    );
  }
}

export default App;
