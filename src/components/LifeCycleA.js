import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "divyansh",
    };

    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleA componentDidUpdate");
  }

  ChangeState = () => {
    this.setState({
      name: "DJ",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.ChangeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
