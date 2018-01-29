import React, { Component } from 'react';
import MarkdownEditor from './markdown';
import Header from './header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <MarkdownEditor />
      </div>
    );
  }
}

export default App;
