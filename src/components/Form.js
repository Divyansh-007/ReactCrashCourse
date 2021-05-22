import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${this.state.username} \t Comments: ${this.state.comment} \t Topic: ${this.state.topic}`
    );
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div className="formElem">
          <label>Username &nbsp;</label>
          <input
            type="text"
            // value={this.state.username}
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>

        <div className="formElem">
          <label>Comments &nbsp;</label>
          <textarea
            // value={this.state.comment}
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>

        <div className="formElem">
          <label>Topic &nbsp;</label>
          {/* <select value={this.state.topic} onChange={this.handleTopicChange}> */}
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
