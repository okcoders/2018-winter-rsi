import React from "react";
import { Routes } from "./routes";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: "not admin" };
  }

  render() {
    return (
      <Provider store={store}>
        <Routes userType={this.state.userType} />
      </Provider>
    );
  }
}

export default App;
