import React, { Component } from "react";
// import {Remarkable} from 'react'

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getRawMarkup = this.getRawMarkup.bind(this);
    this.state = {
      value: "Type some *markdown* here!"
    };
  }

  handleChange(e) {
    const { value } = this.state;
    this.setState({ input: e.target.value });
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <div className="input">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;
