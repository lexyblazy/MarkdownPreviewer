import React, { Component } from "react";
import Remarkable from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getRawMarkup = this.getRawMarkup.bind(this);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    const { value } = this.state;
    // this.setState({value:''});
    this.setState({ value: e.target.value });
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
      const style={'width':'100%'}
    return (
      <div className="MarkdownEditor">
        <div className="input">
          <h3>Input</h3>
          <textarea style={style}
            placeholder='Type some markdown here!'
            cols="100"
            rows="30"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Output</h3>
          <div style={style}
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;
